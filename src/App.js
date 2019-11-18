import React, {Fragment,Component}  from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import {GlobalStyled} from './style.js';
import Header from './common/header/index.js'
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
class App extends Component {
  render(){
    return (
      <Fragment>
      <GlobalStyled/>
      <Provider store = {store}> 
        <BrowserRouter>
        	<div>
          <Header />
  	      <Route path = '/' exact component = {Home} ></Route>
  	      <Route path = '/detail/:id' exact component = {Detail} ></Route>
          <Route path = '/login' exact component = {Login} ></Route>
        	</div>
        </BrowserRouter>
       </Provider>
      </Fragment>
    );
  };
};

export default App;
