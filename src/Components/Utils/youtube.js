import React from 'react';
import Paper from 'material-ui/Paper';
import CardMedia from 'material-ui/Card';

const YoutubePlayer = (props) => {
  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <Paper elevation={24}>
          <CardMedia
            id="youtube"
            component='iframe'
            src={props.src}
            title="Andy Show"
            className="embed-responsive-item"
            style={{'padding':'10px'}}
          />
        </Paper>
      </div>

  </div>
  )
}

export default YoutubePlayer;
