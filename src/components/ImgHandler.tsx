import client from "../sanityService";
import imageUrlBuilder from "@sanity/image-url";

interface ImgHandlerProps {
  imgSrc: any;
  title: string;
}
const ImgHandler = ({ imgSrc, title }: ImgHandlerProps) => {
  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }
  return (
    <>
      <img src={urlFor(imgSrc).url()} alt={title} />
    </>
  );
};

export default ImgHandler;
