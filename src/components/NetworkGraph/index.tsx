// @ts-nocheck

import { useEffect, useState } from "react";
import { Graph } from "react-d3-graph";
import { IStory } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { slugify } from "../../helpers/slugify";

interface NetworkGraphProps {
  selectedVariable: ITag | ICat;
  relatedStories: IStory[];
}

const NetworkGraph = ({
  relatedStories,
  selectedVariable,
}: NetworkGraphProps) => {
  const [graphConfig, setGrapghConfig] = useState({});
  const navigate = useNavigate();

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
      type: "CURVE_SMOOTH",
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

  useEffect(() => {
    setGrapghConfig(myConfig);
  }, []);

  //   useEffect(() => {
  //     setRealHeight(containerRef.current.offsetHeight);
  //     setRealWidth(containerRef.current.offsetWidth);
  //   }, []);

  // const width = containerRef.current.offsetWidth;
  // const height = containerRef.current.offsetHeight;

  // the graph configuration, just override the ones you need
  const myConfig = {
    directed: false,
    highlightDegree: 2,
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    maxZoom: 1,
    minZoom: 1,
    nodeHighlightBehavior: true, // comment this to reset nodes positions to work
    panAndZoom: false,
    freezeAllDragEvents: true,
    d3: {
      alphaTarget: 10,
      gravity: -350,
      linkLength: 350,
      linkStrength: 2,
    },
    node: {
      fontColor: "black",
      fontSize: 16,
      fontWeight: "normal",
      highlightColor: "blue",
      highlightFontSize: 16,
      highlightFontWeight: "bold",
      highlightStrokeColor: "blue",
      highlightStrokeWidth: 1,
      mouseCursor: "pointer",
      labelPosition: "bottom",
      opacity: 1,
      size: 500,
      renderLabel: true,
      svg: "",
      symbolType: "circle",
      viewGenerator: null,
    },
    link: {
      color: "blue",
      highlightColor: "blue",
      mouseCursor: "pointer",
      opacity: 1,
      strokeWidth: 1,
      type: "STRAIGHT",
      strokeLinecap: "round",
    },
  };

  const onClickNode = function (node, event) {
    if (event.color === "green") {
      navigate(`/story/${slugify(node)}`);
    } else {
      navigate(`/taxonomy/${slugify(node)}`);
    }
  };

  return (
    <Graph
      id="graph-id" // id is mandatory
      data={myData}
      config={graphConfig}
      onClickNode={onClickNode}
      initialZoom={0}
    />
  );
};

export default NetworkGraph;
