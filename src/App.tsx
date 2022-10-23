import React, { useEffect, useState } from "react";
import "./App.css";
import client from "./sanityService";
import imageUrlBuilder from "@sanity/image-url";

function App() {
  const [data, setData] = useState([] as any);
  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }

  useEffect(() => {
    const fetchSainty = async () => {
      const query = '*[_type == "story"]';

      const info = await client.fetch(query);
      console.log(info);

      setData(info);
    };
    fetchSainty();
  }, []);

  return (
    <div className="App">
      {data.length > 0 &&
        data.map((item: any, index: number) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <img src={urlFor(item.heroImage.asset._ref).width(200).url()} />
            </div>
          );
        })}
    </div>
  );
}

export default App;
