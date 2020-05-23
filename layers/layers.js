var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DSWDReleases_1 = new ol.format.GeoJSON();
var features_DSWDReleases_1 = format_DSWDReleases_1.readFeatures(json_DSWDReleases_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSWDReleases_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSWDReleases_1.addFeatures(features_DSWDReleases_1);
var lyr_DSWDReleases_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DSWDReleases_1, 
                style: style_DSWDReleases_1,
                interactive: true,
    title: 'DSWD Releases<br />\
    <img src="styles/legend/DSWDReleases_1_0.png" /> 171 - 415 <br />\
    <img src="styles/legend/DSWDReleases_1_1.png" /> 415 - 646 <br />\
    <img src="styles/legend/DSWDReleases_1_2.png" /> 646 - 972 <br />\
    <img src="styles/legend/DSWDReleases_1_3.png" /> 972 - 1166 <br />\
    <img src="styles/legend/DSWDReleases_1_4.png" /> 1166 - 1491 <br />\
    <img src="styles/legend/DSWDReleases_1_5.png" /> 1491 - 4581 <br />'
        });
var format_Warehouse_2 = new ol.format.GeoJSON();
var features_Warehouse_2 = format_Warehouse_2.readFeatures(json_Warehouse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warehouse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warehouse_2.addFeatures(features_Warehouse_2);
var lyr_Warehouse_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Warehouse_2, 
                style: style_Warehouse_2,
                interactive: true,
                title: '<img src="styles/legend/Warehouse_2.png" /> Warehouse'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DSWDReleases_1.setVisible(true);lyr_Warehouse_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DSWDReleases_1,lyr_Warehouse_2];
lyr_DSWDReleases_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Code': 'Reg_Code', 'Reg_Name': 'Reg_Name', 'Pro_Code': 'Pro_Code', 'Pro_Name': 'Province', 'Mun_Code': 'Mun_Code', 'Mun_Name': 'Mun/City', 'DSWD_FFP': 'DSWD FFP', 'DSWD_FFP_C': 'COST (FFP)', 'DSWD_NFI': 'DSWD NFI', 'DSWD_NFI_C': 'COST (NFI)', 'Total_DSWD': 'Total Assistance', });
lyr_Warehouse_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Address': 'Address', 'FFP': 'FFP', 'FFP Cost': 'FFP Cost', });
lyr_DSWDReleases_1.set('fieldImages', {'OBJECTID': 'Hidden', 'Reg_Code': 'Hidden', 'Reg_Name': 'Hidden', 'Pro_Code': 'Hidden', 'Pro_Name': 'TextEdit', 'Mun_Code': 'Hidden', 'Mun_Name': 'TextEdit', 'DSWD_FFP': 'TextEdit', 'DSWD_FFP_C': 'TextEdit', 'DSWD_NFI': 'TextEdit', 'DSWD_NFI_C': 'TextEdit', 'Total_DSWD': 'TextEdit', });
lyr_Warehouse_2.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'Address': 'TextEdit', 'FFP': 'TextEdit', 'FFP Cost': 'TextEdit', });
lyr_DSWDReleases_1.set('fieldLabels', {'Pro_Name': 'header label', 'Mun_Name': 'header label', 'DSWD_FFP': 'inline label', 'DSWD_FFP_C': 'inline label', 'DSWD_NFI': 'inline label', 'DSWD_NFI_C': 'inline label', 'Total_DSWD': 'inline label', });
lyr_Warehouse_2.set('fieldLabels', {'Name': 'header label', 'Address': 'inline label', 'FFP': 'inline label', 'FFP Cost': 'inline label', });
lyr_Warehouse_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});