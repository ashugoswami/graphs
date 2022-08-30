import ReactEChart from "echarts-for-react";

export default function BarChart({ data = [] }) {
  const eChartsOption = {
    title: {
      text: "Scatterplot Chart",
    },
    xAxis: {
      name: "Color Intensity",
      type: "value",
    },
    yAxis: {
      name: "Hue",
      type: "value",
    },
    //To enable tooltips
    tooltip: {},
    // To enable toolbox
    toolbox: {
      feature: {
        // displays a options to direct save chart as a image
        saveAsImage: {},
      },
    },

    series: {
      data,
      type: "scatter",
    },
  };
  return (
    <div
      style={{
        width: "80%",
        height: "80%",
      }}
    >
      <ReactEChart
        style={{
          width: "100%",
          height: "100%",
        }}
        option={eChartsOption}
      />
    </div>
  );
}
