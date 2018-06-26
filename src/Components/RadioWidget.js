import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
// import Tooltip from 'material-ui/Tooltip';
// import Icon from 'material-ui/Icon';
import { database } from '../fire';
// import LinearProgress from '@material-ui/core/LinearProgress';

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
      <div className="container col-md-6" style={{ 'padding': '15px' }}>

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
              {/* <Tooltip title="Enjoy the Show.">
                <Button raised aria-label="Play/pause" color="secondary"
                  id={this.state.playButtonId} onClick={this.playMusic}>
                  {this.state.playing === false ?
                    <Icon id="play-button">play_arrow</Icon> : <Icon id="pause-button">pause</Icon>}
                </Button>
              </Tooltip> */}
              {/* <LinearProgress id="seekbar" variant="determinate" value={this.state.completed} /> */}

              {this.state.audio ?
                <audio controls>
                  <source src={this.state.audio} type="audio/mpeg" />
                </audio> : ""
              }

            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default RadioWidget;
