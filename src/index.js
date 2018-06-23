import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Archives from './Components/Archives';
import African from './Components/African';
import Upload from './Components/Upload/Upload';

ReactDOM.render((
  <BrowserRouter forceRefresh={true}>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/Archives' component={Archives}/>
      <Route exact path='/African' component={African}/>
      <Route exact path='/Upload' component={Upload}/>
    </Switch>
  </BrowserRouter>
),document.getElementById('root'));
window.scrollTo(0,0);
registerServiceWorker();
