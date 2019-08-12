 //Convert center of map from 4326 to 3857 
 var mapCenter = ol.proj.transform([-0.1275,51.507222], 'EPSG:4326', 'EPSG:3857');
 //Add Open Street Map As baseMpa
 var osm_layer = new ol.layer.Tile({source: new ol.source.OSM(),type:'base',title:'OSM'});
 //Add WMS Layers from BGS
 var bgs_overlays = [];
 //All map layers
 var mapLayers  = [];
 // Iterate through config to get the Layers
 bgs_wms_services.forEach(function(item){
   var wmsUrl = item.wms_url;
   var wmsLayers = item.layers;
   for(var i=0;i<wmsLayers.length;i++){
        var wmsSource = new ol.source.TileWMS({
            url: wmsUrl,
            params: {'LAYERS': encodeURIComponent(wmsLayers[i].name),'TILED': true},
            projection: 'EPSG:3857',
            transition: 0
        });
        var wmsLayer = new ol.layer.Tile({
            source: wmsSource,
            title:wmsLayers[i].name
        });
        bgs_overlays.push(wmsLayer);
    }
 });

mapLayers.push(osm_layer);
mapLayers = mapLayers.concat(bgs_overlays);
//Initialise Map with
var map = new ol.Map({
   layers: [ 
     new ol.layer.Group({'title': "Layers", layers: mapLayers}),
   ],
   target: 'map',
   view: new ol.View({
       projection: 'EPSG:3857',
       center: mapCenter,
   zoom: 5
   })
});

// Add Layer Switcher 
map.addControl(new ol.control.LayerSwitcher());