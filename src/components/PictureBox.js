import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
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
      <CSSTransitionGroup
      transitionName="keyfact"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
     <div className="car_picturebox">
        <img className="fadeIn" alt="Ship of the week" src={this.state.pictureUrl} width={250} height={200} mode='fit' />
    </div>
    </CSSTransitionGroup>
    );
  }
}

export default PictureBox;
