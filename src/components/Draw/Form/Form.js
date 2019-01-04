import React from "react"

import './Form.css'

const Form = ( props ) => {
  return (
    <form onSubmit={props.submitted}>
      <label htmlFor="beerLabel">Beer Label:</label>
      <input id="beerLabel" name="beerLabel" type="text" />
      <label htmlFor="beerRelease">Beer Release:</label>
      <input id="beerRelease" name="beerRelease" type="text" />
      <label htmlFor="snackLabel">Snack Label:</label>
      <input id="snackLabel" name="snackLabel" type="text" />
      <label htmlFor="snackRelease">Snack Release:</label>
      <input id="snackRelease" name="snackRelease" type="text" />
      <label htmlFor="entertainment">Entertainment:</label>
      <input id="entertainment" name="entertainment" type="text" />
      <button>Submit This!</button>
    </form>
  )
}

export default Form
