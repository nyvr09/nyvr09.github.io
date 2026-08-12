var wms_layers = [];


        var lyr_NASAGIBSASTER_GDEM_Greyscale_Shaded_Relief_0 = new ol.layer.Tile({
            'title': 'NASAGIBS.ASTER_GDEM_Greyscale_Shaded_Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/ASTER_GDEM_Greyscale_Shaded_Relief/default/GoogleMapsCompatible_Level12/{z}/{y}/{x}.jpg'
            })
        });
var format_mun_yuc_3857_1 = new ol.format.GeoJSON();
var features_mun_yuc_3857_1 = format_mun_yuc_3857_1.readFeatures(json_mun_yuc_3857_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mun_yuc_3857_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mun_yuc_3857_1.addFeatures(features_mun_yuc_3857_1);
var lyr_mun_yuc_3857_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mun_yuc_3857_1, 
                style: style_mun_yuc_3857_1,
                popuplayertitle: 'mun_yuc_3857',
                interactive: true,
    title: 'mun_yuc_3857<br />\
    <img src="styles/legend/mun_yuc_3857_1_0.png" /> 0.364 - 0.478<br />\
    <img src="styles/legend/mun_yuc_3857_1_1.png" /> 0.478 - 0.532<br />\
    <img src="styles/legend/mun_yuc_3857_1_2.png" /> 0.532 - 0.554<br />\
    <img src="styles/legend/mun_yuc_3857_1_3.png" /> 0.554 - 0.585<br />\
    <img src="styles/legend/mun_yuc_3857_1_4.png" /> 0.585 - 0.628<br />\
    <img src="styles/legend/mun_yuc_3857_1_5.png" /> 0.628 - 0.679<br />\
    <img src="styles/legend/mun_yuc_3857_1_6.png" /> 0.679 - 0.895<br />' });

lyr_NASAGIBSASTER_GDEM_Greyscale_Shaded_Relief_0.setVisible(true);lyr_mun_yuc_3857_1.setVisible(true);
var layersList = [lyr_NASAGIBSASTER_GDEM_Greyscale_Shaded_Relief_0,lyr_mun_yuc_3857_1];
lyr_mun_yuc_3857_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'CELDA': 'CELDA', 'inp': 'inp', });
lyr_mun_yuc_3857_1.set('fieldImages', {'CVEGEO': 'Hidden', 'CVE_ENT': 'Hidden', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'CELDA': 'Hidden', 'inp': 'TextEdit', });
lyr_mun_yuc_3857_1.set('fieldLabels', {'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'inp': 'no label', });
lyr_mun_yuc_3857_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});