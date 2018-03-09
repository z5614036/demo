/**
 * Created by dell on 2017/12/11.
 */
import React from "react";
import FormSearch from "../../components/orgnazition/searchForm";
import Tables from "../../components/orgnazition/Tables"
export default class Orgnazition extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return (
            <div>
                <FormSearch />
                <Tables />
            </div>
        )
    }

}