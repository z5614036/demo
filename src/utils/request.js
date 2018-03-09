import axios from 'axios';
import { config } from './config';

const access_token = localStorage.getItem('access_token');
const username = localStorage.getItem('username');
export const dataService = {
    postRequest: (params) => {
        return new Promise(function (resolve, reject) {
            console.log(params);
            axios.post(params.reqUrl + '?access_token=' + access_token + '&username=' + username, params.reqParam, config)
                .then(function (res) {
                    resolve(res);
                })
                .catch(function (err) {
                    reject(err);
                })
        });
    },
    getRequest: (params) => {
        return new Promise(function (resolve, reject) {
            axios.get(params.reqUrl + '?access_token=' + access_token + '&username=' + username, config)
                .then(function (res) {
                    resolve(res);
                })
                .catch(function (err) {
                    reject(err);
                })
        });
    },

    reqUrl: {
        login: '/api/sys_users/webLogin',
        singleQuery: '/api/sys_users/webLogin',
        sysDic: '/api/sys_dics/listJson',
        area: '/api/b_areas/list',
        factor: '/api/b_factors/list',
        monitorSite: '/api/sys_dic_types/list',
        monitorSiteGroup: '/api/b_areas/areaSite',

    },
    sysManageUrl: {

        queryPlat: '/api/sys_users/query_plat',
        platSubmit: '/api/sys_manage/plat_submit',

        queryMS: '/api/b_sites/list',
        addMS: '/api/b_sites/add',
        editMS: '/api/b_sites/siteUpdate',
        delMS: '/api/b_sites/delete',

        queryUser: '/api/sys_users/list',
        addUser: '/api/sys_users/add',
        editUser: '/api/sys_users/userUpdate',
        delUser: '/api/sys_users/delete',

        queryAlarm: '/api/b_alarms/list',
        addAlarm: '/api/b_alarms/add',
        editAlarm: '/api/b_alarms/alarmUpdate',
        delAlarm: '/api/b_alarms/delete',
    }
};