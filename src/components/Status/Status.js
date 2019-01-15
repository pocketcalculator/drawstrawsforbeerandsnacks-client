import React from "react"

const Status = ( props ) => {
  let gameStatus
  if (props.newGame === true) {
    gameStatus = 'No one has entered for this week yet.  Draw a straw to get it started!'
  } else {
    gameStatus = props.players.map( (currentWeekResults, index) => {
        return (
          <div className="Results" key={index}>
            <p>{currentWeekResults.userName}</p>
            <p>{currentWeekResults.strawDrawn}</p>
          </div>
        )
    })
  }
  return (
    <div>
      {gameStatus}
    </div>
  )
}

export default Status
