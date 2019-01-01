import React from "react"

import './Draw.css'

const Draw = ( props ) => {
  const drawStrawBox = (
    <div className='drawStrawBox' onClick={props.clicked}>
      <p>Straw 1</p>
    </div>
  )
  const strawForm = (
    <form>
    <div>Beer Label:<input></input></div>
    <div>Beer release:<input></input></div>
    <div>Snack Label:<input></input></div>
    <div>Snack release:<input></input></div>
    <div>Entertainment:<input></input></div>
    </form>
  )

  return (
    <div>
      <p>Draw a straw.  Then choose your beer and snacks!</p>
      {drawStrawBox}
      {strawForm}
    </div>
  )
}

export default Draw
