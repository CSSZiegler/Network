
/*****************************************************************
*	Name    : settingtheAPIKey
*	Purpose : To validate API Key entered
*	Author  : Kony 
******************************************************************/

function settingtheAPIKey(FormRef){
	gApiKey = FormRef.txtAPIKey.text;
	fromValidateKey = true;
	if(gApiKey!=null && gApiKey!="" ){
	
	if(flag == 0)
	{	
		flag = 1;
		if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad"  )
			kony.application.showLoadingScreen("loadingscreen","Validating the key...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
		else
			kony.application.showLoadingScreen("loadingscreen","Validating the key...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
			
		kony.timer.schedule("timerDismissLS", disLoadScrnAsync, 14,false);				
	}
			
		httpclient1 = new kony.net.HttpRequest();
		var requestMethod = constants.HTTP_METHOD_GET;
		var url = "http://api.pipl.com/search/v3/json/?first_name=raj&last_name=koneru&exact_name=0&query_params_mode=and&key="+gApiKey;
		var async = true;
		httpclient1.open(requestMethod, url,async);
		httpclient1.send();
		httpclient1.onReadyStateChange=onReadyStateChange;	
	}else
		alert("Please enter the API key. If you do not have an API key, click on 'Do not have an API Key' link below to get the key.");
}

/*****************************************************************
*	Name    : handleResponse
*	Purpose : To handle the response and mapping the received information
*	Author  : Kony 
******************************************************************/

function handleResponse(pplObj)
{
	kony.print("===========================================================================");
	var dataArr =[];
 	kony.print(pplObj);
 
 	//#ifdef bb
 		//
 	//#else
 		
 		if('error' in pplObj)
 	{
 		frmAsyncData.lblErrMsgAsyncData.text = "Error is :" + pplObj.error;	 		
 		kony.application.dismissLoadingScreen();
 		kony.timer.cancel("timerDismissLS");
		flag =0;	
 		return;
 	}
 		
 	//#endif
 	
 	
 	
 	if (pplObj["@records_count"] == 0 )
 	{
 		frmAsyncData.lblErrMsgAsyncData.text = "No records found"; 
 		frmAsyncData.txtFName.text="";
 		frmAsyncData.txtLName.text="";
 		kony.timer.cancel("timerDismissLS");
		flag =0;
 		kony.application.dismissLoadingScreen();		
 		return;
 	}
 	for (var i= 0 ;i<pplObj["@records_count"];i++)
 	{
 		kony.print("==========================================================================");
 		var dummyObj = {};
 		if ('names' in pplObj.records[i] )	
 			dummyObj.lblPName = pplObj.records[i].names[0].display ;
 		else
 			dummyObj.lblPName =frmAsyncData.txtFName.text +" "+frmAsyncData.txtLName.text;
 		if ( 'images' in pplObj.records[i])
 			dummyObj.imgAsySml = pplObj.records[i].images[0].url;
 		else
 			dummyObj.imgAsySml = "personbig.png";
 		if ('addresses' in pplObj.records[i] )	
 			dummyObj.lblPAddress = pplObj.records[i].addresses[0].display ;
 		else
 			dummyObj.lblPAddress  = "Unknown address";
 		
 		dataArr.push(dummyObj);
 	}
 	kony.print("last before===========================================================================");
 	frmAsyncSmaImgs.segSmall.removeAll();
 	frmAsyncSmaImgs.segSmall.setData(dataArr);
 	frmAsyncSmaImgs.show();
 	kony.application.dismissLoadingScreen();
 	kony.timer.cancel("timerDismissLS");
	flag =0;
 	kony.print("last===========================================================================");
		
}

/*****************************************************************
*	Name    : onReadyStateChange
*	Purpose : To check for readyState and pass Json Object for validation
*	Author  : Kony
******************************************************************/

function onReadyStateChange()
{
	kony.print("Entered ready state callback");
	
    if(this.readyState == constants.HTTP_READY_STATE_DONE )
	{
		kony.print("Response type is "+this.responseType);
		if((this.statusText) && this.statusText=="Forbidden"){
		alert("Forbidden, API key is NOT valid. Please enter a valid key");
		kony.application.dismissLoadingScreen();
		return;
		}


		if (kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad")
		{
			if (this.response != null && this.response != "")
			{
				var jsonObj = this.response;
				kony.print("Type of result object is "+typeof(jsonObj));	
				if(fromValidateKey==true){
					if(jsonObj["@http_status_code"]==200){
						kony.application.dismissLoadingScreen();
						frmHome.show();
					}else{
						alert("API key is not valid. Please enter a valid key");
					}
					kony.application.dismissLoadingScreen();
				}else
					httpResponseCodeValidate(jsonObj);
			}
			else
			{
				
				frmAsyncData.lblErrMsgAsyncData.text ="Sorry,No results found.";
				kony.application.dismissLoadingScreen();
				kony.timer.cancel("timerDismissLS");
				flag =0;
				return;
			}
		}
		else
		{
			
			if (this.response != null && this.response != "")
			{
				
				var jsonObj = this.response;
				if(fromValidateKey==true){
					if(jsonObj["@http_status_code"]==200){
						frmHome.show();
					}else{
						alert("API key is not valid. Please enter a valid key");
					}
					kony.application.dismissLoadingScreen();
				}else
					httpResponseCodeValidate(jsonObj);
			
			}
			else
			{
				
				frmAsyncData.lblErrMsgAsyncData.text ="Sorry,No results found.";		
				kony.application.dismissLoadingScreen();	
				kony.timer.cancel("timerDismissLS");
				flag =0;	
				return;
			}
		}
	}
}

/*****************************************************************
*	Name    : disLoadScrnAsync
*	Purpose : To dismiss loading screen
*	Author  : Kony 
******************************************************************/

function disLoadScrnAsync()
{
	kony.print("current form is "+ JSON.stringify(kony.application.getCurrentForm().id));
	if(kony.application.getCurrentForm().id == "frmAsyncData")
	{
		kony.application.dismissLoadingScreen();
		httpclient1.abort();
	}
	kony.timer.cancel("timerDismissLS");
	flag =0;
}

/*****************************************************************
*	Name    : onClickSubmit
*	Purpose : To search for information according to the data provided
*	Author  : Kony
******************************************************************/

function onClickSubmit()
{
	fromValidateKey = false;
	if(flag == 0)
	{	
		flag = 1;
		if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad" )
			kony.application.showLoadingScreen("loadingscreen","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
		else
			kony.application.showLoadingScreen("loadingscreen","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
			
		kony.timer.schedule("timerDismissLS", disLoadScrnAsync, 14,false);				
	}
	
	kony.print("aPIkey:"+gApiKey);
	try
	{	
		httpclient1 = new kony.net.HttpRequest();
		var requestMethod = constants.HTTP_METHOD_GET;
		var fname = frmAsyncData.txtFName.text;
		var lname = frmAsyncData.txtLName.text;
		if(fname == "" || lname == "" ||fname == null || lname == null )
		{
			alert("First name and last name should not be empty");
			//frmAsyncData.lblErrMsgAsyncData.text = "First name and last name should not be empty";
			kony.application.dismissLoadingScreen();
			kony.timer.cancel("timerDismissLS");
			flag =0;
			return;		
		}
		else
		{
			frmAsyncData.lblErrMsgAsyncData.text = ""
		}
		var url = "http://api.pipl.com/search/v3/json/?first_name="+fname+"&last_name="+lname+"&exact_name=0&query_params_mode=and&key="+gApiKey;
		var async = true;
		httpclient1.open(requestMethod, url,async);
		httpclient1.send();
		httpclient1.onReadyStateChange=onReadyStateChange;	
	}
	catch(exc)
	{
		frmAsyncData.lblErrMsgAsyncData.text ="Timeout"+exc.message;
		kony.application.dismissLoadingScreen();
		kony.timer.cancel("timerDismissLS");
		flag =0;
		return;
	}
}

/*****************************************************************
*	Name    : initializeText
*	Purpose : To initialize the empty text box and error message
*	Author  : Kony 
******************************************************************/

function initializeText(){
	frmAsyncData.lblErrMsgAsyncData.text = "";
	frmAsyncData.txtFName.text = "";
	frmAsyncData.txtLName.text = "";
}

/*****************************************************************
*	Name    : httpResponseCodeValidate
*	Purpose : To validate the Json Object
*	Author  : Kony 
******************************************************************/

function httpResponseCodeValidate(ResultObj)
{
	kony.print("Entered httpResponseCodeValidate" +ResultObj["@http_status_code"] )
	switch (ResultObj["@http_status_code"])
	{
		case 200 :
					{
						frmAsyncData.lblErrMsgAsyncData.text = "Everything is cool!";
						handleResponse(ResultObj);
						break;
					}
		case 400 :
					{
						frmAsyncData.lblErrMsgAsyncData.text = "The request is invalid, make sure your query contains the required parameters.";	
						kony.timer.cancel("timerDismissLS");
						flag =0;
						kony.application.dismissLoadingScreen();					
						break;
					}
		case 401 :
					{
						frmAsyncData.lblErrMsgAsyncData.text = "API key is missing or invalid.";	
						kony.timer.cancel("timerDismissLS");
						flag =0;		
						kony.application.dismissLoadingScreen();			
						break;
					}
		case 403 :
					{
						frmAsyncData.lblErrMsgAsyncData.text = "API key is valid but you exceeded your API calls limit.";
						kony.timer.cancel("timerDismissLS");
						flag =0;	
						kony.application.dismissLoadingScreen();					
						break;
					}
		case 500 :
					{
						frmAsyncData.lblErrMsgAsyncData.text = "Something is broken, if you see this please contact us.";	
						kony.timer.cancel("timerDismissLS");
						flag =0;	
						kony.application.dismissLoadingScreen();				
						break;
					}
		
	}
	

}

/********************************************************************************
 * Function Name: url_APIKey
 * Purpose: To open pipl developer account page to login/register to get API key
 * Author: Kony  
**********************************************************************************/
function url_APIKey(){
		kony.application.openURL("http://dev.pipl.com/apps/mykeys");
		popUpAPIKeyinfo.dismiss();
}



/********************************************************************************
 * Function Name: onHidefrmAPIKey
 * Purpose: To reset textbox of form frmAPIkey
 * Author: Kony  
**********************************************************************************/
function onHidefrmAPIKey(){
	frmAPIKey.txtAPIKey.text = "";
} 



/********************************************************************************
 * Function Name: onHidefrmAsyncData
 * Purpose: To reset textboxs of form frmAsyncData
 * Author: Kony  
**********************************************************************************/
function onHidefrmAsyncData(){
	frmAsyncData.txtFName.text = "";
	frmAsyncData.txtLName.text = "";
}	
	
	