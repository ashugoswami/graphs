import { useEffect, useState } from "react";
import "./App.css";
import Bargraph from "./component/bargraph/Bargraph";
import Footer from "./component/footer/Footer";
import Scatterplot from "./component/scatterplots/Scatterplot";
import data from "./Data";
function App() {
  const [scatteredData, setScatteredData] = useState([]);
  const [barGraphData, setBarGraphData] = useState([]);

  useEffect(() => {
    const getReqBarData = (rowData) => {
      let reqData = [];
      Object.keys(rowData).forEach((item) => {
        const sum = rowData[item].reduce((total, current) => {
          return total + current;
        }, 0);
        const avgOfMalicAcid = sum / rowData[item].length;

        reqData.push([item, avgOfMalicAcid]);
      });
      return reqData;
    };
    const setData = () => {
      const scatData = [];
      let barData = {};
      data.forEach((item) => {
        scatData.push([item["Color intensity"], item["Hue"]]);
        barData = {
          ...barData,
          [item.Alcohol]: [
            ...(barData[item.Alcohol] || []),
            item["Malic Acid"],
          ],
        };
      });
      const reqBarData = getReqBarData(barData);
      setScatteredData(scatData);
      setBarGraphData(reqBarData);
      console.log("Malic Acid", barData);
    };
    setData();
  }, []);
  return (
    <>
      <div className="main">
        <div className="bargraph">
          <Bargraph data={barGraphData} />
        </div>
        <div className="scatter">
          <Scatterplot data={scatteredData} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
