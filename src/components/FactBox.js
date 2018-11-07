import React, { Component } from 'react';
// import '../Caroussel.css';


class FactBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containers: 15.000,
      trains: 642,
      currentShips: 87,
      factimage: 'assets/charts-pressekonferenz2017.jpg?t=' + new Date().getTime(),
    }
  }
  componentDidMount() {
    console.log('Mounted FactBox');
  }
  render() {
    return (      
      <div className="car_factBox">
        <img width="300" src={this.state.factimage}></img>
      </div>
    );
  }
}

export default FactBox;
