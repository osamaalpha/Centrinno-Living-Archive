import styled from "styled-components";
import { accentColor, backgroundColor, textColor } from "../../styles";

export const TaxonomyPage = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: ${backgroundColor};

  .default-page {
    position: relative;
    padding: 32px;
    border: 1px solid ${textColor};
    background-color: ${backgroundColor};
    border-top: none;
    h2 {
      margin-bottom: 32px;
      font-size: 40px;
    }
  }

  input {
    width: 100%;
    height: 96px;
    background-color: ${accentColor};
    border: 1px solid ${textColor};
    border-radius: 0;
    outline: none;
    padding: 16px;
    margin-bottom: 24px;
    font-size: 40px;
    font-weight: bold;
    &::-webkit-input-placeholder {
      color: black; 
      opacity: 0.2;
    }
  }

  .grid-section {
    margin: -1px 0 0 0;
  }

  div.results {
    display: flex;
    flex-wrap: wrap;
    row-gap: 8px;

    .filter-element {
      button {
        margin-right: 8px;
        cursor: pointer;

        p {
          margin: 0;
        }
      }
    }

    &.tiny {
      margin-top: 56px;
    }
  }
`;
