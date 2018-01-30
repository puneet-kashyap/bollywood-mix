import React from 'react';
import Card from 'material-ui/Card';
import ReactBotUI from 'react-bot-ui';
import './ChatBot.css';


//delete css from react-bot-ui to use it.
const ChatBot = () => {
  return(
    <div className="container col-md-6 text-center">
      <Card raised style={{'padding':'15px', 'marginBottom': '20px'}}>
        <ReactBotUI
          title={'Chat with us.'}
          dialogflow={{accessToken: process.env.REACT_APP_BOT_ID}}
          dialogHeightMax={350}
          isVisible={true}
          isUserHidden={false}
        />
      </Card>
    </div>
  )
}

export default ChatBot;
