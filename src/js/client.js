import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,IndexRoute,hashHistory,browserHistory} from "react-router";
import Layout from "./components/Layout";
import '../css/antMotion_style.less';

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
     <Route path="/" component ={Layout}> 
      </Route>
  </Router>,
app);