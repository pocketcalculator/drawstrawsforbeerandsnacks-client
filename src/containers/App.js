import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import Home from "../components/Home"
import Login from "../components/Login"
import Register from "../components/Register"
import Results from "../components/Results/Results"
import Status from "../components/Status/Status"
import Draw from "../components/Draw/Draw.js"
import Error from "../components/Error"
import Navigation from "../components/Navigation"

class App extends Component {

  state = {
    newGame: false,
    currentGame: {
      id: '',
      week: 52,
      straws: [19, 10, 50, 33, 21, 5, 99, 61, 75],
      players: []
    },
    archivedGames: [
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

  formSubmitHandler = ( event ) => {
    event.preventDefault()
    console.log('formSubmitHandler invoked!')
    console.log(event.target.value)
  }

  strawClickHandler = () => {
    console.log('strawClickHandler invoked!')
    /*
    let players = [...this.state.currentGame.players]
    let currentPlayer = {
      username: username,
      strawdrawn: 1,
      strawlength: this.state.currentGame.straws[0],
      beerRelease: "testBeerRelease1",
      beerBrand: "testBeerBrand1",
      snackRelease: "testsnackRelease1",
      snackBrand: "testsnackBrand1",
      entertainment: "testEntertainment1"
    }
    players.push(currentPlayer)
    this.setState(
      { currentGame:
            { players: players }
      }
    )
    */
  }
/*
  startGame = () => {
    if (this.state.newGame === true) {
      this.createStraws()
      this.setState({newGame: false})
    }
  }
*/
/*
  createStraws = () => {
    console.log('creating 9 random length straws...')
    let randomStraws = [...this.state.currentGame.straws]
    for (let i = 0; i < 9; i++) {
      randomStraws[i] = Math.floor((Math.random() * 1000) + 1)
    }
    return randomStraws
  }
*/

  render() {
    return (
      <div>
        <Navbar />
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route
                path="/draw"
                render={(props) => <Draw submitted={(event) => this.formSubmitHandler(event)} clicked={() => this.strawClickHandler()} />}
              />
              <Route
                path="/results"
                render={(props) => <Results data={this.state.archivedGames} />}
              />
              <Route
                path="/status"
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
