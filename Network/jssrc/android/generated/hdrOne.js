//Template File
function initializehdrOne() {
    var image2192735980024419 = new kony.ui.Image2({
        "id": "image2192735980024419",
        "isVisible": true,
        "src": "konylogo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 100
    }, {});
    hbox192735980024418 = new kony.ui.Box({
        "id": "hbox192735980024418",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox192735980024418.add(
    image2192735980024419);
    hbox14790014181430 = new kony.ui.Box({
        "id": "hbox14790014181430",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox14790014181430.add();
};