import React, { Component } from 'react';
import moment from 'moment-timezone';
import './App.css';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import RadioWidget from './Components/RadioWidget';
import Contact from './Components/Contact';
import ChatBot from './Components/Utils/ChatWidget/ChatBot';
import FacebookWidget from './Components/Utils/FacebookWidget';
import RefreshPage from './Components/Utils/RefreshPage';
import Advertisement from './Components/Utils/Advertisement';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().tz("America/Toronto"),
      showRadio: false
    }
  }

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
      console.log("Sunday show is ON.")
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
        <RadioWidget status="Listen now" />
        <Advertisement id="free-home-evaluation-ad"
          src={require('./Images/Home_Evaluation_ad.png')}
          href="https://andynagpal.com/free-home-evaluation"
        />
        <Contact contacts={this.contacts} show='true' />
        <Advertisement class="d-sm-none" id="first-time-buyers-ad"
          src={require('./Images/Andy_ad1.jpeg')}
          href="https://andynagpal.com/first-time-buyers"
        />
        <ChatBot />
        <FacebookWidget
          fbID="https://www.facebook.com/Bollywood-Mix-352859711847144/"
          message="Bollywood Mirchi - Mirchi Sunnewale always happy."
        />
        <AppFooter />
      </div>
    );
  }
}

export default App;
