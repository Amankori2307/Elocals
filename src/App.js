import React from 'react';
import './App.css';
import Home from './components/Home';
import Seller from './components/Seller';
import ProductDetail from './components/ProductDetail';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/seller" component={Seller}/>
          <Route path="/product" component={ProductDetail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
