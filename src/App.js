import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MetaTags from 'react-meta-tags';
import Navigation from './components/Navigation/Navigation';
import ShopCard from './components/ShopCard/ShopCard';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

class App extends Component {
  render() {
    return (
      <div className="App">
        <MetaTags>
          <title> MotorMarche </title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </MetaTags>
        <Navigation />
        <ShopCard />
        <Services />
        <Footer />
      </div>
    );
  }
}

export default App;
