import App from "../../react/components/Home";
import Drag from "../../react/components/Home/drag";
if (typeof require.ensure !== "function") require.ensure = function (d, c) {
    c(require)
};
// ===========================================================
const routes = {
    path:"/",
    component:App,
    indexRoute:{
       getComponents(location, callback){
            require.ensure([], function (require) {
                callback(null, {
                        main:require("../pages/login").default
                });
            }, 'home.comp');
        }
    },
    childRoutes:[
        {
            path: 'main',
            indexRoute: {
                getComponents(location, callback){
                    require.ensure([], function (require) {
                        callback(null, {
                            main: require('../components/Picture').default
                        });
                    }, 'main.comp');
                }
            } 
        },
        {
            path: 'chart',
            indexRoute: {
                getComponents(location, callback){
                    require.ensure([], function (require) {
                        callback(null, {
                            main: require('../components/Echart').default
                        });
                    }, 'chart.comp');
                }
            }
        },
        {
            path: '*',
            indexRoute: {
                getComponents(location, callback){
                    require.ensure([], function (require) {
                        callback(null, {
                            main: require('../components/ErrorPage').default
                        });
                    }, '404.comp');
                }
            }
        }
    ]

};

export default routes;
