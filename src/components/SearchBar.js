import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

function SearchBar({ color, errorMessage, fetchWeather, dataFetched }) {

  const history = useHistory()
  const [term, setTerm] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const onFormSubmit = (event) => {
    event.preventDefault()
    fetchWeather(term)
    setFormSubmitted(true)
  }

  if (dataFetched && Boolean(term) && formSubmitted) {
    history.push(`/city/${term}`)
  }

  const onInputChange = (event) => {
    setTerm(event.target.value)
  }
  const buttonClassName = `${color} btn-flat white-text`

  return (
    <div className="row">
      <form className="col s12" onSubmit={onFormSubmit} style={{ marginTop: "1rem" }}>
        <div className="row" style={{ marginBottom: '0rem' }}>
          <div className="input-field col s6 offset-s2">
            <input type="text" placeholder="e.g. San Francisco, Rome, Tokyo" value={term} onChange={onInputChange} />
            {errorMessage && (
              <label className="red-text" style={{ marginTop: "2.5rem" }}>
                {errorMessage}
              </label>
            )}
          </div>

          <div className="input-field col s3">
            <button type="submit" className={buttonClassName}>
              Submit
              <i className="material-icons right">wb_sunny</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

SearchBar.defaultProps = {
  color: 'teal darken-2'
};

SearchBar.propTypes = {
  color: PropTypes.string,
  errorMessage: PropTypes.string,
  fetchWeather: PropTypes.func.isRequired,
  dataFetched: PropTypes.bool
};

export default SearchBar;
