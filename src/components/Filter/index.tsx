import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useSelectedVariable,
  useReleatedStories,
} from "../../hooks/useReleatedStories";
import Grid from "../Grid";
import NetworkGraph from "../NetworkGraph";
import Results from "../Results";
import { FilterSection } from "./styles";

const Filter = () => {
  const { slug } = useParams();
  const releatedStories = useReleatedStories(slug as string);
  const selectedVariable = useSelectedVariable(slug as string);
  const title =
    (selectedVariable?.tag as string) || (selectedVariable?.category as string);
  const definition = selectedVariable?.definition;

  console.log(releatedStories, selectedVariable)

  return (
    <>
      {selectedVariable?.category && releatedStories?.length > 0 && (
        <>
          <FilterSection>
            <div className="intro-text">
              <h1>{title}</h1>
              <p>{definition}</p>
              <Results limit={6} />
            </div>
            <div className="graph-container">
              <NetworkGraph
                selectedVariable={selectedVariable}
                relatedStories={releatedStories}
              />
            </div>
          </FilterSection>
          <Grid relatedStories={releatedStories} />
        </>
      )}
    </>
  );
};

export default Filter;
