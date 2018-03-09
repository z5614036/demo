/**
 * Created by Administrator on 2017/11/29.
 */

if (typeof require.ensure !== "function") require.ensure = function (d, c) {
    c(require)
};

export default {
    path:"to",
    indexRoute:{
        getComponents(location, callback){
            require.ensure([], function (require) {
                callback(null, {
                    mainAdmin: require('../components/Login/Alin').default
                });
            }, 'rqrr.comp');
        }
    },
    childRoutes:[

    ]


};