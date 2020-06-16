import React from "react";
import { Chart } from "react-charts";

export default function MyChart() {
  const data = React.useMemo(() => [
    {
      data: [
        [0, 1520000],
        [0, 1560000],
        [200, 1600000],
        [400, 1640000],
        [600, 1680000],
        [800, 1720000],
        [1000, 1760000],
      ],
    },
  ]);
  const series = React.useMemo(() => ({ type: "area" }), []);
  const axes = React.useMemo(
    () => [
      { primary: true, position: "bottom", type: "time" },
      { position: "left", type: "linear", stacked: true },
    ],
    []
  );
  const primaryCursor = React.useMemo(
    () => ({
      render: (props) => (
        <span style={{ fontSize: "1rem" }}>
          <span role="img" aria-label="icon">
            🕑
          </span>{" "}
          {(props.formattedValue || "").toString()}
        </span>
      ),
    }),
    []
  );
  const secondaryCursor = React.useMemo(
    () => ({
      render: (props) => (
        <span style={{ fontSize: "1rem" }}>
          <span role="img" aria-label="icon">
            👍
          </span>{" "}
          {(props.formattedValue || "").toString()}
        </span>
      ),
    }),
    []
  );

  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "500px",
        height: "200px",
      }}
    >
      <Chart
        data={data}
        series={series}
        axes={axes}
        primaryCursor={primaryCursor}
        secondaryCursor={secondaryCursor}
      />
    </div>
  );
}
