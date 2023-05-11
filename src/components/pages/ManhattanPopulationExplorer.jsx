import React, { useState } from "react";
import "../CSS/ManhattanPopulationExplorer.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import manhattanData from "../static/manhattanPopulation.json";
import MapChart from "../chart/MapChart";
// import HomePageMap from "../chart/HomePageMap";
// import ManhattanMap from "../chart/Manhattan";
console.log(manhattanData.data[0].title);

const ManhattanPopulationExplorer = () => {
  const [nextButton, setnextButton] = useState(0);
  const [prevVal, setprevVal] = useState(false);
  const [nextVal, setnextVal] = useState(true);

  const estimatedPopulationStyle = {
    width: "10px",
    height: "10px",
    border: "1px solid #fff",
    borderBottom: "none",
    fontSize: "10px",
    marginLeft: "-2.2em",
    marginRight: "1em",
  };

  const handlePrev = () => {
    let updateVal = nextButton - 1;
    setnextButton(updateVal);
    nextButton == 1 ? setprevVal(false) : setprevVal(true);
    setnextVal(true);
  };
  const handleNext = () => {
    let updateVal = nextButton + 1;
    setnextButton(updateVal);
    console.log(nextButton);
    nextButton == 8 ? setnextVal(false) : setnextVal(true);
    setprevVal(true);
  };

  return (
    <div className="manhattanPopulationExplorer_MainContainer">
      {/* <HomePageMap /> */}
      <div className="leftStoryContainer">
        <div>
          <h6>{manhattanData.data[nextButton].title}</h6>
        </div>
        <div className="leftContent">
          <p>{manhattanData.data[nextButton].description}</p>

          <div className=" navigateArrow">
            {prevVal && (
              <ArrowBackIosIcon
                onClick={handlePrev}
                className="pe-2"
                type="button"
              />
            )}
            {nextButton + 1} of {manhattanData.data.length}
            {nextVal && (
              <ArrowForwardIosIcon
                onClick={handleNext}
                className="ps-2"
                type="button"
              />
            )}
          </div>
        </div>
      </div>
      <MapChart />
      <div className="rightContainer">
        {console.log(
          manhattanData.data[nextButton].visible_districts[0],
          nextButton
        )}
        <div className="rightStoryContainer1">
          <div>
            <p> Estimated Population (Census Block):</p>
            <p>
              <span style={estimatedPopulationStyle}>{"___"}</span>1-100
            </p>
            <p>
              <span style={estimatedPopulationStyle}>{"___"}</span> 100-200
            </p>
            <p>
              <span style={estimatedPopulationStyle}>{"___"}</span> 200-400
            </p>
            <p>
              <span style={estimatedPopulationStyle}>{"___"}</span> 400-800
            </p>
            <p>
              <span style={estimatedPopulationStyle}>{"___"}</span> 800-1600
            </p>
            <p>
              <span style={estimatedPopulationStyle}>{"___"}</span> 1600-3200
            </p>
            <p>
              <span style={estimatedPopulationStyle}>{"___"}</span> 3200-6400
            </p>
            <p>
              <span style={estimatedPopulationStyle}>{"___"}</span> 6400-12800
            </p>
            <p>
              <span style={estimatedPopulationStyle}>{"___"}</span> more than
              12800
            </p>
          </div>
        </div>
        <div className="rightStoryContainer2">
          <div>
            <p style={{ marginLeft: "-0.1em", marginTop: "-0.3em" }}>
              Visible Districts:
            </p>
            <p>
              {manhattanData.data[nextButton].visible_districts[0] ===
              "checked" ? (
                <input type="checkbox" checked />
              ) : (
                <input type="checkbox" />
              )}{" "}
              Lower Manhattan
            </p>
            <p>
              {manhattanData.data[nextButton].visible_districts[1] ===
              "checked" ? (
                <input type="checkbox" checked />
              ) : (
                <input type="checkbox" />
              )}{" "}
              West Village
            </p>
            <p>
              {manhattanData.data[nextButton].visible_districts[2] ===
              "checked" ? (
                <input type="checkbox" checked />
              ) : (
                <input type="checkbox" />
              )}{" "}
              East Village
            </p>
            <p>
              {manhattanData.data[nextButton].visible_districts[3] ===
              "checked" ? (
                <input type="checkbox" checked />
              ) : (
                <input type="checkbox" />
              )}{" "}
              Midtown West
            </p>
            <p>
              {manhattanData.data[nextButton].visible_districts[4] ===
              "checked" ? (
                <input type="checkbox" checked />
              ) : (
                <input type="checkbox" />
              )}{" "}
              Midtown
            </p>
            <p>
              {manhattanData.data[nextButton].visible_districts[5] ===
              "checked" ? (
                <input type="checkbox" checked />
              ) : (
                <input type="checkbox" />
              )}{" "}
              Midtown East
            </p>
            <p>
              {manhattanData.data[nextButton].visible_districts[6] ===
              "checked" ? (
                <input type="checkbox" checked />
              ) : (
                <input type="checkbox" />
              )}{" "}
              Upper West Side
            </p>
            <p>
              {manhattanData.data[nextButton].visible_districts[7] ===
              "checked" ? (
                <input type="checkbox" checked />
              ) : (
                <input type="checkbox" />
              )}{" "}
              Upper East Side
            </p>
            <p>
              {manhattanData.data[nextButton].visible_districts[8] ===
              "checked" ? (
                <input type="checkbox" checked />
              ) : (
                <input type="checkbox" />
              )}{" "}
              West Harlem
            </p>
            <p>
              {manhattanData.data[nextButton].visible_districts[9] ===
              "checked" ? (
                <input type="checkbox" checked />
              ) : (
                <input type="checkbox" />
              )}{" "}
              Central Harlem
            </p>
            <p>
              {manhattanData.data[nextButton].visible_districts[10] ==
              "checked" ? (
                <input type="checkbox" checked />
              ) : (
                <input type="checkbox" />
              )}{" "}
              East Harlem
            </p>
            <p>
              {manhattanData.data[nextButton].visible_districts[11] ==
              "checked" ? (
                <input type="checkbox" checked />
              ) : (
                <input type="checkbox" />
              )}{" "}
              North Manhattan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManhattanPopulationExplorer;
