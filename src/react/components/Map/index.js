import React from "react";
import {connect} from "react-redux";
import ol from 'openlayers';
import $ from "jquery";
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map:null
        }
    }
        componentWillMount(){
            this.height = $(window).height() - 451;
            this.width = $(window).width() - 200;
        }
    initMap() {
        var container = document.getElementById('popup');
        var closer = document.getElementById('popup-closer');
        this.state.content = document.getElementById('popup-content');
        // 创建一个overlay, 绑定html元素container
        this.state.pop_overlay = new ol.Overlay(({
            element: container,
            autoPan: true,
            autoPanAnimation: {
                duration: 100
            }
        }));
        // 地图设置中心，设置到成都
        this.state.center = [117.80429363250732, 30.95535278320313];
        //创建地图
        this.state.map = new ol.Map({
            // 让所有的zoom开关都设置为false
            interactions: ol.interaction.defaults({
                doubleClickZoom: false,
                mouseWheelZoom: true,
                shiftDragZoom: false,
                pinchZoom: false,
                dragRotate: false,
                dragPan: true,
            }),
            view: new ol.View({
                center: [0,0],
                projection: 'EPSG:4326',
                maxZoom: 16,
                minZoom: 2,
                zoom: 2,

            }),
            target: 'map',
            logo: false
        });

        this.state.map.addOverlay(this.state.pop_overlay);
        this.state.map.addLayer(new ol.layer.Tile({
            source: new ol.source.XYZ({
                // 设置本地离线瓦片所在路径，由于例子里面只有一张瓦片，页面显示时就只看得到一张瓦片。
                url: 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiejU2MTQwMzYiLCJhIjoiY2plYmY0a3QzMWEyYjMzbGVjZGthdnhxMyJ9.8yD8i_60kkgRjDM0YJjjOg'
            })
        }));
        /*this.state.map.addEventListener("click",function(e){ console.log(e.coordinate[0]+"--"+e.coordinate[1])});*/
        this.state.map.on('click', function (event) {
            this.state.pop_overlay.setPosition(undefined);
            this.state.map.forEachFeatureAtPixel(event.pixel, function (feature) {
                if (feature.N.features.length == 1) {
                    event.nbr = feature.N.features[0].c;
                    feature.N.features[0].dispatchEvent({type: 'mouseLeft', event: event});
                } else if (feature.N.features.length > 1) {
                    for (var i = 0, arr = []; i < feature.N.features.length; i++) {
                        arr.push(feature.N.features[i].c);

                    }
                    event.nbrs = arr;
                    feature.N.features[0].dispatchEvent({type: 'mouseLeft', event: event});
                }
            }, this);


        }, this);

        this.state.map.on('pointermove', function (event) {
            this.state.pop_overlay.setPosition(undefined);
            this.state.map.forEachFeatureAtPixel(event.pixel, function (feature) {
                if (feature.N.features.length == 1) {
                    event.nbr = feature.N.features[0].c;
                    event.cordination = feature.N.features[0].N.geometry.A;
                    feature.N.features[0].dispatchEvent({type: 'mouseMove', event: event});
                }
            }, this);
        }, this);
        if (!this.state.devSLayer) {
            this.state.devSLayer = new ol.layer.Vector({
                source: new ol.source.Vector()
            });
            this.state.map.addLayer(this.state.devSLayer);
        }
    }


    render() {

        return (
            <div>
                <div id="popup" className="ol-popup">
                    <a href="#" id="popup-closer" className="ol-popup-closer"></a>
                    <div id="popup-content" style={{height: "80px", with: "200px", color: '#bd2636',
                           fontSize: '16px',transform: "translate(25px)"
                                  }}></div>
                </div>
                <div id="map" style={{height:this.height,with: this.width}}></div>
            </div>
        )
    }

    componentDidMount() {
   /*   this.initMap();*/
        this.forceUpdate()
    }
    componentWillUpdate(){
        if( this.state.map){
            return false
        }
        var count = 20000;
        var features = new Array(count);
        var e = 4500000;
        for (var i = 0; i < count; ++i) {
            var coordinates = [2 * e * Math.random() - e, 2 * e * Math.random() - e];
            features[i] = new ol.Feature(new ol.geom.Point(coordinates));
        }
        var source = new ol.source.Vector({
            features: features
        });
        var clusterSource = new ol.source.Cluster({
            distance: 40,
            source: source
        });
        var styleCache = {};
        var cluster = new ol.layer.Vector({
            source: clusterSource,
            style: function(feature) {
                var size = feature.get('features').length;
                var style = styleCache[size];
                if (!style) {
                    style = new ol.style.Style({
                        image: new ol.style.Circle({
                            radius: 10,
                            stroke: new ol.style.Stroke({
                                color: '#fff'
                            }),
                            fill: new ol.style.Fill({
                                color: '#3399CC'
                            })
                        }),
                        text: new ol.style.Text({
                            text: size.toString(),
                            fill: new ol.style.Fill({
                                color: '#fff'
                            })
                        })
                    });
                    styleCache[size] = style;
                }
                return style;
            }
        });
        var raster = new ol.layer.Tile({
            source: new ol.source.XYZ({
                // 设置本地离线瓦片所在路径，由于例子里面只有一张瓦片，页面显示时就只看得到一张瓦片。
                url: 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiejU2MTQwMzYiLCJhIjoiY2plYmY0a3QzMWEyYjMzbGVjZGthdnhxMyJ9.8yD8i_60kkgRjDM0YJjjOg'
            })
        });
        this.state.map =  new ol.Map({
            layers: [raster, cluster],
            target: document.querySelector("#map"),
            view: new ol.View({
                center: [0, 0],
                zoom: 5
            })
        });
    }

}
export default Map