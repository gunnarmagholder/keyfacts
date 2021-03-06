import React, { Component } from 'react';
import request  from 'request';
// import '../Caroussel.css';
import shipImage from '../assets/ship.jpg';

class PictureBox extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
        pictureUrl: shipImage,
        shipName: ""
    }
    request('../assets/ship.json', (err, response, body) => {
      if(!err) {
        this.setState({'shipName': body});
      } else {
        console.log('Error in getting Shipname : ' + err);
      }
    });
  }
  componentDidMount() {
    console.log('Mounting PictureBox');
  }
  render() {

    return (
     <div className="car_picturebox">
        <h3 id="sodheader">#Schiff_des_Tages
        <br />
        {this.state.shipName} </h3>
        
        <img id="sodpicture" className="fadeIn" alt="Ship of the week" src={this.state.pictureUrl} width={250} height={200} mode='fit' />
      </div>
    );
  }
}

export default PictureBox;
