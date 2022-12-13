import { Link } from "react-router-dom";
import ImgHandler from "../ImgHandler";
import { Card } from "./styles";

interface StoryCardProps {
  image: any;
  title: string;
  summary: string;
}

const StoryCard = ({ image, title, summary }: StoryCardProps) => {
  return (
    <Card key={title.toLowerCase()}>
      <div className="img-container">
        {image && <ImgHandler imgSrc={image} altText={image?.title} />}
      </div>
      <div className="story-info">
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
      <Link to={`/story/${title.replaceAll(" ", "-")?.toLowerCase()}`}>go to story</Link>
    </Card>
  );
};

export default StoryCard;
