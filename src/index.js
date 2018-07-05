import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Caroussel from './containers/Caroussel';



function tick() {
  var current = new Date();
  var minutes = current.getMinutes();
  if ((minutes%2)===0) {
      ReactDOM.render(<Caroussel tag='facts' />, document.getElementById('root'));
  } else {
      ReactDOM.render(<Caroussel tag='picture' />, document.getElementById('root'));
  }
}

setInterval(tick, 1000);
