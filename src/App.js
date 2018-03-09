import React, { Component } from 'react';
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
      date: new Date(),
      showRadio: false
    }
  }

  componentWillMount(){
    var localTime = new Date();
    var estTime = new Date(new Date().setHours(localTime.getHours() + localTime.getTimezoneOffset()/60 - 5));
    this.setState({date: new Date(estTime)})
  }

  componentDidMount(){
    this.showWidget();
    RefreshPage(10,0,0);
    RefreshPage(11,0,0);
    RefreshPage(17,0,0);
    RefreshPage(18,0,0);
  }

  showWidget = () => {
    if (this.state.date.getDay() > 0 && this.state.date.getDay() < 6) {
      if ((this.state.date.getHours() === 10)
      // || ((this.state.date.getHours() === 11) /&& (this.state.date.getMinutes() < 31))
      ){
        this.setState({showRadio:true})
          console.log("Show is ON.")
      } else if (this.state.date.getDay() === 5 && this.state.date.getHours() === 17) {
        this.setState({showRadio:true})
          console.log("Evening show is ON.")
      }
    } else {
      console.log("Wait for show")
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
        <FacebookWidget />
        <AppFooter />
      </div>
    );
  }
}

export default App;
