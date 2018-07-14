import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import { Link } from 'react-router-dom';

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

function AppHeader(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton id="home-icon" href="/" className={classes.menuButton} color="inherit" aria-label="Menu">
            <HomeIcon />
          </IconButton>
          <Typography id="home-text-link" component={Link} to="/" type="title" color="inherit" className={classes.flex}>
            Bollywood Mirchi
          </Typography>
          <Button id="archives-button" raised component={Link} to="/Archives" color="primary">Archives</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);
