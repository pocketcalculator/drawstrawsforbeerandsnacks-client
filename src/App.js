import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import Home from "./components/Home"
import Draw from "./components/Draw"
import Login from "./components/Login"
import Register from "./components/Register"
import Results from "./components/Results/Results"
import Status from "./components/Status/Status"
import Error from "./components/Error"
import Navigation from "./components/Navigation"

class App extends Component {

  state = {
    straws: '',
    players: {},
    newGame: true,
    archivedData: [
      { id: 'a123',
        week: 49,
        winner: 'rick',
        players: [
          {
            username: 'rick',
            strawdrawn: 1,
            strawlength: 20.5,
            beerRelease: "420 Pale Ale",
            beerBrand: "Sweetwater Brewing Company",
            snackRelease: "Baked Potato Chips",
            snackBrand: "Lay's",
            entertainment: "MXC"
          },
          {
            username: 'paul',
            strawdrawn: 5,
            strawlength: 11.0,
            beerRelease: "Hawskbill",
            beerBrand: "Burial Brewing Company",
            snackRelease: "Pretzel Crisps",
            snackBrand: "Snack Factory",
            entertainment: "Kids In The Hall"
          }
        ]
      },
      { id: 'a124',
        week: 50,
        winner: 'dave',
        players: [
          {
            username: 'dave',
            strawdrawn: 4,
            strawlength: 2.5,
            beerRelease: "Ultra",
            beerBrand: "Michelob",
            snackRelease: "French Fries",
            snackBrand: "Five Guys",
            entertainment: "Animal House Favorite Clips"
          },
          {
            username: 'jacque',
            strawdrawn: 8,
            strawlength: 1.2,
            beerRelease: "Rose",
            beerBrand: "Seagram's Beer Cooler",
            snackRelease: "Cheddar Cheese",
            snackBrand: "Sunchips",
            entertainment: "Top Fails of 2018"
          }
        ]
      }
    ]
  }

  render() {
    console.log(this.state.straws)
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
              <Route
                path="/results"
//              component={Results}
                render={(props) => <Results data={this.state.archivedData} />}
              />
              <Route
                path="/status"
//              component={Status}
                render={(props) => <Status newGame={this.state.newGame} />}
              />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
