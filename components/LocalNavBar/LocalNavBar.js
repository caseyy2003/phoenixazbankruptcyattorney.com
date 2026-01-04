/*eslint-disable*/
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "/components/CustomButtons/Button.js";
import Header from "/components/Header/Header.js";
import Explore from "@mui/icons-material/Explore";
import AccountCircle from "@mui/icons-material/AccountCircle";
import navbarsStyle from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/navbarsStyle.js";
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Link from "next/link";

const useStyles = makeStyles(navbarsStyle);

export default function LocalNavBar() {
  const classes = useStyles();

  return (
    <Header
      brand="Maryland Bankruptcy"
      color="white"
      links={
        <List className={classes.list + " " + classes.mlAuto}>
          {/* National Home */}
          <ListItem className={classes.listItem}>
            <Button
              component={Link}
              href="/"
              className={classes.navLink + " " + classes.navLinkActive}
              color="transparent"
            >
              <Explore className={classes.dropdownIcons} /> Home
            </Button>
          </ListItem>

          {/* Maryland Home */}
          <ListItem className={classes.listItem}>
            <Button
              component={Link}
              href="/bankruptcy-info-by-state/maryland"
              className={classes.navLink}
              color="transparent"
            >
              <Explore className={classes.dropdownIcons} /> Maryland Home
            </Button>
          </ListItem>

          {/* Maryland Bankruptcy Resources */}
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              navDropdown
              hoverColor="info"
              buttonText="Maryland Bankruptcy Resources"
              buttonProps={{
                className: classes.navLink,
                color: "transparent",
              }}
              buttonIcon={AccountCircle}
              dropdownList={[
                <Link
                  href="/bankruptcy-info-by-state/maryland/chapter-7-bankruptcy-maryland"
                  key="md-chapter-7"
                  className={classes.dropdownLink}
                >
                  Chapter 7 Bankruptcy in Maryland
                </Link>,
                <Link
                  href="/bankruptcy-info-by-state/maryland/chapter-13-bankruptcy-maryland"
                  key="md-chapter-13"
                  className={classes.dropdownLink}
                >
                  Chapter 13 Bankruptcy in Maryland
                </Link>,
                <Link
                  href="/bankruptcy-info-by-state/maryland/maryland-bankruptcy-exemptions"
                  key="md-exemptions"
                  className={classes.dropdownLink}
                >
                  Maryland Bankruptcy Exemptions
                </Link>,
              ]}
            />
          </ListItem>

          {/* Maryland Bankruptcy Tools */}
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              navDropdown
              hoverColor="info"
              buttonText="Maryland Bankruptcy Tools"
              buttonProps={{
                className: classes.navLink,
                color: "transparent",
              }}
              buttonIcon={AccountCircle}
              dropdownList={[
                <Link
                  href="/bankruptcy-exemption-reference-guide/maryland"
                  key="maryland-bankruptcy-exemption-reference-guide"
                  className={classes.dropdownLink}
                >
                  Maryland Bankruptcy Exemption List
                </Link>,
              ]}
            />
          </ListItem>
        </List>
      }
    />
  );
}
