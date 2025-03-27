var wms_layers = [];

var lyr_state_map_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'state_map<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/state_map_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-21645197.113067, 6527133.497600, -11976495.358533, 11662598.519900]
        })
    });

lyr_state_map_0.setVisible(true);
var layersList = [lyr_state_map_0];
