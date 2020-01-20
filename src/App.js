import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import { useAuth } from './hooks/useAuthBl';
import './App.css';

function App() {

  const { jwt } = useAuth();

  return (
    <Switch>
      <Route path='/sign-up' component={SignUp}/>
      <Route path='/sign-in' component={SignIn}/>
      <Route path={[
        '/dashboard',
        '/users',
        '/books',
      ]} component={Dashboard}/>
      <Redirect path="*" to={jwt ? '/dashboard' : 'sign-in'}/>
    </Switch>
  );
}

export default App;
