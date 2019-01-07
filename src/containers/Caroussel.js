import React, { Component } from 'react';
import FactBox from '../components/FactBox';
import PictureBox from '../components/PictureBox';
import WaterLevel from '../components/waterlevel';
// import { throws } from 'assert';
// import TrafficInfo from '../components/TrafficInfo';

class Caroussel extends Component {
  config() { 
    return {"timeBetweenComponents": 900000};
  }
  components() { 
    return [
      PictureBox,
      FactBox,
      // TrafficInfo,
    ]
  }
  constructor(props) {
    super(props);
    this.state = {
      componentToRender: 0,
      pictures: ['assets/charts-pressekonferenz2017.jpg', 'https://www.bsh-wasserstand.de/docs/pegel/stpauli_offprog.gif'],  
    }
  }
  componentDidMount() {
    
    this.timerID = setInterval(() => 
      this.changeComponentInRotation()
    ,this.config.timeBetweenComponents);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  changeComponentInRotation() {
    var thisMinute = (new Date(Date.now())).getMinutes();
    var amountOfComponentsToShow = this.components().length;
    
    var newComponentToRender = Math.floor((thisMinute*amountOfComponentsToShow)/60);
    
    this.setState({ componentToRender: newComponentToRender });
  }
  render() {
    const TagName = this.components()[this.state.componentToRender];
    return (
      <div className="car_box">
        <TagName params={this.state.pictures} />
      </div>
    );
  }
}

export default Caroussel;
