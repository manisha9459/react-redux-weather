import axios from 'axios'
import * as types from './actionTypes'

const API_KEY = '15e39f24e05f6ea0af88f89dc11e5295'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

/*
  We don't expose the start/success/fail action creators (but we do expose the
  start/success/fail action types). We need these action creators to test the
  fetchWeather action creator, which is asynchronous.
*/
function fetchWeatherStart() {
  const action = { type: types.FETCH_WEATHER_START }
  return action
}

function fetchWeatherSuccess(data) {
  const action = { type: types.FETCH_WEATHER_SUCCESS, payload: data }
  return action
}

function fetchWeatherFail(error) {
  const action = { type: types.FETCH_WEATHER_FAIL, payload: error }
  return action
}

export function fetchWeather(city) {
  return function(dispatch) {
    dispatch(fetchWeatherStart())
    return axios.get(`${ROOT_URL}&q=${city}`)
      .then(res => {
        dispatch(fetchWeatherSuccess(res.data))
        return res
      })
      .catch(error => {
        dispatch(fetchWeatherFail(error))
        return error
      })
  }
}
