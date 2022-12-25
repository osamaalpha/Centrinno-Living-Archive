import styled from "styled-components";
import { textColor } from "../../styles";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid ${textColor};

  .img-container {
    aspect-ratio: 1;
    overflow: hidden;
    width: 100%;
    display: flex;
    alignt-items: flex-start;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  .story-info {
    heigth: 40%;
    padding: 24px;
    
    p {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 24px;
    }

    button {
      margin-top: 16px;
    }
  }
`;
