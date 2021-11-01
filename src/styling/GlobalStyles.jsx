import React from "react";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
// Variables
:root {
  --font-primary: "Inter", sans-serif;

  --color-dark: hsla(0, 0%, 9%, 1.0);
  --color-light: hsla(0, 0%, 90%, 1.0);

  
  --shadow-color: hsla(0, 0%, 20%, .4);
  --shadow: 1px 2px 2px var(--shadow-color), 2px 4px 4px var(--shadow-color),
		4px 8px 8px var(--shadow-color), 8px 16px 16px var(--shadow-color),
		16px 32px 32px var(--shadow-color);
}

  /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background-color: var(--color-dark);
  font-family: var(--font-primary);
  color: var(--color-light);
  font-weight: 300;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
