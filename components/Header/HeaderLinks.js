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
            href="/"
            key="Phoenix"
            className={classes.dropdownLink}
          >
            Bankruptcy Attorneys Serving Phoenix AZ
          </Link>,
            
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
              href="/chapter-7-bankruptcy-arizona"
              key="basics"
              className={classes.dropdownLink}
            >
              Chatper 7 Bankruptcy in Arizona Guide 
            </Link>,
            <Link
            href="/chapter-13-bankruptcy-arizona"
            key="basics"
            className={classes.dropdownLink}
          >
            Chapter 13 Bankruptcy in Arizona Guide 
          </Link>,
          <Link
          href="/arizona-bankruptcy-exemptions"
          key="basics"
          className={classes.dropdownLink}
        >
          Arizona Bankruptcy Exemptions Guide
        </Link>,
            <Link
              href="/does-bankruptcy-stop-creditors"
              key="creditors"
              className={classes.dropdownLink}
            >
              Does Bankruptcy Stop Creditors?
            </Link>,
            <Link
              href="/chapter-13-vehicle-cram-down"
              key="Chapter 13 Cramdown"
              className={classes.dropdownLink}
            >
              The Chapter 13 Vehicle Cramdown Explained
            </Link>,
            <Link
            href="/bankruptcy-and-lawsuit-debt"
            key="Chapter 13 Cramdown"
            className={classes.dropdownLink}
          >
            Does Bankruptcy Clear Civil Lawsuit Debt?
          </Link>,
          ]}
        />
      </ListItem>
{/* Blog */}
<ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Blog"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={MenuBook}
          dropdownList={[
            <Link
              href="/blog/u-s-deficit-responsibility"
              key="basics"
              className={classes.dropdownLink}
            >
              Who Is Responsible for the U.S. Deficit? 
            </Link>,
            <Link
            href="/blog/history-of-us-tariffs"
            key="basics"
            className={classes.dropdownLink}
          >
            A Brief History of Tariffs
          </Link>,
          <Link
          href="/blog/smart-financial-habits-to-incorporate-now"
          key="basics"
          className={classes.dropdownLink}
        >
          Smart Financial Habits to Incorporate Now
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
