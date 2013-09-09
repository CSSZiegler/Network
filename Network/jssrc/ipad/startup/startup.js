//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "nwapi",
    appName: "NetworkAPI",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.6.125",
    serverPort: "8080",
    secureServerPort: null,
    isDebug: false,
    middlewareContext: "nwapi",
    url: "https://kony475.konycloud.com/nwapi/MWServlet",
    secureurl: "https://kony475.konycloud.com/nwapi/MWServlet"
};
sessionID = "";
flag = 0;
gApiKey = "";
fromValidateKey = false;

function appInit(params) {
    skinsInit();
    initializehdrOne();
    initializefrmFooter();
    kony.application.setAppHeaders([hbox1928402615922]);
    kony.application.setAppFooters([hbox1928402615924]);
    frmAPIKeyGlobals();
    frmAsyncSmaImgsGlobals();
    frmHomeGlobals();
    popUpAPIKeyinfoGlobals();
    popUpSearchNameGlobals();
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