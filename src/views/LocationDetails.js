import React, {} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import WeatherList from '../components/WeatherList'

const Button = styled.button`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
`

function Location({ data, history }) {
  return (
    <div>
      <Button onClick={() => history.push('/')}>Back to search</Button>
      <WeatherList data={data} />
    </div>
  )
}

function mapStateToProps(state) {
  const { data, errorMessage, isLoading } = state.weather
  const props = {
    data,
    errorMessage,
    isLoading
  }
  return props
}

function mapDispatchToProps () {
  return {}
}

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default enhance(Location)
