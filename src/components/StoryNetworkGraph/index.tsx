// @ts-nocheck
import { useEffect, useState } from "react";
import { Graph } from "react-d3-graph";
import { useNavigate } from "react-router-dom";
import { slugify } from "../../helpers/slugify";

interface StoryNetworkGraphProps {
  tags: ITag[];
  storyTitle: string;
}

const StoryNetworkGraph = ({ tags, storyTitle }: StoryNetworkGraphProps) => {
  const [graphConfig, setGrapghConfig] = useState({});
  const navigate = useNavigate();

  // graph payload (with minimalist structure)

  const firstNode = {
    id: storyTitle,
    color: "green",
    symbolType: "square",
    size: 2600,
  };

  const tagNodes = tags.map((tag) => {
    return {
      id: tag.tag,
      color: "orange",
      symbolType: "triangle",
    };
  });

  const catNodes = tags.map((tag) => {
    return {
      id: tag.category.category,
      color: "blue",
      symbolType: "circle",
    };
  });

  const secondNode = tagNodes;
  const thirdNode = catNodes;

  const tagToCatLinks = tags.map((tag) => {
    return {
      source: tag.tag,
      target: tag.category.category,
    };
  });

  const storyToTagLinks = tags.map((tag) => {
    return {
      source: storyTitle,
      target: tag.tag,
    };
  });

  const myData = {
    nodes: [firstNode, ...secondNode, ...thirdNode],
    links: [...storyToTagLinks, ...tagToCatLinks],
  };

  useEffect(() => {
    setGrapghConfig(myConfig);
  }, []);

  // the graph configuration, just override the ones you need
  const myConfig = {
    directed: true,
    highlightDegree: 2,
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    maxZoom: 1,
    minZoom: 1,
    nodeHighlightBehavior: true, // comment this to reset nodes positions to work
    panAndZoom: false,
    d3: {
      alphaTarget: 0.05,
      gravity: -90,
      linkLength: 50,
      linkStrength: 1,
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
    if (event.color !== "green") {
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

export default StoryNetworkGraph;
