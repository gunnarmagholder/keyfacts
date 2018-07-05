import React, { Component } from 'react';

import '../Caroussel.css';


class FactBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containers: 1500,
      trains: 480,
      currentShips: 18
    }
  }
  render() {
    return (
     <div className="car_factBox">
      <table>
        <tbody>
          <tr>
              <td className="car_containers">Container: </td>
              <td className="car_number">{this.state.containers}</td>
          </tr>
          <tr>
              <td className="car_trains">Trains: </td>
              <td className="car_number">{this.state.trains}</td>
          </tr>
          <tr>
              <td className="car_currentships">Ships:   </td>
              <td className="car_number">{this.state.currentShips}</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FactBox;
