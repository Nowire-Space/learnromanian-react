import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import classes from './App.css';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import LogIn from './components/LogIn/LogIn';
import Registration from "./components/Registration/Registration";
import About from "./components/About/About";
import Footer from './components/Navigation/Footer/Footer';
import BottomLine from './components/Navigation/BottomLine/BottomLine';

// import Auxiliary from "./hoc/Auxiliary/Auxiliary";


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Toolbar/>
          <div className={classes.Container}>
            <main className={classes.Content}>
              <Switch>
                <Route
                    path="/login"
                    component={LogIn} />
                <Route
                    path="/registration"
                    component={Registration} />
                <Route
                    path="/about"
                    component={About} />
                <Redirect
                    from="/"
                    to="/login" />
              </Switch>
            </main>
          </div>
          {/*<Footer/>*/}
          {/*<BottomLine/>*/}
      </div>
    );
  }
}

export default App;
