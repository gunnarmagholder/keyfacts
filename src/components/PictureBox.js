import React, { Component } from 'react';
import Twitter from 'twitter';
import '../Caroussel.css';


class PictureBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pictureUrl: 'https://pbs.twimg.com/media/DiNq-_7W0AAOEQu.jpg:large',
	configData: require('../config.development.json')
    }
  }
  render() {
    return (
     <div className="car_picturebox">
        <img alt="Ship of the week" src={this.state.pictureUrl} width={250} height={200} mode='fit' />
    </div>
    );
  }
  getImageUrl() {
    var image_url = '';
    var client = new Twitter(this.state.configData);
    client.get('search/tweets', {q: '#schiffdestages @portofhamburg', tweet_mode: 'extended'}, function(error, tweets, response) {
      image_url = tweets['statuses'][0]['extended_entities']['media'][0]['media_url']
    });
    return image_url;
  }

}

export default PictureBox;
