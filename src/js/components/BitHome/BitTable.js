import React, { PropTypes } from 'react';
import { Menu, Icon,Table} from 'antd';
import {GetBitData} from '../Actions/transactionAction';
import {connect} from "react-redux";

@connect((store)=>{    
    return {
      BitData:store.Transaction
    };
    
})
export default class Header extends React.Component {
			  constructor(props) {
			    super(props);

			    this.props.dispatch(GetBitData());
			    console.log(this.props)

			const columns = [{
			  title: '比特币/汇率',
			  dataIndex: 'symbol',
			  key: 'symbol',
			}, {
			  title: '价格',
			  dataIndex: 'p_new',
			  key: 'p_new',
			}, 
			{title:"今日",
				children:[{title:"浮动",
						  dataIndex: 'level',
						  key: 'level'},
						  {title:"交易量",
						  dataIndex: 'amount',
						  key: 'amount'}
						  ]
			}


			];
this.state={columns:columns}
  }
 render() {
 	console.log(this.props);
 	var dataS=[];
 	if(this.props.BitData.BitData)
 	 { dataS.push(this.props.BitData.BitData)
     }
     return (
     <div>
     <Table dataSource={dataS} columns={this.state.columns}  bordered/>

     </div>
     )
  
}
}
