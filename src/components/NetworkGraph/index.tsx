// @ts-nocheck

import { useEffect, useState } from "react";
import { Graph } from "react-d3-graph";
import { IStory } from "../../types/types";

interface NetworkGraphProps {
  selectedVariable: ITag | ICat;
  relatedStories: IStory[];
}

const NetworkGraph = ({
  relatedStories,
  selectedVariable,
}: NetworkGraphProps) => {
  const [graphConfig, setGrapghConfig] = useState({});

  // graph payload (with minimalist structure)

  const relatedStoriesNode = relatedStories.map((story: IStory) => {
    return { id: story.title, color: "green", size: 500, symbolType: "square" };
  });

  const isCat = !!selectedVariable?.relatedTags;

  const firstNode = isCat
    ? {
        id: selectedVariable?.category,
        color: "blue",
        symbolType: "circle",
        size: 2600,
      }
    : {
        id: selectedVariable?.tag,
        color: "orange",
        symbolType: "triangle",
        size: 2600,
      };

  const linkedTagNodes = selectedVariable?.relatedTags?.map((relatedTag) => {
    return {
      id: relatedTag.tag,
      color: "orange",
      symbolType: "triangle",
    };
  });

  const secondNode = isCat
    ? linkedTagNodes
    : [
        {
          id: selectedVariable?.category.category,
          color: "blue",
          symbolType: "circle",
        },
      ];

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
          strokeLinecap: "square",
        },
      ];

  const myData = {
    nodes: [firstNode, ...secondNode, ...relatedStoriesNode],
    links: [...firstLinks, ...storiesLinks],
  };

  // the graph configuration, just override the ones you need
  const myConfig = {
    directed: true,
    width: 900,
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
    d3: {
      alphaTarget: 0.05,
      gravity: -200,
      linkLength: 150,
      linkStrength: 2,
    },
    node: {
      fontColor: "black",
      fontSize: 16,
      fontWeight: "normal",
      highlightColor: "red",
      highlightFontSize: 16,
      highlightFontWeight: "bold",
      highlightStrokeColor: "red",
      highlightStrokeWidth: 1.5,
      mouseCursor: "pointer",
      opacity: 1,
      size: 500,
      renderLabel: true,
      svg: "",
      symbolType: "circle",
      viewGenerator: null,
    },
    link: {
      color: "red",
      highlightColor: "red",
      mouseCursor: "pointer",
      opacity: 1,
      strokeWidth: 1,
      type: "STRAIGHT",
      strokeLinecap: "round",
    },
  };
  useEffect(() => {
    setGrapghConfig(myConfig);
    // setGraphData(myData);
  }, []);

  const onClickNode = function (node) {
    console.log(node);
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
      initialZoom={500}
    />
  );
};

export default NetworkGraph;
