/**
 * Created by Administrator on 2018/2/22.
 */
/**
 * Created by zll on 2017/10/11.
 */
import React from 'react';
import { connect } from 'react-redux';
class ErrorPage extends React.Component {
    componentWillReceiveProps(nextProps) {

    }
    render(){
        return (
            <div >
                错误
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {

    }
}




export default connect(mapStateToProps,null)(ErrorPage);