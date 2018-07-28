import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ShopCard from './components/ShopCard/ShopCard';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <ShopCard />
        <Footer />
      </div>
    );
  }
}

export default App;
