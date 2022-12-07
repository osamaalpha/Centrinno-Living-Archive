import client from "../sanityService";
import imageUrlBuilder from "@sanity/image-url";
import { IImage } from "../types/types";

interface ImgHandlerProps {
  imgSrc: IImage;
  title: string;
}
const ImgHandler = ({ imgSrc, title }: ImgHandlerProps) => {
  const builder = imageUrlBuilder(client);

  function urlFor(source: IImage) {
    return builder.image(source);
  }
  return (
    <>
      <img src={urlFor(imgSrc).url()} alt={title} />
    </>
  );
};

export default ImgHandler;
