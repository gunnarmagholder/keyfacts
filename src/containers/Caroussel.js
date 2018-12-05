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
  componentWillMount() {
    setInterval(() => {
      console.log("Hit interval");
      var thisMoment = new Date(Date.now());
      // var thisMinute = thisMoment.getMinutes();
      var thisMinute=31;
      var lengthOfInterval = 60/this.components.length;
      var newComponentToRender = Math.floor(thisMinute/lengthOfInterval);
      // var newComponentToRender = this.state.componentToRender < this.components.length-1 ? this.state.componentToRender+1 : 0; 
      // console.log("rendering item # " + newComponentToRender);
      this.setState({ componentToRender: newComponentToRender });
    },this.config.timeBetweenComponents);
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
