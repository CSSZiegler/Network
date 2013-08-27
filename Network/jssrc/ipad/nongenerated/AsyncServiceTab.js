/*****************************************************************
 *	Name    : settingtheAPIKeytab
 *	Purpose : To validate API Key entered
 *	Author  : Kony
 ******************************************************************/
function settingtheAPIKeytab(FormRef) {
    gApiKey = FormRef.txtAPIKey.text;
    fromValidateKey = true;
    if (gApiKey != null && gApiKey != "") {
        if (flag == 0) {
            flag = 1;
            if (kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad") kony.application.showLoadingScreen("loadingscreen", "Validating the key...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
                shouldShowLabelInBottom: true,
                separatorHeight: 30
            });
            else kony.application.showLoadingScreen("loadingscreen", "Validating the key...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
            kony.timer.schedule("timerDismissLS", disLoadScrnAsyncTab, 14, false);
        }
        httpclient1 = new kony.net.HttpRequest();
        var requestMethod = constants.HTTP_METHOD_GET;
        var url = "http://api.pipl.com/search/v3/json/?first_name=raj&last_name=koneru&exact_name=0&query_params_mode=and&key=" + gApiKey;
        var async = true;
        httpclient1.open(requestMethod, url, async);
        httpclient1.send();
        httpclient1.onReadyStateChange = onReadyStateChangeTab;
    } else alert("Please enter the API key. If you do not have an API key, click on 'Do not have an API Key' link below to get the key.");
}
/*****************************************************************
 *	Name    : handleResponseTab
 *	Purpose : To handle the response and mapping the received information
 *	Author  : Kony
 ******************************************************************/
function handleResponseTab(pplObj) {
    kony.print("===========================================================================");
    var dataArr = [];
    kony.print(pplObj);
    if ('error' in pplObj) {
        frmHome.lblErrMsgAsyncData.text = "Error is :" + pplObj.error;
        kony.application.dismissLoadingScreen();
        kony.timer.cancel("timerDismissLS");
        flag = 0;
        return;
    }
    if (pplObj["@records_count"] == 0) {
        alert("No records found");
        popUpSearchName.txtFName.text = "";
        popUpSearchName.txtLName.text = "";
        frmHome.lblErrMsgAsyncData.text = "";
        kony.timer.cancel("timerDismissLS");
        flag = 0;
        kony.application.dismissLoadingScreen();
        return;
    }
    for (var i = 0; i < pplObj["@records_count"]; i++) {
        kony.print("==========================================================================");
        var dummyObj = {};
        if ('names' in pplObj.records[i]) dummyObj.lblPName = pplObj.records[i].names[0].display;
        else dummyObj.lblPName = popUpSearchName.txtFName.text + " " + popUpSearchName.txtLName.text;
        if ('images' in pplObj.records[i]) dummyObj.imgAsySml = pplObj.records[i].images[0].url;
        else dummyObj.imgAsySml = "personbig.png";
        if ('addresses' in pplObj.records[i]) dummyObj.lblPAddress = pplObj.records[i].addresses[0].display;
        else dummyObj.lblPAddress = "Unknown address";
        dataArr.push(dummyObj);
    }
    kony.print("last before===========================================================================");
    frmAsyncSmaImgs.segSmall.removeAll();
    frmAsyncSmaImgs.segSmall.setData(dataArr);
    frmAsyncSmaImgs.show();
    kony.application.dismissLoadingScreen();
    kony.timer.cancel("timerDismissLS");
    flag = 0;
    kony.print("last===========================================================================");
}
/*****************************************************************
 *	Name    : onReadyStateChangeTab
 *	Author  : Kony
 *	Purpose : To check for readyState and pass Json Object for validation
 ******************************************************************/
function onReadyStateChangeTab() {
    kony.print("Entered ready state callback")
    if (this.readyState == constants.HTTP_READY_STATE_DONE) {
        kony.print("Response type is " + this.responseType)
        kony.print("Type is " + typeof(this.response))
        if (kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad") {
            if (this.response != null && this.response != "") {
                var jsonObj = this.response
                kony.print("Type of result object is " + typeof(jsonObj))
                if (fromValidateKey == true) {
                    if (jsonObj["@http_status_code"] == 200) {
                        kony.application.dismissLoadingScreen();
                        frmHome.show();
                    } else {
                        alert("API key is not valid. Please enter a valid key");
                    }
                    kony.application.dismissLoadingScreen();
                } else httpResponseCodeValidateTab(jsonObj);
            } else {
                frmHome.lblErrMsgAsyncData.text = "Sorry,No results found."
                kony.application.dismissLoadingScreen();
                kony.timer.cancel("timerDismissLS");
                flag = 0;
                return;
            }
        } else {
            if (this.response != null) {
                var jsonObj = this.response;
                if (fromValidateKey == true) {
                    if (jsonObj["@http_status_code"] == 200) {
                        kony.application.dismissLoadingScreen();
                        frmHome.show();
                    } else {
                        alert("API key is not valid. Please enter a valid key");
                    }
                    kony.application.dismissLoadingScreen();
                } else httpResponseCodeValidateTab(jsonObj);
            } else {
                frmHome.lblErrMsgAsyncData.text = "Sorry,No results found.";
                kony.application.dismissLoadingScreen();
                kony.timer.cancel("timerDismissLS");
                flag = 0;
                return;
            }
        }
    }
}
/*****************************************************************
 *	Name    : disLoadScrnAsyncTab
 *	Author  : Kony
 *	Purpose : To dismiss loading screen
 ******************************************************************/
function disLoadScrnAsyncTab() {
    kony.print("current form is " + JSON.stringify(kony.application.getCurrentForm().id));
    if (kony.application.getCurrentForm().id == "popUpSearchName") {
        kony.application.dismissLoadingScreen();
        httpclient1.abort();
    }
    kony.timer.cancel("timerDismissLS");
    flag = 0;
}
/*****************************************************************
 *	Name    : onClickSearch
 *	Purpose : To search for information according to the data provided
 *	Author  : Kony
 ******************************************************************/
function onClickSearch() {
    fromValidateKey = false;
    if (flag == 0) {
        flag = 1;
        if (kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad") kony.application.showLoadingScreen("loadingscreen", "Please wait...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            shouldShowLabelInBottom: true,
            separatorHeight: 30
        });
        else kony.application.showLoadingScreen("loadingscreen", "Please wait...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
        kony.timer.schedule("timerDismissLS", disLoadScrnAsyncTab, 14, false);
    }
    kony.print("aPIkey:" + gApiKey);
    try {
        httpclient1 = new kony.net.HttpRequest();
        var requestMethod = constants.HTTP_METHOD_GET;
        var fname = popUpSearchName.txtFName.text;
        var lname = popUpSearchName.txtLName.text;
        if (fname == "" || lname == "" || fname == null || lname == null) {
            alert("First name and last name should not be empty");
            //frmHome.lblErrMsgAsyncData.text = "First name and last name should not be empty";
            kony.application.dismissLoadingScreen();
            kony.timer.cancel("timerDismissLS");
            flag = 0;
            return;
        } else {
            frmHome.lblErrMsgAsyncData.text = ""
        }
        var url = "http://api.pipl.com/search/v3/json/?first_name=" + fname + "&last_name=" + lname + "&exact_name=0&query_params_mode=and&key=" + gApiKey;
        var async = true;
        httpclient1.open(requestMethod, url, async);
        httpclient1.send();
        httpclient1.onReadyStateChange = onReadyStateChangeTab;
    } catch (exc) {
        frmHome.lblErrMsgAsyncData.text = "Timeout" + exc.message;
        kony.application.dismissLoadingScreen();
        kony.timer.cancel("timerDismissLS");
        flag = 0;
        return;
    }
}
/*****************************************************************
 *	Name    : initializeTextTab
 *	Purpose : To initialize the empty text box and error message
 *	Author  : Kony
 ******************************************************************/
function initializeTextTab() {
    frmHome.lblErrMsgAsyncData.text = "";
    popUpSearchName.txtFName.text = "";
    popUpSearchName.txtLName.text = "";
}
/*****************************************************************
 *	Name    : httpResponseCodeValidateTab
 *	Purpose : To validate the Json Object
 *	Author  : Kony
 ******************************************************************/
function httpResponseCodeValidateTab(ResultObj) {
    popUpSearchName.dismiss();
    switch (ResultObj["@http_status_code"]) {
    case 200:
        {
            frmHome.lblErrMsgAsyncData.text = "Everything is cool!";
            handleResponseTab(ResultObj);
            break;
        }
    case 400:
        {
            frmHome.lblErrMsgAsyncData.text = "The request is invalid, make sure your query contains the required parameters.";
            kony.timer.cancel("timerDismissLS");
            flag = 0;
            kony.application.dismissLoadingScreen();
            break;
        }
    case 401:
        {
            frmHome.lblErrMsgAsyncData.text = "API key is missing or invalid.";
            kony.timer.cancel("timerDismissLS");
            flag = 0;
            kony.application.dismissLoadingScreen();
            break;
        }
    case 403:
        {
            frmHome.lblErrMsgAsyncData.text = "API key is valid but you exceeded your API calls limit.";
            kony.timer.cancel("timerDismissLS");
            flag = 0;
            kony.application.dismissLoadingScreen();
            break;
        }
    case 500:
        {
            frmHome.lblErrMsgAsyncData.text = "Something is broken, if you see this please contact us.";
            kony.timer.cancel("timerDismissLS");
            flag = 0;
            kony.application.dismissLoadingScreen();
            break;
        }
    }
}
/*****************************************************************
 *	Name    : showPopup
 *	Purpose : To show pop up for searching information
 *	Author  : Kony
 ******************************************************************/
function showPopup() {
    popUpSearchName.show();
}