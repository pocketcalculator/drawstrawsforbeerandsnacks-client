import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import Home from "./components/Home"
import Draw from "./components/Draw"
import Login from "./components/Login"
import Register from "./components/Register"
import Results from "./components/Results"
import Status from "./components/Status"
import Error from "./components/Error"
import Navigation from "./components/Navigation"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/draw" component={Draw} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/results" component={Results} />
              <Route path="/status" component={Status} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
