ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([107.097397, -6.608596, 108.211452, -5.867270]);
var wms_layers = [];


        var lyr_roadmap_0 = new ol.layer.Tile({
            'title': 'roadmap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_WilayahSungaiCitarum_1 = new ol.format.GeoJSON();
var features_WilayahSungaiCitarum_1 = format_WilayahSungaiCitarum_1.readFeatures(json_WilayahSungaiCitarum_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WilayahSungaiCitarum_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahSungaiCitarum_1.addFeatures(features_WilayahSungaiCitarum_1);
var lyr_WilayahSungaiCitarum_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilayahSungaiCitarum_1, 
                style: style_WilayahSungaiCitarum_1,
                interactive: false,
                title: '<img src="styles/legend/WilayahSungaiCitarum_1.png" /> Wilayah Sungai Citarum'
            });
var format_DIKewenanganPusatWSCitarum_2 = new ol.format.GeoJSON();
var features_DIKewenanganPusatWSCitarum_2 = format_DIKewenanganPusatWSCitarum_2.readFeatures(json_DIKewenanganPusatWSCitarum_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DIKewenanganPusatWSCitarum_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIKewenanganPusatWSCitarum_2.addFeatures(features_DIKewenanganPusatWSCitarum_2);
var lyr_DIKewenanganPusatWSCitarum_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIKewenanganPusatWSCitarum_2, 
                style: style_DIKewenanganPusatWSCitarum_2,
                interactive: false,
                title: '<img src="styles/legend/DIKewenanganPusatWSCitarum_2.png" /> DI Kewenangan Pusat WS Citarum'
            });
var format_MonevIrigasiCitarum2022_3 = new ol.format.GeoJSON();
var features_MonevIrigasiCitarum2022_3 = format_MonevIrigasiCitarum2022_3.readFeatures(json_MonevIrigasiCitarum2022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MonevIrigasiCitarum2022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MonevIrigasiCitarum2022_3.addFeatures(features_MonevIrigasiCitarum2022_3);
var lyr_MonevIrigasiCitarum2022_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MonevIrigasiCitarum2022_3, 
                style: style_MonevIrigasiCitarum2022_3,
                interactive: true,
    title: 'Monev Irigasi Citarum 2022<br />\
    <img src="styles/legend/MonevIrigasiCitarum2022_3_0.png" /> Belum Lelang<br />\
    <img src="styles/legend/MonevIrigasiCitarum2022_3_1.png" /> Proses Lelang<br />\
    <img src="styles/legend/MonevIrigasiCitarum2022_3_2.png" /> Terkontrak<br />'
        });

lyr_roadmap_0.setVisible(true);lyr_WilayahSungaiCitarum_1.setVisible(true);lyr_DIKewenanganPusatWSCitarum_2.setVisible(true);lyr_MonevIrigasiCitarum2022_3.setVisible(true);
var layersList = [lyr_roadmap_0,lyr_WilayahSungaiCitarum_1,lyr_DIKewenanganPusatWSCitarum_2,lyr_MonevIrigasiCitarum2022_3];
lyr_WilayahSungaiCitarum_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WS': 'WS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DIKewenanganPusatWSCitarum_2.set('fieldAliases', {'Id': 'Id', 'Nama_DI': 'Nama_DI', 'x': 'x', 'y': 'y', 'Kewenangan': 'Kewenangan', 'Luas': 'Luas', 'Luas_ha': 'Luas_ha', });
lyr_MonevIrigasiCitarum2022_3.set('fieldAliases', {'ID': 'ID', 'Kode': 'Kode', 'Paket': 'Paket', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Target': 'Target', 'Kategori': 'Kategori', 'Dana': 'Dana', 'Status': 'Status', 'Foto': 'Foto', 'Link Foto': 'Link Foto', 'Link Maps': 'Link Maps', 'Provinsi': 'Provinsi', 'Kontrak': 'Kontrak', 'K. Paket': 'K. Paket', 'No.  Kontr': 'No.  Kontr', 'Tgl. Kontr': 'Tgl. Kontr', 'RPM ': 'RPM ', 'PHLN SBSN ': 'PHLN SBSN ', 'Pagu DIPA ': 'Pagu DIPA ', 'P. Pengada': 'P. Pengada', 'NK SBSN': 'NK SBSN', 'NK An SBSN': 'NK An SBSN', 'Realisasi ': 'Realisasi ', '% Keuangan': '% Keuangan', 'Rekanan': 'Rekanan', 'Tender': 'Tender', });
lyr_WilayahSungaiCitarum_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DIKewenanganPusatWSCitarum_2.set('fieldImages', {'Id': 'Range', 'Nama_DI': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Kewenangan': 'TextEdit', 'Luas': 'TextEdit', 'Luas_ha': 'TextEdit', });
lyr_MonevIrigasiCitarum2022_3.set('fieldImages', {'ID': 'TextEdit', 'Kode': 'TextEdit', 'Paket': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Target': 'TextEdit', 'Kategori': 'TextEdit', 'Dana': 'TextEdit', 'Status': 'TextEdit', 'Foto': 'ExternalResource', 'Link Foto': 'TextEdit', 'Link Maps': 'TextEdit', 'Provinsi': 'TextEdit', 'Kontrak': 'TextEdit', 'K. Paket': 'TextEdit', 'No.  Kontr': 'TextEdit', 'Tgl. Kontr': 'TextEdit', 'RPM ': 'TextEdit', 'PHLN SBSN ': 'TextEdit', 'Pagu DIPA ': 'TextEdit', 'P. Pengada': 'TextEdit', 'NK SBSN': 'TextEdit', 'NK An SBSN': 'TextEdit', 'Realisasi ': 'TextEdit', '% Keuangan': 'TextEdit', 'Rekanan': 'TextEdit', 'Tender': 'TextEdit', });
lyr_WilayahSungaiCitarum_1.set('fieldLabels', {'OBJECTID': 'no label', 'WS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DIKewenanganPusatWSCitarum_2.set('fieldLabels', {'Id': 'no label', 'Nama_DI': 'no label', 'x': 'no label', 'y': 'no label', 'Kewenangan': 'no label', 'Luas': 'no label', 'Luas_ha': 'no label', });
lyr_MonevIrigasiCitarum2022_3.set('fieldLabels', {'ID': 'no label', 'Kode': 'no label', 'Paket': 'header label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Target': 'inline label', 'Kategori': 'inline label', 'Dana': 'inline label', 'Status': 'inline label', 'Foto': 'header label', 'Link Foto': 'header label', 'Link Maps': 'header label', 'Provinsi': 'inline label', 'Kontrak': 'inline label', 'K. Paket': 'inline label', 'No.  Kontr': 'inline label', 'Tgl. Kontr': 'inline label', 'RPM ': 'inline label', 'PHLN SBSN ': 'inline label', 'Pagu DIPA ': 'inline label', 'P. Pengada': 'inline label', 'NK SBSN': 'inline label', 'NK An SBSN': 'inline label', 'Realisasi ': 'inline label', '% Keuangan': 'inline label', 'Rekanan': 'inline label', 'Tender': 'header label', });
lyr_MonevIrigasiCitarum2022_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});