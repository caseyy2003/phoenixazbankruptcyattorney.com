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
    gap: "1em",
    listStyleType: "none",
    padding: 0,
    margin: "0 auto",
    color: "#333",
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

// Update these paths to match your phoenixazbankruptcyattorney.com slugs
const cities = [
  { city: "Phoenix", path: "/" },
  { city: "Mesa", path: "/mesa-az-bankruptcy-attorney" },
  { city: "Gilbert", path: "/gilbert-az-bankruptcy-attorney" },
  { city: "Tucson", path: "/tucson-az-bankruptcy-attorney" },
  { city: "Prescott", path: "/prescott-az-bankruptcy-lawyer" },
];

export default function AzAreas() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <GridContainer justifyContent="center" className={classes.gridTight} spacing={0}>
        <GridItem xs={12} sm={10} md={10} className={classes.gridTight}>
          <h2 className={`${classes.title} ${classes.titleTight}`}>We Serve All of Arizona</h2>

          <p className={classes.para}>
  We work with individuals and families across Arizona. No matter where you live, feel free to schedule a consultation. Phone or virtual appointments are available. Choose a city below to view local bankruptcy guidance, common
  concerns we see in that area, and next-step resources.
</p>


          <ul
            className={classes.gridList}
            style={{ listStyleType: "none", padding: 0, margin: 0, color: "#333" }}
          >
            {cities.map(({ city, path }) => (
              <li key={city}>
                <Link href={path} passHref legacyBehavior>
                  <a className={classes.link}>{city}</a>
                </Link>
              </li>
            ))}
          </ul>

          <br />
        </GridItem>
      </GridContainer>
    </div>
  );
}
