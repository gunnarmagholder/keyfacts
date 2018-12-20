import React, { Component } from 'react';
// import '../Caroussel.css';


class FactBox extends Component {
  constructor(props) {
    super(props);
    var pictureArray = props.params;
    console.log(pictureArray[1]);
    this.state = {
      containers: 15.000,
      trains: 642,
      currentShips: 87,
      factimage: pictureArray[1] + '?t=' + new Date().getTime(),
    }
  }
  componentDidMount() {
    console.log('Mounted FactBox');
  }
  render() {
    return (      
      <div className="car_factBox">
        <img width="300" src={this.state.factimage} alt="Infografik über Umschlagszahlen des Hamburger Hafens aus dem Jahr 2017"></img>
      </div>
    );
  }
}

export default FactBox;
