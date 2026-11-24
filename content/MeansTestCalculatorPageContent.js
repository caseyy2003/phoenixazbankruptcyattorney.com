/* eslint-disable */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Link from "next/link";
//import Button from "components/CustomButtons/Button.js";
//import BankruptcyQuizCta from "../components/BankruptcyQuizCta";
//import dynamic from "next/dynamic";
import NextImage from "next/image";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import sectionTextStyle from "styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js";
import MeansTestCalculator from "components/means-test/Chapter7MeansTestCalculator";


const useStyles = makeStyles((theme) => ({
  ...sectionTextStyle,
  videoItem: {
    marginTop: 32,
    marginBottom: 16,
    width: "100%",
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    contentVisibility: "auto",
    containIntrinsicSize: "700px 393px",
    "&::before": {
      content: '""',
      display: "block",
      paddingTop: "56.25%",
    },
    "@media (min-width: 640px)": {
      maxWidth: 700,
    },
  },

  moduleWrapper: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100vw",
    background: "#fff",
    boxShadow:
      "0 16px 24px 2px rgba(0,0,0,0.14)," +
      "0 6px 30px 5px rgba(0,0,0,0.12)," +
      "0 8px 10px -5px rgba(0,0,0,0.2)",
    borderRadius: 6,
    padding: "20px 15px",
    margin: "32px 0",
  },
  imgContainer: {
    width: "95%",
    maxWidth: 375,
    margin: "1.5rem auto",
  },
  imgContainer1: {
    width: "95%",
    maxWidth: 450,
    margin: "1.5rem auto",
  },
  callout: {
    background: "#fff",
    border: "1px solid #e5e5e5",
    borderRadius: 8,
    padding: "12px 16px",
    margin: "16px 0",
  },
  checklist: {
    margin: 0,
    paddingLeft: "1.1rem",
    color: "#333",
    lineHeight: 1.6,
  },
  subtleList: {
    listStyleType: "none",
    padding: 0,
    color: "#333",
    margin: 0,
    lineHeight: 1.6,
  },
  tableWrap: {
    width: '100%',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    margin: '16px 0 24px',
    borderRadius: 6,
    boxShadow: '0 1px 2px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.1)',
    background: '#fff',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
    fontSize: '0.95rem',
    color: '#333',
  },
  th: {
    textAlign: 'left',
    fontWeight: 700,
    padding: '12px 10px',
    borderBottom: '2px solid #e5e7eb',
    background: '#f9fafb',
    color: '#111',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #eee',
    verticalAlign: 'top',
    color: '#333',
  },
  meansTestSteps: {
    margin: "24px 0",
    padding: "4px 20px 4px 44px",
    listStyleType: "decimal",
    backgroundColor: "#f5f8fc",
    border: "1px solid #d8e1ea",
    borderRadius: 12,
    color: "#333",
    "& > li": {
      padding: "14px 0 14px 4px",
      lineHeight: 1.65,
      "&::marker": {
        color: "#0656d3",
        fontWeight: 700,
      },
      "& + li": {
        borderTop: "1px solid #d8e1ea",
      },
      "& > strong": {
        display: "block",
        marginBottom: 2,
        color: "#17324d",
      },
    },
  },
}));

export default function MeansTestCalculatorPageContent() {
  const classes = useStyles();

  
  return (
    <>
      
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>
            
          <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: 12,
    margin: "0.5rem 0 1.25rem",
    color: "#555",
  }}
  aria-label="Attorney oversight and page update information"
>
  <NextImage
    src="/img/casey-yontz-headshot.webp"
    alt="Portrait of attorney Casey Yontz, bankruptcy lawyer"
    width={64}
    height={64}
    style={{ borderRadius: "50%" }}
    priority={false}
  />
  <div>
    <div>
      <strong>Reviewed by:</strong>{" "}
      <a
        href="/about-us#casey-yontz"
        rel="author"
        itemProp="author"
        style={{ color: "#0656d3", textDecoration: "underline" }}
      >
        Casey Yontz
      </a>
      , Attorney (18+ years bankruptcy experience)
    </div>
    <div>
      <time dateTime="2026-11-23" itemProp="dateModified">
        Last updated: November 23, 2026
      </time>
    </div>
    <div style={{ marginTop: "0.5rem" }}>
      <a
        href="/about-us#casey-yontz"
        rel="author"
        style={{ color: "#0656d3", textDecoration: "underline" }}
      >
        About the Author
      </a>
    </div>
  </div>
</div>

<h1 className={classes.title}>
Chapter 7 Means Test Calculator
</h1>

<p>The Chapter 7  means test calculator below helps you estimate whether or not you your income could qualify for a discharge under <Link
        href="/chapter-7-bankruptcy-arizona"
        style={{ color: "#0656d3", textDecoration: "underline" }}
        prefetch={false}
      >
        Chapter 7 bankruptcy
      </Link>.</p>


      <h2 className={classes.title}>
  How to Use the Chapter 7 Means Test Calculator
</h2>

<p>
Using the Chapter 7 Means Test Calculator is easy. The video and instructions below explain the steps and go through example cases.
</p>

<div
  className={classes.videoItem}
  style={{ position: "relative", aspectRatio: "16 / 9" }}
>
  <LiteYouTubeEmbed
    id="Whmiyra5Qss"
    title="How to Use the Chapter 7 Means Test Calculator"
    poster="maxresdefault"
    noCookie
    adNetwork={false}
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      borderRadius: 8,
    }}
  />
</div>

<ol className={classes.meansTestSteps}>
  <li>
    <strong>Enter your filing details.</strong>
    Start by choosing the state your plan to file in, and whether you plan to file alone, or jointly with a spouse. Continue by answering the questions about housing, consumer debt and military service. Next, select the month you plan to file, and then click <b>Continue</b>.
  </li>
  <li>
    <strong>Enter your average monthly income.</strong>
    At the beginning of the next window (Step 2) enter your average gross monthly income for the months listed at the top of the calculator. Make sure you do not include income for  the month you wish to file. For example, someone wanting to file in December, would enter income form June 1, through November 30.
  </li>
  <li>
    <strong>Calculate your median income. </strong>
    Click <b>"Calculate Median Income Check"</b>, and the calculator will compare your income with the median for your state and household
    size. If your results show you are below the median, click <b>See Result</b>. If you’re
    above it, that doesn't mean your income can't qualify for Chapter 7 discharge. It just means more calculations are needed. Click <b>Continue</b>.
  </li>
  <li>
  <strong>If you're above the median, continue filling out the remaning screens by entering your deductions and expenses.</strong>
  Make sure to read each line item before entering an
  amount, and don't count the same expense or deduction in more than one place. <b>No double dipping!</b>
</li>
<li>
  <strong>Check any deduction you’re unsure about.</strong>
  If you’re not sure what belongs on a line, check the instructions on{" "}
  <a
    href="https://www.uscourts.gov/sites/default/files/2025-04/b_122a-2_0425-form.pdf"
    target="_blank"
    rel="noreferrer noopener"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    Official Form 122A-2
  </a>
  {" "}or consult a bankruptcy attorney.
</li>
</ol>

<p>
  Treat your results as an estimate. The results you get here don't determine whether or not you pass the means test.
</p>

<MeansTestCalculator />

<h2 className={classes.title}>More Chapter 7 Means Test Help</h2>

<p>
  If you want to double check ythe median income limits in your state you you can review the{" "}
  <a
    href="https://www.justice.gov/ust/means-testing"
    target="_blank"
    rel="nofollow noreferrer noopener"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    U.S. Trustee median income tables
  </a>. The  <a
    href="https://www.uscourts.gov/forms-rules/forms/bankruptcy-forms"
    target="_blank"
    rel="noreferrer noopener"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    official means test forms
  </a> are also available for review and are helpful for clarifying questions about deductions and expenses. Also check out this <a
    href="https://www.usbankruptcyhelp.com/means-test"
    target="_blank"
    rel="noreferrer noopener"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
   detailed means test guide
  </a> for more information on the means test and how it works. 
</p>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}