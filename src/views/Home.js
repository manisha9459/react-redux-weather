import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { PropagateLoader } from 'react-spinners'
import { fetchWeather } from '../actions/actionCreators'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import WeatherList from '../components/WeatherList'
import '../globalStyle'

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
`

class Home extends Component {
  render() {
    const primaryColor = 'blue darken-2'
    const { data, errorMessage, fetchWeather, dataFetched } = this.props

    return (
      <div className="container">
        <Container>
          <Header text={"Weather App"} color={primaryColor} />
          <Content>
            <SearchBar color={primaryColor} fetchWeather={fetchWeather} errorMessage={errorMessage} dataFetched={dataFetched}/>
            { this.props.isLoading && (
                <div className="row">
                <div className="col s12 offset-s6">
                  <PropagateLoader color={"#0336ff"} loading={this.props.isLoading} />
                </div>
              </div>
              )
            }
            <WeatherList data={data} />
          </Content>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { data, errorMessage, isLoading, dataFetched } = state.weather
  const props = {
    data,
    errorMessage,
    isLoading,
    dataFetched
  }
  return props
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
)
const HomeWithRedux = enhance(Home)

export { Home, HomeWithRedux }
