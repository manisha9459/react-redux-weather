import React from "react";
import PropTypes from "prop-types";
import Chart from "../components/Chart";

function Weather(props) {
  const { city, list } = props;
  const temperatureData = list.map((d, i) => {
    return { day: i, value: d.main.temp };
  });
  const pressureData = list.map((d, i) => {
    return { day: i, value: d.main.pressure };
  });
  const humidityData = list.map((d, i) => {
    return { day: i, value: d.main.humidity };
  });
  return (
    <div className={"weather row"}>
      <div className="col s12">
        <h3>{`${city.name}, ${city.country}`}</h3>
      </div>
      <div className={"col s12 m4"}>
        <Chart
          title={"Temperature"}
          data={temperatureData}
          color={"#dd2c00"}
          tooltipId="temperature"
        />
      </div>
      <div className={"col s12 m4"}>
        <Chart
          title={"Pressure"}
          data={pressureData}
          color={"#263238"}
          tooltipId="pressure"
        />
      </div>
      <div className={"col s12 m4"}>
        <Chart
          title={"Humidity"}
          data={humidityData}
          color={"#4a148c"}
          tooltipId="humidity"
        />
      </div>
    </div>
  );
}

Weather.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    coord: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired
    }),
    country: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired
  }).isRequired,
  list: PropTypes.arrayOf(PropTypes.object)
};

export default Weather;
