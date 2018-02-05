import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import Stop from 'material-ui-icons/Stop';
import Advertisement from './Utils/Advertisement';


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
    }else {
      this.state.audio.pause();
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
        <div>
          <CardContent>
            <Typography type="display1" color="primary">Listen live</Typography>
          </CardContent>
          <div style={{'alignItems':'center'}}>
            <IconButton aria-label="Play/pause" onClick={this.playMusic}>
            {this.state.playing === false ? <PlayArrowIcon style={{height: 38,width: 38}}/> : <Pause />}
            </IconButton>
            <IconButton aria-label="Next" onClick={this.playMusic}>
              <Stop style={{height: 38,width: 38}}/>
            </IconButton>
          </div>
        </div>
      </Card>
      <Advertisement  src={require('../Images/Andy_ad1.jpeg')}
        href="https://andynagpal.com/first-time-buyers"/>
    </div>
    );
  }
}

export default RadioWidget;
