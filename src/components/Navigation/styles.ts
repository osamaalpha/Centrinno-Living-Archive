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

  .container {
    overflow: hidden;

    .menu-items-container {
      transition: transform 0.4s ease-in-out;

      a {
        margin-right: 8px;
        transition: opacity 0.3s 0.2s ease-in-out;
        position: relative;
      }
    }
  }

  &.closed {

    .menu-items-container {
      transform: translateX(128%);
      a {
        opacity: 0;
      }
    }
  }

  &.open {

    .menu-items-container {
      transform: translateX(0);
      a {
        opacity: 1;
      }
    }
  }

  button {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
    font-size: 14px;
  }
`;
