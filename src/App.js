import React, { Component } from 'react';
import './App.css';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import RadioWidget from './Components/RadioWidget';
import {ShowTimings, NextShow} from './Components/ShowTimings';
import Contact from './Components/Contact';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      date: new Date(),
      showRadio: true
    }
  }
  componentDidMount(){
    this.showWidget();
  }

  showWidget = () => {
    if (this.state.date.getDay() > 0 && this.state.date.getDay() < 6) {
      if (this.state.date.getHours() === 10){
        this.setState({showRadio:true})
          console.log("Show is ON.")
      } else if (this.state.date.getHours() === 11 && this.state.date.getMinutes() < 31) {
        console.log("Show is ON.")
        this.setState({showRadio:true})
      } else {
        console.log("Wait for show")
        this.setState({showRadio:false})
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
        <AppFooter />
      </div>
    );
  }
}

export default App;
