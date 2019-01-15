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
    newGame: true,
    userName: '',
    beerRelease: '',
    beerBrand: '',
    snackRelease: '',
    snackBrand: '',
    entertainment: '',
    players: [],
    archivedGames: [
      { id: 'a123',
        week: 49,
        winner: 'rick',
        players: [
          {
            userName: 'rick',
            strawDrawn: 1,
            strawLength: 20.5,
            beerRelease: "420 Pale Ale",
            beerBrand: "Sweetwater Brewing Company",
            snackRelease: "Baked Potato Chips",
            snackBrand: "Lay's",
            entertainment: "MXC"
          },
          {
            userName: 'paul',
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
            userName: 'dave',
            strawdrawn: 4,
            strawlength: 2.5,
            beerRelease: "Ultra",
            beerBrand: "Michelob",
            snackRelease: "French Fries",
            snackBrand: "Five Guys",
            entertainment: "Animal House Favorite Clips"
          },
          {
            userName: 'jacque',
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
    const userSubmission= {
      userName: this.state.userName,
      strawdrawn: this.state.strawDrawn,
      strawlength: this.state.strawLength,
      beerRelease: this.state.beerRelease,
      beerBrand: this.state.beerBrand,
      snackRelease: this.state.snackRelease,
      snackBrand: this.state.snackBrand,
      entertainment: this.state.entertainment
    }
    let playerList = this.state.players
    playerList.push(userSubmission)
    this.setState({players: playerList})
    this.setState({newGame: false})
  }

  formChangeHandler = ( event ) => {
    console.log('formSubmitHandler invoked!')
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  strawClickHandler = () => {
    console.log('strawClickHandler invoked!')
    this.setState(
      {
        strawDrawn: 1,
        strawLength: 23
      }
    )
  }

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
                render={(props) => <Draw
                  submitted={(event) => this.formSubmitHandler(event)}
                  changed={this.formChangeHandler.bind(this)}
                  strawClicked={() => this.strawClickHandler()}
                  />}
              />
              <Route
                path="/results"
                render={(props) => <Results archivedGames={this.state.archivedGames} />}
              />
              <Route
                path="/status"
                render={(props) => <Status newGame={this.state.newGame} players={this.state.players} />}
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
