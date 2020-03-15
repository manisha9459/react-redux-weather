import React, { Component } from "react";
import PropTypes from "prop-types";
import { min, max } from "d3-array";
import ResizeAware from "react-resize-aware";
import {
  Sparkline,
  LineSeries,
  HorizontalReferenceLine,
  // BandLine,
  // PatternLines,
  PointSeries,
  // WithTooltip
} from "@data-ui/sparkline";
import ReactTooltip from "react-tooltip";

// TODO: replace react-tooltip with crosshair tooltip from vx or data-ui

class Chart extends Component {
  state = {
    width: 200,
    height: 100
  };
  handleResize = ({ width, height }) => {
    // console.log("resize", width, height)
    this.setState({
      width: width
    });
  };
  render() {
    const { title, data, color, backgroundColor, tooltipId } = this.props;
    const cardClassName = `card ${backgroundColor}`;
    const values = data.map(d => d.value);
    const dataTip = `${min(values)}; ${max(values)}`;
    return (
      <ResizeAware
        style={{ position: "relative" }}
        onlyEvent
        onResize={this.handleResize}
        data-tip={dataTip}
        data-for={tooltipId}
      >
        <div className={cardClassName}>
          <div className="card-content">
            <span className="card-title" style={{ color: `${color}` }}>
              {title}
            </span>
          </div>
          <Sparkline
            ariaLabel="A line graph of a city's weather data"
            margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
            width={this.state.width}
            height={this.state.height}
            data={data}
            valueAccessor={d => d.value}
          >
            {/*
              <PatternLines
                id="pattern"
                height={6}
                width={6}
                stroke={color}
                strokeWidth={1}
                orientation={["diagonal"]}
              />
              <BandLine band="innerquartiles" fill="url(#pattern)" />
            */}
            <HorizontalReferenceLine
              stroke={color}
              strokeWidth={1}
              strokeDasharray="4 4"
              reference="mean"
            />
            {/* Series children are passed the data from the parent Sparkline */}
            <LineSeries showArea={false} stroke={color} />
            <PointSeries
              points={["all"]}
              fill={"white"}
              size={3}
              stroke={color}
            />
            <PointSeries
              points={["min", "max"]}
              fill={color}
              size={3}
              stroke={color}
              // renderLabel={val => val.toFixed(2)}
            />
          </Sparkline>
        </div>
        <ReactTooltip
          id={tooltipId}
          getContent={dataTip => {
            // console.log(dataTip)
            if (!dataTip) return;
            const arr = dataTip.split(";");
            return (
              <div>
                <p>{`Min: ${arr[0]}`}</p>
                <p>{`Max: ${arr[1]}`}</p>
              </div>
            );
          }}
        />
      </ResizeAware>
    );
  }
}

Chart.defaultProps = {
  color: "#ff0000",
  backgroundColor: "grey lighten-2"
};

Chart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  tooltipId: PropTypes.string.isRequired
};

export default Chart;
