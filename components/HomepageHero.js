import React from "react";
import Image from "next/image";
import makeStyles from "@mui/styles/makeStyles";

import Button from "/components/CustomButtons/Button.js";

const useStyles = makeStyles((theme) => ({
  hero: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 300px",
    gridTemplateAreas: `
      "title portrait"
      "attorney portrait"
      "summary portrait"
      "actions portrait"
    `,
    columnGap: theme.spacing(5),
    alignItems: "center",
    width: "100%",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "76px minmax(0, 1fr)",
      gridTemplateAreas: `
        "title title"
        "portrait attorney"
        "summary summary"
        "actions actions"
      `,
      gap: theme.spacing(1.5, 2),
    },
  },
  title: {
    gridArea: "title",
    margin: "0 0 14px",
    color: "#fff",
    fontFamily: '"Roboto Slab", "Times New Roman", serif',
    fontSize: "clamp(2.25rem, 5vw, 3.65rem)",
    fontWeight: 700,
    lineHeight: 1.08,
    textShadow: "0 2px 18px rgba(0, 0, 0, 0.35)",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 2,
      fontSize: "clamp(2rem, 10vw, 2.65rem)",
    },
  },
  attorney: {
    gridArea: "attorney",
    margin: "0 0 14px",
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
      margin: 0,
    },
  },
  attorneyName: {
    display: "block",
    color: "#fff",
    fontSize: "1.15rem",
    fontWeight: 700,
    lineHeight: 1.3,
  },
  experience: {
    display: "block",
    marginTop: 3,
    color: "#f2cf7b",
    fontSize: "0.95rem",
    fontWeight: 600,
    lineHeight: 1.35,
  },
  summary: {
    gridArea: "summary",
    maxWidth: 650,
    margin: "0 0 18px",
    color: "#f5f7fa",
    fontSize: "1.05rem",
    lineHeight: 1.65,
    [theme.breakpoints.down("sm")]: {
      margin: "2px 0 4px",
      fontSize: "0.98rem",
      lineHeight: 1.5,
    },
  },
  actions: {
    gridArea: "actions",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      alignItems: "stretch",
      flexDirection: "column",
      gap: theme.spacing(1),
    },
  },
  primaryAction: {
    minHeight: 48,
    margin: 0,
    paddingLeft: 22,
    paddingRight: 22,
    whiteSpace: "normal",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  phone: {
    display: "inline-flex",
    minHeight: 44,
    alignItems: "center",
    color: "#fff",
    fontSize: "0.98rem",
    fontWeight: 600,
    textDecoration: "underline",
    textUnderlineOffset: 3,
    "&:hover, &:focus-visible": {
      color: "#f2cf7b",
    },
    "&:focus-visible": {
      outline: "3px solid #f2cf7b",
      outlineOffset: 3,
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  portrait: {
    gridArea: "portrait",
    justifySelf: "end",
    width: 300,
    overflow: "hidden",
    border: "3px solid rgba(255, 255, 255, 0.82)",
    borderRadius: 18,
    background: "#171717",
    boxShadow: "0 18px 45px rgba(0, 0, 0, 0.35)",
    [theme.breakpoints.down("sm")]: {
      justifySelf: "start",
      width: 76,
      borderWidth: 2,
      borderRadius: "50%",
      boxShadow: "0 8px 22px rgba(0, 0, 0, 0.3)",
    },
  },
  portraitImage: {
    display: "block",
    width: "100%",
    height: "auto",
  },
}));

export default function HomepageHero() {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <h1 className={classes.title}>Bankruptcy Lawyers in Phoenix, AZ</h1>

      <div className={classes.attorney}>
        <span className={classes.attorneyName}>Casey Yontz, Bankruptcy Attorney</span>
        <span className={classes.experience}>18+ Years of Bankruptcy Experience</span>
      </div>

      <p className={classes.summary}>
        Get straightforward guidance about Chapter 7, Chapter 13, wage garnishment,
        creditor lawsuits, foreclosure, repossession, and overwhelming debt from an
        experienced Arizona bankruptcy attorney.
      </p>

      <div className={classes.actions}>
        <Button
          color="primary"
          size="lg"
          href="/consultation-request"
          popupRoutes={[]}
          className={classes.primaryAction}
        >
          Book a Free Bankruptcy Consultation
        </Button>
        <a className={classes.phone} href="tel:+14808860339">
          Call 480-886-0339
        </a>
      </div>

      <div className={classes.portrait}>
        <Image
          src="/img/casey.webp"
          alt="Casey Yontz, bankruptcy attorney at Yontz Law"
          width={512}
          height={512}
          priority
          sizes="(max-width: 959px) 76px, 300px"
          className={classes.portraitImage}
        />
      </div>
    </div>
  );
}