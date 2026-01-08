/* components/PerfPageLayout.js */
/* eslint-disable */
import React from 'react';
import Head  from 'next/head';
import Image from 'next/image';
import makeStyles from '@mui/styles/makeStyles';
import classNames  from 'classnames';

import Header      from '/components/Header/Header.js';
import HeaderLinks from '/components/Header/HeaderLinks.js';
import Footer      from '/components/Footer/Footer.js';

import HeroImgPlain from '/components/HeroImgPlain';
import landingPageStyle from '/styles/jss/nextjs-material-kit-pro/pages/landingPageStyle.js';

/* ---------- styles ---------- */
const useStyles = makeStyles((theme) => ({
  ...landingPageStyle,

  heroRoot: {
    position: 'relative',
    width: '100%',
    minHeight: '63vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#000', // fallback while bg loads
  },
  heroImg: {
    position: 'absolute !important',
    inset: 0,
    objectFit: 'cover',
    zIndex: 0,
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4))',
    zIndex: 1,
    pointerEvents: 'none',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    maxWidth: 900,
    padding: theme.spacing(4),
    color: '#fff',
  },
  contentLift: {
    marginTop: '-85px',
  },
}));

/* Build the Next optimizer URL (must use allowed widths like 640/828/1080/1200/1920) */
const makeImgURL = (src, w, q = 48) =>
  `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=${q}`;

export default function PerfPageLayout({
  title,
  description,
  canonical,
  hero = {
    srcWebp: '',
    srcJpg:  '',
    alt: '',
    width: 1920,
    height: 960,
    headline: '',
    subHeadline: '',
    cta: null,
    usePlainImg: false,
    useBg: false, // NEW
  },
  children,
  ...restHeaderProps
}) {
  const classes = useStyles();
  const heroSrc = hero.srcWebp || hero.srcJpg;

  // CSS background path (keeps H1 as LCP). Use allowed widths 640 (1x) & 828 (2x).
  const bg1x = heroSrc ? makeImgURL(heroSrc, 640) : '';
  const bg2x = heroSrc ? makeImgURL(heroSrc, 828) : '';
  const heroBgStyle =
    hero.useBg && heroSrc
      ? {
          // Fallback for browsers without image-set
          background: `url("${bg1x}") center / cover no-repeat`,
          // Responsive pick for modern browsers
          backgroundImage: `image-set(
            url("${bg1x}") 1x,
            url("${bg2x}") 2x
          )`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }
      : undefined;

  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {canonical   && <link rel="canonical" href={canonical} />}
        <meta name="robots" content="index,follow" />
      </Head>

      <Header
        brand="Yontz Law, PLLC."
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{ height: 300, color: 'info' }}
        {...restHeaderProps}
      />

      {/* HERO */}
      <section className={classes.heroRoot} style={heroBgStyle}>
        {heroSrc && !hero.useBg && (
          hero.usePlainImg ? (
            <HeroImgPlain
              srcWebp={hero.srcWebp}
              srcJpg={hero.srcJpg}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              sizes="(max-width: 639px) 100vw, 100vw"
              style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:0 }}
            />
          ) : (
            <Image
              src={heroSrc}
              alt={hero.alt}
              layout="fill"
              priority
              sizes="(max-width: 639px) 100vw, 100vw"
              className={classes.heroImg}
            />
          )
        )}

        <div className={classes.heroOverlay} />

        <div className={classes.heroContent}>
          {hero.headline    && <h1 className={classes.title}>{hero.headline}</h1>}
          {hero.subHeadline && <h4>{hero.subHeadline}</h4>}
          {hero.cta}
        </div>
      </section>

      {/* Main body */}
      <div className={classNames(classes.main, classes.mainRaised, classes.contentLift)}>
        <div className={classes.container}>{children}</div>
      </div>

      <Footer
        theme="white"
        content={
          <div style={{ textAlign: "center", padding: "1rem", fontSize: "0.9rem", color: "#555" }}>
  <div>
    © {new Date().getFullYear()} Yontz Law, PLLC.
  </div>
  <div style={{ marginTop: "0.5rem" }}>
    <a href="mailto:help@ylglaw.com" style={{ color: "#555", textDecoration: "none" }}>
      help@ylglaw.com
    </a>
    <br />
    480-886-0339
    <br />
    4425 E Agave Rd. STE 106, Phoenix, AZ 85044
  </div>
  <div style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "#777" }}>
    The content on this site is informational only and not legal advice. Always consult with a qualified Arizona bankruptcy attorney directly for legal guidance
    Absent a written fee agreement, no attorney-client relationship is created.
  </div>
  <div style={{ marginTop: "0.5rem" }}>
  <a href="/about-us" style={{ margin: "0 10px", color: "#555", textDecoration: "none" }}>
    About Us
  </a>
  {" | "}
  <a href="/privacy-policy" style={{ margin: "0 10px", color: "#555", textDecoration: "none" }}>
    Privacy Policy
  </a>
  {" | "}
  <a href="/editorial-policy" style={{ margin: "0 10px", color: "#555", textDecoration: "none" }}>
    Editorial Policy
  </a>
  {" | "}
  <a href="/terms-and-conditions" style={{ margin: "0 10px", color: "#555", textDecoration: "none" }}>
    Terms & Conditions
  </a>
</div>

</div>

        }
      />
    </>
  );
}