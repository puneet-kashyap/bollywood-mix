import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import Advertisement from './Utils/Advertisement';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';


class RadioWidget extends Component {
  constructor(props){
    super(props);
    this.state={
      playing:false,
      audio:new Audio('http://192.240.102.133:7703/stream')
    }
  }

  playMusic = () => {
    this.setState({playing:!this.state.playing})
    if (!this.state.playing){
      this.state.audio.play();
      this.playButtonId="play-button";
    }else {
      this.state.audio.pause();
      this.playButtonId="pause-button";
    }

  }
  render(){
    return (
      <div className="container col-md-6" style={{'padding':'15px'}}>
      <Card style={{
        'textAlign':'center',
        'margin':'10px',
        'padding':'5px',
        'background':'ghostwhite'
      }}>
        <div style={{'paddingBottom':'16px'}}>
          <CardContent>
            <Typography type="display1" color="primary">Listen live</Typography>
          </CardContent>
          <div style={{'alignItems':'center'}}>
            <Tooltip title="Enjoy the Show.">
              <Button raised aria-label="Play/pause" color="secondary" id={this.playButtonId} onClick={this.playMusic}>
                {this.state.playing === false ? <PlayArrowIcon /> : <Pause />}
              </Button>
            </Tooltip>
          </div>
        </div>
      </Card>

    <div className="d-sm-none">
      <Advertisement id='first-time-buyers' src={require('../Images/Andy_ad1.jpeg')}
        href="https://andynagpal.com/first-time-buyers"/>
    </div>

    </div>
    );
  }
}

export default RadioWidget;
