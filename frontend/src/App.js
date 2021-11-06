import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Men from './components/Men'
import Women from './components/Women'
import Home from './components/Home';
import Kid from './components/Kid';
import HomeLiving from './components/HomeLiving'
import Errorpage from './components/ErrorPage';
import Register from './components/Register';
import Login from './components/Login';
// import Logout from './components/Logout';
// import Contact from './components/Contact';


const Routing =()=>{
  return (
    <>
   
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/men">
          <Men/>
        </Route>

        <Route path="/women">
          <Women/>
        </Route>

        <Route path="/kid">
          <Kid/>
        </Route>

        <Route path="/homeliving">
          <HomeLiving/>
        </Route>

        <Route path="/register">
          <Register/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route>
          <Errorpage />
        </Route>
        </Switch>
  
  </>
  )
}

const App=()=>{
    return (
      <>
        <Navbar />
        <Routing />
      </>
    )
}

export default App;