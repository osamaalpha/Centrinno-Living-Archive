import styled from "styled-components";
import { backgroundColor, textColor } from "../../styles";

export const AboutMain = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 40px;
  border: 1px solid ${textColor};
  overflow-y: scroll;
  background-color: ${backgroundColor};

  p {
    width: 50%;
  }
`;
