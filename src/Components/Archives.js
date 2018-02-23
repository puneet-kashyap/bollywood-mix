import React from 'react';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Youtube from './Utils/youtube';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const youtubeVideos = [
  "https://www.youtube.com/embed/MREsQgfDpdU",
  "https://www.youtube.com/embed/oRm6pJu0f7M",
  "https://www.youtube.com/embed/J5VPQ2dWxIU",
  "https://www.youtube.com/embed/BL6CTT4h9zw"

]

const Archives  = () => {
  return (
    <div>
      <AppHeader />
      <div>
        <Typography type="display1" component="h1" color="primary" style={{'padding':'25px','text-align':'center'}}>
          Bollywood Mix Archives
        </Typography>
      <div className="row" id="youtube">
          {youtubeVideos.map(item =>
            <div key={item}  id={item} className="col-md-4 text-center" style={{'padding':'15px'}}>
              <Card raised>
                <Youtube src={item}/>
              </Card>
            </div>
          )}
      </div>
      </div>

      <AppFooter />
    </div>
  );
}

export default Archives;
