import styled from "styled-components";

export const StoryPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
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
