import React from "react"

const Status = ( props ) => {
  console.log(props.newGame)
  let gameStatus
  if (props.newGame === true) {
    gameStatus = 'No one has entered for this week yet.  Draw a straw to get it started!'
  }
  return (
    <div>
      <p>{gameStatus}</p>
    </div>
  )
}

export default Status
