import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// import "../chart/Mapchart.css";

/* const App = () => <div></div>;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); 
*/

const MapChartWorld = () => {
  return (
    <div>
      <ComposableMap>
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChartWorld;
