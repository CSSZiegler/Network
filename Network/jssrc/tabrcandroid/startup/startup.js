//startup.js file
var globalhttpheaders = {};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
var appConfig = {
    appId: "nwapi",
    appName: "NetworkAPI",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.6.125",
    serverPort: "8080",
    secureServerPort: null,
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://10.10.6.125:8080/middleware/MWServlet",
    secureurl: "https://10.10.6.125/middleware/MWServlet"
};
sessionID = "";
flag = 0;
gApiKey = "";
fromValidateKey = false;
skinsInit();

function appInit(params) {
    initializehdrOne();
    initializefrmFooter();
    kony.application.setAppHeaders([hbox1928402615922, hbox1928402615923]);
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
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};