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
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    hbox1928402615922 = new kony.ui.Box({
        "id": "hbox1928402615922",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1928402615922.add(
    image2192735980024419);
    hbox1928402615923 = new kony.ui.Box({
        "id": "hbox1928402615923",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1928402615923.add();
};