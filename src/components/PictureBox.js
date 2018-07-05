import React, { Component } from 'react';

import '../Caroussel.css';


class PictureBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pictureUrl: '../assets/ship.jpg'
    }
  }
  render() {
    return (
     <div className="car_picturebox">
        <img src={this.state.pictureUrl} width={300} height={300} mode='fit' />
    </div>
    );
  }
}

export default PictureBox;
