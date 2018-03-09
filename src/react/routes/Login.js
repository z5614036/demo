
if (typeof require.ensure !== "function") require.ensure = function (d, c) {
    c(require)
};

export default {
            path:"login",
            getComponents(location, callback){
                    require.ensure([], function (require) {
                        callback(null, {
                            main: require('../components/Login/Login').default
                        });
                    }, 'login.comp');
              
             },
            onEnter(nextState,replace,next){
                    console.log(nextState,"有没有");
                    next()
                },
    indexRoute:{
        getComponents(location, callback){
            require.ensure([], function (require) {
                callback(null, {
                    mainAdmin: require('../components/Login/Pian').default
                });
            }, 'lulu.comp');
        }
    },
    childRoutes:[
            require("./picture.js").default
    ]
};