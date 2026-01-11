/* pages/_document.js */
/* eslint-disable */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { ServerStyleSheets } from "@mui/styles";

const GOOGLE_FONTS_HREF =
  "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons&display=swap";

const FONTAWESOME_HREF =
  "https://use.fontawesome.com/releases/v5.0.10/css/all.css";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/img/favicon.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/img/apple-icon.png" />

          {/* Preconnects (reduce connection setup cost) */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://use.fontawesome.com" crossOrigin="anonymous" />

          {/* Fonts: load non-blocking */}
          <link rel="preload" as="style" href={GOOGLE_FONTS_HREF} />
          <link
            rel="stylesheet"
            href={GOOGLE_FONTS_HREF}
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            <link rel="stylesheet" href={GOOGLE_FONTS_HREF} />
          </noscript>

          {/* FontAwesome: load non-blocking */}
          <link rel="preload" as="style" href={FONTAWESOME_HREF} />
          <link
            rel="stylesheet"
            href={FONTAWESOME_HREF}
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            <link rel="stylesheet" href={FONTAWESOME_HREF} />
          </noscript>

          {/* Nepcha Analytics (loads after interactive so it won't block render) */}
          <Script
            strategy="afterInteractive"
            data-site="YOUR_DOMAIN_HERE"
            src="https://api.nepcha.com/js/nepcha-analytics.js"
          />
        </Head>

        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;
