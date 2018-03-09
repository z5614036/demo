/**
 * Created by zll on 2017/10/11.
 */
import React from 'react';
import { connect } from 'react-redux';
import styles from "./index.scss";
import "./index.less"
class Login extends React.Component {
    componentWillReceiveProps(nextProps) {
            
    }
    render(){
        return (
            <div className={styles.container}>
                <div className={styles.fixHeader}>

                </div>

            </div>
        )
    }
}



function mapStateToProps(state) {
    return {

    }
}




export default connect(mapStateToProps,null)(Login);