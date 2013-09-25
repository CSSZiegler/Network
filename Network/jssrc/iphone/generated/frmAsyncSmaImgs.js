//Form JS File
function frmAsyncSmaImgs_frmAsyncSmaImgs_onDeviceMenu_seq0(eventobject, neworientation) {
    frmAsyncData.show();
};

function addWidgetsfrmAsyncSmaImgs() {
    var segSmallbox = new kony.ui.Box({
        "id": "segSmallbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 31
    }, {});
    var segSmall = new kony.ui.SegmentedUI2({
        "id": "segSmall",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblPName": "lblPName",
            "imgAsySml": "imgAsySml",
            "hbox192822373931952": "hbox192822373931952",
            "lblPAddress": "lblPAddress",
            "vboxInfo": "vboxInfo"
        },
        "rowTemplate": segSmallbox,
        "widgetSkin": "sknSeg2NormalSampleApp",
        "rowSkin": "sknSeg2NormalSampleApp",
        "rowFocusSkin": "sknSeg2FocusSampleApp",
        "sectionHeaderSkin": "sknSeg2HeaderSampleApp",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": true,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [1, 1, 1, 1],
        "padding": [2, 0, 0, 0],
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 31
    }, {
        "indicator": constants.SEGUI_NONE,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var imgAsySml = new kony.ui.Image2({
        "id": "imgAsySml",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": "imgloading.png",
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [2, 2, 1, 2],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 100,
        "referenceHeight": 70,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 23
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblPName = new kony.ui.Label({
        "id": "lblPName",
        "isVisible": true,
        "skin": "sknLblNormalBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 28
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblPAddress = new kony.ui.Label({
        "id": "lblPAddress",
        "isVisible": true,
        "skin": "sknLblNormalBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 28
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vboxInfo = new kony.ui.Box({
        "id": "vboxInfo",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 77,
        "margin": [2, 0, 1, 1],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxInfo.add(
    lblPName, lblPAddress);
    var hbox192822373931952 = new kony.ui.Box({
        "id": "hbox192822373931952",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 72,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 0, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192822373931952.add(
    imgAsySml, vboxInfo);
    segSmallbox.add(
    hbox192822373931952);
    frmAsyncSmaImgs.add(
    segSmall);
};

function frmAsyncSmaImgsGlobals() {
    var MenuId = [];
    frmAsyncSmaImgs = new kony.ui.Form2({
        "id": "frmAsyncSmaImgs",
        "title": "Search Results",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmAsyncSmaImgs
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
        "onDeviceMenu": frmAsyncSmaImgs_frmAsyncSmaImgs_onDeviceMenu_seq0,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back"
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