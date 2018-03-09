/**
 * Created by zll on 2017/10/11.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from "redux-thunk";
import persistState from 'redux-localstorage'
import FullReducers from './reducers';
import {createInjectStore} from "../redux/createRedux";
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
const middle = routerMiddleware(browserHistory);
const loggerMiddleware = createLogger();
function myCustomSlicer(paths) {
    return (state) => {
        let subset = {};
        paths.forEach((path) => {
            subset[path] = state[path];
        });
        return subset
    }

}
export default function Store(initialState) {
    return  compose(applyMiddleware(loggerMiddleware,thunk,middle), persistState(['Login'],{slicer:myCustomSlicer}))(createInjectStore)(FullReducers,initialState);
}