
import React, { useEffect } from "react";
import Head from "next/head";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ThemeProvider as StylesThemeProvider } from "@mui/styles";

// Global CSS
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



`);
    document.insertBefore(comment, document.documentElement);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Removed Google Maps JS API: it was render-blocking and not needed for an iframe embed map */}
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE" /> */}

        {/* Let each page control its own title via PerfPageLayout */}
        <title>Yontz Law, PLLC</title>
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
