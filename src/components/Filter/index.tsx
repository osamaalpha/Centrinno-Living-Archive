import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useSelectedVariable,
  useReleatedStories,
} from "../../hooks/useReleatedStories";
import { ICat, ITag } from "../../types/types";
import NetworkGraph from "../NetworkGraph";

const Filter = () => {
  const { slug } = useParams();
  const releatedStories = useReleatedStories(slug as string);
  const selectedVariable = useSelectedVariable(slug as string);
  const title =
    (selectedVariable?.tag as string) || (selectedVariable?.category as string);
  const definition = selectedVariable?.definition;

  return (
    <>
      <h1>{title}</h1>
      <p>{definition}</p>
      <NetworkGraph
        selectedVariable={selectedVariable}
        relatedStories={releatedStories}
      />
    </>
  );
};

export default Filter;
