//Form JS File
function popUpAPIKeyinfo_btnProceedTogetKey_onClick_seq0(eventobject) {
    url_APIKey.call(this);
};

function addWidgetspopUpAPIKeyinfo() {
    var lblKeyInfo = new kony.ui.Label({
        "id": "lblKeyInfo",
        "isVisible": true,
        "text": "Login with pipl.com credentials to get your API key.If you do not have account, Create an account with pipl.com to get the key.",
        "skin": "sknLblFontBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [6, 10, 6, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 26
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblAppinfo = new kony.ui.Label({
        "id": "lblAppinfo",
        "isVisible": true,
        "text": " After you get your key, copy and paste it in the textbox to proceed with the app.",
        "skin": "sknLblFontBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [6, 10, 6, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 12
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnProceedTogetKey = new kony.ui.Button({
        "id": "btnProceedTogetKey",
        "isVisible": true,
        "text": "Proceed to Get API Key",
        "skin": "sknBtnPopUp",
        "focusSkin": "sknBtnPopUpFocus",
        "onClick": popUpAPIKeyinfo_btnProceedTogetKey_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [2, 2, 2, 2],
        "padding": [5, 2, 5, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var hbox1039945496149563 = new kony.ui.Box({
        "id": "hbox1039945496149563",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 22,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1039945496149563.add(
    btnProceedTogetKey);
    var vbxPopupAPIInfo = new kony.ui.Box({
        "id": "vbxPopupAPIInfo",
        "isVisible": true,
        "skin": "sknvbxNorm",
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxPopupAPIInfo.add(
    lblKeyInfo, lblAppinfo, hbox1039945496149563);
    var hbxPopupAPIInfo = new kony.ui.Box({
        "id": "hbxPopupAPIInfo",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 52,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 2, 2],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxPopupAPIInfo.add(
    vbxPopupAPIInfo);
    popUpAPIKeyinfo.add(
    hbxPopupAPIInfo);
};

function popUpAPIKeyinfoGlobals() {
    popUpAPIKeyinfo = new kony.ui.Popup({
        "id": "popUpAPIKeyinfo",
        "title": null,
        "transparencyBehindThePopup": 100,
        "skin": "dimmed",
        "isModal": false,
        "addWidgets": addWidgetspopUpAPIKeyinfo
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 80,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "popupStyle": constants.POPUP_TYPE_KONY_STYLE,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};