import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import { Link } from 'react-router-dom';
import RadioWidget from '../Components/RadioWidget';
import FacebookWidget from '../Components/Utils/FacebookWidget';
import Contact from '../Components/Contact';
import InquiryForm from './Utils/InquiryForm';


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

class African extends Component {
    constructor(props){
        super(props);
        this.state={
          showRadio: false
        }
      }
    
    componentDidMount(){
        document.title = "African Music"
    }

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
                        African Music
                    </Typography>
                    </Toolbar>
                </AppBar>

                <RadioWidget />
                <Contact />
                <div className="col-md-4 text-center d-sm-none">
                    <InquiryForm 
                        msg="I appreciate your interest in African Radio."
                        name="Yasin"
                    />
                </div>
                <FacebookWidget 
                    fbID="https://www.facebook.com/Bollywood-Mix-352859711847144/"
                    message="Bollywood Mix. Your favorite radio show in TriCity."
                />

            </div>
        );
    }
}

African.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(African);
