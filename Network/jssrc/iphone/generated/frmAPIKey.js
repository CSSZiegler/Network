//Form JS File
function frmAPIKey_btnCont_onClick_seq0(eventobject) {
    settingtheAPIKey.call(this, frmAPIKey);
};

function frmAPIKey_lnkNoAPIKey_onClick_seq0(eventobject) {
    popUpAPIKeyinfo.show();
};

function addWidgetsfrmAPIKey() {
    var lblAppKeyInfo = new kony.ui.Label({
        "id": "lblAppKeyInfo",
        "isVisible": true,
        "text": "This application requires API key to proceed.",
        "skin": "sknLblWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 4],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTextBoxHeader = new kony.ui.Label({
        "id": "lblTextBoxHeader",
        "isVisible": true,
        "text": "Please input your API key below",
        "skin": "sknLblWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 4, 2],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtAPIKey = new kony.ui.TextBox2({
        "id": "txtAPIKey",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbx2NormalSampleApp",
        "focusSkin": "sknTbx2FocusSampleApp"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 4, 0],
        "padding": [2, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "placeholder": "Enter your API key",
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var btnCont = new kony.ui.Button({
        "id": "btnCont",
        "isVisible": true,
        "text": "Continue to App",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmAPIKey_btnCont_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 6, 4, 2],
        "padding": [1, 3, 1, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var lnkNoAPIKey = new kony.ui.Link({
        "id": "lnkNoAPIKey",
        "isVisible": true,
        "text": "Do not have an API key?",
        "skin": "sknLinkWhite",
        "onClick": frmAPIKey_lnkNoAPIKey_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 0, 4, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var lblHelp = new kony.ui.Label({
        "id": "lblHelp",
        "isVisible": true,
        "text": "Note: You can also use \"samplekey\" as an API key. ",
        "skin": "sknLblWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 2, 12, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmAPIKey.add(
    lblAppKeyInfo, lblTextBoxHeader, txtAPIKey, btnCont, lnkNoAPIKey, lblHelp);
};

function frmAPIKeyGlobals() {
    var MenuId = [];
    frmAPIKey = new kony.ui.Form2({
        "id": "frmAPIKey",
        "title": "Network API",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmAPIKey
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "titleBarConfig": {
            "renderTitleText": true
        },
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