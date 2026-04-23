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
      <time dateTime="2026-04-23" itemProp="dateModified">
        Last updated: April 23, 2026
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

<p>We created this chapter 7 means test calculator to help you estimate whether you may qualify for <Link
        href="/chapter-7-bankruptcy-arizona"
        style={{ color: "#0656d3", textDecoration: "underline" }}
        prefetch={false}
      >
        chapter 7 bankruptcy
      </Link> based on the bankruptcy means test. You should use this as an educational tool only and not a final determination of whether or not you could pass the means test.</p>




<h2 className={classes.title}>How to Use the Chapter 7 Means Test Calculator</h2>

<p>Simply answer the questions on the form and press continue as you move along. At the end of the test, you will see a final result with the following information:</p>
<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
<li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Whether or not you pass the means test based on your input
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Combined monthly income 
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Total monthly deductions (this number will include standard as well as actual deductions)
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
  Monthly disposable income
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
  Projected 60 month disposable income (this figure is also useful for determining the amount needed to pay certain creditors in <Link
        href="/chapter-13-bankruptcy-arizona"
        style={{ color: "#0656d3", textDecoration: "underline" }}
        prefetch={false}
      >
        chapter 13 bankruptcy
      </Link>
  </li>
</ul>
<p>The form also includes a button that lets you create a PDF of your results, which you can save or print for your records.</p>
<MeansTestCalculator />

<h2 className={classes.title}>More Means Test Help</h2>

<p>
  The test above will give you your median income results, but the{" "}
  <a
    href="https://www.justice.gov/ust/means-testing"
    target="_blank"
    rel="nofollow noreferrer noopener"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    U.S. Trustee median income tables
  </a> are also a good place to check median income limits. The <a
    href="https://www.uscourts.gov/forms-rules/forms/bankruptcy-forms"
    target="_blank"
    rel="noreferrer noopener"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    official means test forms
  </a> are a great place to get descriptions and examples of expenses you may use in the means test. Not every expense is allowed, but the official forms and instructions can give you an idea of what you may be able to claim as a deduction in the means test. Also check out this <a
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