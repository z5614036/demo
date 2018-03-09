import PubSub from 'pubsub-js';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import {bindActionCreators} from 'redux';
import {Layout, Modal, LocaleProvider} from 'antd';
class App extends Component {

    static childContextTypes = {
        route: PropTypes.object,
        location:PropTypes.object.isRequired,
        dispatch: PropTypes.func,
        asyncUserId: PropTypes.object.isRequired,
        appState: PropTypes.object.isRequired
        // muiTheme: React.PropTypes.object.isRequired
    };


    getChildContext() {
        return {
            route: this.props.route,
            location: this.props.location,
            dispatch: this.props.dispatch,
            asyncUserId: this.asyncUserId,
            appState: this.state
        }
    }



    constructor(props) {
        super(props);
        this.state = {

        }

    }



    render() {
        let {header, footer, main, mainAdmin} = this.props || {};
        let headerElem, footerElem, mainElem;

        if (header) {
            headerElem = React.cloneElement(header, {
            });
        }
        //底部
        if (footer) {
            footerElem = React.cloneElement(footer);
        }
        //页面主体
        if (main) {
            mainElem = React.cloneElement(main, {});
        }

        return (
            <LocaleProvider locale={zh_CN}>
                    <div id="contentApp">
                        <header>
                            {headerElem}
                        </header>
                        <div id="contentApp_home">
                            {mainElem}
                        </div>
                        <footer className="footer">
                            {footerElem}
                        </footer>
                    </div>
            </LocaleProvider>
        )
    }

    /**
     * 模对话框: 消息
     * @private
     */
    _modalInfo() {
        Modal.info({
            title: '提示',
            okText: '我知道了',
            content: (
                <div>
                    <p>登录过期, 请重新登录</p>
                </div>
            ),
            onOk: () => {
                let location = this.props.location;
                let pathname = location.pathname;
                let query = JSON.stringify(location.query);
                localStoreUtils.lsUpdateData(localStoreUtils.lsKey.lsTabsConfig, this.props.store.storeTabs.toJS());

                this.actions.actionPushState({
                    pathname: configSetting.BASE_LOGIN_URL,
                    query: {
                        reUrl: encodeURIComponent(location.pathname + location.search)
                    }
                });

            }
        });
    }

}


function mapStoreToProps(store) {
    return {
        store: {
            // storeLogin: store.store.storeLogin,
            // storeAlertModalMsg: store.store.storeAlertModalMsg,
            // storeAlertModalConfirm: store.store.storeAlertModalConfirm
        }
    }
}


export default connect(mapStoreToProps)(App);