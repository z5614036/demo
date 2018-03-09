
import React from "react";



class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                isShow:false
        }
    }
    componentWillMount(){
        console.log(this.props.life,9898898989)
    }
    render(){
        return (
            <div onClick = {this.handleClick.bind(this)}>
                你好不错
            </div>
        )
    }
    handleClick(){
        this.setState({isShow:true});
    }
    componentDidMount(){
        console.log(this.props.life,9898898989)
    }
    componentWillUpdate(){

    }
    componentWillReceiveProps(){

    }

}
export default Child;