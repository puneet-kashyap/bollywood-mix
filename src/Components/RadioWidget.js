import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import Stop from 'material-ui-icons/Stop';



class RadioWidget extends Component {
  constructor(props){
    super(props);
    this.state={
      playing:false,
      audio:new Audio('http://192.240.102.133:7703/stream'),
      showRadio: true,
      date: new Date()
    }
  }

  componentWillMount(){
    var localTime = new Date();
    var estTime = new Date(new Date().setHours(localTime.getHours() + localTime.getTimezoneOffset()/60 - 5));
    this.setState({date: new Date(estTime)})
    console.log(this.state.date.getDay());
  }

  componentDidMount(){

    this.showWidget();
  }

  showWidget = () => {
    if (this.state.date.getDay() > 0 && this.state.date.getDay() < 6) {
      if (this.state.date.getHours() === 10){
        this.setState({showRadio:true})
          console.log("Show is ON.")
      } else if (this.state.date.getHours() === 11 && this.state.date.getMinutes() < 31) {
        console.log("Show is ON.")
        this.setState({showRadio:true})
      } else {
        console.log("Wait for show")
        this.setState({showRadio:false})
      }
    } else {
      console.log("Wait for show")
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
    </div>
    );
  }
}

export default RadioWidget;
