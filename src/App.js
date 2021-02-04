import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import C1 from './components/C1';
import C2 from './components/C2';
import C3 from './components/ReactRouterParamsUsewithFxn';
import C4 from './components/ReactRouterParamsUseWithClassComp';
class App extends React.Component {
  
  render() {
    return (
      <Router>

        <Route exact path='/' component={C1} />
        <Switch>
          <Route exact path='/c2' component={C2} />
          <Route exact path='/c3/:name' component={C3} />
          <Route exact path='/c4/:name' component={C4} />
          // if none of route matches then redirect to '/' path
          <Route render={() => <Redirect to="/" />} /> 
        </Switch>
      </Router>
    );
  }
  
  }


export default App;
