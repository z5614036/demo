import React from "react";

class Listcircle extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    componentWillMount() {
            
    }
    componentWillReceiveProps(nextProps, nextState) {

    }
    render() {
        let styles = {
            height: 20,
            width: 30,
            border: "1px solid #000"
        };
        return (
            <div style={styles}>
                应用
            </div>
        )
    }
    componentDidMount() {
    }
    componentWillUpdate(nextProps, nextState) {

    }
    componentDidUpdate(nextProps, nextState) {

    }
    componentWillUnmount() {

    }
}