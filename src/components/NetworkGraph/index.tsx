// @ts-nocheck

import { Graph } from "react-d3-graph";

const NetworkGraph = () => {
  // graph payload (with minimalist structure)
  const data = {
    nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
    links: [
      { source: "Harry", target: "Sally" },
      { source: "Harry", target: "Alice" },
    ],
  };

  // the graph configuration, just override the ones you need
  const myConfig = {
    directed: true,
    automaticRearrangeAfterDropNode: true,
    collapsible: true,
    height: 500,
    highlightDegree: 2,
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    maxZoom: 1,
    minZoom: 1,
    nodeHighlightBehavior: true, // comment this to reset nodes positions to work
    panAndZoom: false,
    staticGraph: false,
    staticGraphWithDragAndDrop: false,
    freezeAllDragEvents: true,
    width: 500,
    d3: {
      alphaTarget: 0.05,
      gravity: -250,
      linkLength: 120,
      linkStrength: 2,
    },
    node: {
        color: '#d3d3d3',
        fontColor: 'black',
        fontSize: 10,
        fontWeight: 'normal',
        highlightColor: 'red',
        highlightFontSize: 14,
        highlightFontWeight: 'bold',
        highlightStrokeColor: 'red',
        highlightStrokeWidth: 1.5,
        mouseCursor: 'crosshair',
        opacity: 0.9,
        renderLabel: true,
        size: 200,
        strokeColor: 'blue',
        strokeWidth: 1.5,
        svg: '',
        symbolType: 'circle',
        viewGenerator: null,
    },
    link: {
      color: "red",
      highlightColor: "red",
      mouseCursor: "pointer",
      opacity: 1,
      semanticStrokeWidth: true,
      strokeWidth: 3,
      type: "STRAIGHT",
    },
  };

  const onClickNode = function (nodeId: string) {
    window.alert(`Clicked node ${nodeId}`);
  };

  const onClickLink = function (source: any, target: any) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };

  return (
    <Graph
      id="graph-id" // id is mandatory
      data={data}
      config={myConfig}
      onClickNode={onClickNode}
      onClickLink={onClickLink}
      initialZoom={200}
    />
  );
};

export default NetworkGraph;
