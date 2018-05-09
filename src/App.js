import React, { Component } from 'react';
import moment from 'moment-timezone';
import './App.css';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import RadioWidget from './Components/RadioWidget';
import {ShowTimings} from './Components/ShowTimings';
import {NextShow} from './Components/NextShow';
import Contact from './Components/Contact';
import ChatBot from './Components/Utils/ChatWidget/ChatBot';
import FacebookWidget from './Components/Utils/FacebookWidget';
import RefreshPage from './Components/Utils/RefreshPage';
import './fire';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      date: moment().tz("America/Toronto"),
      showRadio: false
    }
  }

  componentDidMount(){
    this.showWidget();
    RefreshPage(10,0,0);
    RefreshPage(11,0,0);
    RefreshPage(17,0,0);
    RefreshPage(18,0,0);
  }

  showWidget = () => {
    if (this.state.date.day() > 0 && this.state.date.day() < 6) {
      if ((this.state.date.hours() === 10)){
        this.setState({showRadio:true})
        console.log("Show is ON.")
      } else if (this.state.date.day() === 5 && this.state.date.hours() === 17) {
        this.setState({showRadio:true})
        console.log("Evening show is ON.")
      } else {
        console.log("Wait for the show");
        // console.log(moment().tz("America/Toronto").format());
      }
    } else {
      console.log("Show will be live next week.");
    }
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        {this.state.showRadio === true ? <RadioWidget /> : <NextShow />}
        <ShowTimings />
        <Contact />
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
