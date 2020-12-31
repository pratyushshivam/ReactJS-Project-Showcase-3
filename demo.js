import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";

import Slider from "./components/Slider";
import Cursor from "./components/Cursor";
import { theme } from "./app/theme";
import { GlobalStyles } from "./app/styles";
import isEdge from "./utils/isEdge";
// import "./index.css";

import { projectList } from "./app/data";

const sliderSettings = {
  data: projectList,
  speed: 2200,
  easing: "expo",
  bgColor: "transparent",
  buttonHref: "https://closburn.web.app/",
  buttonTarget: "_self",
  buttonText: "Go to Website",
  showButton: true,
};

const Wrapper = styled.section`
  width: auto;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(14, 14, 66, 1) 0%,
    rgba(7, 3, 64, 1) 21%,
    rgba(11, 7, 84, 1) 51%,
    rgba(8, 25, 79, 1) 89%
  );
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
`;

ReactDOM.render(
  <Fragment>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {!isEdge && <Cursor />}
      <Wrapper id="projects">
        <Slider sliderSettings={sliderSettings} />
      </Wrapper>
    </ThemeProvider>
  </Fragment>,
  document.getElementById("root")
);
