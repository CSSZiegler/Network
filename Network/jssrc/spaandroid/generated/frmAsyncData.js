//Form JS File
function frmAsyncData_frmAsyncData_preshow_seq0(eventobject, neworientation) {
    initializeText.call(this);
};

function frmAsyncData_btnSubmit_onClick_seq0(eventobject) {
    onClickSubmit.call(this);
};

function addWidgetsfrmAsyncData() {
    var lblInstruction = new kony.ui.Label({
        "id": "lblInstruction",
        "isVisible": true,
        "text": "Please enter valid first name and last name and click submit to get the people data.",
        "skin": "sknLblFontWhite"
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
    }, {});
    var txtFName = new kony.ui.TextBox2({
        "id": "txtFName",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "First Name",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbx2NormalSampleApp",
        "focusSkin": "sknTbx2FocusSampleApp"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 4, 4, 4],
        "padding": [3, 4, 3, 4],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var txtLName = new kony.ui.TextBox2({
        "id": "txtLName",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Last Name",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbx2NormalSampleApp",
        "focusSkin": "sknTbx2FocusSampleApp"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "padding": [3, 4, 3, 4],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var lblErrMsgAsyncData = new kony.ui.Label({
        "id": "lblErrMsgAsyncData",
        "isVisible": true,
        "text": null,
        "skin": "sknLblNote"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 4],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var btnSubmit = new kony.ui.Button({
        "id": "btnSubmit",
        "isVisible": true,
        "text": "Submit",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmAsyncData_btnSubmit_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 4],
        "padding": [1, 3, 1, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var lblNwConn = new kony.ui.Label({
        "id": "lblNwConn",
        "isVisible": true,
        "text": "*Note: Please check your network connections before invoking service",
        "skin": "sknLblFontWhite"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 7, 2, 2],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmAsyncData.add(
    lblInstruction, txtFName, txtLName, lblErrMsgAsyncData, btnSubmit, lblNwConn);
};

function frmAsyncDataGlobals() {
    var MenuId = [];
    frmAsyncData = new kony.ui.Form2({
        "id": "frmAsyncData",
        "title": "Search People",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "preShow": frmAsyncData_frmAsyncData_preshow_seq0,
        "addWidgets": addWidgetsfrmAsyncData
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};