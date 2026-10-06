/* eslint-disable */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Link from "next/link";
import Button from "components/CustomButtons/Button.js";
//import BankruptcyQuizCta from "../components/BankruptcyQuizCta";
//import dynamic from "next/dynamic";
import NextImage from "next/image";

import sectionTextStyle from "styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js";



const useStyles = makeStyles((theme) => ({
    ...sectionTextStyle,
  
    section: {
      ...sectionTextStyle.section,
      paddingTop: 0,
      color: "#34434d",
    },
  
    fullBleed: {
      position: "relative",
      left: "50%",
      width: "100vw",
      marginLeft: "-50vw",
    },
  
    authorityStrip: {
      padding: "38px 24px 36px",
      borderTop: "1px solid #d8dee3",
      borderBottom: "1px solid #d8dee3",
      background: "#f8f7f3",
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        padding: "32px 20px 30px",
      },
    },
  
    authorityInner: {
      maxWidth: 1040,
      margin: "0 auto",
    },
  
    authorityAccent: {
      width: 44,
      height: 2,
      margin: "0 auto 15px",
      background: "#a97921",
    },
  
    authorityHeading: {
      margin: "0 0 8px",
      color: "#182b3c",
      fontFamily: '"Roboto Slab", "Times New Roman", serif',
      fontSize: "clamp(1.3rem, 2.1vw, 1.65rem)",
      fontWeight: 700,
      lineHeight: 1.3,
    },
  
    authorityCopy: {
      maxWidth: 760,
      margin: "0 auto 25px",
      color: "#45545e",
      fontSize: "1rem",
      lineHeight: 1.65,
    },attorneyInsight: {
      margin: "32px 0",
      padding: "24px 28px",
      borderLeft: "4px solid #cda958",
      borderTop: "1px solid #d8dee3",
      borderRight: "1px solid #d8dee3",
      borderBottom: "1px solid #d8dee3",
      borderRadius: 2,
      background: "#eef2f4",
      boxShadow: "0 8px 20px rgba(24,43,60,.05)",
    
      [theme.breakpoints.down("xs")]: {
        padding: "22px 20px",
      },
    },
    
    attorneyInsightLabel: {
      display: "block",
      marginBottom: 10,
      color: "#856016",
      fontSize: ".75rem",
      fontWeight: 700,
      letterSpacing: ".11em",
      textTransform: "uppercase",
    },
    
    attorneyInsightText: {
      margin: 0,
      color: "#243746",
      fontFamily: '"Roboto Slab", "Times New Roman", serif',
      fontSize: "1.08rem",
      lineHeight: 1.72,
    },
  
    publicationRow: {
      display: "grid",
      gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
      maxWidth: 940,
      margin: "0 auto",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        maxWidth: 620,
        rowGap: 18,
      },
      [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "1fr",
        maxWidth: 360,
      },
    },
  
    publication: {
      display: "flex",
      minWidth: 0,
      minHeight: 52,
      padding: "5px 22px",
      alignItems: "center",
      justifyContent: "center",
      borderLeft: "1px solid #d8d5cb",
  
      "&:first-child": {
        borderLeft: 0,
      },
  
      "& img": {
        display: "block",
        width: "auto",
        maxWidth: "100%",
        height: "auto",
        maxHeight: 34,
        objectFit: "contain",
      },
  
      [theme.breakpoints.down("sm")]: {
        minHeight: 48,
        padding: "4px 18px",
  
        "&:nth-child(odd)": {
          borderLeft: 0,
        },
  
        "&:last-child": {
          gridColumn: "1 / -1",
          borderLeft: 0,
        },
      },
  
      [theme.breakpoints.down("xs")]: {
        minHeight: 44,
        borderLeft: 0,
  
        "&:last-child": {
          gridColumn: "auto",
        },
      },
    },
  
    publicationName: {
      color: "#223548",
      fontFamily: '"Roboto Slab", "Times New Roman", serif',
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.3,
      whiteSpace: "nowrap",
  
      [theme.breakpoints.down("xs")]: {
        whiteSpace: "normal",
      },
    },
  
    contentSection: {
      padding: "80px 0",
  
      [theme.breakpoints.down("sm")]: {
        padding: "58px 0",
      },
  
      [theme.breakpoints.down("xs")]: {
        padding: "48px 0",
      },
    },
  
    tintedSection: {
      padding: "80px max(24px, calc((100vw - 1040px) / 2))",
      borderTop: "1px solid #e0e5e8",
      borderBottom: "1px solid #e0e5e8",
      background: "#f4f6f7",
  
      [theme.breakpoints.down("sm")]: {
        padding: "58px 24px",
      },
  
      [theme.breakpoints.down("xs")]: {
        padding: "48px 20px",
      },
    },
  
    darkSection: {
      padding: "80px max(24px, calc((100vw - 1040px) / 2))",
      borderTop: "1px solid #112332",
      borderBottom: "1px solid #112332",
      background: "#172b3c",
      color: "#f6f8fa",
  
      [theme.breakpoints.down("sm")]: {
        padding: "58px 24px",
      },
  
      [theme.breakpoints.down("xs")]: {
        padding: "48px 20px",
      },
    },
  
    eyebrow: {
      margin: "0 0 8px",
      color: "#856016",
      fontSize: "0.78rem",
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
    },
  
    heading: {
      margin: "0 0 18px",
      color: "#182b3c",
      fontFamily: '"Roboto Slab", "Times New Roman", serif',
      fontSize: "clamp(1.75rem, 3vw, 2.35rem)",
      fontWeight: 700,
      lineHeight: 1.2,
    },
  
    darkHeading: {
      color: "#ffffff",
    },
  
    darkEyebrow: {
      color: "#e7c878",
    },
  
    intro: {
      maxWidth: 780,
      margin: "0 0 32px",
      color: "#3f4e58",
      fontSize: "1.06rem",
      lineHeight: 1.75,
    },
  
    searchLead: {
      maxWidth: "70ch",
      margin: "0 0 18px",
      color: "#34434d",
      fontSize: "1.08rem",
      lineHeight: 1.72,
    },
  
    darkIntro: {
      color: "#edf2f5 !important",
      opacity: 1,
    },
  
    split: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.45fr) minmax(280px, .8fr)",
      gap: 48,
      alignItems: "start",
  
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        gap: 30,
      },
    },
  
    credibilityPanel: {
      padding: 30,
      border: "1px solid #d6dde2",
      borderTop: "3px solid #a97921",
      borderRadius: 2,
      background: "#f7f8f8",
      boxShadow: "0 10px 26px rgba(24,43,60,.065)",
    },
  
    fact: {
      padding: "15px 0",
      borderBottom: "1px solid #dbe1e5",
  
      "&:first-child": {
        paddingTop: 0,
      },
  
      "&:last-child": {
        paddingBottom: 0,
        borderBottom: 0,
      },
    },
  
    factTitle: {
      display: "block",
      color: "#182b3c",
      fontWeight: 700,
    },
  
    factCopy: {
      display: "block",
      marginTop: 4,
      color: "#4f5e68",
      fontSize: ".93rem",
      lineHeight: 1.5,
    },
  
    link: {
      color: "#07589f",
      fontWeight: 600,
      textDecoration: "underline",
      textDecorationThickness: "1px",
      textUnderlineOffset: "3px",
  
      "&:hover": {
        color: "#003a70",
        textDecorationThickness: "2px",
      },
  
      "&:focus-visible": {
        color: "#003a70",
        outline: "3px solid #c69435",
        outlineOffset: 3,
        borderRadius: 1,
      },
    },
  
    problemGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "0 38px",
  
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
      },
    },
  
    problem: {
      padding: "25px 0 27px",
      borderTop: "1px solid #d6dde2",
    },
  
    itemHeading: {
      margin: "0 0 8px",
      color: "#182b3c",
      fontFamily: '"Roboto Slab", "Times New Roman", serif',
      fontSize: "1.17rem",
      fontWeight: 700,
      lineHeight: 1.4,
    },
  
    bodyCopy: {
      maxWidth: "72ch",
      margin: 0,
      color: "#3f4e58",
      lineHeight: 1.72,
    },
  
    chapterGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 24,
  
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
      },
    },
  
    chapterCard: {
      padding: 32,
      border: "1px solid #d6dde2",
      borderTop: "3px solid #a97921",
      borderRadius: 2,
      background: "#fff",
      boxShadow: "0 10px 26px rgba(24,43,60,.065)",
    },
  
    chapterLabel: {
      display: "inline-block",
      marginBottom: 16,
      padding: "5px 10px",
      borderRadius: 2,
      background: "#e8eef3",
      color: "#314b61",
      fontSize: ".75rem",
      fontWeight: 700,
      letterSpacing: ".08em",
      textTransform: "uppercase",
    },
  
    cleanList: {
      margin: "20px 0 24px",
      paddingLeft: 20,
      color: "#3f4e58",
      lineHeight: 1.68,
    },
  
    note: {
      marginTop: 24,
      padding: "18px 22px",
      borderLeft: "4px solid #b8862b",
      borderTop: "1px solid #d8dfe3",
      borderRight: "1px solid #d8dfe3",
      borderBottom: "1px solid #d8dfe3",
      background: "#f1f4f5",
      color: "#3f4e58",
      lineHeight: 1.65,
    },
  
    testimonialGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 24,
  
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
      },
    },
  
    testimonial: {
      position: "relative",
      display: "flex",
      minHeight: 210,
      margin: 0,
      padding: "38px 30px 28px",
      border: "1px solid #d6dde2",
      borderTop: "3px solid #a97921",
      borderRadius: 2,
      flexDirection: "column",
      background: "#fff",
      boxShadow: "0 10px 26px rgba(24,43,60,.065)",
  
      "&::before": {
        content: '"“"',
        position: "absolute",
        top: 10,
        left: 25,
        color: "#a97921",
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: "2.2rem",
        lineHeight: 1,
      },
  
      [theme.breakpoints.down("sm")]: {
        minHeight: 0,
      },
    },
  
    quote: {
      margin: 0,
      color: "#2f3f49",
      fontFamily: '"Roboto Slab", "Times New Roman", serif',
      fontSize: "1.04rem",
      fontStyle: "italic",
      lineHeight: 1.72,
    },
  
    attribution: {
      display: "block",
      marginTop: "auto",
      paddingTop: 18,
      color: "#182b3c",
      fontStyle: "normal",
      fontWeight: 700,
    },
  
    processGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
      gap: 18,
  
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      },
  
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
      },
    },
  
    processStep: {
      padding: "21px 18px 23px",
      border: "1px solid #d6dde2",
      borderTop: "3px solid #a97921",
      borderRadius: 2,
      background: "#fff",
    },
  
    stepNumber: {
      display: "block",
      marginBottom: 11,
      color: "#76530e",
      fontSize: ".78rem",
      fontWeight: 700,
      letterSpacing: ".04em",
    },
  
    compactHeading: {
      margin: "0 0 7px",
      color: "#182b3c",
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.35,
    },
  
    checklist: {
      display: "grid",
      gridTemplateColumns: "minmax(0, .8fr) minmax(0, 1.2fr)",
      gap: 34,
      marginTop: 38,
      padding: 30,
      border: "1px solid #d6dde2",
      borderRadius: 2,
      background: "#f1f4f5",
      alignItems: "center",
  
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        padding: 20,
      },
    },
  
    checklistImage: {
      width: "100%",
      height: "auto",
      borderRadius: 2,
    },
  
    mediaGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 24,
  
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
      },
    },
  
    mediaHeader: {
      maxWidth: 820,
      marginBottom: 38,
      paddingLeft: 22,
      borderLeft: "3px solid #cda958",
  
      "& $heading": {
        marginBottom: 14,
      },
  
      "& $intro": {
        marginBottom: 0,
      },
  
      [theme.breakpoints.down("xs")]: {
        marginBottom: 30,
        paddingLeft: 16,
      },
    },
  
    mediaSectionHeading: {
      fontSize: "clamp(1.95rem, 3.4vw, 2.65rem)",
    },
  
    mediaCard: {
      display: "flex",
      minHeight: 260,
      padding: 32,
      border: "1px solid #617487",
      borderTop: "3px solid #cda958",
      borderRadius: 2,
      flexDirection: "column",
      background: "#20384b",
      boxShadow: "0 14px 30px rgba(0,0,0,.18)",
    },
  
    featuredMediaCard: {
      gridColumn: "1 / -1",
      borderTopWidth: 4,
  
      [theme.breakpoints.down("sm")]: {
        gridColumn: "auto",
      },
    },
  
    outlet: {
      color: "#f1d58d",
      fontSize: ".82rem",
      fontWeight: 700,
      letterSpacing: ".1em",
      lineHeight: 1.5,
      textTransform: "uppercase",
    },
  
    mediaTitle: {
      margin: "12px 0 16px",
      color: "#ffffff",
      fontFamily: '"Roboto Slab", "Times New Roman", serif',
      fontSize: "1.24rem",
      lineHeight: 1.4,
    },
  
    mediaCopy: {
      margin: "0 0 24px",
      color: "#f4f7f8 !important",
      opacity: 1,
      fontSize: "1rem",
      lineHeight: 1.72,
    },
  
    mediaLink: {
      marginTop: "auto",
      color: "#f4d787",
      fontWeight: 700,
      textDecoration: "underline",
      textDecorationThickness: "1px",
      textUnderlineOffset: 4,
  
      "&:hover": {
        color: "#ffffff",
        textDecorationThickness: "2px",
      },
  
      "&:focus-visible": {
        color: "#ffffff",
        outline: "3px solid #f4d787",
        outlineOffset: 4,
        borderRadius: 1,
      },
    },
  
    resourceGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 22,
  
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
      },
    },
  
    resourceGroup: {
      padding: 30,
      border: "1px solid #d6dde2",
      borderTop: "3px solid #a97921",
      borderRadius: 2,
      background: "#fff",
      boxShadow: "0 10px 26px rgba(24,43,60,.055)",
    },
  
    resourceList: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  
    resourceItem: {
      padding: "10px 0",
      borderBottom: "1px solid #e5e9ec",
  
      "&:last-child": {
        borderBottom: 0,
      },
    },
  
    warningPanel: {
      marginTop: 28,
      padding: 30,
      border: "1px solid #d9ccb0",
      borderLeft: "4px solid #a97921",
      borderRadius: 2,
      background: "#faf7ef",
    },
  
    warningGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "8px 32px",
      margin: "18px 0 0",
      paddingLeft: 20,
      color: "#3f4e58",
      lineHeight: 1.55,
  
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
      },
    },
  
    officeGrid: {
      display: "grid",
      gridTemplateColumns: "minmax(280px, .7fr) minmax(0, 1.3fr)",
      gap: 40,
      alignItems: "center",
  
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        gap: 24,
      },
    },
  
    map: {
      width: "100%",
      margin: 0,
      overflow: "hidden",
      border: "1px solid #cfd8de",
      borderRadius: 2,
      background: "#fff",
      boxShadow: "0 10px 26px rgba(24,43,60,.06)",
    },
  
    cityLinks: {
      display: "flex",
      margin: "18px 0 0",
      padding: 0,
      gap: "10px 20px",
      flexWrap: "wrap",
      listStyle: "none",
    },
  
    faq: {
      padding: "25px 0",
      borderTop: "1px solid #d6dde2",
    },
  
    faqHeading: {
      margin: "0 0 9px",
      color: "#182b3c",
      fontSize: "1.12rem",
      fontWeight: 700,
      lineHeight: 1.45,
    },
  
    cta: {
      padding: "72px 24px",
      borderTop: "1px solid #d5dde2",
      background: "#e9eef1",
      textAlign: "center",
  
      [theme.breakpoints.down("xs")]: {
        padding: "54px 20px",
      },
    },
  
    ctaCopy: {
      maxWidth: 650,
      margin: "0 auto 24px",
      color: "#3f4e58",
      fontSize: "1.04rem",
      lineHeight: 1.7,
    },
  
    ctaActions: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 22,
      flexWrap: "wrap",
    },
  
    phone: {
      color: "#182b3c",
      fontWeight: 700,
      textDecoration: "underline",
      textDecorationThickness: "1px",
      textUnderlineOffset: 4,
  
      "&:hover": {
        color: "#003a70",
        textDecorationThickness: "2px",
      },
  
      "&:focus-visible": {
        outline: "3px solid #a97921",
        outlineOffset: 4,
        borderRadius: 1,
      },
      attorneyInsight: {
        margin: "28px 0",
        padding: "24px 28px",
        borderLeft: "4px solid #a97921",
        background: "#f8f7f3",
        color: "#34434d",
      
        [theme.breakpoints.down("xs")]: {
          padding: "20px 22px",
        },
      },
      
      attorneyInsightLabel: {
        margin: "0 0 10px",
        color: "#856016",
        fontSize: ".75rem",
        fontWeight: 700,
        letterSpacing: ".1em",
        textTransform: "uppercase",
      },
      
      attorneyInsightText: {
        margin: 0,
        color: "#2f3f49",
        fontFamily: '"Roboto Slab", "Times New Roman", serif',
        fontSize: "1.05rem",
        lineHeight: 1.7,
      },
    },
    quickAnswer: {
      margin: "24px 0 34px",
      padding: "28px 30px",
      border: "1px solid #d6dde2",
      borderTop: "4px solid #a97921",
      borderRadius: 2,
      background: "#f8f7f3",
      boxShadow: "0 10px 26px rgba(24,43,60,.06)",
    
      [theme.breakpoints.down("xs")]: {
        padding: "22px 20px",
        margin: "20px 0 28px",
      },
    },
    
    quickAnswerLabel: {
      display: "block",
      marginBottom: 8,
      color: "#856016",
      fontSize: ".85rem",
      fontWeight: 700,
      letterSpacing: ".1em",
      textTransform: "uppercase",
    },
    
    quickAnswerHeading: {
      margin: "0 0 14px",
      color: "#182b3c",
      fontFamily: '"Roboto Slab", "Times New Roman", serif',
      fontSize: "1.3rem",
      fontWeight: 700,
      lineHeight: 1.35,
    },
    
    quickAnswerDivider: {
      width: 44,
      height: 2,
      margin: "0 0 18px",
      background: "#a97921",
    },
    imgContainer: {
      width: '95%',
      maxWidth: 650,
      margin: '1.5rem auto',
    },
  }));

export default function HowToStiopGarnishmentInAz() {
  const classes = useStyles();

  
  return (
    <>
      
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>
            


<h1 className={classes.title}>
  How to Stop Wage Garnishment in Arizona
</h1>

<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: 12,
    margin: "0.5rem 0 1.25rem",
    color: "#555",
  }}
  aria-label="Author and page update information"
>
  <NextImage
    src="/img/headshot-10-26.webp"
    alt="Casey Yontz, Arizona bankruptcy attorney"
    width={64}
    height={64}
    style={{ borderRadius: "50%" }}
    priority={false}
  />

  <div>
    <div>
      <strong>By:</strong>{" "}
      <a
        href="/about-us#casey-yontz"
        rel="author"
        itemProp="author"
        style={{ color: "#0656d3", textDecoration: "underline" }}
      >
        Casey Yontz
      </a>
      , Arizona Bankruptcy Attorney (18+ years of bankruptcy experience)
    </div>

    <div>
      <time dateTime="2026-10-05" itemProp="dateModified">
        Last updated: October 5, 2026
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

<aside
  className={classes.quickAnswer}
  aria-label="Quick answer about stopping wage garnishment in Arizona"
>
  <span className={classes.quickAnswerLabel}>
    Quick Answer
  </span>

  <h2 className={classes.quickAnswerHeading}>
    How Can You Stop Wage Garnishment in Arizona?
  </h2>

  <div
    className={classes.quickAnswerDivider}
    aria-hidden="true"
  />

  <p className={classes.bodyCopy}>
    <strong>
      There are several ways to stop or reduce wage garnishment in Arizona,
      depending on the type of debt and where you are in the garnishment
      process.
    </strong>
  </p>

  <ul className={classes.cleanList}>
    <li>
      <strong>File bankruptcy.</strong> Chapter 7 or Chapter 13 generally
      triggers the automatic stay, which can stop most ordinary
      judgment-creditor wage garnishments.
    </li>

    <li>
  <strong>Challenge an improper garnishment.</strong> You may be able to
  request a hearing if the garnishment or underlying judgment is invalid,
  satisfied, or superseded, or if the amount being withheld was calculated
  incorrectly.
</li>

<li>
  <strong>Request a hardship reduction.</strong> If you are subject to
  Arizona&apos;s 10% maximum, you may be able to ask the court to reduce the
  withholding to as little as 5% if you can establish extreme economic
  hardship.
</li>

    <li>
      <strong>Reach an agreement with the creditor.</strong> A creditor may
      agree to release the garnishment as part of a settlement or other
      arrangement.
    </li>

    <li>
      <strong>Resolve the underlying judgment.</strong> A garnishment can end
      when the judgment is satisfied, vacated, expires, or is otherwise
      released or quashed.
    </li>
  </ul>

  <p className={classes.bodyCopy}>
    <strong>If your wages are already being garnished, timing matters.</strong>{" "}
    Bankruptcy can provide legal protection as soon as a case is filed, but
    notice and payroll processing can affect an upcoming paycheck. Different
    rules also apply to some debts, including child support, taxes, and student
    loans.
  </p>
</aside>

<p className={classes.searchLead}>
    
  If your wages are being garnished in Arizona,{" "}
  <strong>
    there may be ways to stop or reduce the amount being taken from your
    paycheck.
  </strong>{" "}
  The right solution depends on the type of debt, whether a creditor already
  has a judgment, and how far the garnishment process has progressed.
</p>

<p className={classes.bodyCopy}>
  For many ordinary judgment debts, filing Chapter 7 or Chapter 13 bankruptcy
  can stop an active wage garnishment. Filing a bankruptcy case generally
  triggers the{" "}
  <Link href="/does-bankruptcy-stop-creditors" className={classes.link}>
    automatic stay
  </Link>
  , which prevents most creditors from continuing collection actions,
  including wage garnishment.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  Bankruptcy does not affect every type of garnishment in the same way. Child
  support and other domestic support obligations are subject to different
  rules, and special rules or exceptions may also apply to tax debts, student
  loans, government collection actions, prior bankruptcy filings, and other
  situations.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  If money is already coming out of your paycheck,{" "}
  <strong>timing matters.</strong> The automatic stay generally takes effect
  when the bankruptcy case is filed, but the creditor and your employer still
  need to learn about the filing, and payroll timing can affect whether a
  deduction has already been processed.
</p>




<h2 className={classes.heading}>
  Can a Debt Collector Garnish Your Wages in Arizona?
</h2>

<p className={classes.intro}>
  <strong>
    For most ordinary consumer debts, a debt collector generally must obtain a
    money judgment before using Arizona&apos;s wage-garnishment process.
  </strong>{" "}
  A collection letter or missed payment by itself does not ordinarily give a
  credit-card company, medical provider, or other judgment creditor the right
  to start taking money directly from your paycheck.
</p>
<div className={classes.imgContainer}>
  <NextImage
    src="/img/how-ordinary-wage-garnishment-reaches-your-paycheck-arizona-yontz-law.webp"
    alt="Infographic from Yontz Law showing how an ordinary wage garnishment reaches your paycheck in Arizona: unpaid debt, lawsuit, judgment, writ of garnishment, and employer withholding wages, with a note that bankruptcy can interrupt the process through the automatic stay."
    width={800}
    height={533}
    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 700px, 900px"
    quality={75}
    style={{ width: "100%", height: "auto" }}
  />
</div>
<h3 className={classes.itemHeading}>
  Most Ordinary Creditors Need a Judgment First
</h3>

<p className={classes.bodyCopy}>
  Arizona courts describe garnishment as a legal process used to collect money
  after a money judgment has been entered. For a typical consumer debt, that
  usually means the creditor first files a lawsuit and obtains a judgment
  before applying for a writ of garnishment directed to the debtor&apos;s
  employer.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  The process often looks like this:
</p>

<ul className={classes.cleanList}>
  <li>
    <strong>A debt goes unpaid.</strong> This might involve a credit card,
    medical bill, personal loan, or another consumer obligation.
  </li>

  <li>
    <strong>The creditor or debt buyer files a lawsuit.</strong> The debtor has
    an opportunity to respond to the lawsuit and raise any available defenses.
  </li>

  <li>
    <strong>The creditor obtains a money judgment.</strong> A judgment gives
    the creditor additional legal collection remedies that were not available
    merely because the debt was unpaid.
  </li>

  <li>
    <strong>The judgment creditor applies for a writ of garnishment.</strong>{" "}
    Arizona law requires an application identifying, among other things, the
    judgment, the unpaid balance, and the employer or other entity believed to
    owe earnings to the debtor.
  </li>

  <li>
    <strong>The employer is brought into the garnishment proceeding.</strong>{" "}
    The employer receives the garnishment papers and may be required to
    withhold the nonexempt portion of the employee&apos;s earnings.
  </li>
</ul>

<p className={classes.bodyCopy}>
  If you have been sued but your wages are not being garnished yet, the lawsuit
  may still be important. Once a creditor obtains a judgment, wage garnishment
  may become one of the collection tools available to it. Learn more about{" "}
  <Link href="/bankruptcy-and-lawsuit-debt" className={classes.link}>
    how bankruptcy can affect lawsuit debt
  </Link>
  .
</p>

<h3 className={classes.itemHeading}>
  Your Employer Becomes Part of the Garnishment Process
</h3>

<p className={classes.bodyCopy}>
  In an earnings garnishment, the employer is the <strong>garnishee</strong>.
  Arizona law provides for a writ and summons to be issued to the garnishee,
  and the employer must respond to the garnishment proceeding and follow the
  applicable rules for withholding nonexempt earnings.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  This distinction matters because an ordinary debt collector generally does
  not simply contact your employer and tell it to take part of your paycheck.
  Wage garnishment is a court-supervised collection process with specific
  procedures, notices, exemptions, and opportunities to request a hearing.
  Different rules can apply to obligations such as child support, taxes, and
  certain government debts, which are discussed separately below.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  The Arizona Judicial Branch provides current information and forms for{" "}
  <a
    href="https://www.azcourts.gov/selfservicecenter/Garnishment"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    garnishment proceedings in Arizona
  </a>
  . The statutory procedure for applying for and issuing an earnings
  garnishment writ is set out in A.R.S. §§ 12-1598.03 and 12-1598.04.
</p>

<aside className={classes.attorneyInsight}>
  <span className={classes.attorneyInsightLabel}>
    From My Practice
  </span>

  <p className={classes.attorneyInsightText}>
    For ordinary consumer debts, a creditor generally cannot simply call your
    employer and start garnishing wages. There is usually a lawsuit and
    judgment first, which is why I tell people not to ignore lawsuit papers
    even if their paycheck has not been touched yet.
  </p>
</aside>

<h2 className={classes.heading}>
  How Much of Your Paycheck Can Be Garnished in Arizona?
</h2>

<p className={classes.intro}>
  <strong>
    For most ordinary judgment debts, an Arizona creditor cannot simply take
    25% of your paycheck.
  </strong>{" "}
  Arizona law generally provides stronger protection for earnings. The amount
  that can be garnished is limited to the lesser of two calculations, which
  means the actual amount may be less than 10% of your disposable earnings.
</p>

<h3 className={classes.itemHeading}>
  Arizona Generally Protects Most of Your Disposable Earnings
</h3>

<p className={classes.bodyCopy}>
  Under A.R.S. § 33-1131, the maximum amount of disposable earnings subject
  to an ordinary wage garnishment for a workweek is the <strong>lesser</strong>{" "}
  of:
</p>

<ul className={classes.cleanList}>
  <li>
    <strong>10% of your disposable earnings for the week; or</strong>
  </li>

  <li>
    <strong>
      the amount by which your disposable earnings exceed 60 times the
      applicable minimum hourly wage.
    </strong>
  </li>
</ul>

<p className={classes.bodyCopy}>
  For this calculation, Arizona law defines <strong>disposable earnings</strong>{" "}
  as the portion of wages, salary, commissions, bonuses, and certain other
  compensation remaining after amounts required by law to be withheld have
  been deducted.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  The minimum wage portion of the formula uses the highest applicable federal,
  Arizona, or local minimum wage. That matters because some Arizona cities may
  have a minimum wage higher than the statewide rate.
</p>

<div className={classes.note}>
  <p className={classes.itemHeading}>
    Example: Calculating an Arizona Wage Garnishment
  </p>

  <p className={classes.bodyCopy}>
    Assume an employee has <strong>$1,000 in disposable earnings for one
    workweek</strong> and the applicable minimum wage is Arizona&apos;s 2026
    statewide rate of <strong>$15.15 per hour</strong>.
  </p>

  <ul className={classes.cleanList}>
    <li>
      <strong>10% of $1,000 = $100.</strong>
    </li>

    <li>
      <strong>60 × $15.15 = $909.</strong>
    </li>

    <li>
      <strong>$1,000 − $909 = $91.</strong>
    </li>
  </ul>

  <p className={classes.bodyCopy}>
    Arizona uses the lesser amount. In this example, the maximum ordinary wage
    garnishment would therefore be <strong>$91 for that workweek</strong>, not
    $100.
  </p>
</div>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  The calculation can change with income, pay frequency, and the applicable
  minimum wage. The 10% figure is therefore a ceiling for an ordinary
  judgment-creditor garnishment, not necessarily the amount that should be
  taken from every paycheck.
</p>

<h3 className={classes.itemHeading}>
  Arizona&apos;s Extreme-Hardship Rule May Reduce the Garnishment
</h3>

<p className={classes.bodyCopy}>
  Arizona law provides another potential protection when a 10% garnishment
  would create serious financial hardship. If the court finds, based on clear
  and convincing evidence, that the debtor or the debtor&apos;s family would
  suffer <strong>extreme economic hardship</strong>, the court may reduce the
  amount withheld from 10% to <strong>not less than 5%</strong> of disposable
  earnings.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  The reduction is not automatic. The debtor must request relief and establish
  the required hardship. We will discuss the hearing process and other ways to
  challenge or reduce a garnishment later on this page.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  Wage protections are one part of Arizona&apos;s broader exemption system.
  You can learn more about{" "}
  <Link href="/arizona-bankruptcy-exemptions" className={classes.link}>
    Arizona bankruptcy exemptions
  </Link>{" "}
  and how state law protects certain property and income.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  The current earnings-garnishment limits are set out in{" "}
  <a
    href="https://www.azleg.gov/ars/33/01131.htm"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    A.R.S. § 33-1131
  </a>
  , and Arizona&apos;s extreme-hardship provision appears in{" "}
  <a
    href="https://www.azleg.gov/ars/12/01598-10.01.htm"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    A.R.S. § 12-1598.10
  </a>
  .
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  These limits apply to ordinary earnings garnishments. Different rules can
  apply to child support, taxes, and certain other obligations, so the type of
  garnishment should be identified before relying on the 10% limit.
</p>
<aside className={classes.attorneyInsight}>
  <span className={classes.attorneyInsightLabel}>
    From My Practice
  </span>

  <p className={classes.attorneyInsightText}>
    I wouldn't assume the amount coming out of a paycheck is correct just
    because an employer is withholding it. Arizona uses a specific formula for
    ordinary wage garnishments, and in some cases the legal maximum can be
    less than 10% of disposable earnings.
  </p>
</aside>

<h2 className={classes.heading}>
  Can Bankruptcy Stop Wage Garnishment in Arizona?
</h2>

<p className={classes.intro}>
  <strong>
    Yes, filing bankruptcy can stop many Arizona wage garnishments.
  </strong>{" "}
  When a Chapter 7 or Chapter 13 bankruptcy case is filed, federal law
  generally creates an <strong>automatic stay</strong> that prevents creditors
  from continuing most collection activity against the person who filed.
  For an ordinary judgment creditor, that generally includes continuing to
  garnish wages.
</p>

<h3 className={classes.itemHeading}>
  The Automatic Stay Usually Begins When the Bankruptcy Case Is Filed
</h3>

<p className={classes.bodyCopy}>
  The automatic stay comes from{" "}
  <a
    href="https://uscode.house.gov/view.xhtml?req=11+USC+362"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    11 U.S.C. § 362
  </a>
  . In most bankruptcy cases, the stay takes effect when the bankruptcy
  petition is filed. A separate hearing or court order is not ordinarily
  required before the stay begins.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  For someone whose wages are being garnished to collect an ordinary
  pre-bankruptcy judgment, this can be one of the most immediate protections
  bankruptcy provides. Once the stay applies, the judgment creditor generally
  cannot continue using the garnishment to collect that debt while the stay
  remains in effect.
</p>

<div className={classes.note}>
  <p className={classes.itemHeading}>
    Stopping the Garnishment and Eliminating the Debt Are Different Questions
  </p>

  <p className={classes.bodyCopy}>
    The automatic stay addresses <strong>collection activity</strong>. Whether
    the underlying debt is ultimately discharged depends on the type of debt,
    the bankruptcy chapter, and the facts of the case. Many ordinary
    credit-card, medical-debt, and personal-loan judgments may be dischargeable,
    but not every debt is.
  </p>
</div>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  There are also exceptions and limitations to the automatic stay. For
  example, certain actions involving domestic support obligations are treated
  differently, and prior bankruptcy cases dismissed within the previous year
  can affect whether the stay lasts for the entire case or takes effect at all.
  We discuss these exceptions separately below.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  The United States Courts explains that while the automatic stay is in
  effect, creditors generally may not continue lawsuits, wage garnishments,
  or other collection efforts. You can also read more about{" "}
  <Link href="/does-bankruptcy-stop-creditors" className={classes.link}>
    how bankruptcy affects creditor collection
  </Link>{" "}
  and the automatic stay.
</p>
<h2 className={classes.heading}>
  Chapter 7 vs. Chapter 13 for Wage Garnishment
</h2>

<p className={classes.intro}>
  <strong>
    Both Chapter 7 and Chapter 13 can generally stop an ordinary
    judgment-creditor wage garnishment through the automatic stay.
  </strong>{" "}
  The better question is what happens after the garnishment stops. The right
  chapter depends on the type of debt, income, property, secured debts, and
  what you need the bankruptcy case to accomplish.
</p>

<div className={classes.note}>
  <p className={classes.itemHeading}>
    The Garnishment Usually Does Not Decide Which Chapter to File
  </p>

  <p className={classes.bodyCopy}>
    If the automatic stay applies, both Chapter 7 and Chapter 13 can provide
    protection from an ordinary wage garnishment. Choosing between them
    usually requires looking at the larger financial picture, including
    whether the debt can be discharged, whether you need time to catch up on
    secured debts, what property you own, and whether you qualify for Chapter
    7.
  </p>
</div>

<div className={classes.chapterGrid} style={{ marginTop: 32 }}>
  <article className={classes.chapterCard}>
    <span className={classes.chapterLabel}>
      Chapter 7
    </span>

    <h3 className={classes.itemHeading}>
      Chapter 7 and Wage Garnishment
    </h3>

    <p className={classes.bodyCopy}>
      Chapter 7 may be a good fit when an ordinary wage garnishment is part of
      a broader problem with unsecured debt that can be discharged. Filing
      generally triggers the automatic stay, and a discharge can eliminate
      personal liability for many qualifying debts that caused the garnishment
      in the first place.
    </p>

    <ul className={classes.cleanList}>
      <li>
        <strong>
          The garnishment generally stops while the automatic stay applies.
        </strong>
      </li>

      <li>
        Many ordinary credit-card, medical, and personal-loan debts may be
        discharged.
      </li>

      <li>
        Chapter 7 does not use a three-to-five-year repayment plan.
      </li>

      <li>
        Income and the Chapter 7 means test can affect eligibility.
      </li>

      <li>
        Arizona exemption law and the value of your property must be reviewed
        before filing.
      </li>
    </ul>

    <p className={classes.bodyCopy}>
      Learn more about{" "}
      <Link href="/chapter-7-bankruptcy-arizona" className={classes.link}>
        Chapter 7 bankruptcy in Arizona
      </Link>
      . If income is a concern, you can also use the{" "}
      <Link href="/chapter-7-means-test-calculator" className={classes.link}>
        Chapter 7 means-test calculator
      </Link>
      .
    </p>
  </article>

  <article className={classes.chapterCard}>
    <span className={classes.chapterLabel}>
      Chapter 13
    </span>

    <h3 className={classes.itemHeading}>
      Chapter 13 and Wage Garnishment
    </h3>

    <p className={classes.bodyCopy}>
      Chapter 13 also generally stops an ordinary wage garnishment through the
      automatic stay, but instead of a Chapter 7 liquidation process, the
      debtor proposes a court-approved repayment plan that usually lasts three
      to five years.
    </p>

    <ul className={classes.cleanList}>
      <li>
        <strong>
          The garnishment generally stops while the automatic stay applies.
        </strong>
      </li>

      <li>
        A repayment plan can address multiple debts at the same time rather
        than treating the garnishment as an isolated problem.
      </li>

      <li>
        Chapter 13 may allow a debtor to catch up on certain past-due secured
        obligations, such as mortgage or vehicle payments.
      </li>

      <li>
        It may be considered when a debtor does not qualify for Chapter 7 or
        has property or financial goals that make Chapter 7 a poor fit.
      </li>

      <li>
        The amount paid through the plan depends on several factors and is not
        simply equal to the amount that was being garnished.
      </li>
    </ul>

    <p className={classes.bodyCopy}>
      Learn more about{" "}
      <Link href="/chapter-13-bankruptcy-arizona" className={classes.link}>
        Chapter 13 bankruptcy in Arizona
      </Link>
      . You can also use the{" "}
      <Link
        href="/chapter-13-plan-payment-calculator"
        className={classes.link}
      >
        Chapter 13 plan-payment calculator
      </Link>{" "}
      to better understand how a repayment plan may work.
    </p>
  </article>
</div>

<aside className={classes.attorneyInsight}>
  <span className={classes.attorneyInsightLabel}>
    From My Practice
  </span>

  <p className={classes.attorneyInsightText}>
    I wouldn't choose Chapter 7 or Chapter 13 just by asking which one stops
    the garnishment. Both may provide an automatic stay. I want to know what
    caused the garnishment, what other debts the person has, what property
    needs to be protected, and what their finances need to look like when the
    case is over.
  </p>
</aside>

<p className={classes.bodyCopy}>
  A wage garnishment can create the urgency that leads someone to consider
  bankruptcy, but it should not be the only factor used to choose a chapter.
  An attorney should also review the debts behind the garnishment, income,
  property, secured loans, recent financial transactions, and the goals the
  person needs the bankruptcy case to accomplish.
</p>
<h2 className={classes.heading}>
  How Quickly Does Wage Garnishment Stop After Filing Bankruptcy?
</h2>

<p className={classes.intro}>
  <strong>
    The automatic stay generally takes effect as soon as the bankruptcy case is
    filed, but an active wage garnishment may not disappear from payroll at that
    exact moment.
  </strong>{" "}
  The creditor and employer need to learn about the bankruptcy, and the timing
  of an upcoming payroll can affect whether a deduction has already been
  processed.
</p>
<aside className={classes.attorneyInsight}>
  <span className={classes.attorneyInsightLabel}>
    From My Practice
  </span>

  <p className={classes.attorneyInsightText}>
    When wages are already being garnished, timing becomes much more
    important. I want to know what kind of debt caused the garnishment, when
    the next payroll is being processed, and whether bankruptcy is actually
    the best way to solve the larger problem.
  </p>
</aside>
<h3 className={classes.itemHeading}>
  The Automatic Stay Takes Effect Upon Filing
</h3>

<p className={classes.bodyCopy}>
  In a typical Chapter 7 or Chapter 13 case, the debtor does not have to wait
  for a hearing or a separate court order before the automatic stay begins.
  Filing the bankruptcy petition generally activates the stay by operation of
  law. While the stay is in effect, an ordinary judgment creditor generally
  cannot continue using a wage garnishment to collect a pre-bankruptcy debt.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  The District of Arizona Bankruptcy Court describes the automatic stay as
  stopping garnishments and other collection activity{" "}
  <a
    href="https://www.azb.uscourts.gov/court-info/faq/creditor"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    when the bankruptcy petition is filed
  </a>
  . The federal authority for the stay is 11 U.S.C. § 362.
</p>

<h3 className={classes.itemHeading}>
  The Creditor and Employer Still Need to Learn About the Filing
</h3>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  That may include the judgment creditor, the creditor&apos;s attorney, and the
  employer or payroll department processing the garnishment. Providing the case
  number and filing information quickly can help close the gap between the
  legal protection created by the bankruptcy filing and the practical process
  of stopping payroll withholding.
</p>

<h3 className={classes.itemHeading}>
  Payroll Timing Can Affect the Next Paycheck
</h3>

<p className={classes.bodyCopy}>
  Employers often process payroll before the date an employee actually
  receives a paycheck. If payroll has already been calculated or transmitted
  when the bankruptcy is filed, a garnishment deduction may already be in
  motion. That does not change when the automatic stay legally began, but it
  can affect what appears on the next paycheck and what steps may be needed
  afterward.
</p>

<div className={classes.note}>
  <p className={classes.itemHeading}>
    Example: Filing Bankruptcy Just Before Payday
  </p>

  <p className={classes.bodyCopy}>
    Suppose an employee&apos;s paycheck is issued on Friday, but the employer
    completes payroll processing on Tuesday. If the employee files bankruptcy
    on Wednesday, the automatic stay generally begins on Wednesday. However,
    the garnishment deduction for Friday&apos;s paycheck may already have been
    processed.
  </p>

  <p className={classes.bodyCopy} style={{ marginTop: 14 }}>
    The next step may depend on whether the employer is still holding the money,
    whether it has already been sent to the creditor, and when each party
    received notice of the bankruptcy. That is why the timing of an active
    garnishment should be reviewed rather than assuming that filing will
    automatically change the next paycheck.
  </p>
</div>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  If wages continue to be withheld after a bankruptcy filing, the timing and
  destination of the money should be reviewed promptly. Money that has not yet
  left the employer&apos;s control can present a different issue from money
  that was transferred before or after the bankruptcy case was filed. We will
  address what can happen to wages already withheld later on this page.
</p>
<h2 className={classes.heading}>
  Can You Stop Wage Garnishment Immediately in Arizona?
</h2>

<p className={classes.intro}>
  <strong>Sometimes, yes.</strong> The fastest way to stop or reduce a wage
  garnishment depends on the type of debt and where the garnishment is in the
  legal process. For many ordinary judgment debts, filing Chapter 7 or
  Chapter 13 bankruptcy may stop an active garnishment through the automatic
  stay. Other situations may call for challenging the garnishment, asking the
  court to reduce the amount being withheld, or resolving the judgment with
  the creditor.
</p>

<p className={classes.bodyCopy}>
  There is no single way to stop every Arizona wage garnishment. Depending on
  the circumstances, the available options may include:
</p>

<ul className={classes.cleanList}>
  <li>
    <strong>Filing bankruptcy.</strong> Filing a bankruptcy case generally
    triggers the automatic stay, which stops most ordinary
    judgment-creditor garnishments while the stay remains in effect.
  </li>

  <li>
    <strong>Challenging the garnishment.</strong> A debtor may have grounds to
    object if, for example, the garnishment is invalid, the judgment has
    already been satisfied, or the amount being withheld has been calculated
    incorrectly.
  </li>

  <li>
    <strong>Requesting a hardship reduction.</strong> Arizona law allows the
    court to reduce the amount withheld from earnings in qualifying cases when
    the debtor can establish extreme economic hardship.
  </li>

  <li>
    <strong>Reaching an agreement with the creditor.</strong> A creditor may
    agree to release the garnishment as part of a settlement or other
    arrangement. A payment agreement by itself should not be assumed to stop
    an existing garnishment unless the creditor actually agrees to release it.
  </li>

  <li>
    <strong>Resolving the underlying judgment.</strong> Under Arizona law, a
    continuing earnings garnishment can end when the judgment is satisfied,
    vacated or expires, when the creditor releases the garnishment, when the
    proceeding is stayed by a court, including a bankruptcy court, or when the
    court orders the garnishment quashed.
  </li>
</ul>

<p className={classes.bodyCopy}>
  If wages are already being withheld, the important question is not simply
  whether the garnishment can be stopped. It is{" "}
  <strong>
    which option applies to your situation and how quickly it can take effect.
  </strong>{" "}
  Bankruptcy can act very quickly from a legal standpoint, but notice and
  payroll processing can still affect what happens to an upcoming paycheck.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  Arizona&apos;s rules for continuing earnings garnishments and hardship
  reductions are found in{" "}
  <a
    href="https://www.azleg.gov/ars/12/01598-10.01.htm"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    A.R.S. § 12-1598.10
  </a>
  .
</p>

<h2 className={classes.heading}>
  Does Bankruptcy Stop Every Type of Wage Garnishment?
</h2>

<p className={classes.intro}>
  <strong>No. Different types of wage withholding are treated differently in
  bankruptcy.</strong>{" "}
  The automatic stay generally stops an ordinary judgment creditor from
  continuing to garnish wages for a pre-bankruptcy debt, but special rules
  apply to domestic support obligations, tax collection, student loans, and
  certain other government collection actions.
</p>

<h3 className={classes.itemHeading}>
  Ordinary Judgment-Creditor Garnishments
</h3>

<p className={classes.bodyCopy}>
  Wage garnishments based on ordinary consumer judgments are generally the
  clearest example of collection activity stopped by the automatic stay. This
  can include judgments arising from credit-card debt, medical debt, personal
  loans, and other dischargeable consumer obligations.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  Stopping the garnishment does not automatically answer whether the underlying
  debt will be discharged, but many ordinary unsecured debts can be discharged
  in a successful bankruptcy case.
</p>

<h3 className={classes.itemHeading}>
  Child Support and Other Domestic Support Obligations
</h3>

<p className={classes.bodyCopy}>
  Domestic support obligations are different. Federal bankruptcy law expressly
  provides that the automatic stay does not stop the withholding of income
  under a judicial or administrative order or statute for payment of a
  domestic support obligation.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  That means filing bankruptcy should not be assumed to stop a child-support
  withholding order. Domestic support obligations also receive special
  treatment throughout the Bankruptcy Code and generally are not discharged
  simply because a bankruptcy case is filed.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  The domestic-support exception to the automatic stay is found in{" "}
  <a
    href="https://uscode.house.gov/view.xhtml?edition=prelim&num=0&req=granuleid%3AUSC-prelim-title11-section362"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    11 U.S.C. § 362(b)(2)
  </a>
  .
</p>

<h3 className={classes.itemHeading}>
  Tax Levies and Wage Collection
</h3>

<p className={classes.bodyCopy}>
  Tax collection also requires separate analysis. An IRS levy on wages is not
  the same procedure as an Arizona judgment-creditor garnishment. Filing
  bankruptcy generally stops IRS collection enforcement, including levy
  activity intended to collect pre-bankruptcy tax liabilities, while the
  automatic stay remains in effect.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  That does not mean the tax debt itself disappears. Some tax debts can be
  discharged if specific requirements are satisfied, while many others survive
  bankruptcy. Federal law also allows the IRS to continue certain activities
  during bankruptcy, including audits, tax assessments, and notices and demands
  for payment.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  The IRS explains the effect of bankruptcy on tax collection in its{" "}
  <a
    href="https://www.irs.gov/publications/p908"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    Bankruptcy Tax Guide
  </a>
  .
</p>

<h3 className={classes.itemHeading}>
  Student Loan Wage Garnishment
</h3>

<p className={classes.bodyCopy}>
  Federal student loans can also be collected through{" "}
  <strong>administrative wage garnishment</strong>, which is different from
  the Arizona judgment process discussed earlier on this page. A federal
  student-loan creditor does not necessarily need to obtain a court judgment
  before using that collection procedure.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  Bankruptcy can generally stop covered student-loan collection activity while
  the automatic stay is in effect, but stopping collection and discharging the
  student-loan debt are two different questions. Student loans are not
  ordinarily eliminated by the standard bankruptcy discharge. A borrower
  seeking a bankruptcy discharge of qualifying student-loan debt generally
  must obtain a separate determination from the bankruptcy court.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  The U.S. Department of Justice provides current guidance concerning{" "}
  <a
    href="https://www.justice.gov/ust/student-loan-guidance"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    student-loan discharge proceedings in bankruptcy
  </a>
  .
</p>

<div className={classes.note}>
  <p className={classes.itemHeading}>
    Why the Type of Garnishment Matters
  </p>

  <p className={classes.bodyCopy}>
    A credit-card judgment garnishment, child-support withholding order, IRS
    wage levy, and federal student-loan administrative garnishment may all
    reduce a paycheck, but they do not operate under the same laws. Before
    relying on bankruptcy to stop withholding, identify{" "}
    <strong>who is taking the money and what debt is being collected.</strong>
  </p>
</div>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  The automatic stay can also be limited in some repeat bankruptcy filings,
  and a creditor may sometimes ask the bankruptcy court for relief from the
  stay. For those reasons, the fact that bankruptcy normally stops a particular
  collection action does not guarantee that the stay will provide the same
  protection in every case.
</p>

<h2 className={classes.heading}>
  What Happens to Money Already Taken From Your Paycheck?
</h2>

<p className={classes.intro}>
  <strong>
    Filing bankruptcy can stop future covered garnishment activity, but it does
    not automatically mean that every dollar taken before the filing will be
    returned.
  </strong>{" "}
  What happens to money already withheld can depend on whether the employer is
  still holding it, whether it has already been transferred to the creditor,
  when the transfer occurred, and whether bankruptcy law provides a way to
  recover it.
</p>

<h3 className={classes.itemHeading}>
  Wages Withheld but Still Held by Your Employer
</h3>

<p className={classes.bodyCopy}>
  Under Arizona&apos;s earnings-garnishment procedure, there can be a period
  when an employer has withheld nonexempt earnings but has not yet transferred
  the money to the judgment creditor. Arizona law provides that, before the
  required court order is entered, the employer generally may not remit those
  withheld earnings to the creditor.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  After a continuing lien is entered, the employer generally sends the
  nonexempt earnings to the creditor for each pay period while the lien remains
  in effect. Arizona law also provides that a continuing earnings lien becomes
  invalid and has no further force when the garnishment proceedings are stayed
  by a court of competent jurisdiction, including a United States bankruptcy
  court.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  For that reason, if bankruptcy is filed while an employer is holding
  garnished wages, it is important to determine exactly where the money is
  before assuming that it has already been lost.
</p>

<h3 className={classes.itemHeading}>
  Money Transferred to the Creditor Before Bankruptcy
</h3>

<p className={classes.bodyCopy}>
  Money that reached the creditor before the bankruptcy filing presents a
  different question. Filing bankruptcy does not automatically reverse every
  payment the creditor received before the case began.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  In some cases, however, recently garnished wages may need to be reviewed
  under the Bankruptcy Code&apos;s rules governing{" "}
  <strong>preferential transfers</strong>. Section 547 allows certain
  transfers made to creditors before bankruptcy to be avoided when all of the
  statutory requirements are satisfied. The lookback period for an ordinary
  creditor is generally 90 days before the bankruptcy filing.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  That does <strong>not</strong> mean that every debtor can simply demand the
  return of all wages garnished during the previous 90 days. Preference law
  contains additional requirements, defenses, and limitations. Whether the
  debtor can personally recover transferred funds can also depend on exemption
  rights, whether the bankruptcy trustee acts, and the requirements of
  11 U.S.C. § 522.
</p>

<div className={classes.note}>
  <p className={classes.itemHeading}>
    Example: The Timing of the Garnishment Can Change the Analysis
  </p>

  <p className={classes.bodyCopy}>
    Assume an employer withholds $150 from an employee&apos;s paycheck shortly
    before the employee files bankruptcy. If the employer is still holding the
    money when the case is filed, the legal issues may be different from a
    situation where the $150 was transferred to the judgment creditor before
    the bankruptcy filing.
  </p>

  <p className={classes.bodyCopy} style={{ marginTop: 14 }}>
    If money was transferred before bankruptcy, the next question may be
    whether bankruptcy law provides a basis to recover that transfer. If money
    is transferred after the bankruptcy filing, the automatic stay may raise a
    different set of issues.
  </p>
</div>

<h3 className={classes.itemHeading}>
  What If Money Is Taken After the Bankruptcy Is Filed?
</h3>

<p className={classes.bodyCopy}>
  If an ordinary judgment-creditor garnishment continues after the bankruptcy
  filing, the situation should be reviewed promptly. The automatic stay
  generally prohibits continued collection of a covered pre-bankruptcy debt,
  but the facts still matter, including when the wages were earned, when they
  were withheld, when they were transferred, and when the creditor and
  employer learned of the bankruptcy.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  This is why it is useful to keep the pay stub showing the garnishment and any
  garnishment notices you received. Those records can help determine exactly
  what happened to the money and when.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  Arizona&apos;s rules governing withheld and transferred earnings are found
  in{" "}
  <a
    href="https://www.azleg.gov/ars/12/01598-05.htm"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    A.R.S. § 12-1598.05
  </a>
  ,{" "}
  <a
    href="https://www.azleg.gov/ars/12/01598-10.01.htm"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    A.R.S. § 12-1598.10
  </a>
  , and{" "}
  <a
    href="https://www.azleg.gov/ars/12/01598-11.htm"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    A.R.S. § 12-1598.11
  </a>
  .
</p>

<h2 className={classes.heading}>
  Can You Challenge or Reduce a Wage Garnishment Without Bankruptcy?
</h2>

<p className={classes.intro}>
  <strong>Yes, in some circumstances.</strong> Bankruptcy can be an effective
  way to stop an ordinary wage garnishment when the garnishment is part of a
  larger debt problem, but it is not the only possible remedy. Arizona law
  allows a debtor to request a hearing to challenge certain aspects of a
  garnishment, and qualifying debtors may ask the court to reduce the amount
  withheld because of extreme economic hardship.
</p>

<h3 className={classes.itemHeading}>
  You Can Request a Garnishment Hearing
</h3>

<p className={classes.bodyCopy}>
  Arizona&apos;s earnings-garnishment procedure gives the judgment debtor the
  right to object to the writ of garnishment, the employer&apos;s answer, or a
  statement showing the amount of nonexempt earnings being withheld.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  In general, a request for hearing must be filed within{" "}
  <strong>10 days after receiving the answer or nonexempt earnings statement
  being challenged</strong>, unless the court finds good cause for a later
  request. Arizona law calls for the hearing to begin promptly after the court
  receives the request.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  The Arizona Judicial Branch provides both a{" "}
  <a
    href="https://www.azcourts.gov/selfservicecenter/Garnishment/Forms"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    Request for Hearing on Garnishment and instructions
  </a>{" "}
  through its Self-Service Center.
</p>

<h3 className={classes.itemHeading}>
  You May Be Able to Challenge the Garnishment or Amount Being Withheld
</h3>

<p className={classes.bodyCopy}>
  A garnishment hearing is not simply a general opportunity to argue that a
  debt is difficult to pay. The objection should identify a legal or factual
  problem with the garnishment, the judgment, the employer&apos;s answer, or
  the amount being withheld.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  Depending on the facts, issues raised at a hearing may include:
</p>

<ul className={classes.cleanList}>
  <li>
    <strong>The creditor does not have a valid judgment.</strong>
  </li>

  <li>
    <strong>The judgment has already been paid or satisfied.</strong>
  </li>

  <li>
    <strong>The employer&apos;s garnishment answer is incorrect.</strong>
  </li>

  <li>
    <strong>The amount of nonexempt earnings has been calculated incorrectly.</strong>
  </li>

  <li>
    <strong>
      The wages are already subject to another garnishment or court-ordered
      support assignment.
    </strong>
  </li>

  <li>
    <strong>An exemption or another legal objection applies.</strong>
  </li>
</ul>

<p className={classes.bodyCopy}>
  Arizona&apos;s statutory hearing form specifically identifies several of
  these grounds and allows the debtor to state another basis for requesting a
  hearing. The court can then determine issues such as whether the writ is
  valid, the amount still owed on the judgment, and whether the employer owes
  earnings subject to the garnishment.
</p>

<h3 className={classes.itemHeading}>
  You May Be Able to Ask for an Extreme-Hardship Reduction
</h3>

<p className={classes.bodyCopy}>
  Arizona also provides a limited hardship remedy. If the debtor is otherwise
  subject to the 10% maximum garnishment and proves by{" "}
  <strong>clear and convincing evidence</strong> that the garnishment would
  cause extreme economic hardship to the debtor or the debtor&apos;s family,
  the court may reduce the amount withheld.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  The court may reduce the withholding from 10% of disposable earnings to an
  amount <strong>not less than 5%</strong>. The reduction is not automatic
  simply because paying household expenses has become difficult. The debtor
  must request relief and provide enough evidence for the court to make the
  required hardship finding.
</p>

<div className={classes.note}>
  <p className={classes.itemHeading}>
    Example: When a Hardship Request May Be Worth Exploring
  </p>

  <p className={classes.bodyCopy}>
    Suppose an Arizona worker is subject to a 10% ordinary wage garnishment
    and the loss of that income leaves the household unable to cover essential
    expenses such as housing, utilities, food, or necessary medical costs.
    That does not automatically reduce the garnishment, but it may be a reason
    to investigate whether the worker can establish the extreme economic
    hardship required by Arizona law.
  </p>
</div>

<h3 className={classes.itemHeading}>
  When a Nonbankruptcy Solution May Make More Sense
</h3>

<p className={classes.bodyCopy}>
  Bankruptcy is not automatically the best answer merely because a wage
  garnishment exists. If the garnishment is legally defective, the judgment
  has been satisfied, the withholding calculation is wrong, or a focused
  agreement with the creditor can realistically solve the problem, a
  nonbankruptcy remedy may be enough.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  On the other hand, if the garnishment is only one part of a larger financial
  problem involving multiple debts, lawsuits, collection accounts, or other
  payment obligations, stopping a single garnishment may not solve the
  underlying problem. That is when it becomes especially important to compare
  the available nonbankruptcy remedies with what a bankruptcy case could
  accomplish.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  Arizona&apos;s objection and hearing procedure is set out in{" "}
  <a
    href="https://www.azleg.gov/ars/12/01598-07.htm"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    A.R.S. § 12-1598.07
  </a>
  , and the extreme-hardship reduction appears in{" "}
  <a
    href="https://www.azleg.gov/ars/12/01598-10.01.htm"
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    A.R.S. § 12-1598.10
  </a>
  .
</p>

<h2 className={classes.heading}>
  When Should You Talk With an Arizona Wage Garnishment Attorney?
</h2>

<p className={classes.intro}>
  <strong>
    You do not have to wait until several paychecks have already been
    garnished to get legal advice.
  </strong>{" "}
  If a creditor has obtained a judgment, your employer has received
  garnishment papers, or money is already being withheld, an attorney can help
  determine what kind of garnishment is involved and which options are
  realistically available.
</p>

<p className={classes.bodyCopy}>
  It may be especially helpful to speak with an Arizona bankruptcy attorney
  when:
</p>

<ul className={classes.cleanList}>
  <li>
    <strong>Your employer has received a wage-garnishment notice or writ.</strong>{" "}
    Understanding the paperwork can help determine what stage the garnishment
    has reached and whether any deadlines are approaching.
  </li>

  <li>
    <strong>Money is already being taken from your paycheck.</strong>{" "}
    The amount being withheld, where the money is in the garnishment process,
    and the timing of your next payroll can all matter.
  </li>

  <li>
    <strong>A creditor recently obtained a judgment against you.</strong>{" "}
    A judgment can give an ordinary creditor additional collection remedies,
    including the ability to pursue wage garnishment.
  </li>

  <li>
    <strong>You believe the garnishment or withholding amount may be wrong.</strong>{" "}
    Arizona provides procedures for challenging certain garnishment issues and
    requesting a hearing.
  </li>

  <li>
    <strong>You are struggling with more than the garnishment itself.</strong>{" "}
    Credit-card balances, medical bills, lawsuits, vehicle debt, mortgage
    arrears, or other collection problems may mean that resolving one
    garnishment will not solve the larger financial problem.
  </li>

  <li>
    <strong>You are considering bankruptcy anyway.</strong>{" "}
    If Chapter 7 or Chapter 13 may already be under consideration, an active
    garnishment can make the timing of that decision more important.
  </li>

  <li>
    <strong>You are not sure what kind of garnishment is taking your wages.</strong>{" "}
    Ordinary judgment debt, child support, tax collection, and student-loan
    garnishment can involve very different rules.
  </li>
</ul>

<h3 className={classes.itemHeading}>
  Look at the Garnishment and the Larger Financial Picture
</h3>

<p className={classes.bodyCopy}>
  Stopping money from coming out of the next paycheck may be the immediate
  concern, but a useful legal review should go further. The underlying debt,
  household income, other collection activity, property, secured debts, and
  longer-term financial goals can all affect whether bankruptcy or a
  nonbankruptcy solution makes more sense.
</p>

<p className={classes.bodyCopy} style={{ marginTop: 16 }}>
  Casey Yontz has more than 18 years of bankruptcy experience helping Arizona
  individuals and families address wage garnishments, creditor lawsuits,
  unsecured debt, and other collection problems. Learn more{" "}
  <Link href="/about-us" className={classes.link}>
    about Casey Yontz and Yontz Law
  </Link>
  .
</p>

<div className={classes.note}>
  <p className={classes.itemHeading}>
    Helpful Information to Have for a Garnishment Review
  </p>

  <p className={classes.bodyCopy}>
    You do not need perfect records before asking for help. If available, it
    can be useful to have:
  </p>

  <ul className={classes.cleanList}>
    <li>Your most recent pay stub showing the garnishment.</li>
    <li>Any writ, notice, or other garnishment papers you received.</li>
    <li>The lawsuit or judgment, if you have it.</li>
    <li>The name of the creditor or collection attorney.</li>
    <li>A basic list of your other debts and monthly obligations.</li>
  </ul>

  <p className={classes.bodyCopy}>
    Those documents can help identify the type of garnishment, how much is
    being withheld, and whether the garnishment is part of a larger debt
    problem that should be addressed.
  </p>
</div>

<section
  className={`${classes.fullBleed} ${classes.cta}`}
  aria-labelledby="final-cta-heading"
>
  <h2
    id="final-cta-heading"
    className={classes.heading}
  >
    Wages Already Being Garnished?
  </h2>

  <p className={classes.ctaCopy}>
    Talk with Yontz Law about what is causing the garnishment, whether the
    amount being withheld appears correct, and what options may be available
    to stop or reduce it. Casey can also help you evaluate whether Chapter 7,
    Chapter 13, or a nonbankruptcy solution makes sense for your broader
    financial situation.
  </p>

  <p className={classes.ctaCopy}>
    If another paycheck is approaching, mention the active garnishment when
    you contact the firm so the timing can be reviewed along with the
    underlying debt.
  </p>

  <div className={classes.ctaActions}>
    <Button
      color="primary"
      size="lg"
      href="/consultation-request"
    >
      Book a Free Bankruptcy Consultation
    </Button>

    <a
      href="tel:+14808860339"
      className={classes.phone}
    >
      Call 480-886-0339
    </a>
  </div>
</section>
</GridItem>
        </GridContainer>
      </div>
    </>
  );
}