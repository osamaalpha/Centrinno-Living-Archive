import styled from "styled-components";
import { backgroundColor, textColor } from "../../styles";

export const GridSection = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  place-items: center;
  align-items: stretch;
  justify-items: stretch;
  padding: 56px 32px;
  margin: 32px 0;
  border: 1px solid ${textColor};
  background-color: ${backgroundColor};
`;
