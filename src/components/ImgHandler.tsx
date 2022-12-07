import client from "../sanityService";
import imageUrlBuilder from "@sanity/image-url";

interface ImgHandlerProps {
  imgSrc: any;
  altText: string;
}
const ImgHandler = ({ imgSrc, altText }: ImgHandlerProps) => {
  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }
  return (
    <>
      <img src={urlFor(imgSrc).url()} alt={altText} />
    </>
  );
};

export default ImgHandler;
