import React from "react"

import StrawBox from "./StrawBox/StrawBox"
import Form from "./Form/Form"

import './Draw.css'

const Draw = (props) => {
  console.log(props.clicked)
  return (
    <div>
      <Form />
      <StrawBox clicked={() => props.clicked()}/>
    </div>
  )
}

export default Draw
