// Map settings
var map_settings = {zoomControl: true,
    center: ([51.507222, -0.1275]),
    zoom: 3
};

// Create map object
var map = L.map('map', map_settings);

//Add default layers control to map
var layers_control = L.control.layers().addTo(map);

//Define the layers that are going to be used as map layers.
var basemap_layers = [{
    name:"OpenStreetMap",
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    active :true
}];

// Find active layer and add it to mapped
basemap_layers.forEach(function(layer){
    if(layer.active){
        let layerOptions = layer.options || {}
        current_baseMapLayer = L.tileLayer(layer.url, layerOptions);
        current_baseMapLayer.addTo(map)
    }
});

//Iterate through the BGS WMS services that are located in bgs_layers and add the layers
if (bgs_wms_services){
    bgs_wms_services.forEach(function(bgs_service){
        let wms_service_url = bgs_service.wms_url;
        let wms_service_layers = bgs_service.layers;

        wms_service_layers.forEach(function(wms_layer){
            let layer = new L.tileLayer.wms(wms_service_url, {
                layers:wms_layer.name,
                transparent: true,
                format: 'image/png'
            });

            layer.addTo(map);
            layers_control.addOverlay(layer, wms_layer.name);
        });
    });
}
