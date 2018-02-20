import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Typography from 'material-ui/Typography';
import {EntypoTwitterWithCircle, EntypoLinkedinWithCircle, EntypoFacebookWithCircle} from 'react-entypo';

const styles = {
  root: {
    //width: "100%",
  },
};

class AppFooter extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    if(value === 0){
      window.open("https://twitter.com/Andynagpal","_blank");
    } else if (value === 1) {
      window.open("https://www.facebook.com/bollywoodmixkw/","_blank");
    } else {
      window.open("https://linkedin.com","_blank");
    }

  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction id="twitter-icon" label="Twitter" icon={<EntypoTwitterWithCircle />} />
          <BottomNavigationAction id="facebook-icon" label="Facebook" icon={<EntypoFacebookWithCircle />} />
          <BottomNavigationAction id="linkedin-icon" label="LinkedIn" icon={<EntypoLinkedinWithCircle />} />
        </BottomNavigation>
        <Typography align='center' type="caption"  color="inherit" style={{'padding':'5px'}}>
            Copyright &copy; Bollywood Mix {new Date().getFullYear()}<br/>
            Built with 💖 by <u>
              <a id="footer-email" href={`mailto:kashyap@bollywoodmix.info`}>
                Bollywood Mix
              </a></u>  Fans Club.
        </Typography>
      </div>
    );
  }
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppFooter);
