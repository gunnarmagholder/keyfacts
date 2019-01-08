import React, { Component } from 'react';

class WaterLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waterImage: 'https://www2.bsh.de/aktdat/wvd/lf/stpauli_offprog.gif',
    }
  }
  componentDidMount() {
    console.log("Mounted WaterLevel");
  }
  render() {
    return (
      <div className="factbox">
        <img width="300" src={this.state.waterImage} alt="Wasserstämde und Prognosen St. Pauli" />
      </div>
    );
  }
}

export default WaterLevel;