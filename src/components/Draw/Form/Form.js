import React from "react"

import './Form.css'

const Form = ( props ) => {
  return (
    <form onSubmit={props.submitted}>
      <label htmlFor="userName">username:</label>
      <input
        onChange={props.changed}
        id="userName"
        name="userName"
        type="text"
      />
      <label htmlFor="beerBrand">Beer Brand:</label>
      <input
        onChange={props.changed}
        id="beerBrand"
        name="beerBrand"
        type="text"
      />
      <label htmlFor="beerRelease">Beer Release:</label>
      <input
        onChange={props.changed}
        id="beerRelease"
        name="beerRelease"
        type="text"
      />
      <label htmlFor="entertainment">Entertainment:</label>
      <input
        onChange={props.changed}
        id="entertainment"
        name="entertainment"
        type="text"
      />
      <button>Submit This!</button>
  </form>
  )
}

export default Form
