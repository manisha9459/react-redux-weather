import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
  const className = `page-footer ${props.color}`;
  let textClass;
  const arr = props.textColor.split(" ");
  if (arr.length === 1) {
    textClass = `${arr[0]}-text`;
  } else {
    textClass = `${arr[0]}-text ${arr[1]}-text`;
  }
  return (
    <footer className={className}>
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h5 className={textClass}>About</h5>
            

            <br />
            <span className={textClass}>
              Me:{" "}
              <a
                className={textClass}
                href="https://twitter.com/jackdbd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <span> / </span>
              <a
                className={textClass}
                href="https://www.linkedin.com/in/giacomodebidda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <span> / </span>
              <a
                className={textClass}
                href="https://www.giacomodebidda.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </span>
          </div>
          <div className="col s12 m6">
            <h5 className={textClass}>Built with</h5>
            <ul>
              <li>
                <a
                  className={textClass}
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  className={textClass}
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Redux
                </a>
              </li>
              <li>
                <a
                  className={textClass}
                  href="https://materializecss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Materialize CSS
                </a>
              </li>
              <li>
                <a
                  className={textClass}
                  href="https://www.openweathermap.org/api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenWeatherMap
                </a>
              </li>
              <li>
                <a
                  className={textClass}
                  href="https://github.com/williaster/data-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  data-ui/sparkline
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  text: "Header text here",
  color: "purple darken-4",
  textColor: "white"
};

Footer.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string
};

export default Footer;
