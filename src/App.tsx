import React, { useEffect, useState } from "react";
import "./App.css";
import client from "./sanityService";
import imageUrlBuilder from "@sanity/image-url";
import { request, gql } from "graphql-request";
import graphic from "./graphicqlApi";

function App() {
  const [data, setData] = useState([] as any);
  const builder = imageUrlBuilder(client);

  const query = gql`
    {
      allStory {
        title
      }
    }
  `;

  function urlFor(source: any) {
    return builder.image(source);
  }

  useEffect(() => {
    const fetchSainty = async () => {
      const info = await graphic(query);
      console.log(info);

      setData(info);
    };
    fetchSainty();
  }, []);

  return (
    <div className="App">
      {data?.allStory?.length > 0 &&
        data?.allStory?.map((item: any, index: number) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              {/* <img src={urlFor(item.heroImage.asset._ref).width(200).url()} /> */}
            </div>
          );
        })}
    </div>
  );
}

export default App;
