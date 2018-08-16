import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
// import '../App.css';
// import '../Caroussel.css';
import FactBox from '../components/FactBox';
import PictureBox from '../components/PictureBox'

class Caroussel extends Component {
  
  components = [
    PictureBox,
    FactBox,
  ];
  constructor(props) {
    super(props);
    this.state = {
      componentToRender: 0
    }
  };
  componentDidMount() {
    setInterval(() => {
      var newComponentToRender = this.state.componentToRender < this.components.length-1 ? this.state.componentToRender+1 : 0; 
      this.setState({ componentToRender: newComponentToRender });
    },5000);
  };
  render() {
    const TagName = this.components[this.state.componentToRender];

    return (
      <div className="car_box">
        <TagName />
      </div>
    );
  }
}

export default Caroussel;
