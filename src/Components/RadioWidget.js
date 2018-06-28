import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { database } from '../fire';

class RadioWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      // audio: 'http://192.240.102.133:7703/stream',
      playButtonId: 'play-button',
    }
    if (!props.play) {
      this.getAudio(this.retrieve);
    }
  }

  getAudio = (cb) => {
    database.ref('Audios/latestAudio').once('value').then(function (snapshot) {
      cb(snapshot.val());
    })
  }

  retrieve = (data) => {
    this.setState({ audio: data });
  }

  playMusic = () => {
    this.setState({ playing: !this.state.playing })
    if (!this.state.playing) {
      this.state.audio.play();
      this.setState({ playButtonId: 'pause-button' });
    } else {
      this.state.audio.pause();
      this.setState({ playButtonId: 'play-button' });
    }
  }
  render() {
    return (
      <div className="container-fluid"
      style={{ background: "url(" + require('../Images/dark-music.jpg') + ")", backgroundSize: 'cover',
      backgroundPosition: 'right' }}>
        <div className="row" style={{ justifyContent: 'center', padding: '50px 0px', height : '50vh' }}>
          <div className="col-md-6">
            <Card style={{
              'textAlign': 'center',
              'margin': '10px',
              'padding': '5px',
              'background': 'ghostwhite'
            }}>
              <div style={{ 'paddingBottom': '16px' }}>
                <CardContent>
                  <Typography type="display1" color="primary">{this.props.status}</Typography>
                </CardContent>
                <div style={{ 'alignItems': 'center' }}>
                  {this.state.audio ?
                    <audio controls controlsList="nodownload">
                      <source src={this.state.audio} type="audio/mpeg" />
                    </audio> : ""
                  }
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default RadioWidget;
