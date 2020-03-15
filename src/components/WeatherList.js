import React from "react";
import PropTypes from "prop-types";
import Weather from "./Weather";

const WeatherList = ({ data }) => {
  return (
    <div className="weather-list">
      { data.map(d => {
        return <Weather city={d.city} list={d.list} key={d.city.id} />;
      })}
    </div>
  );
};

WeatherList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.object.isRequired,
      list: PropTypes.array.isRequired
    })
  ).isRequired
};

export default WeatherList;
