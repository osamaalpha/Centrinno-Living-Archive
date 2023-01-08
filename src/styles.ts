import styled, { createGlobalStyle } from "styled-components";
import theme from "styled-theming";
import PropTypes from "prop-types";

export const backgroundColor = theme("mode", {
  light: "#d4d4d4",
  dark: "#000000",
});

export const accentColor = theme("mode", {
  light: "#D5EFEF",
  dark: "#D5EFEF",
});

export const textColor = theme("mode", {
  light: "#000000",
  dark: "#ffffff",
});

export const buttonColor = theme.variants("mode", "variant", {
  default: { light: "#CFD4FF", dark: "#CFD4FF" },
  alt: { light: "#D5EFEF", darK: "#D5EFEF" },
  category: { light: "#f98d28", dark: "#f98d28" },
  tag: { light: "#faaea5", dark: "#faaea5" },
});

export const GlobalStyles = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  &.blocked {
    overflow: hidden;
  }
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background-color: ${backgroundColor};
}

a {
    color: ${textColor};
    text-decoration: none;
    display: inline-block;
    font-weight: 800;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer
    * {
        color: ${textColor};
    }
  }

  p {
    margin-bottom: 16px;
    line-height: 1.4;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  display: block;
  background: ${buttonColor};
  outline: none;
  border-radius: 0;
  border: 1px solid ${textColor};
  color: ${textColor};
  padding: 12px 25px;
  cursor: pointer;
  font-size: 14px;
`;

Button.propTypes = {
  // @ts-ignore
  variant: PropTypes.oneOf(["default", "category", "tag", "alt"]),
};

Button.defaultProps = {
  // @ts-ignore
  variant: "default",
};
