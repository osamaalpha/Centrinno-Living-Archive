// @ts-nocheck

import { useEffect, useState } from "react";
import { Graph } from "react-d3-graph";
import { IStory } from "../../types/types";

interface NetworkGraphProps {
  selectedVariable: ITag | ICat;
  relatedStories: IStory[];
}

const NetworkGraph = ({
  selectedVariable,
  relatedStories,
}: NetworkGraphProps) => {
  const [graphConfig, setGrapghConfig] = useState({});
  const [graphData, setGraphData] = useState({});
  // graph payload (with minimalist structure)

  //   console.log("selected category", selectedCategory);

  const relatedStoriesNode = relatedStories.map((story: IStory) => {
    return { id: story.title };
  });

  const isCat = !!selectedVariable?.relatedTags;

  const firstNode = isCat
    ? { id: selectedVariable?.category }
    : { id: selectedVariable?.tag };

  const linkedTagNodes = selectedVariable?.relatedTags?.map((relatedTag) => {
    return {
      id: relatedTag.tag,
    };
  });

  const secondNode = isCat
    ? linkedTagNodes
    : [{ id: selectedVariable?.category.category }];

  const storiesLinks = relatedStories.map((story: IStory) => {
    return {
      source: isCat ? selectedVariable?.category : selectedVariable?.tag,
      target: story?.title,
    };
  });

  const tagLinks = selectedVariable?.relatedTags?.map((relatedTag) => {
    return {
      source: selectedVariable?.category,
      target: relatedTag?.tag,
    };
  });

  const firstLinks = isCat
    ? tagLinks
    : [
        {
          source: selectedVariable?.tag,
          target: selectedVariable?.category.category,
        },
      ];

  const myData = {
    nodes: [firstNode, ...secondNode, ...relatedStoriesNode],
    links: [...firstLinks, ...storiesLinks],
  };

  // the graph configuration, just override the ones you need
  const myConfig = {
    directed: true,
    automaticRearrangeAfterDropNode: true,
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
      color: "#d3d3d3",
      fontColor: "black",
      fontSize: 10,
      fontWeight: "normal",
      highlightColor: "red",
      highlightFontSize: 14,
      highlightFontWeight: "bold",
      highlightStrokeColor: "red",
      highlightStrokeWidth: 1.5,
      mouseCursor: "crosshair",
      opacity: 0.9,
      renderLabel: true,
      size: 200,
      strokeColor: "blue",
      strokeWidth: 1.5,
      svg: "",
      symbolType: "circle",
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
  useEffect(() => {
    setGrapghConfig(myConfig);
    // setGraphData(myData);
  }, []);

  const onClickNode = function (nodeId: string) {
    window.alert(`Clicked node ${nodeId}`);
  };

  const onClickLink = function (source: any, target: any) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };

  return (
    <Graph
      id="graph-id" // id is mandatory
      data={myData}
      config={graphConfig}
      onClickNode={onClickNode}
      onClickLink={onClickLink}
      initialZoom={200}
    />
  );
};

export default NetworkGraph;
