import React from 'react';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import YouTubePlayList from './Utils/YoutubePlaylist';

const Archives  = () => {
  return (
    <div>
      <AppHeader />
      <div>
        <Typography type="display1" component="h1" color="primary" style={{'padding':'25px','textAlign':'center'}}>
          Bollywood Mix Archives
        </Typography>
      <div className="row" style={{'justifyContent':'center'}}>
            <div className="col-md-4 text-center" style={{'padding':'15px'}}>
              <Card raised>
                <YouTubePlayList playlistId='PLTrMbrQzo-fHUn5C0v6oV_cOCuIi-XZte'/>
              </Card>
            </div>
      </div>
      </div>

      <AppFooter />
    </div>
  );
}

export default Archives;
