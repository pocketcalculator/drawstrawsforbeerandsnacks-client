import React from "react"

import './Results.css'

const Results = ( props ) => {
  const displayResults = props.data.map( (previousWeeksResults, index) => {
    let players = previousWeeksResults.players.map( player => {
      return (
        <p>{player.username}</p>
      )
    })
    return (
      <div key={index}>For week {previousWeeksResults.week}, {players} played.</div>
    )
  })
  return (
      <div className="Results">
        {displayResults}
      </div>
  )
}

export default Results
