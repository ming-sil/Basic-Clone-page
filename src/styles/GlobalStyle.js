import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  bgColor: "lightgray",
  color: "white",
  mainColor: "#252422",
  highlightColor: "#f9cdcd",
};

export const Globalstyled = createGlobalStyle`
 ${reset}

 body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${mainStyle.bgColor};
        color: ${mainStyle.color};
        letter-spacing: -1px;
        word-break: keep-all;
    }

    a{
        text-decoration: none;
        color: ${mainStyle.color};
    }

`;
