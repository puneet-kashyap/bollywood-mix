import React from 'react';
import Card from 'material-ui/Card';
import ReactBotUI from './src';
import './ChatBot.css';
import InquiryForm from '../InquiryForm';
import Advertisement from '../Advertisement';

//delete css from react-bot-ui to use it.
const ChatBot = () => {
  return(
    <div className="container">
        <div className="row" style={{'padding':'15px','justifyContent':'center'}}>
          <div className="col-md-6 text-center">
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

            {/* <div className="d-sm-none">
              <Advertisement  id='fixer-upper-radio' src={require('../../../Images/fixer_upper_listing.jpeg')}
                href="https://andynagpal.com/fixer-upper-radio"/>
            </div> */}

            <div className="col-md-4 text-center">
              <InquiryForm />
            </div>
      </div>

        <Advertisement  id='fixer-upper-radio' src={require('../../../Images/Mortgage_ad.jpg')}
          href="http://andynagpal.info"/>

  </div>
  )
}

export default ChatBot;
