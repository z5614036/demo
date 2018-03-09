import React from "react";



class Lifecircle extends React.Component{
            constructor(props){
                super(props);
                this.state = {
                    
                }
            }
            componentWillMount(){
                console.log(this.props.parent,9898898989)
            }
            render(){
                return (
                    <div>
                        你好不错
                    </div>
                )
            }
            componentDidMount(){

            }
            componentWillUpdate(){

            }
            componentWillReceiveProps(){
                
            }
    
}
export default Lifecircle;