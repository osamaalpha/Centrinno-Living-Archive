import ImgHandler from "../ImgHandler";
import { Card } from "./styles";

interface StoryCardProps {
  image: any;
  title: string;
  summary: string;
}

const StoryCard = ({ image, title, summary }: StoryCardProps) => {
  return (
    <Card>
      {image && <ImgHandler imgSrc={image} altText={image?.title} />}
      <div className="story-info">
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </Card>
  );
};

export default StoryCard;
