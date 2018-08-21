import React, { Component } from 'react';
// import '../Caroussel.css';


class FactBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containers: 15.000,
      trains: 642,
      currentShips: 87
    }
  }
  componentDidMount() {
    console.log('Mounted FactBox');
  }
  render() {
    return (      
      <div className="car_factBox">
        <img width="300" src="https://www.hafen-hamburg.de/images/540/media/preview/charts-pressekonferenz2017.jpg"></img>
      </div>
    );
  }
}

export default FactBox;
