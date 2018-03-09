import React from "react";
import echarts from "echarts";
import $ from "jquery";

class Chart extends React.Component{
            constructor(props){
                    super(props);
                    this.state = {
                        chartNjd:null
                    };
            }

            render(){
                return (
                    <div id="chartNjd" style={{width:300,height:400,display:"inline-block",marginLeft:10}}></div>
                )
            }
            componentDidMount(){
                this.state.chartNjd = echarts.init(document.getElementById('chartNjd'));
                var  option = {
                    angleAxis: {
                    },
                    radiusAxis: {
                        type: 'category',
                        data: ['周一', '周二', '周三', '周四'],
                        z: 10
                    },
                    polar: {
                    },
                    series: [{
                        type: 'bar',
                        data: [1, 2, 3, 4],
                        coordinateSystem: 'polar',
                        name: 'A',
                        stack: 'a'
                    }, {
                        type: 'bar',
                        data: [2, 4, 6, 8],
                        coordinateSystem: 'polar',
                        name: 'B',
                        stack: 'a'
                    }, {
                        type: 'bar',
                        data: [1, 2, 3, 4],
                        coordinateSystem: 'polar',
                        name: 'C',
                        stack: 'a'
                    }],
                    legend: {
                        show: true,
                        data: ['A', 'B', 'C']
                    }
                };
                this.state.chartNjd.setOption(option)


            }
}
export default Chart;