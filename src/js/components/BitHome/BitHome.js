import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';
import Header from './Header';
import BitTable from './BitTable'
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
      render() {
        const children = [
      <Header id="header" key="header_0" />,
      <BitTable />
    ];
    return (
         <div>
         {children}
          </div>
        
        
        
        
        
    );
  }
}

