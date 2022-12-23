import styled from "styled-components";
import { backgroundColor } from "../../styles";

export const TaxonomyPage = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 80px 32px 32px 32px;
  background-color: ${backgroundColor};

  h2 {
    margin-bottom: 32px;
  }

  div.results {
    display: flex;
    flex-wrap: wrap;
    .filter-element {
        button {
            margin-right: 8px;
        }
    }
  }
`;
