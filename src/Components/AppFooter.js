import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import Typography from 'material-ui/Typography';

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
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
        <Typography align='center' type="caption"  color="inherit" style={{'background':'rgb(63, 81, 181)','padding':'5px'}}>
            Copyright &copy; Bollywood Mix {new Date().getFullYear()}<br/>
            Built with 💖 by <u><a href={`mailto:kashyap@bollywoodmix.info`}>Bollywood Mix</a></u>  Fans Club.
        </Typography>
      </div>
    );
  }
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppFooter);
