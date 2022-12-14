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
      {image && <ImgHandler imgSrc={image} altText={image?.title} />}
      <div className="story-info">
        <h3>{title}</h3>
        <p>{summary}</p>
        <Link to={`/story/${title.replaceAll(" ", "-")?.toLowerCase()}`}>
          <Button variant="alt">READ</Button>
        </Link>
      </div>
    </Card>
  );
};

export default StoryCard;
