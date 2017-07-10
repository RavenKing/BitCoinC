import React from 'react';
import ReactDOM from 'react-dom';
import DataSourceForm from "./DataSourceForm";
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import BitTable from  "../BitHome/BitTable";
import {PostDataSourceData} from "../Actions/transactionAction"
import {connect} from "react-redux";
@connect((store)=>{    
    return {
      BitData:store.Transaction
    };
    
})
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit(values)
  {
    console.log("do it here")
    console.log(values);
    this.props.dispatch(PostDataSourceData(values))
  }
      render() {
        const children = [
<h1>首页更新</h1>
    ];
    return (
         <div>
      <Tabs>
         <TabPane tab="首页更新" key="1"> 
            <DataSourceForm 
         onSubmit={this.onSubmit.bind(this)}/>
        </TabPane>
        <TabPane tab="资源列表" key = "2"><BitTable /></TabPane>
        </Tabs>
        </div>

        
    );
  }
}

