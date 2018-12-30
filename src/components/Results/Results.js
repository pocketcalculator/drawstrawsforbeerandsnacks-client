import React from "react"

import './Results.css'

const Results = ( props ) => {

  const displayResults = props.data.map( (previousWeeksResults, index) => {
    let players = previousWeeksResults.players.map( player => {
      return (
        player.username
      )
    })
    let winner = previousWeeksResults.players.find( player => {
      return previousWeeksResults.winner === player.username
    })
    console.log(winner)
    return (
      <div className="Results" key={index}>
        <p>For week {previousWeeksResults.week}, players were: {players.join(", ")}.  The winner was {previousWeeksResults.winner}.</p>
        <p>The group enjoyed {winner.beerBrand} {winner.beerRelease}, {winner.snackBrand} {winner.snackRelease} and watched {winner.entertainment}.</p>
      </div>
    )
  })

  return (
      <div>
        {displayResults}
      </div>
  )
}

export default Results
