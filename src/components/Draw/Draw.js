import React from "react"

import StrawBox from "./StrawBox/StrawBox"
import Form from "./Form/Form"

import './Draw.css'

const Draw = (props) => {
  return (
    <div>
      <Form
        submitted={(event) => props.submitted(event)}
        changed={(event) => props.changed(event)}/>
      <StrawBox strawClicked={() => props.strawClicked()}/>
    </div>
  )
}

export default Draw
