import React from 'react';
import Card from 'material-ui/Card';
import ReactBotUI from './src';
import './ChatBot.css';
import InquiryForm from '../InquiryForm';
import Advertisement from '../Advertisement';

//delete css from react-bot-ui to use it.
const ChatBot = () => {
  return (
    <div className="container-fluid"
      style={{ background: "url(" + require('../../../Images/purple-music.jpg') + ")", backgroundSize: 'cover' }}>
      <div className="row" style={{ 'justifyContent': 'center', 'alignItems': 'center' }}>

        <div className="col-md-3 d-none d-md-block">
          <Advertisement id="insurance-ad" src={require('../../../Images/Insurance_ad.jpg')}
            href="https://andynagpal.com/insurance" />
        </div>

        <div className="col-md-6 text-center">
          <Card raised style={{ 'padding': '15px', 'marginBottom': '20px' }}>
            <ReactBotUI
              id="chat-bot"
              title={'Chat with us.'}
              dialogflow={{ accessToken: process.env.REACT_APP_BOT_ID }}
              dialogHeightMax={350}
              isVisible={true}
              isUserHidden={false}
            />
          </Card>
        </div>

        <div className="col-md-3 d-md-block">
          <Advertisement id='mortgage-ad' src={require('../../../Images/Mortgage_ad.jpg')}
            href="http://jaspreetdhugga.com/" />
        </div>

        <div className="col-md-4 text-center d-sm-none">
          <InquiryForm
            msg="I appreciate your interest in Bollywood Mix Radio."
            name="Andy"
          />
        </div>
      </div>

      <div className="d-md-none" style={{backgroundColor: 'white'}}>
        <Advertisement id="free-home-evaluation-ad"
          src={require('../../../Images/Home_Evaluation_ad.png')}
          href="https://andynagpal.com/free-home-evaluation" />
      </div>

    </div>
  )
}

export default ChatBot;
