import React from "react"

import './Form.css'

const Form = ( props ) => {
  return (
    <form onSubmit={props.submitted}>
      <label htmlFor="beerLabel">Beer Label:</label>
      <input
        onChange={props.changed}
        id="beerLabel"
        name="beerLabel"
        type="text"
        value={props.beerLabel}
      />

      <label htmlFor="beerRelease">Beer Release:</label>
      <input
        onChange={props.changed}
        id="beerRelease"
        name="beerRelease"
        type="text"
        value={props.beerRelease}
      />

      <button>Submit This!</button>

  </form>
  )
}

export default Form
