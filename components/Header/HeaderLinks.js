/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import MenuBook from "@mui/icons-material/MenuBook";
import Gavel from "@mui/icons-material/Gavel";

import Info from "@mui/icons-material/Info";
import LocationOn from "@mui/icons-material/LocationOn";

import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";


import styles from "/styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const { dropdownHoverColor } = props;
  const classes = useStyles();

  return (
    <List className={classes.list + " " + classes.mlAuto}>
      {/* Home */}
      <ListItem className={classes.listItem}>
        <Link href="/" className={classes.navLink}>
          Home
        </Link>
      </ListItem>

      {/* About */}
      <ListItem className={classes.listItem}>
        <Link href="/about-us" className={classes.navLink}>
          <Info className={classes.icons} /> About
        </Link>
      </ListItem>

      {/* Services */}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Services"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Gavel}
          dropdownList={[
            <Link
              href="/mesa-az-bankruptcy-attorney"
              key="Mesa"
              className={classes.dropdownLink}
            >
              Bankruptcy Attorneys Serving Mesa AZ
            </Link>,
            <Link
              href="/prescott-az-bankruptcy-lawyer"
              key="Prescott"
              className={classes.dropdownLink}
            >
              Bankruptcy Lawyers Serving Prescott AZ
            </Link>,
            <Link
            href="/tucson-az-bankruptcy-attorney"
            key="Tucson"
            className={classes.dropdownLink}
          >
            Bankruptcy Attorneys Serving Tucson AZ
          </Link>,
            <Link
              href="/bankruptcy-faq"
              key="faq"
              className={classes.dropdownLink}
            >
              Bankruptcy FAQs
            </Link>,
          ]}
        />
      </ListItem>

    

      {/* Resources */}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Resources"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={MenuBook}
          dropdownList={[
            <Link
              href="/bankruptcy-basics"
              key="basics"
              className={classes.dropdownLink}
            >
              Bankruptcy Basics
            </Link>,
            <Link
              href="/stop-wage-garnishment-phoenix"
              key="garnishment"
              className={classes.dropdownLink}
            >
              Stop Wage Garnishment
            </Link>,
            <Link
              href="/rebuild-credit-after-bankruptcy"
              key="credit"
              className={classes.dropdownLink}
            >
              Rebuild Credit After Bankruptcy
            </Link>,
          ]}
        />
      </ListItem>

      {/* Contact */}
      <ListItem className={classes.listItem}>
        <Link href="/contact-us" className={classes.navLink}>
          <LocationOn className={classes.icons} /> Contact
        </Link>
      </ListItem>

      
    </List>
  );
}

HeaderLinks.defaultProps = {
  dropdownHoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};
