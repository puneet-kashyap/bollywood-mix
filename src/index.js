import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Archives from './Components/Archives';

ReactDOM.render((
  <BrowserRouter forceRefresh={true}>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/Archives' component={Archives}/>
    </Switch>
  </BrowserRouter>
),document.getElementById('root'));
window.scrollTo(0,0);
registerServiceWorker();
