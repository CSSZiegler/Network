//startup.js file
var appConfig = {
    appId: "nwapi",
    appName: "NetworkAPI",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.6.125",
    serverPort: "8080",
    secureServerPort: null,
    url: "http://10.10.6.125:8080/middleware/MWServlet",
    secureurl: "https://10.10.6.125/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";
flag = 0;
gApiKey = "";
fromValidateKey = false;

function appInit(params) {
    skinsInit();
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
    kony.theme.packagedthemes(
    ["default", "KonyTheme"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: true
    })
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
kony.print = function() {
    return;
};