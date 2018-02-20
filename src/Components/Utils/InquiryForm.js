import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
//import { writeInquiryData } from '../../fire';
import Tooltip from 'material-ui/Tooltip';

class InquiryForm extends Component {
  constructor(props){
    super(props);
    this.state={
      form:'blank',
      date:'2018-12-28',
      time: '10:30'
    }
  }

  componentWillMount(){
    const today = new Date();
    const date = today.getFullYear()+'-'+('0'+today.getMonth()).slice(-2)+'-'+
    ('0'+today.getDate()).slice(-2)
    this.setState({date:date})
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  submit = () => {
    this.setState({form:'filled'})
    console.log(this.state);
    // writeInquiryData(this.state);
  }
  render () {
    if (this.state.form === 'blank') {
      return (
        <div>
          <Paper style={{'padding':'15px','margin':'10px','background':'ghostwhite'}} className="text-center">
            <Typography type="display1" color="primary">
              Request a Song
            </Typography>
            <Typography>
              Dedicate a song to your loved one.
            </Typography>
            <form onSubmit={this.submit}>
                <Tooltip title="Your name please">
                  <TextField required
                    name="Name"
                    label="Your Name"
                    placeholder="First and Last Name"
                    margin="dense"
                    fullWidth={true}
                    onChange={this.handleChange}
                  />
                </Tooltip>
                <Tooltip title="Name of the person to dedicte a song ?">
                  <TextField required
                    name="Phone"
                    label="Name of the loved one."
                    placeholder="Name of the person to dedicte a song."
                    margin="dense"
                    fullWidth={true}
                    onChange={this.handleChange}
                  />
                </Tooltip>
                <Tooltip title="On what date we should play the song ?">
                  <TextField required
                    name="date"
                    label="Date"
                    type="date"
                    defaultValue={this.state.date}
                    fullWidth={true}
                    onChange={this.handleChange}
                    style={{'margin':'8px 0px 4px 0px'}}
                  />
                </Tooltip>
                <Tooltip title="At what time should we play the song ?">
                  <TextField required
                    name="time"
                    label="Time"
                    type="time"
                    defaultValue={this.state.time}
                    fullWidth={true}
                    onChange={this.handleChange}
                    style={{'margin':'8px 0px 4px 0px'}}
                  />
                </Tooltip>
                <Tooltip title="Name of the song you want to dedicte.">
                  <TextField required
                    name="Song"
                    label="Song"
                    placeholder="Name of the song you want to dedicte."
                    onChange={this.handleChange}
                    fullWidth={true}
                    style={{'marginBottom':'25px'}}
                  />
                </Tooltip>
                <Button raised
                  id="inquiry-form-submit"
                  type="submit"
                  color="primary">
                  Submit
                </Button>
          </form>
        </Paper>
      </div>
      );
    } else {
      return (
        <InquiryThanks />
      )
    }
  }
}

const InquiryThanks = () => {
  return (
    <div className="row" style={{'padding':'25px'}}>
      <Paper style={{'padding':'10px','background':'ghostwhite'}}>
        <Typography type="display1" color="primary" style={{'paddingBottom':'10px'}} className="text-center">
          Thank You.
        </Typography>
      <p className="text-left">
        We would love to play your song.
      </p>
      <p className="text-left">
        I appreciate your interest in Bollywood Mix Radio.
      </p>
      <Typography type="display1" align='right' component="h1" color="primary"
        style={{'padding':'10px', 'fontFamily':'Ruthie'}}>
        Andy.
      </Typography>
    </Paper>
  </div>
  );
}

export default InquiryForm;
