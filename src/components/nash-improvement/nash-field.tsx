// src/components/D3Visualization.jsx or .tsx
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./nash.css";

/**
 * Generates equi-distant points on a square mesh that starts in both dimensions on `s` and ends on `e`.
 * `n` is the number of ticks in each dimension. Ticks will be generated such that the distance from
 * the start to the first tick and the distance from the last to end are equal to the distance between
 * two ticks
 */
function generate_mesh(s, e, n): number[] {
  let points = [];

  const dd = (e - s) / n;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) points.push([(i + 0.5) * dd, (j + 0.5) * dd]);

  return points;
}

// Look into https://observablehq.com/plot/marks/vector#vector-mark
export default function D3Visualization() {
  const margin = 25;

  const svgHeight = 600;
  const svgWidth = 600;

  const svgRef = useRef(null);
  const gridWidth = svgWidth - 2 * margin;
  const gridHeight = svgHeight - 2 * margin;

  const numTicks = 25;

  // styling
  const rowStyle = "border-b border-gray-300";
  const cellStyle = "border-l p-2 border-gray-300";
  const inputStyling = "w-1/3";

  // controls
  const [prestSelection, setPresetSelection] = useState("none");
  const [rewardMatrix, setRewardMatrix] = useState([
    [
      [0, 1],
      [1, 0],
    ],
    [
      [0, 1],
      [0, 1],
    ],
  ]);

  const presetOptions: { name: String; val?: Number[][][] }[] = [
    {
      name: "Prisoner's Dilemna",
      val: [
        [
          [-1, -3],
          [0, -2],
        ],
        [
          [-1, 0],
          [-3, -2],
        ],
      ],
    },
    {
      name: "Hawk-dove Game",
      val: [
        [
          [0, 2],
          [-2, 4],
        ],
        [
          [4, 2],
          [-2, 0],
        ],
      ],
    },
    {
      name: "Traffic Light Game",
      val: [
        [
          [-100, 1],
          [0, 0],
        ],
        [
          [-100, 0],
          [1, 0],
        ],
      ],
    },
  ];

  const onInputChange = (p, i, j, v) => {
    console.log("change", p, i, j, v);
    setPresetSelection("none");

    // update reward matrix with new value, ensure deep copy
    const rewardMatCopy = JSON.parse(JSON.stringify(rewardMatrix));
    rewardMatCopy[p][i][j] = parseFloat(v);
    setRewardMatrix(rewardMatCopy);
    console.log(rewardMatrix);
  };

  const onSelectPreset = (val) => {
    setPresetSelection(val);
    if (val === "none") {
      return;
    }
    setRewardMatrix(presetOptions[val].val);
  };

  useEffect(() => {
    // Your D3 code here
    const svg = d3.select(svgRef.current);

    // clear on each new render
    svg.selectAll("*").remove();

    const xScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([margin, svgWidth - margin])
      .nice();

    const yScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([margin, svgHeight - margin])
      .nice();

    const rect = svg
      .append("rect")
      .attr("x", margin)
      .attr("y", margin)
      .attr("width", gridWidth)
      .attr("height", gridHeight)
      .attr("fill", "none")
      .style("stroke-width", 1)
      .style("stroke", "black");

    d3.axisRight(yScale)(
      svg.append("g").attr("transform", `translate(${svgWidth - margin}, 0)`),
    );

    d3.axisBottom(xScale)(
      svg.append("g").attr("transform", `translate(0, ${svgHeight - margin})`),
    );

    let points = generate_mesh(0, 1, 25);
    console.log(points);

    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 0)
      .attr("refY", 0)
      .attr("markerWidth", 4)
      .attr("markerHeight", 4)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", "steelblue");

    let group = svg.append("g").attr("id", "points");

    group
      .selectAll("line")
      .data(points)
      .enter()
      .append("line")
      .attr("x1", (d) => d[0] * gridWidth + margin)
      .attr("y1", (d) => d[1] * gridHeight + margin)
      .attr("x2", (d) => d[0] * gridWidth + margin + 5)
      .attr("y2", (d) => d[1] * gridHeight + margin + 10) // Note the negative sign because SVG y-axis is inverted
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("marker-end", "url(#arrowhead)");
  }, []);

  return (
    <div>
      <svg ref={svgRef} width={svgWidth} height={svgHeight}></svg>

      <h2 className="text-center">Reward Matrix</h2>
      <div>
        <h3>Presets</h3>
        <select
          name="Preset Reward Matrix"
          id="presetmat"
          value={prestSelection}
          onChange={(e) => onSelectPreset(e.target.value)}
        >
          <option value="none">Select a preset game</option>
          {presetOptions.map((o, i) => (
            <option value={i} key={o.name}>
              {o.name}
            </option>
          ))}
        </select>
      </div>
      <table>
        <tr>
          <th></th>
          <th>Column Action C (x-axis)</th>
          <th>Column Action D</th>
        </tr>
        <tr>
          <td>Row Action A (y-axis)</td>
          <td>
            (
            <input
              onChange={(d) => onInputChange(0, 0, 0, d.target.value)}
              type="number"
              step=".01"
              value={rewardMatrix[0][0][0]}
            />
            ,{" "}
            <input
              onChange={(d) => onInputChange(1, 0, 0, d.target.value)}
              type="number"
              step=".01"
              value={rewardMatrix[1][0][0]}
            />
            )
          </td>
          <td>
            (
            <input
              onChange={(d) => onInputChange(0, 0, 1, d.target.value)}
              type="number"
              step=".01"
              value={rewardMatrix[0][0][1]}
            />
            ,{" "}
            <input
              onChange={(d) => onInputChange(1, 0, 1, d.target.value)}
              type="number"
              step=".01"
              value={rewardMatrix[1][0][1]}
            />
            )
          </td>
        </tr>
        <tr>
          <td>Row Action B</td>
          <td>
            (
            <input
              type="number"
              step=".01"
              value={rewardMatrix[0][1][0]}
              onChange={(d) => onInputChange(0, 1, 0, d.target.value)}
            />
            ,{" "}
            <input
              onChange={(d) => onInputChange(1, 1, 0, d.target.value)}
              type="number"
              step=".01"
              value={rewardMatrix[1][1][0]}
            />
            )
          </td>
          <td>
            (
            <input
              onChange={(d) => onInputChange(0, 1, 1, d.target.value)}
              type="number"
              step=".01"
              value={rewardMatrix[0][1][1]}
            />
            ,{" "}
            <input
              onChange={(d) => onInputChange(1, 1, 1, d.target.value)}
              type="number"
              step=".01"
              value={rewardMatrix[1][1][1]}
            />
            )
          </td>
        </tr>
      </table>
    </div>
  );
}
