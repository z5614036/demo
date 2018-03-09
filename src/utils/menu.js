import React from 'react';
import {Link } from 'react-router-dom';
import { Menu, Icon,} from 'antd';

export  class MainMenu extends React.Component {
    render() {
        return (
                    <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ height: '100%',width:'100%',backgroundColor:'#cfefdf',display:'flex',alignItems:'center' }}
                    >
                    <Menu.Item key="1">
                        <Link to="/main/monitor"><Icon type="video-camera" style={{fontSize: '16px', color: 'rgb(37,155,36)'}}/>
                            <span style={{fontSize: '14px', color: 'rgb(37,155,36)'}}> 资产管理 </span></Link>
                    </Menu.Item>
                 <Menu.Item key="2" >
                        <Link to="/main/qs"><Icon type="database" style={{fontSize: '16px',color: 'rgb(37,155,36)'}}/>
                            <span style={{fontSize: '14px', color: 'rgb(37,155,36)'}}> 状态监测 </span></Link>
                    </Menu.Item>
                    <Menu.Item key="3" >
                        <Link to="/main/analysis"><Icon type="bank" style={{fontSize: '16px', color: 'rgb(37,155,36)'}}/>
                            <span style={{fontSize: '14px', color: 'rgb(37,155,36)'}}>事件管理</span></Link>
                    </Menu.Item>
                    <Menu.Item key="4" >
                        <Link to="/main/report"><Icon type="setting" style={{fontSize: '16px', color: 'rgb(37,155,36)'}}/>
                            <span style={{fontSize: '14px',color:'rgb(37,155,36)'}}> 运维管理</span></Link>
                    </Menu.Item>
                    <Menu.Item key="5" >
                        <Link to="/main/device"><Icon type="setting" style={{fontSize: '16px', color: 'rgb(37,155,36)'}}/>
                            <span style={{fontSize: '14px',color: 'rgb(37,155,36)'}}> 统计分析</span></Link>
                    </Menu.Item>
                    <Menu.Item key="6" >
                        <Link to="/main/system"><Icon type="setting" style={{fontSize: '16px', color: 'rgb(37,155,36)'}}/>
                            <span style={{fontSize: '14px', color: 'rgb(37,155,36)'}}> 系统配置</span></Link>
                    </Menu.Item>
                  </Menu>
        )
    }
}

export  class qsMenu extends React.Component {
    componentDidMount(){

    }
    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%' }}
            >
                <Menu.Item key="1"><Link to="/main/qs/singleQ"><Icon type="setting"  style={{fontSize: '16px', color: '#FFB6C1'}}/>
                    <span style={{fontSize: '14px', color: '#121212'}}>状态监测</span></Link></Menu.Item>


            </Menu>
        )

};}


export  class analysisMenu extends React.Component {
    componentDidMount(){

    }
    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                style={{ height: '100%' }}
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1"><Link to="/main/analysis/correlation"><Icon type="setting" style={{fontSize: '16px', color: '#FFB6C1'}}/>
                    <span style={{fontSize: '14px', color: '#121212'}}>事件管理</span></Link></Menu.Item>


            </Menu>
        )

    };}




export class MonitorMenu extends React.Component{

    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                style={{ height: '100%' }}
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1"><Link to="/main/monitor/record"><Icon type="setting" style={{fontSize: '16px', color: 'rgb(37,155,36)'}}/>
                    <span style={{fontSize: '14px', color: 'rgb(37,155,36)'}}>设备分布</span></Link></Menu.Item>
               <Menu.Item key="2"><Link to="/main/monitor/remember"><Icon type="setting" style={{fontSize: '16px', color: 'rgb(37,155,36)'}}/>
                    <span style={{fontSize: '14px', color: 'rgb(37,155,36)'}}>资产备案</span></Link></Menu.Item>
            </Menu>
        )

    };

}


export  class reportMenu extends React.Component {
    componentDidMount(){

    }
    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                style={{ height: '100%' }}
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1"><Link to="/main/report/edit"><Icon type="setting"  style={{fontSize: '16px', color: '#FFB6C1'}}/>
                    <span style={{fontSize: '14px', color: '#121212'}}> 运维管理</span></Link></Menu.Item>
        {/*        <Menu.Item key="2"><Link to="/main/report/publish"><Icon type="setting"  style={{fontSize: '16px', color: '#FFB6C1'}}/>
                    <span style={{fontSize: '14px', color: '#121212'}}> 报告发布</span></Link></Menu.Item>*/}
            </Menu>
        )

    };}


export  class deviceMenu extends React.Component {
    componentDidMount(){

    }
    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                style={{ height: '100%' }}
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1"><Link to="/main/device/setting"><Icon type="setting"  style={{fontSize: '16px', color: '#FFB6C1'}}/>
                    <span style={{fontSize: '14px', color: '#121212'}}>设备台账</span></Link></Menu.Item>
                <Menu.Item key="1"><Link to="/main/device/setting"><Icon type="setting"  style={{fontSize: '16px', color: '#FFB6C1'}}/>
                    <span style={{fontSize: '14px', color: '#121212'}}>设备在线率</span></Link></Menu.Item>
                <Menu.Item key="1"><Link to="/main/device/setting"><Icon type="setting"  style={{fontSize: '16px', color: '#FFB6C1'}}/>
                    <span style={{fontSize: '14px', color: '#121212'}}>设备故障率</span></Link></Menu.Item>
                <Menu.Item key="1"><Link to="/main/device/setting"><Icon type="setting"  style={{fontSize: '16px', color: '#FFB6C1'}}/>
                    <span style={{fontSize: '14px', color: '#121212'}}>设备检定率</span></Link></Menu.Item>
               </Menu>
        )

    };}

export  class systemMenu extends React.Component {
    componentDidMount(){

    }
    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                style={{ height: '100%' }}
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1"><Link to="/main/system/platform"><Icon type="setting"  style={{fontSize: '16px',color: 'rgb(37,155,36)'}}/>
                    <span style={{fontSize: '14px', color: 'rgb(37,155,36)'}}> 组织机构</span></Link></Menu.Item>
          {/*      <Menu.Item key="2"><Link to="/main/system/point"><Icon type="setting"  style={{fontSize: '16px', color: '#FFB6C1'}}/>
                    <span style={{fontSize: '14px', color: '#121212'}}> 监测点配置</span></Link></Menu.Item>
                <Menu.Item key="3"><Link to="/main/system/alarm"><Icon type="setting"  style={{fontSize: '16px', color: '#FFB6C1'}}/>
                    <span style={{fontSize: '14px', color: '#121212'}}> 报警配置</span></Link></Menu.Item>
                <Menu.Item key="4"><Link to="/main/system/dictionary"><Icon type="setting"  style={{fontSize: '16px', color: '#FFB6C1'}}/>
                    <span style={{fontSize: '14px', color: '#121212'}}> 系统字典</span></Link></Menu.Item>
                <Menu.Item key="5"><Link to="/main/system/user"><Icon type="setting"  style={{fontSize: '16px', color: '#FFB6C1'}}/>
                    <span style={{fontSize: '14px', color: '#121212'}}>用户管理</span></Link></Menu.Item>
                <Menu.Item key="6"><Link to="/main/system/auth"><Icon type="setting"  style={{fontSize: '16px', color: '#FFB6C1'}}/>
                    <span style={{fontSize: '14px', color: '#121212'}}> 权限管理</span></Link></Menu.Item>
                <Menu.Item key="7"><Link to="/main/system/log"><Icon type="setting"  style={{fontSize: '16px', color: '#FFB6C1'}}/>
                    <span style={{fontSize: '14px', color: '#121212'}}> 日志管理</span></Link></Menu.Item>*/}

            </Menu>
        )

    };}