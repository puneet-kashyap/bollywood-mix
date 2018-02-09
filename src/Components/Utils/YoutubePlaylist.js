import React,{Component} from 'react';
import YouTube from 'simple-youtube-api';
import YouTubePlayer from './youtube';

const youtube = new YouTube(process.env.REACT_APP_YOUTUBE_ID);
process.env.REACT_APP_BOT_ID
class YouTubePlayList extends Component{
  constructor(props){
    super(props);
    this.state={
      loading: true,
      youtubelist: [],
      backupList: [
        "https://www.youtube.com/embed/BL6CTT4h9zw",
        "https://www.youtube.com/embed/J5VPQ2dWxIU"
      ]
    }
  }

  componentWillMount() {
    youtube.getPlaylist('https://www.youtube.com/playlist?list='+this.props.playlistId)
        .then(playlist => {
            // console.log(`The playlist's title is ${playlist.title}`);
            playlist.getVideos()
                .then(videos => {
                  var temp = [];
                  for (let x of videos) {
                    temp.push("https://www.youtube.com/embed/"+JSON.stringify(x.id));
                  }
                    this.setState({youtubelist: temp});
                    // console.log(this.state.youtubelist);
                    this.setState({loading: false});
                })
                .catch(this.setState({youtubelist: this.state.backupList}));
        })
    .catch(this.setState({youtubelist: this.state.backupList}));

  }


  render() {
    return(
      <div>
        { this.state.youtubelist.map(vid =>
            <YouTubePlayer key={vid} src={vid}/>
        )}
      </div>
    )
  }
}

export default YouTubePlayList;
