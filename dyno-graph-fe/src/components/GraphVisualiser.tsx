import {Stack} from "@mui/material";
import {useGetGraphQuery} from "../state/api.ts";
import * as d3 from "d3";
import {useEffect, useRef, useState} from "react";

function GraphVisualiser() {
  const {data: graph, isLoading} = useGetGraphQuery(undefined)

  // Sample Data
  const nodes = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
  ];
  const hyperEdges = [
    { id: 1, nodes: [1, 2, 3] },
    { id: 2, nodes: [3, 4, 5] },
  ];

  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 600;

    // Initialize D3 simulation
    const simulation = d3.forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide(50));

    // Update node positions with each tick
    simulation.on("tick", () => {
      svg.selectAll(".node")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      svg.selectAll(".hyperEdge")
        .attr("d", d => generateHyperedgePath(d.nodes));
    });

    // Draw hyperedges (as convex hull paths around nodes)
    svg.selectAll(".hyperEdge")
      .data(hyperEdges)
      .join("path")
      .attr("class", "hyperEdge")
      .attr("fill", "none")
      .attr("stroke", "orange")
      .attr("stroke-width", 2);

    // Draw nodes
    svg.selectAll(".node")
      .data(nodes)
      .join("circle")
      .attr("class", "node")
      .attr("r", 10)
      .attr("fill", "blue");



    // Cleanup on component unmount
    return () => simulation.stop();
  }, [nodes, hyperEdges]);

  // Generate a path that connects multiple nodes for each hyperEdge
  const generateHyperedgePath = (nodeIds) => {
    const points = nodeIds.map(id => {
      const node = nodes.find(n => n.id === id);
      return [node.x, node.y];
    });
    return d3.line()(d3.polygonHull(points));
  };

  return (
    <svg style={{ marginTop: '64px' }} ref={svgRef} width={800} height={600} />
  );
}

export default GraphVisualiser;