import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const amount = props.dataPoints.map((dataPoints) => dataPoints.value);
  const totalmax = Math.max(...amount);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalmax}
          lable={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
