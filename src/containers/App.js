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
    submissionData: {
      username: '',
      strawDrawn: '',
      beerLabel: '',
      beerRelease: ''
    },
    currentGame: {
      id: '',
      week: 52,
      straws: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
    this.setState({submissionData: {[event.target.name]: event.target.value}})
  }

  formChangeHandler = ( event, id ) => {
    console.log('formSubmitHandler invoked!')
    const fieldIndex = this.state.submissionData.findIndex(field => {
      return field.id === field
    })

    const field = {
      ...this.state.submissionData[fieldIndex]
    }

    field.name = event.target.value

    const submissionData = {...this.state.submissionData}
    submissionData[fieldIndex] = field
    this.setState({submissionData: submissionData})
  }

  strawClickHandler = () => {
    console.log('strawClickHandler invoked!')
    let currentPlayer = {
      username: 'paul',
      strawDrawn: 1
    }
    this.setState(
      { submissionData: currentPlayer }
    )
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
    let field
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
                  changed={this.formChangeHandler.bind(this, field)}
                  strawClicked={() => this.strawClickHandler()}
                  beerLabel={this.state.submissionData.beerLabel}
                  beerRelease={this.state.submissionData.beerRelease}
                  />}
              />
              <Route
                path="/results"
                render={(props) => <Results data={this.state.archivedGames} />}
              />
              <Route
                path="/status"
                render={(props) => <Status newGame={this.state.newGame} currentGame={this.state.currentGame} />}
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
