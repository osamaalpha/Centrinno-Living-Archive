import styled from "styled-components";
import { textColor } from "../../styles";

export const StoryPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: lightgrey;
  .hero-component {
    .image-container {
      aspect-ratio: 16/9;
      overflow: hidden;
      display: flex;
      align-items: center;
      img {
        width: 100%;
        max-width: 100%;
        object-fit: cover;
      }
    }
  }
`;

export const Sidebar = styled.aside`
  position: sticky;
  left: 0;
  top: 0;
  width: 30%;
  heigth: 100%;
  border: 1px solid ${textColor};
  border-right: 0;

  .cell {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 32px;
    border-bottom: 1px solid ${textColor};
    font-size: 24px;

    &.graph-cell {
      height: auto;
      aspect-ratio: 1;
      display: block;
      padding: 0;

      .graph-container {
        padding: 0;
        width: 100%;
        height: 100%;
        div {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          svg {
            width: 100% !important;
            height: 100% !important;
            padding-top: 5%;
            transform: translateX(-38%);
            overflow: visible;
          }
        }
      }
    }

    span {
      font-weight: bold;
    }
  }
`;

export const StoryBody = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  overflow-y: scroll;
  padding: 32px;
  border: 1px solid ${textColor};
`;
