import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';

import RadioWidget from '../Components/RadioWidget';
// import FacebookWidget from '../Components/Utils/FacebookWidget';
import Contact from '../Components/Contact';
import InquiryForm from './Utils/InquiryForm';
import {ShowTimings} from '../Components/ShowTimings';
import {NextShow} from '../Components/NextShow';
import RefreshPage from '../Components/Utils/RefreshPage';


const styles = {
    root: {
      width: '100%',
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
};

const contacts = [
    {
      firstName: 'Yasin',
      lastName: 'Dewji',
      src: require('../Images/Yasin_Dewji.jpeg'),
      phone: '226-666-9558',
      website: 'yasindewji.ca'
    }
  ]

class African extends Component {
    constructor(props){
        super(props);
        this.state={
            date: moment().tz("America/Toronto"),
            showRadio: false
        }
      }
    
    componentDidMount(){
        document.title = "Sauti za Africa";
        this.showWidget();
        RefreshPage(14,0,0);
        RefreshPage(15,0,0);
    }

    showWidget = () => {
        if (this.state.date.day() === 6 || this.state.date.day() === 7) {
          if ((this.state.date.hours() === 14)){
            this.setState({showRadio:true})
            console.log("Show is ON.")
          } else {
            console.log("Wait for the show");
            // console.log(moment().tz("America/Toronto").format());
          }
        } else {
          console.log("Show will be live on the weekend.");
        }
      }

    showTimings = [
        {day:'Saturday',start:14,stop:15},
        {day:'Sunday',start:14,stop:15}
      ]

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton id="home-icon" href="/African" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <HomeIcon />
                    </IconButton>
                    <Typography id="home-text-link" component={Link} to="/African" type="title" color="inherit" className={classes.flex}>
                        Sauti za Africa
                    </Typography>
                    </Toolbar>
                </AppBar>

                {this.state.showRadio === true ? <RadioWidget /> : <NextShow />}

                <ShowTimings timings={this.showTimings}/>

                <Contact contacts={contacts}/>
                
                <InquiryForm 
                    msg="I appreciate your interest in Sauti za Africa Radio."
                    name="Yasin"
                />
                {/* <FacebookWidget 
                    fbID="https://www.facebook.com/Bollywood-Mix-352859711847144/"
                    message="Bollywood Mix. Your favorite radio show in TriCity."
                /> */}

            </div>
        );
    }
}

African.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(African);
