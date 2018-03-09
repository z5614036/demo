import React from "react";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import  "./index.css";
import styles from "./indes.scss";
import {Button, Table, Modal, message,Affix} from "antd";
import $ from "jquery";
import {Link} from "react-router";
import Formtest from "../Form/index";
import {reduxForReact} from "../../../utils/dataFetch";
import {bindActionCreators} from "redux";
import dataFetch from "../../../utils/dataFetch";
import Header from "../Header";
import "./index.less";
import DragComponent from "./drag";
import Map from "../Map/index";
import ContextBox from "./contextBox";
const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`
    });
}
class App extends React.PureComponent {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isShow: false,
            target:{},
            data:data
        }
        
    }

    componentWillMount() {
        this.actions = bindActionCreators({reduxForReact}, this.props.dispatch);
    }

    _renderCard(){

    }

    render() {
        const columns = [
            {title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left',className:"column"},
            {title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left',className:"column"},
            {
                title: 'Column 1', dataIndex: 'address', key: '1', width: 150,className:"column",
                render: (text, record, index)=> {
                    if (index === 9) {
                        return <div>asdasd</div>
                    }
                    return record.address
                }
            },
            {title: 'Column 2', dataIndex: 'address', key: '2', width: 150,className:"column"},
            {title: 'Column 3', dataIndex: 'home', key: '3',className:"column",render: (text, record, index)=> {
                    if (index === 9) {
                        return <div className="column_item">test</div>
                    }
                    return <div style={{position:"relative"}} className="column_item">
                                {record.address}
                           </div>
                }
            }
        ];

        let {main}  = this.props;
        return (
            <div>
                <div className={styles.index}>
                    <div className={styles.leftFloat}>
                        <div className={styles.tableWidth}>
                            <Table columns={columns} dataSource={this.state.data}
                                   scroll={{ x:1200,y:300}}
                                   rowClassName={(record, index)=>{
                                            if(record.color){
                                                   return styles.color
                                            }
                                   
                                    if(index%2===0){
                                            return styles.eventRow
                                    }else {
                                    return styles.oddRow
                                    }
                               }}
                                   onRow={(record,index)=>{
                                            return {
                                                onMouseDown:this._rowClick.bind(this,record)
                                            }
                                   }}
                                   bordered/>
                        </div>
                        <ContextBox record={this.state.target} parent={this}/>
                        <Button onClick={this._onClick.bind(this)} type="primary">表单</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/main"><Button>导航菜单</Button></Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/chart"><Button>Echart表格</Button></Link>
                    </div>
                   <div className={styles.leftFloat} style={{marginLeft:25,height:350,overflowY:"auto"}}>
                        {main}
                    </div>
                    <div className={styles.clearFloat}/>
                    <DragComponent />
                 <Map />
                    <Modal
                        visible={this.state.isShow}
                        onCancel={this._onCancel.bind(this)}
                        onOk={this.hideModal.bind(this)}
                        title="测试提交"
                        width={800}
                        okText="提交"
                        cancelText="取消"
                    >
                        <Formtest ref={(ref)=>{this.Formtest = ref}}/>
                    </Modal>
                </div>

            </div>
        )
    }

    _onClick() {
        this.setState({isShow: true})
    }
        
    _onCancel() {
        this.setState({isShow: false})
    }

  

    _rowClick(record, event) {
        if(event.button===2){
            this.setState({target:record})
        }
    }

    hideModal() {
        let that = this;
        this.Formtest.validateFields((err, value)=> {
            if (!err) {
                that.actions.reduxForReact(function *(dispatch, getState) {
                    let result = yield dataFetch("/api/test/hang", {...value});
                    if (result.code % 2 === 0) {
                        that.setState({isShow: false});
                        that.Formtest.resetFields();
                    } else {
                        message.error("服务器错误")
                    }
                });
            }
        });

    }

    componentDidMount() {
    /*    $("body").bind("contextmenu", function () {
            return false;
        });*/
        $("<div class='wangyisong'></div>").appendTo(".ant-table-fixed");
        $(".ant-table-body .wangyisong").css({
            'position': "absolute", 'height': "537px",'top': "2px",
            'left': 250,
            width: 2,
            'background-color': "#555213"
        });
        document.querySelector(".ant-table-body").addEventListener("scroll",function(e){

        })
    }

}


export default connect(null)(App);