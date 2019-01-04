import React from "react"

import './StrawBox.css'

const StrawBox = ( props ) => {
  return (
    <div className='drawStrawBox' onClick={props.clicked}>
      <p>Straw 1</p>
    </div>
  )
}

export default StrawBox
