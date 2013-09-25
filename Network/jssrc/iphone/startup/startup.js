//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "nwapi",
    appName: "NetworkAPI",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isDebug: false,
    middlewareContext: "nwapi",
    url: "https://konyb.qa-konycloud.com/nwapi/MWServlet",
    secureurl: "https://konyb.qa-konycloud.com/nwapi/MWServlet"
};
sessionID = "";
flag = 0;
gApiKey = "";
fromValidateKey = false;

function appInit(params) {
    skinsInit();
    initializehdrOne();
    initializefrmFooter();
    kony.application.setAppHeaders([hbox192735980024418, hbox14790014181430]);
    kony.application.setAppFooters([hbox121043302122533]);
    frmAPIKeyGlobals();
    frmAsyncDataGlobals();
    frmAsyncSmaImgsGlobals();
    frmHomeGlobals();
    popUpAPIKeyinfoGlobals();
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmAPIKey.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};