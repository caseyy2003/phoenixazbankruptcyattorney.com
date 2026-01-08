/* eslint-disable */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Link from "next/link";
import dynamic from "next/dynamic";

const Gavel = dynamic(() => import("@mui/icons-material/Gavel"));
const AssignmentTurnedIn = dynamic(() => import("@mui/icons-material/AssignmentTurnedIn"));
const Shield = dynamic(() => import("@mui/icons-material/Shield"));

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import productStyle from "/styles/jss/nextjs-material-kit-pro/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(() => ({
  ...productStyle,

  // Keep productStyle.section for centering, but tighten it up
  tightSection: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 12,
    marginBottom: 12,
  },

  tightTitle: {
    marginTop: 0,
    marginBottom: 6,
    textAlign: "center",
  },

  tightDescription: {
    marginTop: 0,
    marginBottom: 12,
    textAlign: "center",
  },

  hoverEffect: {
    transition: "transform 0.25s ease",
    cursor: "pointer",
    "&:hover": { transform: "scale(1.02)" },
  },

  cardLink: {
    display: "block",
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function PageTopicSelector() {
  const classes = useStyles();

  return (
    <div className={classes.section + " " + classes.tightSection}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={9} md={9}>
          <h2 className={classes.title + " " + classes.tightTitle}>
            Arizona Bankruptcy Guidance and Resources
          </h2>
          <h5 className={classes.description + " " + classes.tightDescription}>
            Practical, plain-English guides for people across Arizona—built by a Phoenix-based bankruptcy law firm to help
            you understand your options and take the next step with confidence.
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer justifyContent="center">
        {/* Chapter 7 */}
        <GridItem xs={12} sm={4} md={4}>
          <Link href="/chapter-7-bankruptcy-arizona" passHref legacyBehavior>
            <a className={classes.cardLink}>
              <div className={classes.hoverEffect}>
                <InfoArea
                  title="Chapter 7 in Arizona"
                  description="Learn how chapter 7 works, what it can eliminate, and the key issues Arizona filers should understand before moving forward."
                  icon={Gavel}
                  iconColor="info"
                  vertical
                />
              </div>
            </a>
          </Link>
        </GridItem>

        {/* Chapter 13 */}
        <GridItem xs={12} sm={4} md={4}>
          <Link href="/chapter-13-bankruptcy-arizona" passHref legacyBehavior>
            <a className={classes.cardLink}>
              <div className={classes.hoverEffect}>
                <InfoArea
                  title="Chapter 13 in Arizona"
                  description="See how chapter 13 can help you catch up on important debts and protect assets through a structured repayment plan."
                  icon={AssignmentTurnedIn}
                  iconColor="success"
                  vertical
                />
              </div>
            </a>
          </Link>
        </GridItem>

        {/* Exemptions */}
        <GridItem xs={12} sm={4} md={4}>
          <Link
            href="/arizona-bankruptcy-exemptions"
            passHref
            legacyBehavior
          >
            <a className={classes.cardLink}>
              <div className={classes.hoverEffect}>
                <InfoArea
                  title="Arizona Bankruptcy Exemptions"
                  description="Understand what Arizona law may allow you to keep—and the common exemption pitfalls we see in real cases."
                  icon={Shield}
                  iconColor="danger"
                  vertical
                />
              </div>
            </a>
          </Link>
        </GridItem>
      </GridContainer>
    </div>
  );
}
