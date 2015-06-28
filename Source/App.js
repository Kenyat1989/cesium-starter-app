var cesiumWidget = new Cesium.Viewer('cesiumContainer');

// Add a WMS imagery layer
var imageryLayers = viewer.imageryLayers;
imageryLayers.addImageryProvider(new Cesium.WebMapServiceImageryProvider({
    url : 'http://nationalmap.nicta.com.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows',
    layers : 'Hydrography:bores',
    parameters : {
        transparent : true,
        format : 'image/png'
    }
}));

// Start off looking at Australia.
viewer.camera.viewRectangle(Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.970, -5.730));
