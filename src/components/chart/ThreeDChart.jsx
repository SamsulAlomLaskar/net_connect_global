import React, { useEffect, useState } from "react";
import { VictoryChart, VictoryBar } from "victory";

function ThreeDChart() {
  const [barData, setbarData] = useState([3, 4, 6, 8, 12, 13, 16, 19, 22, 25]);

  setInterval(() => {
    let array = [];
    for (let i = 0; i < 10; i++) {
      array.push((Math.random(10 * 99) * 25).toFixed(0));
    }
    const sortedArray = array.sort((a, b) => a - b);
    setbarData(sortedArray);
  }, 4000);

  return (
    <div>
      <VictoryChart
        width={700}
        height={220}
        domainPadding={{ x: 20 }}
        animate={{ duration: 500 }}
      >
        {barData[3] > 10 ? (
          <VictoryBar
            data={[
              {
                x: "A",
                y: Math.random(barData[1], barData[5]) + 10 * barData[6],
              },
              {
                x: "B",
                y: Math.random(barData[2], barData[7]) + 10 * barData[3],
              },
              {
                x: "C",
                y: Math.random(barData[3], barData[5]) + 10 * barData[5],
              },
              {
                x: "D",
                y: Math.random(barData[4], barData[6]) + 10 * barData[2],
              },
              {
                x: "E",
                y: Math.random(barData[5], barData[7]) + 10 * barData[1],
              },
              {
                x: "F",
                y: Math.random(barData[6], barData[8]) + 10 * barData[8],
              },
              {
                x: "G",
                y: Math.random(barData[8], barData[9]) + 10 * barData[5],
              },
            ]}
            style={{
              data: { fill: "#78ADD2", width: 12 },
            }}
            animate={{
              onExit: {
                duration: 500,
                before: () => ({
                  _y: 0,
                  fill: "#78ADD2",
                  label: "No Data",
                }),
              },
            }}
          />
        ) : (
          <VictoryBar
            data={[
              { x: "A", y: Math.random(barData[2], barData[8]) },
              { x: "B", y: Math.random(barData[3], barData[4]) },
              { x: "C", y: Math.random(barData[5], barData[6]) },
              { x: "D", y: Math.random(barData[7], barData[8]) },
              { x: "E", y: Math.random(barData[9], barData[8]) },
            ]}
            style={{
              data: { fill: "#78ADD2", width: 12 },
            }}
            animate={{
              onExit: {
                duration: 500,
                before: () => ({
                  _y: 0,
                  fill: "#78ADD2",
                  label: "No Data",
                }),
              },
            }}
          />
        )}
      </VictoryChart>
    </div>
  );
}

export default ThreeDChart;
