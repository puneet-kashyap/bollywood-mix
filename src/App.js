import React, { Component } from 'react';
import moment from 'moment-timezone';
import './App.css';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import RadioWidget from './Components/RadioWidget';
import { ShowTimings } from './Components/ShowTimings';
import Contact from './Components/Contact';
import ChatBot from './Components/Utils/ChatWidget/ChatBot';
import FacebookWidget from './Components/Utils/FacebookWidget';
import RefreshPage from './Components/Utils/RefreshPage';
// import './fire';
// import { requestPermission } from './fire';

import { retrieveAudios } from './fire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().tz("America/Toronto"),
      showRadio: false
    }
    retrieveAudios();
  }

  onlineShow = new Audio('http://192.240.102.133:7703/stream');
  // offlineShow = new Audio(require('./Audios/BollywoodMirchi1.mp3'));
  offlineShow = new Audio('https://firebasestorage.googleapis.com/v0/b/bollywoodmix-61cb0.appspot.com/o/Audios%2FAudio1.mp3?alt=media&token=700d2013-603f-4bcf-a93f-a784754f8a66');

  componentDidMount() {
    this.showWidget();
    RefreshPage(10, 0, 0);
    RefreshPage(11, 0, 0);
    RefreshPage(15, 0, 0);
    RefreshPage(16, 0, 0);
    RefreshPage(17, 0, 0);
    RefreshPage(18, 0, 0);
  }

  showWidget = () => {
    if (this.state.date.day() > 0 && this.state.date.day() < 6) {
      // Monday to Friday
      if ((this.state.date.hours() === 10)) {
        this.setState({ showRadio: true })
        console.log("Show is ON.")
      } else if (this.state.date.day() > 3 && this.state.date.hours() === 17) {
        // Thursday and Friday Evening show
        this.setState({ showRadio: true })
        console.log("Evening show is ON.")
      } else {
        console.log("Wait for the show");
        // console.log(moment().tz("America/Toronto").format());
      }
    } else if (this.state.date.day() === 0 && this.state.date.hours() === 15) {
      // Sunday Show
      this.setState({ showRadio: true })
      console.log("Show is ON.")
    } else {
      console.log("Show will be live next week.");
    }
  }

  showTimings = [
    { day: 'Monday', start: 10, stop: 11 },
    { day: 'Tuesday', start: 10, stop: 11 },
    { day: 'Wednesday', start: 10, stop: 11 },
    { day: 'Thursday', start: 10, stop: 11 },
    { day: 'Thursday', start: 17, stop: 18 },
    { day: 'Friday', start: 10, stop: 11 },
    { day: 'Friday', start: 17, stop: 18 },
    { day: 'Sunday', start: 15, stop: 16 }
  ]

  contacts = [
    {
      firstName: 'Yasin',
      lastName: 'Dewji',
      src: require('./Images/Yasin_Dewji.jpeg'),
      phone: '226-666-9558',
      website: 'bollywoodmix.ca'
    },
    {
      firstName: 'Andy',
      lastName: 'Nagpal',
      src: require('./Images/Andy_profile_pix.png'),
      phone: '226-666-9558',
      website: 'andynagpal.com'
    }
  ]

  render() {
    return (
      <div className="App">
        <AppHeader />
        {this.state.showRadio === true ?
          <RadioWidget play={this.onlineShow} status="Listen"/> :
          <RadioWidget play={this.offlineShow} status="Listen now"/>
          // <NextShow showCountDown={true} showName="Bollywood Mirchi"/>
        }
        <ShowTimings timings={this.showTimings} show='true' />
        <Contact contacts={this.contacts} show='true' />
        <ChatBot />
        <FacebookWidget
          fbID="https://www.facebook.com/Bollywood-Mix-352859711847144/"
          message="Bollywood Mix. Your favorite radio show in TriCity."
        />
        <AppFooter />
      </div>
    );
  }
}

export default App;
