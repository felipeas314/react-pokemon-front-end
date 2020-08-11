import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/header';
import { Router, Route, Switch } from 'react-router-dom';

import history from './service/history';

import Main from './pages/main';
import About from './pages/about';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/about'  component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
