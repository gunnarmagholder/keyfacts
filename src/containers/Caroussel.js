import React, { Component } from 'react';

import '../App.css';
import FactBox from '../components/FactBox.js';

class Caroussel extends Component {
  render() {
    return (
      <div className="car_box">
        <h1>KeyFacts</h1>
        <FactBox />
      </div>
    );
  }
}

export default Caroussel;
