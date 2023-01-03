import client from "../sanityService";
import imageUrlBuilder from "@sanity/image-url";
import { IImage } from "../types/types";

interface ImgHandlerProps {
  imgSrc: IImage;
  altText: string;
}
const ImgHandler = ({ imgSrc, altText }: ImgHandlerProps) => {
  const builder = imageUrlBuilder(client);

  function urlFor(source: IImage) {
    return builder.image(source);
  }
  return (
    <div className='image-container'>
      <img src={urlFor(imgSrc).url()} alt={altText} />
    </div>
  );
};

export default ImgHandler;
