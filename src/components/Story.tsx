import { useEffect, useState } from "react";
import fetchData from "../helpers/fetchData";


export const Story = () => {
  const [data, setData] = useState([] as any);

  useEffect(() => {
    fetchData().then((res) => {
        setData(res)
        console.log(data)
    })
  }, []);

  return (
    <>
      {data?.allStory?.length > 0 &&
        data?.allStory?.map((item: any, index: number) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              {item && item.heroImage && (
                <img
                  src={item.heroImage.asset.url}
                  alt={item.heroImage.title}
                />
              )}
            </div>
          );
        })}
    </>
  );
};
