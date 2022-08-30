import ReactEChart from "echarts-for-react";

export default function BarChart({ data, type, xName, yName }) {
  console.log("Data from graph", data);
  const eChartsOption = {
    title: {
      text: "Bar Chart",
    },
    xAxis: {
      name: "Alcohol",
      type: "category",
    },
    yAxis: {
      name: "Malic Acid",
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
      type: "bar",
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
