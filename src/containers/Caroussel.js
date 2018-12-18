import React, { Component } from 'react';
import FactBox from '../components/FactBox';
import PictureBox from '../components/PictureBox';
import { throws } from 'assert';
// import TrafficInfo from '../components/TrafficInfo';

class Caroussel extends Component {
  config() { 
    return {"timeBetweenComponents": 10000};
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
      componentToRender: 0
    }
  }
  componentDidMount() {
    console.log("Calling ComponentDidMount");
    this.timerID = setInterval(() => 
      this.changeComponentInRotation()
    ,this.config.timeBetweenComponents);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  changeComponentInRotation() {
    var thisMinute = (new Date(Date.now())).getMinutes();
    var amountOfComponentsToShow = this.components.length;

    var newComponentToRender = Math.floor((thisMinute*2)(amountOfComponentsToShow));
    this.setState({ componentToRender: newComponentToRender });
  }
  render() {
    const TagName = this.components()[this.state.componentToRender];
    
    return (
      <div className="car_box">
        <TagName />
      </div>
    );
  }
}

export default Caroussel;
