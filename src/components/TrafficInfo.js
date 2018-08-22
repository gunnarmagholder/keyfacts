import React, { Component } from 'react';
import request from 'request';
import cheerio from 'cheerio';

class TrafficInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.getTrafficTable();
        return(
            <div className="trafficinfo">
                <h4>Hier hinein kommen die Verkehrsnachrichten</h4>
            </div>
        );
    }

    getTrafficTable() {
        console.log('Enter get traffic Table');
        var urlToGet = 'http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://www.hamburg-port-authority.de/de/info-port/traffic-tower/') + '&callback=?';
        request(urlToGet, (err, response, body) => {
            if (!err) {
                var $ =cheerio.load(body);
                var infos = $('traffic-info-type');
                console.log(infos);
            } else {
                console.log(err);
            }
        });
    }
}

export default TrafficInfo;
