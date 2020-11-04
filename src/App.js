import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './ReduxStore'
import 'bootstrap/dist/css/bootstrap.min.css';  
import ListSeries from './controller/ListSeries';
import NavBar from './components/NavBar';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SeriesDetailedView from './controller/SeriesDetailedView';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <NavBar/>
         <Switch>
            <Route path='/' exact>
              <ListSeries/>
            </Route>
            <Route path='/series/:id' >
              {/* <view/> */}
              <SeriesDetailedView/>
            </Route>
         </Switch>    
      </Router>
 
    </div>
    </Provider>
  );
}

export default App;
