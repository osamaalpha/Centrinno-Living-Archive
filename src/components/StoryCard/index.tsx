import { Link } from "react-router-dom";
import { Button } from "../../styles";
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
        <Button variant="alt">
          <Link to={`/story/${title.replaceAll(" ", "-")?.toLowerCase()}`}>
            READ
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default StoryCard;
