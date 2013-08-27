//Template File
function initializefrmFooter() {
    var image2121043302122534 = new kony.ui.Image2({
        "id": "image2121043302122534",
        "isVisible": true,
        "src": "cpyrite.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": null,
        "referenceHeight": null,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    hbox121043302122533 = new kony.ui.Box({
        "id": "hbox121043302122533",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox121043302122533.add(
    image2121043302122534);
};