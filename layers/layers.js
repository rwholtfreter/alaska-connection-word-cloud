var wms_layers = [];

var lyr_anchorage_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'anchorage<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/anchorage_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-17222927.275600, 8605662.560823, -16004861.169300, 9210801.264077]
        })
    });

lyr_anchorage_0.setVisible(true);
var layersList = [lyr_anchorage_0];
