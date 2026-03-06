/* eslint-disable */
// Adapted to avoid duplicate phrasing vs your other site

import React from "react";
import Link from "next/link";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import makeStyles from "@mui/styles/makeStyles";
import sectionTextStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js";

const useStyles = makeStyles((theme) => ({
  ...sectionTextStyle,

  wrapper: {
    marginTop: "2em",
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
  },

  titleTight: {
    marginTop: 0,
    marginBottom: "0.5rem",
  },

  subTitle: {
    marginTop: "1rem",
    marginBottom: "0.5rem",
    color: "#111",
    fontSize: "1.05rem",
    fontWeight: 600,
  },

  para: {
    color: "#333",
    opacity: 1,
    display: "block",
    marginTop: 0,
    marginBottom: "0.75rem",
    lineHeight: 1.7,
  },

  gridList: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "0.75em 1em",
    margin: "0 auto 0.75rem",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },

  link: {
    color: "#0656d3",
    textDecoration: "underline",
    fontWeight: 500,
    transition: "color 0.2s",
    "&:hover, &:focus": {
      color: "#002060",
      outline: "none",
    },
  },

  gridTight: {
    paddingBottom: 0,
    marginBottom: 0,
  },
}));

const metroCities = [
  { city: "Phoenix", path: "/" },
  { city: "Mesa", path: "/mesa-az-bankruptcy-attorney" },
  { city: "Gilbert", path: "/gilbert-az-bankruptcy-attorney" },
];

const otherArizonaCities = [
  { city: "Tucson", path: "/tucson-az-bankruptcy-attorney" },
  { city: "Prescott", path: "/prescott-az-bankruptcy-lawyer" },
];

function CityLinks({ cities, classes }) {
  return (
    <ul
      className={classes.gridList}
      style={{ listStyleType: "none", padding: 0, color: "#333" }}
    >
      {cities.map(({ city, path }) => (
        <li key={city}>
          <Link href={path} passHref legacyBehavior>
            <a className={classes.link}>{city} bankruptcy attorney</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function AzAreas() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <GridContainer justifyContent="center" className={classes.gridTight} spacing={0}>
        <GridItem xs={12} sm={10} md={10} className={classes.gridTight}>
          <h2 className={`${classes.title} ${classes.titleTight}`}>
            Bankruptcy Help Across Arizona
          </h2>

          <p className={classes.para}>
            We work with individuals and families in the Phoenix metro area and in
            communities across Arizona. In office, phone and virtual appointments are available.
            Choose a city below to find local bankruptcy guidance, common issues we
            often see in that area, and practical next-step resources.
          </p>

          <h3 className={classes.subTitle}>Phoenix Metro Area</h3>
          <CityLinks cities={metroCities} classes={classes} />

          <h3 className={classes.subTitle}>Other Arizona Cities We Serve</h3>
          <CityLinks cities={otherArizonaCities} classes={classes} />

          <br />
        </GridItem>
      </GridContainer>
    </div>
  );
}