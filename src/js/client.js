import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,IndexRoute,hashHistory,browserHistory} from "react-router";
import Layout from "./components/Layout";
import '../css/antMotion_style.less';
import store from './store';
import { Provider } from "react-redux"; 

const app = document.getElementById('app');
ReactDOM.render(
	<Provider store={store}>
    <Router history={hashHistory}>
     <Route path="/" component ={Layout}> 
      </Route>
  </Router>
  </Provider>,
app);