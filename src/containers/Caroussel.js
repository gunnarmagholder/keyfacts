import React, { Component } from 'react';

import '../App.css';
import FactBox from '../components/FactBox';
import PictureBox from '../components/PictureBox'

class Caroussel extends Component {
  components = {
    picture: PictureBox,
    facts: FactBox,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const TagName = this.components[this.props.tag];
    return (
      <div className="car_box">
        <TagName />
      </div>
    );
  }
}

export default Caroussel;
