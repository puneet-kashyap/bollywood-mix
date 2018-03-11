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

export class NextShow extends Component {
  constructor(props){
    super(props);
    this.state={
      notified:false,
      open: false
    }
  }
  componentDidMount(){
    if (window.localStorage.getItem('bollywoodmix') === '1') {
      this.setState({notified: true});
    }
  }

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
            Bollywood Mix will be live soon at 10:00 am EST.
          </CardContent>

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