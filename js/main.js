        var map = L.map('map', {
            zoomControl:true, 
            maxZoom:28, 
            minZoom:1, 
            center: [5.523697016522513,-0.35605054387258633]
        });
        var bounds = L.latLngBounds([[5.521352857149229,-0.3596585481703061],[5.523697016522513,-0.35605054387258633]]);
        map.fitBounds(bounds);


// video begins
var videoUrls = [
		'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
		'https://www.mapbox.com/bites/00188/patricia_nasa.mp4'
	]

	map.fitBounds(bounds);

	var overlay = L.videoOverlay(videoUrls, bounds, {
		opacity: 0.8,
		interactive: false,
		autoplay: false
	});
	map.addLayer(overlay);

	overlay.on('load', function () {
		var MyPauseControl = L.Control.extend({
			onAdd: function() {
				var button = L.DomUtil.create('button');
				button.innerHTML = '⏸';
				L.DomEvent.on(button, 'click', function () {
					overlay.getElement().pause();
				});
				return button;
			}
		});
		var MyPlayControl = L.Control.extend({
			onAdd: function() {
				var button = L.DomUtil.create('button');
				button.innerHTML = '⏵';
				L.DomEvent.on(button, 'click', function () {
					overlay.getElement().play();
				});
				return button;
			}
		});

		var pauseControl = (new MyPauseControl()).addTo(map);
		var playControl = (new MyPlayControl()).addTo(map);

    })

    // video ends 


        var hash = new L.Hash(map);
        map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
        }
        function pop_ClusterName_0(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Id'] !== null ? Autolinker.link(String(feature.properties['Id'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Name'] !== null ? Autolinker.link(String(feature.properties['Name'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_ClusterName_0_0() {
            return {
                pane: 'pane_ClusterName_0',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(153,44,254,1.0)',
            }
        }
        map.createPane('pane_ClusterName_0');
        map.getPane('pane_ClusterName_0').style.zIndex = 400;
        map.getPane('pane_ClusterName_0').style['mix-blend-mode'] = 'normal';
        var layer_ClusterName_0 = new L.geoJson(json_ClusterName_0, {
            attribution: '<a href=""></a>',
            pane: 'pane_ClusterName_0',
            onEachFeature: pop_ClusterName_0,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_ClusterName_0_0(feature));
            },
        });
        bounds_group.addLayer(layer_ClusterName_0);
        map.addLayer(layer_ClusterName_0);
        var overlay_OSMStandard_1 = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            opacity: 1.0
        });
        overlay_OSMStandard_1.addTo(map);
        map.addLayer(overlay_OSMStandard_1);
        function pop_Cluster_F_Boundary_2(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['FID_'] !== null ? Autolinker.link(String(feature.properties['FID_'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Entity'] !== null ? Autolinker.link(String(feature.properties['Entity'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Layer'] !== null ? Autolinker.link(String(feature.properties['Layer'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Color'] !== null ? Autolinker.link(String(feature.properties['Color'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Linetype'] !== null ? Autolinker.link(String(feature.properties['Linetype'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Elevation'] !== null ? Autolinker.link(String(feature.properties['Elevation'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['LineWt'] !== null ? Autolinker.link(String(feature.properties['LineWt'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['RefName'] !== null ? Autolinker.link(String(feature.properties['RefName'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Cluster_F_Boundary_2_0() {
            return {
                pane: 'pane_Cluster_F_Boundary_2',
                opacity: 1,
                color: 'rgba(228,26,28,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 4.0, 
                fillOpacity: 0,
            }
        }
        map.createPane('pane_Cluster_F_Boundary_2');
        map.getPane('pane_Cluster_F_Boundary_2').style.zIndex = 402;
        map.getPane('pane_Cluster_F_Boundary_2').style['mix-blend-mode'] = 'normal';
        var layer_Cluster_F_Boundary_2 = new L.geoJson(json_Cluster_F_Boundary_2, {
            attribution: '<a href=""></a>',
            pane: 'pane_Cluster_F_Boundary_2',
            onEachFeature: pop_Cluster_F_Boundary_2,
            style: style_Cluster_F_Boundary_2_0,
        });
        bounds_group.addLayer(layer_Cluster_F_Boundary_2);
        map.addLayer(layer_Cluster_F_Boundary_2);
        function pop_Road_3(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Layer'] !== null ? Autolinker.link(String(feature.properties['Layer'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Road_3_0() {
            return {
                pane: 'pane_Road_3',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 4.0,
                fillOpacity: 0,
            }
        }
        function style_Road_3_1() {
            return {
                pane: 'pane_Road_3',
                opacity: 1,
                color: 'rgba(228,169,169,1.0)',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 4.0,
                fillOpacity: 0,
            }
        }
        map.createPane('pane_Road_3');
        map.getPane('pane_Road_3').style.zIndex = 403;
        map.getPane('pane_Road_3').style['mix-blend-mode'] = 'normal';
        var layer_Road_3 = new L.geoJson.multiStyle(json_Road_3, {
            attribution: '<a href=""></a>',
            pane: 'pane_Road_3',
            onEachFeature: pop_Road_3,
            styles: [style_Road_3_0,style_Road_3_1,]
        });
        bounds_group.addLayer(layer_Road_3);
        map.addLayer(layer_Road_3);
        function pop_Parcels_4(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Layer'] !== null ? Autolinker.link(String(feature.properties['Layer'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Parcels_4_0(feature) {
            switch(String(feature.properties['Layer'])) {
                case 'SURVEYED PARCELS':
                    return {
                pane: 'pane_Parcels_4',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,154,153,1.0)',
            }
                    break;
                case 'PROPOSED PARCELS':
                    return {
                pane: 'pane_Parcels_4',
                opacity: 1,
                color: 'rgba(247,247,247,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(150,150,150,1.0)',
            }
                    break;
                case 'EXISTING PARCEL':
                    return {
                pane: 'pane_Parcels_4',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(166,206,227,1.0)',
            }
                    break;
                default:
                    return {
                pane: 'pane_Parcels_4',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,255,1.0)',
            }
                    break;
            }
        }
        map.createPane('pane_Parcels_4');
        map.getPane('pane_Parcels_4').style.zIndex = 404;
        map.getPane('pane_Parcels_4').style['mix-blend-mode'] = 'normal';
        var layer_Parcels_4 = new L.geoJson(json_Parcels_4, {
            attribution: '<a href=""></a>',
            pane: 'pane_Parcels_4',
            onEachFeature: pop_Parcels_4,
            style: style_Parcels_4_0,
        });
        bounds_group.addLayer(layer_Parcels_4);
        map.addLayer(layer_Parcels_4);
        function pop_Parcel_Info_5(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Parcel_ID</th>\
                        <td>' + (feature.properties['Parcel_ID'] !== null ? Autolinker.link(String(feature.properties['Parcel_ID'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NAME</th>\
                        <td>' + (feature.properties['NAME'] !== null ? Autolinker.link(String(feature.properties['NAME'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Phone_No</th>\
                        <td>' + (feature.properties['Phone_No'] !== null ? Autolinker.link(String(feature.properties['Phone_No'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">ID_Type</th>\
                        <td>' + (feature.properties['ID_Type'] !== null ? Autolinker.link(String(feature.properties['ID_Type'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">ID_Number</th>\
                        <td>' + (feature.properties['ID_Number'] !== null ? Autolinker.link(String(feature.properties['ID_Number'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Email</th>\
                        <td>' + (feature.properties['Email'] !== null ? Autolinker.link(String(feature.properties['Email'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Address</th>\
                        <td>' + (feature.properties['Address'] !== null ? Autolinker.link(String(feature.properties['Address'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Acreage</th>\
                        <td>' + (feature.properties['Acreage'] !== null ? Autolinker.link(String(feature.properties['Acreage'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Amt_Paid</th>\
                        <td>' + (feature.properties['Amt_Paid'] !== null ? Autolinker.link(String(feature.properties['Amt_Paid'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Status</th>\
                        <td>' + (feature.properties['Status'] !== null ? Autolinker.link(String(feature.properties['Status'])) : '') + '</td>\
                    </tr>\
                </table>';
                // var p = layer.feature.properties;
                // p.index = p.NAME + " | " + p.Parcel_ID + ' | ';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Parcel_Info_5_0() {
            return {
                pane: 'pane_Parcel_Info_5',
                radius: 6.4,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,255,1.0)',
            }
        }
        function style_Parcel_Info_5_1() {
            return {
                pane: 'pane_Parcel_Info_5',
                radius: 1.4,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(0,0,0,1.0)',
            }
        }
        map.createPane('pane_Parcel_Info_5');
        map.getPane('pane_Parcel_Info_5').style.zIndex = 405;
        map.getPane('pane_Parcel_Info_5').style['mix-blend-mode'] = 'normal';
        var layer_Parcel_Info_5 = new L.geoJson.multiStyle(json_Parcel_Info_5, {
            attribution: '<a href=""></a>',
            pane: 'pane_Parcel_Info_5',
            onEachFeature: pop_Parcel_Info_5,
            pointToLayers: [function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_Parcel_Info_5_0(feature));
            },function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_Parcel_Info_5_1(feature));
            },
        ]});
        bounds_group.addLayer(layer_Parcel_Info_5);
        map.addLayer(layer_Parcel_Info_5);
        var baseMaps = {};
        L.control.layers(baseMaps,{'<img src="legend/Parcel_Info_5.png" /> Parcel_Info': layer_Parcel_Info_5,'Parcels<br /><table><tr><td style="text-align: center;"><img src="legend/Parcels_4_SURVEYEDPARCELS0.png" /></td><td>SURVEYED PARCELS</td></tr><tr><td style="text-align: center;"><img src="legend/Parcels_4_PROPOSEDPARCELS1.png" /></td><td>PROPOSED PARCELS</td></tr><tr><td style="text-align: center;"><img src="legend/Parcels_4_EXISTINGPARCEL2.png" /></td><td>EXISTING PARCEL</td></tr><tr><td style="text-align: center;"><img src="legend/Parcels_4_3.png" /></td><td></td></tr></table>': layer_Parcels_4,'<img src="legend/Road_3.png" /> Road': layer_Road_3,'<img src="legend/Cluster_F_Boundary_2.png" /> Cluster_F_Boundary': layer_Cluster_F_Boundary_2,"OSM Standard": overlay_OSMStandard_1,'<img src="legend/ClusterName_0.png" /> Cluster Name': layer_ClusterName_0,},{collapsed:false}).addTo(map);
        setBounds();
        var i = 0;
        layer_ClusterName_0.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['Name'] !== null?String('<div style="color: #e31a1c; font-size: 10pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['Name']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_ClusterName_0'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });
        var i = 0;
        layer_Parcel_Info_5.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['Parcel_ID'] !== null?String('<div style="color: #012fff; font-size: 7pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['Parcel_ID']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Parcel_Info_5'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });

        map.addControl(new L.Control.Search({
            layer: layer_Parcel_Info_5,
            initial: false,
            hideMarkerOnCollapse: true,
            propertyName: 'Parcel_ID'}));
        resetLabels([layer_ClusterName_0,layer_ParcelInfo_5]);
        map.on("zoomend", function(){
            resetLabels([layer_ClusterName_0,layer_ParcelInfo_5]);
        });
        map.on("layeradd", function(){
            resetLabels([layer_ClusterName_0,layer_ParcelInfo_5]);
        });
        map.on("layerremove", function(){
            resetLabels([layer_ClusterName_0,layer_ParcelInfo_5]);
        });

        // videovar bounds = L.latLngBounds([[5.521352857149229,-0.3596585481703061],[5.523697016522513,-0.35605054387258633]]);
        var map = L.map('map', {
            zoomControl:true, 
            maxZoom:28, 
            minZoom:1, 
            center: [5.523697016522513,-0.35605054387258633]
        }).fitBounds(bounds);


// video begins
var videoUrls = [
		'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
		'https://www.mapbox.com/bites/00188/patricia_nasa.mp4'
	]

	map.fitBounds(bounds);

	var overlay = L.videoOverlay(videoUrls, bounds, {
		opacity: 0.8,
		interactive: false,
		autoplay: false
	});
	map.addLayer(overlay);

	overlay.on('load', function () {
		var MyPauseControl = L.Control.extend({
			onAdd: function() {
				var button = L.DomUtil.create('button');
				button.innerHTML = '⏸';
				L.DomEvent.on(button, 'click', function () {
					overlay.getElement().pause();
				});
				return button;
			}
		});
		var MyPlayControl = L.Control.extend({
			onAdd: function() {
				var button = L.DomUtil.create('button');
				button.innerHTML = '⏵';
				L.DomEvent.on(button, 'click', function () {
					overlay.getElement().play();
				});
				return button;
			}
		});

		var pauseControl = (new MyPauseControl()).addTo(map);
		var playControl = (new MyPlayControl()).addTo(map);

    })

    // video ends 


        var hash = new L.Hash(map);
        map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
        }
        function pop_ClusterName_0(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Id'] !== null ? Autolinker.link(String(feature.properties['Id'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Name'] !== null ? Autolinker.link(String(feature.properties['Name'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_ClusterName_0_0() {
            return {
                pane: 'pane_ClusterName_0',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(153,44,254,1.0)',
            }
        }
        map.createPane('pane_ClusterName_0');
        map.getPane('pane_ClusterName_0').style.zIndex = 400;
        map.getPane('pane_ClusterName_0').style['mix-blend-mode'] = 'normal';
        var layer_ClusterName_0 = new L.geoJson(json_ClusterName_0, {
            attribution: '<a href=""></a>',
            pane: 'pane_ClusterName_0',
            onEachFeature: pop_ClusterName_0,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_ClusterName_0_0(feature));
            },
        });
        bounds_group.addLayer(layer_ClusterName_0);
        map.addLayer(layer_ClusterName_0);
        var overlay_OSMStandard_1 = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            opacity: 1.0
        });
        overlay_OSMStandard_1.addTo(map);
        map.addLayer(overlay_OSMStandard_1);
        function pop_Cluster_F_Boundary_2(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['FID_'] !== null ? Autolinker.link(String(feature.properties['FID_'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Entity'] !== null ? Autolinker.link(String(feature.properties['Entity'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Layer'] !== null ? Autolinker.link(String(feature.properties['Layer'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Color'] !== null ? Autolinker.link(String(feature.properties['Color'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Linetype'] !== null ? Autolinker.link(String(feature.properties['Linetype'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Elevation'] !== null ? Autolinker.link(String(feature.properties['Elevation'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['LineWt'] !== null ? Autolinker.link(String(feature.properties['LineWt'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['RefName'] !== null ? Autolinker.link(String(feature.properties['RefName'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Cluster_F_Boundary_2_0() {
            return {
                pane: 'pane_Cluster_F_Boundary_2',
                opacity: 1,
                color: 'rgba(228,26,28,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 4.0, 
                fillOpacity: 0,
            }
        }
        map.createPane('pane_Cluster_F_Boundary_2');
        map.getPane('pane_Cluster_F_Boundary_2').style.zIndex = 402;
        map.getPane('pane_Cluster_F_Boundary_2').style['mix-blend-mode'] = 'normal';
        var layer_Cluster_F_Boundary_2 = new L.geoJson(json_Cluster_F_Boundary_2, {
            attribution: '<a href=""></a>',
            pane: 'pane_Cluster_F_Boundary_2',
            onEachFeature: pop_Cluster_F_Boundary_2,
            style: style_Cluster_F_Boundary_2_0,
        });
        bounds_group.addLayer(layer_Cluster_F_Boundary_2);
        map.addLayer(layer_Cluster_F_Boundary_2);
        function pop_Road_3(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Layer'] !== null ? Autolinker.link(String(feature.properties['Layer'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Road_3_0() {
            return {
                pane: 'pane_Road_3',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 4.0,
                fillOpacity: 0,
            }
        }
        function style_Road_3_1() {
            return {
                pane: 'pane_Road_3',
                opacity: 1,
                color: 'rgba(228,169,169,1.0)',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 4.0,
                fillOpacity: 0,
            }
        }
        map.createPane('pane_Road_3');
        map.getPane('pane_Road_3').style.zIndex = 403;
        map.getPane('pane_Road_3').style['mix-blend-mode'] = 'normal';
        var layer_Road_3 = new L.geoJson.multiStyle(json_Road_3, {
            attribution: '<a href=""></a>',
            pane: 'pane_Road_3',
            onEachFeature: pop_Road_3,
            styles: [style_Road_3_0,style_Road_3_1,]
        });
        bounds_group.addLayer(layer_Road_3);
        map.addLayer(layer_Road_3);
        function pop_Parcels_4(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Layer'] !== null ? Autolinker.link(String(feature.properties['Layer'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Parcels_4_0(feature) {
            switch(String(feature.properties['Layer'])) {
                case 'SURVEYED PARCELS':
                    return {
                pane: 'pane_Parcels_4',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(251,154,153,1.0)',
            }
                    break;
                case 'PROPOSED PARCELS':
                    return {
                pane: 'pane_Parcels_4',
                opacity: 1,
                color: 'rgba(247,247,247,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(150,150,150,1.0)',
            }
                    break;
                case 'EXISTING PARCEL':
                    return {
                pane: 'pane_Parcels_4',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(166,206,227,1.0)',
            }
                    break;
                default:
                    return {
                pane: 'pane_Parcels_4',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,255,1.0)',
            }
                    break;
            }
        }
        map.createPane('pane_Parcels_4');
        map.getPane('pane_Parcels_4').style.zIndex = 404;
        map.getPane('pane_Parcels_4').style['mix-blend-mode'] = 'normal';
        var layer_Parcels_4 = new L.geoJson(json_Parcels_4, {
            attribution: '<a href=""></a>',
            pane: 'pane_Parcels_4',
            onEachFeature: pop_Parcels_4,
            style: style_Parcels_4_0,
        });
        bounds_group.addLayer(layer_Parcels_4);
        map.addLayer(layer_Parcels_4);
        function pop_Parcel_Info_5(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Parcel_ID</th>\
                        <td>' + (feature.properties['Parcel_ID'] !== null ? Autolinker.link(String(feature.properties['Parcel_ID'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NAME</th>\
                        <td>' + (feature.properties['NAME'] !== null ? Autolinker.link(String(feature.properties['NAME'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Phone_No</th>\
                        <td>' + (feature.properties['Phone_No'] !== null ? Autolinker.link(String(feature.properties['Phone_No'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">ID_Type</th>\
                        <td>' + (feature.properties['ID_Type'] !== null ? Autolinker.link(String(feature.properties['ID_Type'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">ID_Number</th>\
                        <td>' + (feature.properties['ID_Number'] !== null ? Autolinker.link(String(feature.properties['ID_Number'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Email</th>\
                        <td>' + (feature.properties['Email'] !== null ? Autolinker.link(String(feature.properties['Email'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Address</th>\
                        <td>' + (feature.properties['Address'] !== null ? Autolinker.link(String(feature.properties['Address'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Acreage</th>\
                        <td>' + (feature.properties['Acreage'] !== null ? Autolinker.link(String(feature.properties['Acreage'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Amt_Paid</th>\
                        <td>' + (feature.properties['Amt_Paid'] !== null ? Autolinker.link(String(feature.properties['Amt_Paid'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Status</th>\
                        <td>' + (feature.properties['Status'] !== null ? Autolinker.link(String(feature.properties['Status'])) : '') + '</td>\
                    </tr>\
                </table>';
                // var p = layer.feature.properties;
                // p.index = p.NAME + " | " + p.Parcel_ID + ' | ';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Parcel_Info_5_0() {
            return {
                pane: 'pane_Parcel_Info_5',
                radius: 6.4,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,255,1.0)',
            }
        }
        function style_Parcel_Info_5_1() {
            return {
                pane: 'pane_Parcel_Info_5',
                radius: 1.4,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(0,0,0,1.0)',
            }
        }
        map.createPane('pane_Parcel_Info_5');
        map.getPane('pane_Parcel_Info_5').style.zIndex = 405;
        map.getPane('pane_Parcel_Info_5').style['mix-blend-mode'] = 'normal';
        var layer_Parcel_Info_5 = new L.geoJson.multiStyle(json_Parcel_Info_5, {
            attribution: '<a href=""></a>',
            pane: 'pane_Parcel_Info_5',
            onEachFeature: pop_Parcel_Info_5,
            pointToLayers: [function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_Parcel_Info_5_0(feature));
            },function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_Parcel_Info_5_1(feature));
            },
        ]});
        bounds_group.addLayer(layer_Parcel_Info_5);
        map.addLayer(layer_Parcel_Info_5);
        var baseMaps = {};
        L.control.layers(baseMaps,{'<img src="legend/Parcel_Info_5.png" /> Parcel_Info': layer_Parcel_Info_5,'Parcels<br /><table><tr><td style="text-align: center;"><img src="legend/Parcels_4_SURVEYEDPARCELS0.png" /></td><td>SURVEYED PARCELS</td></tr><tr><td style="text-align: center;"><img src="legend/Parcels_4_PROPOSEDPARCELS1.png" /></td><td>PROPOSED PARCELS</td></tr><tr><td style="text-align: center;"><img src="legend/Parcels_4_EXISTINGPARCEL2.png" /></td><td>EXISTING PARCEL</td></tr><tr><td style="text-align: center;"><img src="legend/Parcels_4_3.png" /></td><td></td></tr></table>': layer_Parcels_4,'<img src="legend/Road_3.png" /> Road': layer_Road_3,'<img src="legend/Cluster_F_Boundary_2.png" /> Cluster_F_Boundary': layer_Cluster_F_Boundary_2,"OSM Standard": overlay_OSMStandard_1,'<img src="legend/ClusterName_0.png" /> Cluster Name': layer_ClusterName_0,},{collapsed:false}).addTo(map);
        setBounds();
        var i = 0;
        layer_ClusterName_0.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['Name'] !== null?String('<div style="color: #e31a1c; font-size: 10pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['Name']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_ClusterName_0'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });
        var i = 0;
        layer_Parcel_Info_5.eachLayer(function(layer) {
            var context = {
                feature: layer.feature,
                variables: {}
            };
            layer.bindTooltip((layer.feature.properties['Parcel_ID'] !== null?String('<div style="color: #012fff; font-size: 7pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['Parcel_ID']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Parcel_Info_5'});
            labels.push(layer);
            totalMarkers += 1;
              layer.added = true;
              addLabel(layer, i);
              i++;
        });

        map.addControl(new L.Control.Search({
            layer: layer_Parcel_Info_5,
            initial: false,
            hideMarkerOnCollapse: true,
            propertyName: 'Parcel_ID'}));
        resetLabels([layer_ClusterName_0,layer_ParcelInfo_5]);
        map.on("zoomend", function(){
            resetLabels([layer_ClusterName_0,layer_ParcelInfo_5]);
        });
        map.on("layeradd", function(){
            resetLabels([layer_ClusterName_0,layer_ParcelInfo_5]);
        });
        map.on("layerremove", function(){
            resetLabels([layer_ClusterName_0,layer_ParcelInfo_5]);
        });

