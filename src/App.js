import React, { Component } from 'react';
import classes from './App.css';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
// import Layout from './hoc/Layout/Layout';
import LogIn from './components/LogIn/LogIn';
import Footer from './components/Navigation/Footer/Footer';
import BottomLine from './components/Navigation/BottomLine/BottomLine';
// import Aux from "./hoc/Aux/Aux";


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Toolbar/>
          <div className={classes.Container}>
            <main className={classes.Content}>
              <LogIn/>
            </main>
          </div>
          <Footer/>
          <BottomLine/>
        {/*<Layout>*/}
        {/*    <LogIn/>*/}
        {/*</Layout>*/}
      </div>
    );
  }
}

export default App;
