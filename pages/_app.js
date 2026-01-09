/*!
=========================================================
* NextJS Material Kit PRO v1.3.1 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/ct-nextjs-material-kit-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { useEffect } from "react";
import Head from "next/head";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ThemeProvider as StylesThemeProvider } from "@mui/styles";
// pages/_app.js
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import "/styles/scss/nextjs-material-kit-pro.scss";
import "/styles/css/react-demo.css";
import "animate.css/animate.min.css";

const theme = createTheme({
  components: {
    MuiSelect: {
      defaultProps: {
        variant: "standard",
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#fff !important",
          },
        },
      },
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const comment = document.createComment(`

=========================================================
* NextJS Material Kit PRO v1.3.1 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
    document.insertBefore(comment, document.documentElement);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE" />
        <title>NextJS Material Kit by Creative Tim</title>
      </Head>

      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <StylesThemeProvider theme={theme}>
            <Component {...pageProps} />
          </StylesThemeProvider>
        </MuiThemeProvider>
      </StyledEngineProvider>
    </React.Fragment>
  );
}
