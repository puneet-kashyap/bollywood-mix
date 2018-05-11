import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import { requestPermission } from '../fire';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import moment from 'moment-timezone';
import { countDownShowTime } from './Utils/TimeMoment';

export class NextShow extends Component {
  constructor(props){
    super(props);
    this.state={
      notified:false,
      open: false,
      now: countDownShowTime().remainingTime.split(":")
    }
  }

  componentDidMount(){
    if (window.localStorage.getItem('bollywoodmix') === '1') {
      this.setState({notified: true});
    }
    const localZone = moment.tz.guess();
    const localShowTime = countDownShowTime().nextShowTime.tz(localZone).format('hh:mm a z');
    this.setState({showTime: localShowTime});
    this.timerID = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime = () => {
    var timer = countDownShowTime().remainingTime.split(":");
    if(timer.length === 2) timer.unshift('00');
    else if (timer.length === 1)timer.unshift('00','00');
    this.setState({ now: timer });
  };

  notifyMe = () => {
    window.localStorage.setItem('bollywoodmix', 1);
    requestPermission();
    this.setState({notified: true});
    this.setState({ open: true });
  }

  handleClose = (event, reason) => {
    this.setState({ open: false });
  };

  render(){
    return(
      <div className="container col-md-6" style={{'padding':'15px'}}>
        <Card style={{
          'textAlign':'center',
          'margin':'10px',
          'padding':'5px',
          'background':'ghostwhite'
        }}>
        <div className="align-self-center" style={{'paddingBottom':'16px'}}>
          <CardContent>
            <Typography type="display1" color="primary">Next Show</Typography>
            {`${this.props.showName} will be live soon.`}
            {/* {`${this.props.showName} will be live soon at ${this.state.showTime}.`} */}
          </CardContent>
          {this.props.showCountDown ? 
            <CardContent>
              Next show will be live in : <br/>
              <div id="clockdiv"className="row">
                {/* <div>
                  <span className="days"></span>
                  <div className="smalltext">Days</div>
                </div> */}
                <div>
                  <span className="hours">{this.state.now[0]}</span>
                  <div className="smalltext">Hours</div>
                </div>
                <div>
                  <span className="minutes">{this.state.now[1]}</span>
                  <div className="smalltext">Minutes</div>
                </div>
                <div>
                  <span className="seconds">{this.state.now[2]}</span>
                  <div className="smalltext">Seconds</div>
                </div>
              </div>
            </CardContent>
            :null
          }

          <Tooltip title="BollywoodMix Show in not live right now.">
          <div id="disabled-play-button" style={{'alignItems':'center'}}>
                <Button raised aria-label="Play/pause" color="secondary" disabled>
                    Play
                    <PlayArrowIcon style={{'marginLeft':'5px'}}/>
                </Button>
          </div>
          </Tooltip>

          {this.state.notified === false ?
            <Tooltip title="We will notify you once the show is Live.">
            <div style={{'alignItems':'center', 'paddingTop':'25px'}}>
                  <Button id="notify-me" raised aria-label="Notify Me" color="primary" onClick={this.notifyMe}>
                      Notify Me
                  </Button>
            </div>
            </Tooltip>
          : <div/>
          }

        </div>
      </Card>

      <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        open={this.state.open}
        autoHideDuration={5000}
        SnackbarContentProps={{
            'aria-describedby': 'message-id',
        }}
        onClose={this.handleClose}
        message={<span id="message-id">We will notify you once the show is Live.</span>}
        action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              Undo.
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
      />

    </div>
    )
  }
}
