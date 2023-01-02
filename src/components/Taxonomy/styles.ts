import styled from "styled-components";
import { backgroundColor, textColor } from "../../styles";

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
    border-top: none;
    h2 {
      margin-bottom: 32px;
      font-size: 40px;
    }

    div.results {
      display: flex;
      flex-wrap: wrap;
      row-gap: 8px;

      .filter-element {
        button {
          margin-right: 8px;
          cursor: pointer;
        }
      }
    }
  }
`;
