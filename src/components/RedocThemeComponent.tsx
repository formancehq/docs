import React from "react";
import { RedocStandalone } from "redoc";
import { ColorMode, useColorMode } from "@docusaurus/theme-common";
import v1json from "../../openapi/v1.10.json";
import v2json from "../../openapi/v2.0.json";
import genericConnector from "../../openapi/generic-connector.json";

type RedocTheme = Parameters<typeof RedocStandalone>[0]["options"]["theme"];

const redoclySpecPaths = {
  "api-v1-10": v1json,
  "api-v2-0": v2json,
  "api-generic-connector": genericConnector,
};

const themes: Record<ColorMode, RedocTheme> = {
  dark: {
    breakpoints: {
      medium: "170rem",
      large: "256rem",
    },
    colors: {
      primary: {
        main: "#7a9394",
      },
      text: {
        primary: "#d5e1e1",
        secondary: "#d5e1e1",
      },
      http: {
        link: "#7a9394",
      },
      border: {
        dark: "#d5e1e1",
      },
    },
    sidebar: {
      backgroundColor: "#011f23",
      groupItems: { activeBackgroundColor: "#0e2a2d" },
      level1Items: { activeBackgroundColor: "#133336" },
      textColor: "#d5e1e1",
    },
    typography: {
      code: { color: "#426367" },
      headings: { fontFamily: "Polymath" },
      links: { color: "#7a9394" },
      fontFamily: "Polymath",
      fontSize: "1rem",
    },
    rightPanel: {
      backgroundColor: "#0e2a2d",
    },
    codeBlock: {
      backgroundColor: "#000000",
    },
  },
  light: {
    breakpoints: {
      medium: "170rem",
      large: "256rem",
    },
    colors: {
      primary: {
        main: "#7a9394",
      },
      text: {
        primary: "#011f23",
      },
    },
    sidebar: {
      backgroundColor: "#f6f9f9",
      groupItems: { activeBackgroundColor: "#cdcdcd51" },
      level1Items: { activeBackgroundColor: "#e7e5e551" },
      textColor: "#011f23",
    },
    typography: {
      code: { color: "#ff0000" },
      headings: { fontFamily: "Polymath" },
      fontFamily: "Polymath",
      fontSize: "1rem",
    },
    rightPanel: {
      backgroundColor: "#303846",
    },
    codeBlock: {
      backgroundColor: "#000000",
    },
  },
};

const RedocThemeComponent = ({ specID }) => {
  const { colorMode } = useColorMode();

  return (
    <RedocStandalone
      options={{
        disableSearch: true,
        hideRequestPayloadSample: true,
        hideLoading: false,
        nativeScrollbars: false,
        hideSecuritySection: false,
        theme: themes[colorMode],
      }}
      spec={redoclySpecPaths[specID]}
    />
  );
};

export default RedocThemeComponent;
