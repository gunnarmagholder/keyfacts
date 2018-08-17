import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
// import '../Caroussel.css';


class PictureBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pictureUrl: 'assets/ship.jpg?t=' + new Date().getTime()
    }
  }
  componentDidMount() {
    console.log('Mounting PictureBox');
  }
  render() {
    return (

     <div className="car_picturebox">
        <CSSTransition
          className="keyfact">
            <img className="fadeIn" alt="Ship of the week" src={this.state.pictureUrl} width={250} height={200} mode='fit' />
        </CSSTransition>
    </div>
    
    );
  }
}

export default PictureBox;
