/**
 * Created by zll on 2017/10/12.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Layout, message,Spin} from 'antd';
import _ from "lodash";
import {reduxForReact} from "../../utils/dataFetch";
import {bindActionCreators} from "redux";
import dataFetch from "../../utils/dataFetch";
import * as Action  from "../../redux/Action/action"
import PropTypes from "prop-types";
import logo from '../../public/images/banner.png';
import { MainMenu } from '../../utils/menu';
import { SideRoute, ContentRoute } from '../routes';
import {withRouter} from "react-router-dom";
import Pubsub from "pubsub-js";
const { Header } = Layout;

message.config({
    top: 50,
    duration: 1,
});
export class mainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            id: ''
        };
        this.logOut = this.logOut.bind(this);

    }
    static childContextTypes = {
        userInfo: PropTypes.object
    };

    componentWillMount(){
        this.action = bindActionCreators({reduxForReact},this.props.dispatch);
        this.action.reduxForReact(function*(dispatch,getState){
                            if(!getState().Dictionary.dictionary){
                                var dictionary = yield dataFetch("sysinit/sysCode");
                                dispatch({type:Action.SYSCODE,payload:dictionary.datas})
                            }
                           });
        Pubsub.subscribe("serverError",(msg,data)=>{
                    if(data.error==="notLogin"){
                        this.props.history.push("/login")
                    }else {
                        message.error(data.error);
                    }
        })

    }
    render() {
        if (this.props.userInfo&&!_.isEmpty(this.props.userInfo.userInfo[0])) {
            this.state.userName = this.props.userInfo.userInfo[0].userName;
        }
        let loading = this.props.dictionary.loading;

        return (
            <Layout style={{ width: '100%', height: '100%' }} >
                <Header style={{ height: '80px', backgroundColor: '#cfefdf', display: 'flex', justifyContent: 'space-between', padding: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', float: 'left' }}>
                        <img style={{ width: '80px', height: '80px', marginRight: '30px' }} src={logo} />
                        <span style={{ whiteSpace: 'nowrap', height: '60px', color: '#259b24', fontSize: '26px', fontWeight: 'bold', marginRight: '30px' }}
                        > 团 雾 预 警 系 统 管 理 平 台</span>
                        <span style={{ whiteSpace: 'nowrap', height: '60px', color: '#259b24', fontSize: '10px'}}>
                            {'欢迎您：' + this.state.userName}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: "row", float: 'right' }}>
                        <MainMenu />
                        <div style={{ display: 'inline-block', width: '80px' }}>
                            <Button type="danger" shape="circle" icon="logout" onClick={this.logOut} />
                        </div>
                    </div>
                </Header>

                    <div style={{ width: '100%', display: 'flex', height: '100%' }} >
                        <SideRoute />
                        <div style={{ width: '100%', height: '100%' }}>
                            {false?<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <Spin size="large"/> </div>: <ContentRoute />}
                        </div>
                    </div>


            </Layout>
        );
    }
    logOut() {
        this.props.history.push('/login');
    }
}


function mapStateToProps(state) {
    return {
        userInfo: state.Login,
        dictionary:state.Dictionary
    }
}
export default withRouter(connect(mapStateToProps, null)(mainPage));

