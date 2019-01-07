import React, { Component } from 'react';
// import '../Caroussel.css';


class FactBox extends Component {

  config() {
    return {"timeBetweenComponents": 10000};
  }
  constructor(props) {
    super(props);
    this.currentImage = 0;
    this.pictureArray = ['assets/charts-pressekonferenz2017.jpg', 'http://www.bsh-wasserstand.de/docs/pegel/stpauli_offprog.gif'];
    this.imageCount = this.pictureArray.length;
    console.log(this.pictureArray[1]);
    this.state = {
      currentImage: 0,
      pictureArray: this.pictureArray,
      imageCount: this.imageCount,
      factImage: this.pictureArray[0],
    }
  }
  componentDidMount() {
    console.log('Mounted FactBox');
    this.timerID = setInterval(() => 
      this.changeFactPiece(),
      10000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  changeFactPiece() {
    if(this.state.currentImage >= this.state.imageCount-1) {
      console.log("reset currentImage");
      this.setState({currentImage: 0});
    } else {
      var newCurrentImage = this.state.currentImage + 1;
      this.setState({currentImage: newCurrentImage});
    }
    this.setState({factImage: this.pictureArray[this.state.currentImage]+ '?t=' + new Date().getTime()})
    console.log("Changing Picture to " + this.state.factImage);
  }
  render() {
    return (      
      <div className="car_factBox">
        <img width="300" src={this.state.factImage} alt="Infografik über Umschlagszahlen des Hamburger Hafens aus dem Jahr 2017"></img>
      </div>
    );
  }
}

export default FactBox;
