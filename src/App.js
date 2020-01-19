import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import './App.css';
import { useAuth } from './hooks/useAuthBl';

function App() {

  const { jwt } = useAuth();

  return (

      <Switch>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/sign-in' component={SignIn}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/users' component={Dashboard}/>
        <Redirect path="*" to={jwt ? '/dashboard' : 'sign-in'}/>
      </Switch>
  );
}

export default App;
