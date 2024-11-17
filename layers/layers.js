var wms_layers = [];

var format_ADMINISTRASIDESA_AR_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_0 = format_ADMINISTRASIDESA_AR_25K_0.readFeatures(json_ADMINISTRASIDESA_AR_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_0.addFeatures(features_ADMINISTRASIDESA_AR_25K_0);
var lyr_ADMINISTRASIDESA_AR_25K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_0, 
                style: style_ADMINISTRASIDESA_AR_25K_0,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_0.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_AGRISAWAH_AR_25K_1 = new ol.format.GeoJSON();
var features_AGRISAWAH_AR_25K_1 = format_AGRISAWAH_AR_25K_1.readFeatures(json_AGRISAWAH_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRISAWAH_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRISAWAH_AR_25K_1.addFeatures(features_AGRISAWAH_AR_25K_1);
var lyr_AGRISAWAH_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRISAWAH_AR_25K_1, 
                style: style_AGRISAWAH_AR_25K_1,
                popuplayertitle: "AGRISAWAH_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRISAWAH_AR_25K_1.png" /> AGRISAWAH_AR_25K'
            });
var format_SUNGAI_LN_25K_2 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_2 = format_SUNGAI_LN_25K_2.readFeatures(json_SUNGAI_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_2.addFeatures(features_SUNGAI_LN_25K_2);
var lyr_SUNGAI_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_2, 
                style: style_SUNGAI_LN_25K_2,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_2.png" /> SUNGAI_LN_25K'
            });
var format_WilayahRTRW_3 = new ol.format.GeoJSON();
var features_WilayahRTRW_3 = format_WilayahRTRW_3.readFeatures(json_WilayahRTRW_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahRTRW_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahRTRW_3.addFeatures(features_WilayahRTRW_3);
var lyr_WilayahRTRW_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahRTRW_3, 
                style: style_WilayahRTRW_3,
                popuplayertitle: "Wilayah RT RW",
                interactive: true,
    title: 'Wilayah RT RW<br />\
    <img src="styles/legend/WilayahRTRW_3_0.png" /> RT 01 RW 01<br />\
    <img src="styles/legend/WilayahRTRW_3_1.png" /> RT 01 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_3_2.png" /> RT 01 RW 03<br />\
    <img src="styles/legend/WilayahRTRW_3_3.png" /> RT 01 RW 05<br />\
    <img src="styles/legend/WilayahRTRW_3_4.png" /> RT 01 RW 06<br />\
    <img src="styles/legend/WilayahRTRW_3_5.png" /> RT 02 RW 01<br />\
    <img src="styles/legend/WilayahRTRW_3_6.png" /> RT 02 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_3_7.png" /> RT 02 RW 03<br />\
    <img src="styles/legend/WilayahRTRW_3_8.png" /> RT 02 RW 05<br />\
    <img src="styles/legend/WilayahRTRW_3_9.png" /> RT 02 RW 06<br />\
    <img src="styles/legend/WilayahRTRW_3_10.png" /> RT 03 RW 01<br />\
    <img src="styles/legend/WilayahRTRW_3_11.png" /> RT 03 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_3_12.png" /> RT 03 RW 03<br />\
    <img src="styles/legend/WilayahRTRW_3_13.png" /> RT 03 RW 04<br />\
    <img src="styles/legend/WilayahRTRW_3_14.png" /> RT 03 RW 05<br />\
    <img src="styles/legend/WilayahRTRW_3_15.png" /> RT 03 RW 06<br />\
    <img src="styles/legend/WilayahRTRW_3_16.png" /> RT 04 RW 01<br />\
    <img src="styles/legend/WilayahRTRW_3_17.png" /> RT 04 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_3_18.png" /> RT 04 RW 03<br />\
    <img src="styles/legend/WilayahRTRW_3_19.png" /> RT 04 RW 04<br />\
    <img src="styles/legend/WilayahRTRW_3_20.png" /> RT 04 RW 05<br />\
    <img src="styles/legend/WilayahRTRW_3_21.png" /> RT 04 RW 06<br />\
    <img src="styles/legend/WilayahRTRW_3_22.png" /> RT 05 RW 01<br />\
    <img src="styles/legend/WilayahRTRW_3_23.png" /> RT 05 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_3_24.png" /> RT 05 RW 03<br />\
    <img src="styles/legend/WilayahRTRW_3_25.png" /> RT 05 RW 04<br />\
    <img src="styles/legend/WilayahRTRW_3_26.png" /> RT 05 RW 05<br />\
    <img src="styles/legend/WilayahRTRW_3_27.png" /> RT 06 RW 01<br />\
    <img src="styles/legend/WilayahRTRW_3_28.png" /> RT 06 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_3_29.png" /> RT 06 RW 03<br />\
    <img src="styles/legend/WilayahRTRW_3_30.png" /> RT 06 RW 04<br />\
    <img src="styles/legend/WilayahRTRW_3_31.png" /> RT 07 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_3_32.png" /> RT 07 RW 03<br />\
    <img src="styles/legend/WilayahRTRW_3_33.png" /> RT 07 RW 04<br />\
    <img src="styles/legend/WilayahRTRW_3_34.png" /> RT 08 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_3_35.png" /> RT 08 RW 04<br />\
    <img src="styles/legend/WilayahRTRW_3_36.png" /> RW 07<br />\
    <img src="styles/legend/WilayahRTRW_3_37.png" /> <br />'
        });
var format_baru_poly_4 = new ol.format.GeoJSON();
var features_baru_poly_4 = format_baru_poly_4.readFeatures(json_baru_poly_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_baru_poly_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_baru_poly_4.addFeatures(features_baru_poly_4);
var lyr_baru_poly_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_baru_poly_4, 
                style: style_baru_poly_4,
                popuplayertitle: "baru_poly",
                interactive: true,
                title: '<img src="styles/legend/baru_poly_4.png" /> baru_poly'
            });
var format_RumahKetuaRT_5 = new ol.format.GeoJSON();
var features_RumahKetuaRT_5 = format_RumahKetuaRT_5.readFeatures(json_RumahKetuaRT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahKetuaRT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahKetuaRT_5.addFeatures(features_RumahKetuaRT_5);
var lyr_RumahKetuaRT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahKetuaRT_5, 
                style: style_RumahKetuaRT_5,
                popuplayertitle: "Rumah Ketua RT",
                interactive: true,
                title: '<img src="styles/legend/RumahKetuaRT_5.png" /> Rumah Ketua RT'
            });
var format_Kesehatan_6 = new ol.format.GeoJSON();
var features_Kesehatan_6 = format_Kesehatan_6.readFeatures(json_Kesehatan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kesehatan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_6.addFeatures(features_Kesehatan_6);
var lyr_Kesehatan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kesehatan_6, 
                style: style_Kesehatan_6,
                popuplayertitle: "Kesehatan",
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_6.png" /> Kesehatan'
            });
var format_Pendidikan_7 = new ol.format.GeoJSON();
var features_Pendidikan_7 = format_Pendidikan_7.readFeatures(json_Pendidikan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_7.addFeatures(features_Pendidikan_7);
var lyr_Pendidikan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_7, 
                style: style_Pendidikan_7,
                popuplayertitle: "Pendidikan",
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_7.png" /> Pendidikan'
            });
var format_TempatIbadah_8 = new ol.format.GeoJSON();
var features_TempatIbadah_8 = format_TempatIbadah_8.readFeatures(json_TempatIbadah_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_8.addFeatures(features_TempatIbadah_8);
var lyr_TempatIbadah_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_8, 
                style: style_TempatIbadah_8,
                popuplayertitle: "Tempat Ibadah",
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_8.png" /> Tempat Ibadah'
            });
var format_Pemerintahan_9 = new ol.format.GeoJSON();
var features_Pemerintahan_9 = format_Pemerintahan_9.readFeatures(json_Pemerintahan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_9.addFeatures(features_Pemerintahan_9);
var lyr_Pemerintahan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_9, 
                style: style_Pemerintahan_9,
                popuplayertitle: "Pemerintahan",
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_9.png" /> Pemerintahan'
            });
var format_UMKM_10 = new ol.format.GeoJSON();
var features_UMKM_10 = format_UMKM_10.readFeatures(json_UMKM_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKM_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKM_10.addFeatures(features_UMKM_10);
var lyr_UMKM_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKM_10, 
                style: style_UMKM_10,
                popuplayertitle: "UMKM",
                interactive: true,
                title: '<img src="styles/legend/UMKM_10.png" /> UMKM'
            });
var format_baru_line_11 = new ol.format.GeoJSON();
var features_baru_line_11 = format_baru_line_11.readFeatures(json_baru_line_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_baru_line_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_baru_line_11.addFeatures(features_baru_line_11);
var lyr_baru_line_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_baru_line_11, 
                style: style_baru_line_11,
                popuplayertitle: "baru_line",
                interactive: true,
                title: '<img src="styles/legend/baru_line_11.png" /> baru_line'
            });

lyr_ADMINISTRASIDESA_AR_25K_0.setVisible(true);lyr_AGRISAWAH_AR_25K_1.setVisible(true);lyr_SUNGAI_LN_25K_2.setVisible(true);lyr_WilayahRTRW_3.setVisible(true);lyr_baru_poly_4.setVisible(true);lyr_RumahKetuaRT_5.setVisible(true);lyr_Kesehatan_6.setVisible(true);lyr_Pendidikan_7.setVisible(true);lyr_TempatIbadah_8.setVisible(true);lyr_Pemerintahan_9.setVisible(true);lyr_UMKM_10.setVisible(true);lyr_baru_line_11.setVisible(true);
var layersList = [lyr_ADMINISTRASIDESA_AR_25K_0,lyr_AGRISAWAH_AR_25K_1,lyr_SUNGAI_LN_25K_2,lyr_WilayahRTRW_3,lyr_baru_poly_4,lyr_RumahKetuaRT_5,lyr_Kesehatan_6,lyr_Pendidikan_7,lyr_TempatIbadah_8,lyr_Pemerintahan_9,lyr_UMKM_10,lyr_baru_line_11];
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRISAWAH_AR_25K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_WilayahRTRW_3.set('fieldAliases', {'Nama': 'Nama', });
lyr_baru_poly_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tourism': 'tourism', 'health_fac': 'health_fac', 'tunnel': 'tunnel', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'staff_coun': 'staff_coun', 'roof_mater': 'roof_mater', 'addr_house': 'addr_house', 'width': 'width', 'building': 'building', 'isced_leve': 'isced_leve', 'operator': 'operator', 'healthcare': 'healthcare', 'access_roo': 'access_roo', 'health_f_1': 'health_f_1', 'beds': 'beds', 'shop': 'shop', 'staff_co_1': 'staff_co_1', 'building_m': 'building_m', 'opening_ho': 'opening_ho', 'smoothness': 'smoothness', 'railway': 'railway', 'toilets_di': 'toilets_di', 'medical_sy': 'medical_sy', 'name': 'name', 'bridge': 'bridge', 'operator_t': 'operator_t', 'rooms': 'rooms', 'status': 'status', 'network': 'network', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'amenity': 'amenity', 'barrier': 'barrier', 'health_f_2': 'health_f_2', 'access': 'access', 'highway': 'highway', 'surface': 'surface', 'oneway': 'oneway', 'public_tra': 'public_tra', });
lyr_RumahKetuaRT_5.set('fieldAliases', {'Nama': 'Nama', });
lyr_Kesehatan_6.set('fieldAliases', {'Nama': 'Nama', });
lyr_Pendidikan_7.set('fieldAliases', {'Nama': 'Nama', });
lyr_TempatIbadah_8.set('fieldAliases', {'Nama': 'Nama', });
lyr_Pemerintahan_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_UMKM_10.set('fieldAliases', {'Nama': 'Nama', });
lyr_baru_line_11.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'smoothness': 'smoothness', 'railway': 'railway', 'tunnel': 'tunnel', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'amenity': 'amenity', 'width': 'width', 'barrier': 'barrier', 'name': 'name', 'surface': 'surface', 'bridge': 'bridge', 'highway': 'highway', 'building': 'building', 'oneway': 'oneway', 'operator': 'operator', 'public_tra': 'public_tra', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AGRISAWAH_AR_25K_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSWH': 'TextEdit', 'FCODE': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'TNMSWH': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SUNGAI_LN_25K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_WilayahRTRW_3.set('fieldImages', {'Nama': 'TextEdit', });
lyr_baru_poly_4.set('fieldImages', {'osm_id': '', 'osm_type': '', 'layer': '', 'tourism': '', 'health_fac': '', 'tunnel': '', 'aeroway': '', 'capacity': '', 'parking': '', 'staff_coun': '', 'roof_mater': '', 'addr_house': '', 'width': '', 'building': '', 'isced_leve': '', 'operator': '', 'healthcare': '', 'access_roo': '', 'health_f_1': '', 'beds': '', 'shop': '', 'staff_co_1': '', 'building_m': '', 'opening_ho': '', 'smoothness': '', 'railway': '', 'toilets_di': '', 'medical_sy': '', 'name': '', 'bridge': '', 'operator_t': '', 'rooms': '', 'status': '', 'network': '', 'addr_stree': '', 'toilets_ha': '', 'amenity': '', 'barrier': '', 'health_f_2': '', 'access': '', 'highway': '', 'surface': '', 'oneway': '', 'public_tra': '', });
lyr_RumahKetuaRT_5.set('fieldImages', {'Nama': 'TextEdit', });
lyr_Kesehatan_6.set('fieldImages', {'Nama': 'TextEdit', });
lyr_Pendidikan_7.set('fieldImages', {'Nama': 'TextEdit', });
lyr_TempatIbadah_8.set('fieldImages', {'Nama': 'TextEdit', });
lyr_Pemerintahan_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_UMKM_10.set('fieldImages', {'Nama': 'TextEdit', });
lyr_baru_line_11.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'tunnel': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'amenity': 'TextEdit', 'width': 'TextEdit', 'barrier': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'bridge': 'TextEdit', 'highway': 'TextEdit', 'building': 'TextEdit', 'oneway': 'TextEdit', 'operator': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRISAWAH_AR_25K_1.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_LN_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_WilayahRTRW_3.set('fieldLabels', {'Nama': 'no label', });
lyr_baru_poly_4.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'tourism': 'no label', 'health_fac': 'no label', 'tunnel': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'staff_coun': 'no label', 'roof_mater': 'no label', 'addr_house': 'no label', 'width': 'no label', 'building': 'no label', 'isced_leve': 'no label', 'operator': 'no label', 'healthcare': 'no label', 'access_roo': 'no label', 'health_f_1': 'no label', 'beds': 'no label', 'shop': 'no label', 'staff_co_1': 'no label', 'building_m': 'no label', 'opening_ho': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'toilets_di': 'no label', 'medical_sy': 'no label', 'name': 'no label', 'bridge': 'no label', 'operator_t': 'no label', 'rooms': 'no label', 'status': 'no label', 'network': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'health_f_2': 'no label', 'access': 'no label', 'highway': 'no label', 'surface': 'no label', 'oneway': 'no label', 'public_tra': 'no label', });
lyr_RumahKetuaRT_5.set('fieldLabels', {'Nama': 'no label', });
lyr_Kesehatan_6.set('fieldLabels', {'Nama': 'no label', });
lyr_Pendidikan_7.set('fieldLabels', {'Nama': 'no label', });
lyr_TempatIbadah_8.set('fieldLabels', {'Nama': 'no label', });
lyr_Pemerintahan_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_UMKM_10.set('fieldLabels', {'Nama': 'no label', });
lyr_baru_line_11.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'tunnel': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'amenity': 'no label', 'width': 'no label', 'barrier': 'no label', 'name': 'no label', 'surface': 'no label', 'bridge': 'no label', 'highway': 'no label', 'building': 'no label', 'oneway': 'no label', 'operator': 'no label', 'public_tra': 'no label', });
lyr_baru_line_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});