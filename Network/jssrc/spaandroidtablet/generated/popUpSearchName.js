//Form JS File
function popUpSearchName_btnSearch_onClick_seq0(eventobject) {
    onClickSearch.call(this);
};

function addWidgetspopUpSearchName() {
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
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 1],
        "padding": [1, 2, 1, 2],
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
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 1, 2, 2],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "autoCorrect": false,
        "autoComplete": false
    });
    var btnSearch = new kony.ui.Button({
        "id": "btnSearch",
        "isVisible": true,
        "text": "Search",
        "skin": "sknBtnPopUp",
        "focusSkin": "sknBtnPopUpFocus",
        "onClick": popUpSearchName_btnSearch_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [8, 2, 8, 2],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {});
    popUpSearchName.add(
    txtFName, txtLName, btnSearch);
};

function popUpSearchNameGlobals() {
    popUpSearchName = new kony.ui.Popup({
        "id": "popUpSearchName",
        "title": "Search People",
        "isModal": true,
        "transparencyBehindThePopup": 100,
        "skin": "dimmed",
        "isModal": true,
        "addWidgets": addWidgetspopUpSearchName
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 60,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "inTransitionConfig": {
            "popupTransition": "None"
        },
        "outTransitionConfig": {
            "popupTransition": "None"
        }
    });
};