import styled from "styled-components";

export const StoryPage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  display: block;
  background-color: lightgrey;
  .hero-component {
    height: 90vh;
    width: 100vw;
    aspect-ratio: 16/9;
    overflow: hidden;
    img {
      width: 100%;
      max-width: 100%;
      object-fit: cover;
    }
  }
`;
