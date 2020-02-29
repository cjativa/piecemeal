import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './scss/styles.scss';

import { Landing } from './components/landing';
import { User } from './components/user/user';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/user" component={User} />
          </Switch>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
