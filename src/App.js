import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import classes from './App.css';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import LogIn from './components/LogIn/LogIn';
import Registration from "./components/Registration/Registration";
import About from "./components/About/About";
import Footer from './components/Navigation/Footer/Footer';
import BottomLine from './components/Navigation/BottomLine/BottomLine';

class App extends Component {
  state = {
    showSideDrawer: false
  }
  sideDrawerClosingHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    } );
  }

  render() {
    return (
      <div className={classes.App}>
        <Toolbar menuButtonClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
            show={this.state.showSideDrawer}
            closeClicked={this.sideDrawerToggleHandler}/>
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
