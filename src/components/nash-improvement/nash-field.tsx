// src/components/D3Visualization.jsx or .tsx
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// Look into https://observablehq.com/plot/marks/vector#vector-mark
export default function D3Visualization() {
	const margin = 25;

	const svgHeight = 600;
	const svgWidth = 600;

	const svgRef = useRef(null);
	const gridWidth = svgWidth - 2 * margin;
	const gridHeight = svgHeight - 2 * margin;


	useEffect(() => {
		// Your D3 code here
		const svg = d3.select(svgRef.current);

		// clear on each new render
		svg.selectAll("*").remove();

		const xScale = d3.scaleLinear()
			.domain([0, 1])
			.range([margin, svgWidth - margin])
			.nice();

		const yScale = d3.scaleLinear()
			.domain([0, 1])
			.range([margin, svgHeight - margin])
			.nice();

		const rect = svg.append("rect")
			.attr("x", margin)
			.attr("y", margin)
			.attr("width", gridWidth)
			.attr("height", gridHeight)
			.attr("fill", "none")
			.style("stroke-width", 1)
			.style("stroke", "black")

		d3.axisRight(yScale)(svg.append("g")
			.attr("transform", `translate(${svgWidth - margin}, 0)`))

		d3.axisBottom(xScale)(svg.append("g")
			.attr("transform", `translate(0, ${svgHeight - margin})`));
		let points = [];
		for (let x of xScale.ticks(25)) {
			for (let y of yScale.ticks(25)) {
				points.push([x, y]);
				// if (x == 0 && y == 0) {
					console.log(points.length, [(x * gridWidth) + margin, y * gridHeight + margin])
				// }
				// console.log([(x * gridWidth) + margin, y * gridHeight + margin]);
			}
		}
		// points.push([0, 0])
		console.log(points.length)

		svg.append('defs').append('marker')
			.attr('id', 'arrowhead')
			.attr('viewBox', '0 -5 10 10')
			.attr('refX', 0)
			.attr('refY', 0)
			.attr('markerWidth', 4)
			.attr('markerHeight', 4)
			.attr('orient', 'auto')
			.append('path')
			.attr('d', 'M0,-5L10,0L0,5')
			.attr('fill', 'black');

		// svg
		// 	.selectAll('circle')
		// 	.data(points)
		// 	.enter()
		// 	.append('circle')
		// 	.attr('r', 3)
		// 	.attr('cx', d => d[0] * gridWidth + margin)
		// 	.attr('cy', d => d[1] * gridHeight + margin)
		// 	.attr('thing', d => d[0])

		let group = svg.append("g").attr("id", "points");
		group
			.selectAll('line')
			.data(points)
			.enter()
			.append('line')
			.attr('x1', d => d[0] * gridWidth + margin)
			.attr('y1', d => d[1] * gridHeight + margin)
			.attr('x2', d => d[0] * gridWidth + margin + 1.5)
			.attr('y2', d => d[1] * gridHeight + margin + 1) // Note the negative sign because SVG y-axis is inverted
			.attr('stroke', 'steelblue')
			.attr('stroke-width', 1.5)
			.attr('marker-start', 'url(#arrowhead)');


	}, []);

	return <svg ref={svgRef} width={svgWidth} height={svgHeight}></svg>;
}
