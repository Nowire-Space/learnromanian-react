import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import classes from './App.css';

import AccountService from './services/AccountService';
import AuthContext from './context/auth-context';
import EventBus from './common/EventBus';
import DefaultRoute from "./components/Route/DefaultRoute/DefaultRoute";
import PrivateRoute from "./components/Route/PrivateRoute/PrivateRoute";
import { Role } from './common/Role';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import LogIn from './components/LogIn/LogIn';
import Registration from "./components/Registration/Registration";
import Validation from "./components/Validation/Validation";
import About from './components/About/About';
import Profile from './components/Profile/Profile';
import AdminBoard from "./components/Admin/Admin";
import ModeratorBoard from "./components/Moderator/Moderator";
import ProfessorBoard from "./components/Professor/Professor";
import StudentBoard from "./components/Student/Student";
import Forbidden from "./components/Forbidden/Forbidden";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  state = {
    showSideDrawer: false,
    showModeratorBoard: false,
    showAdminBoard: false,
    showProfessorBoard: false,
    currentUser: undefined,
    loggedIn: false
  }

  componentDidMount() {
    this.updateCurrentUser();
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  updateCurrentUser = () => {
    const user = AccountService.getCurrentUser();
console.log("user is here", user)
    if (user) {
      this.setState({
        currentUser: user,
        loggedIn: true,
        showModeratorBoard: user.role === ("ROLE_MODERATOR"),
        showAdminBoard: user.role === ("ROLE_ADMIN"),
        showProfessorBoard: user.role === ("ROLE_MODERATOR")
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  logOut = () => {
    AccountService.logOut();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      showProfessorBoard: false,
      currentUser: undefined,
      loggedIn: false
    });
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
        <AuthContext.Provider value={{
          currentUser: this.state.currentUser,
          logOut: this.logOut}}>
          <Toolbar menuButtonClicked={this.sideDrawerToggleHandler}
                   currentUser={this.state.currentUser}
                   logOut={this.logOut}/>
        </AuthContext.Provider>
        <SideDrawer
            show={this.state.showSideDrawer}
            closeClicked={this.sideDrawerToggleHandler}/>
          <div className={classes.Container}>
            <main className={classes.Content}>
              <AuthContext.Provider value={{
                updateUser: this.updateCurrentUser}}>
                <Switch>
                  <DefaultRoute
                      exact
                      path={["/","/home"]}>
                  </DefaultRoute>
                  <Route
                      exact
                      path="/login"
                      component={LogIn} />
                  <Route
                      path="/registration"
                      component={Registration} />
                  <Route
                      path="/about"
                      component={About} />
                  <PrivateRoute
                      path="/profile"
                      component={Profile} />
                  <PrivateRoute
                      role={Role.ADMIN}
                      path="/admin"
                      component={AdminBoard} />
                  <PrivateRoute
                      role={Role.MODERATOR}
                      path="/moderator"
                      component={ModeratorBoard} />
                  <PrivateRoute
                      role={Role.PROFESSOR}
                      path="/professor"
                      component={ProfessorBoard} />
                  <PrivateRoute
                      role={Role.STUDENT}
                      path="/student"
                      component={StudentBoard} />
                  {/*Route for forbidden paths*/}
                  <Route
                      path="/forbidden"
                      component={Forbidden} />
                  {/*Route for Not Found paths*/}
                  <Route
                      path="/404"
                      component={NotFound} />
                  <Route
                      path="/validate/:token"
                      component={Validation} />
                  <Route path="/*">
                    <Redirect to="/404"/>
                  </Route>
                </Switch>
              </AuthContext.Provider>
            </main>
          </div>
          {/*<Footer/>*/}
          {/*<BottomLine/>*/}
      </div>
    );
  }
}

export default App;