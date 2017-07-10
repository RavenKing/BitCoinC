import React from "react";
import { Link } from "react-router";
import BitHome from "./BitHome/BitHome"
import {connect} from "react-redux";
import {getSystemData} from "./Actions/transactionAction"
@connect((store)=>{    
    return {
      BitData:store.Transaction
    };
    
})
export default class Layout extends React.Component {


  componentWillMount()
  {
    this.props.dispatch(getSystemData())
  }


      render() {
        
    return (
         <div>
          <BitHome></BitHome>


          </div>
        
        
        
        
        
    );
  }
}