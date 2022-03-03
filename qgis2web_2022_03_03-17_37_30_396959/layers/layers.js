var wms_layers = [];


        var lyr_Ngasinanimage_0 = new ol.layer.Tile({
            'title': 'Ngasinan image',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://rasters-production.mapflow.ai/api/v0/cogs/tiles/{z}/{x}/{y}.png?uri=s3://white-maps-rasters/9be63db0-7212-45eb-b0e2-a59f031ea687'
            })
        });
var format_Ngasinan_1 = new ol.format.GeoJSON();
var features_Ngasinan_1 = format_Ngasinan_1.readFeatures(json_Ngasinan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngasinan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngasinan_1.addFeatures(features_Ngasinan_1);
var lyr_Ngasinan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ngasinan_1, 
                style: style_Ngasinan_1,
                interactive: true,
                title: '<img src="styles/legend/Ngasinan_1.png" /> Ngasinan'
            });

        var lyr_OSM_2 = new ol.layer.Tile({
            'title': 'OSM',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Dusun_Ngasinan_3 = new ol.format.GeoJSON();
var features_Batas_Dusun_Ngasinan_3 = format_Batas_Dusun_Ngasinan_3.readFeatures(json_Batas_Dusun_Ngasinan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Dusun_Ngasinan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Dusun_Ngasinan_3.addFeatures(features_Batas_Dusun_Ngasinan_3);
var lyr_Batas_Dusun_Ngasinan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Dusun_Ngasinan_3, 
                style: style_Batas_Dusun_Ngasinan_3,
                interactive: true,
                title: '<img src="styles/legend/Batas_Dusun_Ngasinan_3.png" /> Batas_Dusun_Ngasinan'
            });
var group_Mapflow = new ol.layer.Group({
                                layers: [lyr_Ngasinanimage_0,lyr_Ngasinan_1,],
                                title: "Mapflow"});

lyr_Ngasinanimage_0.setVisible(true);lyr_Ngasinan_1.setVisible(true);lyr_OSM_2.setVisible(true);lyr_Batas_Dusun_Ngasinan_3.setVisible(true);
var layersList = [group_Mapflow,lyr_OSM_2,lyr_Batas_Dusun_Ngasinan_3];
lyr_Ngasinan_1.set('fieldAliases', {'id': 'id', 'shape_type': 'shape_type', 'in_zkh': 'in_zkh', 'processing_date': 'processing_date', 'class_id': 'class_id', });
lyr_Batas_Dusun_Ngasinan_3.set('fieldAliases', {'LAYER': 'LAYER', 'FID_1': 'FID_1', 'Dusun': 'Dusun', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', });
lyr_Ngasinan_1.set('fieldImages', {'id': 'TextEdit', 'shape_type': 'TextEdit', 'in_zkh': 'CheckBox', 'processing_date': 'DateTime', 'class_id': 'TextEdit', });
lyr_Batas_Dusun_Ngasinan_3.set('fieldImages', {'LAYER': 'TextEdit', 'FID_1': 'Range', 'Dusun': 'TextEdit', 'KML_STYLE': 'TextEdit', 'KML_FOLDER': 'TextEdit', });
lyr_Ngasinan_1.set('fieldLabels', {});
lyr_Batas_Dusun_Ngasinan_3.set('fieldLabels', {'LAYER': 'no label', 'FID_1': 'no label', 'Dusun': 'no label', 'KML_STYLE': 'no label', 'KML_FOLDER': 'no label', });
lyr_Batas_Dusun_Ngasinan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});