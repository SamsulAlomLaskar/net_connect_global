import React, { useState } from "react";
import "../CSS/ManhattanPopulationExplorer.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { data as manhattanData } from "../static/manhattanPopulation";
import MapChart from "../chart/MapChart";
// import HomePageMap from "../chart/HomePageMap";
// import ManhattanMap from "../chart/Manhattan";
console.log(manhattanData[0].visible_districts[0], "DATA");

const ManhattanPopulationExplorer = () => {
  const [nextButton, setnextButton] = useState(0);
  const [prevVal, setprevVal] = useState(false);
  const [nextVal, setnextVal] = useState(true);

  const estimatedPopulation = [
    "1-100",
    "100-200",
    "200-400",
    "400-800",
    "800-1600",
    "1600-3200",
    "3200-6400",
    "6400-12800",
    "more than 12800",
  ];

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
          <h6>{manhattanData[nextButton].title}</h6>
        </div>
        <div className="leftContent">
          <p>{manhattanData[nextButton].description}</p>

          <div className=" navigateArrow">
            {prevVal && (
              <ArrowBackIosIcon
                onClick={handlePrev}
                className="pe-2"
                type="button"
              />
            )}
            {nextButton + 1} of {manhattanData.length}
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
        <div className="rightStoryContainer1">
          <div>
            <p> Estimated Population (Census Block):</p>
            {estimatedPopulation.map((val, ind) => {
              return (
                <p>
                  <span style={estimatedPopulationStyle}>{"___"}</span>
                  {val}
                </p>
              );
            })}
          </div>
        </div>
        <div className="rightStoryContainer2">
          <div>
            <p style={{ marginLeft: "-0.1em", marginTop: "-0.3em" }}>
              Visible Districts:
            </p>
            {manhattanData.map((value, ind) => (
              <p>
                {value.visible_districts[ind] === "checked" ? (
                  <>
                    <input type="checkbox" checked /> {value.district}
                  </>
                ) : (
                  <>
                    <input type="checkbox" /> {value.district}
                  </>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManhattanPopulationExplorer;
