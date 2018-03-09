import React from "react";
import _ from "lodash";
class ContextMenu extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            visible: false
        };
      }


    componentDidMount() {
        document.addEventListener('contextmenu', this._handleContextMenu);
        document.addEventListener('click', this._handleClick);
        document.addEventListener('scroll', this._handleScroll);
    };

    componentWillUnmount() {
        document.removeEventListener('contextmenu', this._handleContextMenu);
        document.removeEventListener('click', this._handleClick);
        document.removeEventListener('scroll', this._handleScroll);
    }

    _handleContextMenu = (event) => {

        if(event.target.getAttribute("class")==="column"||event.target.getAttribute("class") === "column_item"){

            event.preventDefault();
            this.setState({ visible: true });
            const clickX = event.clientX;
            const clickY = event.clientY;
            const screenW = window.innerWidth;
            const screenH = window.innerHeight;
            const rootW = this.root.offsetWidth;
            const rootH = this.root.offsetHeight;
            const right = (screenW - clickX) > rootW;
            const left = !right;
            const top = (screenH - clickY) > rootH;
            const bottom = !top;
            if (right) {
                this.root.style.left = `${clickX + 5}px`;
            }
            if (left) {
                this.root.style.left = `${clickX - rootW - 5}px`;
            }
            if (top) {
                this.root.style.top = `${clickY + 5}px`;
            }
            if (bottom) {
                this.root.style.top = `${clickY - rootH - 5}px`;
            }

        }else {
            return false
        }



    };

    _handleClick = (event) => {
        const { visible } = this.state;
        const wasOutside = !(event.target.contains === this.root);

        if (wasOutside && visible) this.setState({visible:false});
    };

    _handleScroll = () => {
        const { visible } = this.state;

        if (visible) this.setState({ visible: false });
    };

    render() {
        const { visible } = this.state;

        return(visible || null) &&
            <div ref={ref => {this.root = ref}} className="contextMenu">
                <div className="contextMenu--option" onClick = {this._comfirm.bind(this)}>颜色</div>
                <div className="contextMenu--option">弹框</div>
                <div className="contextMenu--separator" />
                <div className="contextMenu--option">取消</div>
            </div>
    };
   _comfirm(){
            var data = this.props.parent.state.data;
    this.props.parent.setState((state)=>{
                 state.data = state.data.map((item,index)=>{
                                    if(item.key === this.props.record.key){
                                            if(!item.color){
                                                _.set(item,"color",true)
                                            }else{
                                                _.set(item,"color",false)
                                            }
                                        
                               
                                    }
                                    return item     
                 });
                    return state
    },()=>{
        this.props.parent.forceUpdate()
    })
            
   }

}
export default ContextMenu;