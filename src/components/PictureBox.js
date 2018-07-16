import React, { Component } from 'react';
import Twitter from 'twitter';
import '../Caroussel.css';


class PictureBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pictureUrl: this.getImageUrl()
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
    var client = new Twitter({
      consumer_key: 'aIgLWM46xW4KbFK62j2nL0Zlq',
      consumer_secret: 'SzM4qv4Wuk3U9PTrOzG2ULG8KuqNhlzZw53qGET7pdNASTdrL3',
      access_token_key: '15296186-3R0NtUMfylTTnUHeyXZqsK3rlKnaFAIUF4eb06Vi4',
      access_token_secret: 'rOvE6ABRLcTshgMKtQ4KneYFxekSkXuxE63Eo1MCD7c0o'
    });
    client.get('search/tweets', {q: '#schiffdestages @portofhamburg', tweet_mode: 'extended'}, function(error, tweets, response) {
      image_url = tweets['statuses'][0]['extended_entities']['media'][0]['media_url']
    });
    return image_url;
  }

}

export default PictureBox;
