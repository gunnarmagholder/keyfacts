import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Caroussel from './containers/Caroussel';



function tick() {
  var current = new Date();
  var seconds = current.getSeconds();
  if(seconds > 0 && seconds < 60) {
	ReactDOM.render(<Caroussel tag='picture' />, document.getElementById('root'));
  }
}

setInterval(tick, 1000);
