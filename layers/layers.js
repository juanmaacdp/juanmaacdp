var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Departamentos_1 = new ol.format.GeoJSON();
var features_Departamentos_1 = format_Departamentos_1.readFeatures(json_Departamentos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Departamentos_1.addFeatures(features_Departamentos_1);var lyr_Departamentos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_1, 
                style: style_Departamentos_1,
                title: '<img src="styles/legend/Departamentos_1.png" /> Departamentos'
            });var format_Municipios_2 = new ol.format.GeoJSON();
var features_Municipios_2 = format_Municipios_2.readFeatures(json_Municipios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipios_2.addFeatures(features_Municipios_2);var lyr_Municipios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_2, 
                style: style_Municipios_2,
                title: '<img src="styles/legend/Municipios_2.png" /> Municipios'
            });var format_Frecuenciadeinundacin1988200020112012_3 = new ol.format.GeoJSON();
var features_Frecuenciadeinundacin1988200020112012_3 = format_Frecuenciadeinundacin1988200020112012_3.readFeatures(json_Frecuenciadeinundacin1988200020112012_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frecuenciadeinundacin1988200020112012_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Frecuenciadeinundacin1988200020112012_3.addFeatures(features_Frecuenciadeinundacin1988200020112012_3);var lyr_Frecuenciadeinundacin1988200020112012_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Frecuenciadeinundacin1988200020112012_3, 
                style: style_Frecuenciadeinundacin1988200020112012_3,
                title: 'Frecuencia de inundación (1988-2000-2011-2012)'
            });var format_Gradodeconexinaservicios2017_4 = new ol.format.GeoJSON();
var features_Gradodeconexinaservicios2017_4 = format_Gradodeconexinaservicios2017_4.readFeatures(json_Gradodeconexinaservicios2017_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gradodeconexinaservicios2017_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gradodeconexinaservicios2017_4.addFeatures(features_Gradodeconexinaservicios2017_4);var lyr_Gradodeconexinaservicios2017_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gradodeconexinaservicios2017_4, 
                style: style_Gradodeconexinaservicios2017_4,
                title: 'Grado de conexión a servicios (2017)'
            });var format_Balanceeconmico20122014_5 = new ol.format.GeoJSON();
var features_Balanceeconmico20122014_5 = format_Balanceeconmico20122014_5.readFeatures(json_Balanceeconmico20122014_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Balanceeconmico20122014_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Balanceeconmico20122014_5.addFeatures(features_Balanceeconmico20122014_5);var lyr_Balanceeconmico20122014_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Balanceeconmico20122014_5, 
                style: style_Balanceeconmico20122014_5,
                title: 'Balance económico (2012-2014)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Departamentos_1.setVisible(true);lyr_Municipios_2.setVisible(true);lyr_Frecuenciadeinundacin1988200020112012_3.setVisible(true);lyr_Gradodeconexinaservicios2017_4.setVisible(true);lyr_Balanceeconmico20122014_5.setVisible(true);
var layersList = [baseLayer,lyr_OSMStandard_0,lyr_Departamentos_1,lyr_Municipios_2,lyr_Frecuenciadeinundacin1988200020112012_3,lyr_Gradodeconexinaservicios2017_4,lyr_Balanceeconmico20122014_5];
lyr_Departamentos_1.set('fieldAliases', {'NOMBRE_DPT': 'NOMBRE_DPT', });
lyr_Municipios_2.set('fieldAliases', {'NOMBRE_DPT': 'DEPARTAMENTO', 'NOMBRE_MPI': 'MUNICIPIO', });
lyr_Frecuenciadeinundacin1988200020112012_3.set('fieldAliases', {'DEPTO': 'DEPARTAMENTO', 'MUNICIPIO': 'MUNICIPIO', 'FRECUENCIA': 'FRECUENCIA DE INUNDACIÓN EN LOS AÑOS 1988, 2000, 2011, 2012', });
lyr_Gradodeconexinaservicios2017_4.set('fieldAliases', {'DEPTO': 'DEPARTAMENTO', '%ALCANTA': '% VIVIENDAS CON ALCANTARILLADO', '%ACUEDUCTO': '% VIVIENDAS CON ACUEDUCTO', '%GAS': '% VIVIENDAS CON GASODUCTO', 'COBERTURA': 'GRADO DE CONEXIÓN A SERVICIOS', 'TOT_VIVIEN': 'TOTAL DE VIVIENDAS', });
lyr_Balanceeconmico20122014_5.set('fieldAliases', {'DEPTOS': 'DEPARTAMENTO', 'BALANCE': 'BALANCE ECONÓMICO ( MILES USD)', });
lyr_Departamentos_1.set('fieldImages', {'NOMBRE_DPT': 'TextEdit', });
lyr_Municipios_2.set('fieldImages', {'NOMBRE_DPT': 'TextEdit', 'NOMBRE_MPI': 'TextEdit', });
lyr_Frecuenciadeinundacin1988200020112012_3.set('fieldImages', {'DEPTO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'FRECUENCIA': 'TextEdit', });
lyr_Gradodeconexinaservicios2017_4.set('fieldImages', {'DEPTO': 'TextEdit', '%ALCANTA': 'TextEdit', '%ACUEDUCTO': 'TextEdit', '%GAS': 'TextEdit', 'COBERTURA': 'TextEdit', 'TOT_VIVIEN': 'TextEdit', });
lyr_Balanceeconmico20122014_5.set('fieldImages', {'DEPTOS': 'TextEdit', 'BALANCE': 'TextEdit', });
lyr_Departamentos_1.set('fieldLabels', {'NOMBRE_DPT': 'inline label', });
lyr_Municipios_2.set('fieldLabels', {'NOMBRE_DPT': 'inline label', 'NOMBRE_MPI': 'inline label', });
lyr_Frecuenciadeinundacin1988200020112012_3.set('fieldLabels', {'DEPTO': 'inline label', 'MUNICIPIO': 'inline label', 'FRECUENCIA': 'inline label', });
lyr_Gradodeconexinaservicios2017_4.set('fieldLabels', {'DEPTO': 'inline label', '%ALCANTA': 'inline label', '%ACUEDUCTO': 'inline label', '%GAS': 'inline label', 'COBERTURA': 'inline label', 'TOT_VIVIEN': 'inline label', });
lyr_Balanceeconmico20122014_5.set('fieldLabels', {'DEPTOS': 'inline label', 'BALANCE': 'inline label', });
lyr_Balanceeconmico20122014_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});