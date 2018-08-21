import React, { Component } from 'react';
import request  from 'request';
// import '../Caroussel.css';


class PictureBox extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
        pictureUrl: 'assets/ship.jpg?t=' + new Date().getTime(),
        shipName: ""
    }
    request('https://cdn.intranet.hpa/keyfacts/assets/ship.json', (err, response, body) => {
      console.log("Trying to get ship name...");
      console.log(body);
      if(!err) {
        console.log('Got Ship Name: ' + body);
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
        "{this.state.shipName}" </h3>
        
        <img className="fadeIn" alt="Ship of the week" src={this.state.pictureUrl} width={250} height={200} mode='fit' />
      </div>
    );
  }
}

export default PictureBox;
