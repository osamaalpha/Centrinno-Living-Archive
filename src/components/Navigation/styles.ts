import styled from "styled-components";

export const NavigationBox = styled.nav`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 10;
  width: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  button {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
