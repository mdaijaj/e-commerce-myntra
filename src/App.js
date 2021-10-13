import React, { createContext, useReducer } from 'react';
import Navbar from './components/Navbar';
import Men from './components/Men'
import Women from './components/Women'
import Home from './components/Home';
import Kid from './components/Kid';
import HomeLiving from './components/HomeLiving'
// import Contact from './components/Contact';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Logout from './components/Logout';
import Errorpage from './components/ErrorPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Routing =()=>{
  return (
    <>
      <BrowserRouter>
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

        <Route>
          <Errorpage />
        </Route>
        </Switch>
    </BrowserRouter>
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