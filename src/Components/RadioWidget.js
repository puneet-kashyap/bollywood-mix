import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import Icon from 'material-ui/Icon';

class RadioWidget extends Component {
  constructor(props){
    super(props);
    this.state={
      playing:false,
      audio : props.play,
      playButtonId:'play-button'
    }
  }

  playMusic = () => {
    this.setState({playing:!this.state.playing})
    if (!this.state.playing){
      this.state.audio.play();
      this.setState({playButtonId:'pause-button'});
    }else {
      this.state.audio.pause();
      this.setState({playButtonId:'play-button'});
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
            <Typography type="display1" color="primary">{this.props.status}</Typography>
          </CardContent>
          <div style={{'alignItems':'center'}}>
            <Tooltip title="Enjoy the Show.">
              <Button raised aria-label="Play/pause" color="secondary"
                id={this.state.playButtonId} onClick={this.playMusic}>
                {this.state.playing === false ?
                  <Icon id="play-button">play_arrow</Icon> : <Icon id="pause-button">pause</Icon>}
              </Button>
            </Tooltip>
          </div>
        </div>
      </Card>

    </div>
    );
  }
}

export default RadioWidget;
