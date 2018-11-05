import React, { Component } from 'react';
import FactBox from '../components/FactBox';
import PictureBox from '../components/PictureBox';
// import TrafficInfo from '../components/TrafficInfo';

class Caroussel extends Component {
  config() { 
    return {"timeBetweenComponents": 30000};
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
      var newComponentToRender = this.state.componentToRender < this.components.length-1 ? this.state.componentToRender+1 : 0; 
      this.setState({ componentToRender: newComponentToRender });
    },this.config.timeBetweenComponents);
  }
  render() {
    const TagName = this.components()[this.state.componentToRender];
    console.log("Rendering " + TagName);
    return (
      <div className="car_box">
        <TagName />
      </div>
    );
  }
}

export default Caroussel;
