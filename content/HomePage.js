/* eslint-disable */

import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Link from "next/link";
import sectionTextStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js";
import NextImage from "next/image";
import OfficeMapEmbed from "/components/office-map-imbed-phoenix/OfficeMapEmbed";

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
  },
}));

// Set `logo` to the matching local `logoPath` after an approved, official asset
// has been added. Until then, the publication name remains the safe fallback.
const publications = [
  {
    name: "U.S. News & World Report",
    logo: null,
    logoPath: "/img/media-logos/us-news-logo.svg",
    width: 190,
    height: 34,
  },
  {
    name: "Yahoo Finance",
    logo: null,
    logoPath: "/img/media-logos/yahoo-finance-logo.svg",
    width: 160,
    height: 34,
  },
  {
    name: "Better",
    logo: null,
    logoPath: "/img/media-logos/better-logo.svg",
    width: 112,
    height: 34,
  },
  {
    name: "Moneywise",
    logo: null,
    logoPath: "/img/media-logos/moneywise-logo.svg",
    width: 144,
    height: 34,
  },
  {
    name: "MoneyLion",
    logo: null,
    logoPath: "/img/media-logos/moneylion-logo.svg",
    width: 144,
    height: 34,
  },
];

const mediaItems = [
  {
    outlet: "U.S. News & World Report",
    title: "Student Loan Disability Discharge: Here's What You Need to Know",
    copy:
      "U.S. News & World Report quoted Casey on student-loan disability discharge, including why borrowers with private student loans need to examine their loan contracts and lender policies rather than assume federal discharge rules apply.",
    href:
      "https://money.usnews.com/loans/student-loans/articles/student-loan-disability-discharge-heres-what-you-need-to-know",
    anchor:
      "Read Casey Yontz's comments in U.S. News & World Report",
  },
  {
    outlet: "Yahoo Finance",
    title:
      "A Bankruptcy Attorney Explains Exactly When Creditors Can — and Can't — Garnish Your 401(k) to Collect Debts",
    copy:
      "Yahoo Finance featured Casey's explanation of when creditors can and cannot reach money held in a 401(k), including ERISA protections, ordinary judgment creditors, IRS collection, domestic-support orders, and what can happen after retirement funds are withdrawn.",
    href:
      "https://finance.yahoo.com/markets/articles/bankruptcy-attorney-explains-exactly-creditors-121500208.html",
    anchor:
      "Read Casey Yontz's comments on Yahoo Finance",
  },
  {
    outlet: "Debt.org",
    title: "What Happens When You File for Bankruptcy?",
    copy:
      "Debt.org asked Casey to explain what consumers should expect after filing bankruptcy, including Chapter 7 and Chapter 13 timelines, debtor-education requirements, and situations where complicated finances or valuable assets require particular care.",
    href:
      "https://www.debt.org/bankruptcy/what-happens-after-filing/",
    anchor:
      "Read Casey Yontz's comments on Debt.org",
  },
  {
    outlet: "Better",
    title: "How Recent Bankruptcies Affect Mortgage Approval",
    copy:
      "Casey discussed how Chapter 7 and Chapter 13 can affect mortgage eligibility, including obtaining a mortgage during an active Chapter 13 case and rebuilding a borrower's credit profile after bankruptcy.",
    href:
      "https://better.com/content/recent-bankruptcies-mortgage-approval",
    anchor:
      "Read the article at Better",
  },
  {
    outlet: "Moneywise",
    title: "Arizona HOA Foreclosure and Unpaid Assessments",
    copy:
      "Moneywise turned to Casey for Arizona-specific analysis of HOA foreclosure law, including when unpaid assessments can support foreclosure and how Arizona's statutory thresholds have changed.",
    href:
      "https://moneywise.com/news/real-estate-news/hoa-foreclosure-home-unpaid-assessments-debt",
    anchor:
      "Read the Arizona HOA foreclosure article",
  },
];

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <section
        className={`${classes.fullBleed} ${classes.authorityStrip}`}
        aria-labelledby="featured-in-heading"
      >
        <div className={classes.authorityInner}>
          <div className={classes.authorityAccent} aria-hidden="true" />

          <h2
            id="featured-in-heading"
            className={classes.authorityHeading}
          >
            Quoted &amp; Featured in National Financial Media
          </h2>

          <div className={classes.authorityCopy}>
            National publications turn to Casey Yontz for commentary on
            bankruptcy, debt, foreclosure, creditor rights, and consumer
            finance.
          </div>

          <div className={classes.publicationRow}>
            {publications.map((publication) => (
              <div
                className={classes.publication}
                key={publication.name}
              >
                {publication.logo ? (
                  <NextImage
                    src={publication.logo}
                    alt={publication.name}
                    width={publication.width}
                    height={publication.height}
                    sizes={`${publication.width}px`}
                  />
                ) : (
                  <span className={classes.publicationName}>
                    {publication.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>
            <section
              className={classes.contentSection}
              aria-labelledby="why-casey-heading"
            >
              <div className={classes.split}>
                <div>
                  <div className={classes.eyebrow}>
                    Experience focused on Arizona
                  </div>

                  <h2
                    id="why-casey-heading"
                    className={classes.heading}
                  >
                    Why Work With Casey Yontz
                  </h2>

                  <p className={classes.searchLead}>
                    If you are comparing bankruptcy lawyers in Phoenix, you
                    are probably looking for clear answers about what
                    bankruptcy can do, what property may be protected, and
                    what happens next.
                  </p>

                  <p className={classes.intro}>
                    Casey Yontz has spent more than 18 years working with
                    individuals and families facing serious debt problems in
                    Arizona. His bankruptcy experience includes Chapter 7,
                    Chapter 13, wage garnishments, creditor lawsuits,
                    foreclosure concerns, vehicle debt, exemption planning,
                    and other issues that can affect what happens before and
                    after a bankruptcy case is filed.
                  </p>

                  <p className={classes.bodyCopy}>
                    The goal is practical advice, not a sales pitch. Casey
                    reviews the financial facts, explains what bankruptcy can
                    and cannot accomplish, and helps clients understand the
                    decisions ahead. Virtual consultations are available, as
                    are in-person meetings when helpful. Learn more{" "}
                    <Link href="/about-us" className={classes.link}>
                      about Casey Yontz and Yontz Law
                    </Link>
                    .
                  </p>
                </div>

                <aside
                  className={classes.credibilityPanel}
                  aria-label="Casey Yontz experience highlights"
                >
                  {[
                    ["18+ Years", "of bankruptcy experience"],
                    ["Thousands", "of Arizona bankruptcy matters"],
                    [
                      "Direct Guidance",
                      "from an experienced bankruptcy attorney",
                    ],
                    [
                      "Arizona Focus",
                      "on local exemptions, procedures, and debt issues",
                    ],
                  ].map(([title, copy]) => (
                    <div
                      className={classes.fact}
                      key={title}
                    >
                      <span className={classes.factTitle}>
                        {title}
                      </span>

                      <span className={classes.factCopy}>
                        {copy}
                      </span>
                    </div>
                  ))}
                </aside>
              </div>
            </section>

            <section
              className={`${classes.fullBleed} ${classes.tintedSection}`}
              aria-labelledby="problems-heading"
            >
              <div className={classes.eyebrow}>
                When debt pressure becomes unmanageable
              </div>

              <h2
                id="problems-heading"
                className={classes.heading}
              >
                Problems Bankruptcy May Help Address
              </h2>

              <p className={classes.intro}>
                People usually contact Yontz Law because a specific financial
                problem needs an answer. Whether bankruptcy helps and which
                chapter may fit depends on the debt, timing, income, assets,
                and the result you need.
              </p>

              <div className={classes.problemGrid}>
                <article className={classes.problem}>
                  <h3 className={classes.itemHeading}>
                    Wage Garnishment
                  </h3>

                  <p className={classes.bodyCopy}>
                    The automatic stay can stop <Link
                      href="/how-to-stop-wage-garnishment-in-arizona"
                      className={classes.link}
                    >
                      wage garnishment
                    </Link> after a case is filed, although exceptions
                    apply. Timing can matter when money is already being
                    withheld. Learn more about{" "}
                    <Link
                      href="/does-bankruptcy-stop-creditors"
                      className={classes.link}
                    >
                      bankruptcy and the automatic stay
                    </Link>
                    .
                  </p>
                </article>

                <article className={classes.problem}>
                  <h3 className={classes.itemHeading}>
                    Creditor Lawsuits and Collection Actions
                  </h3>

                  <p className={classes.bodyCopy}>
                    A pending lawsuit, judgment, bank levy, or collection
                    deadline can affect the available strategy. Filing
                    generally pauses many collection proceedings, but the
                    underlying debt and any exceptions still need review. See
                    how{" "}
                    <Link
                      href="/bankruptcy-and-lawsuit-debt"
                      className={classes.link}
                    >
                      bankruptcy may affect lawsuit debt
                    </Link>
                    .
                  </p>
                </article>

                <article className={classes.problem}>
                  <h3 className={classes.itemHeading}>
                    Credit-Card Debt
                  </h3>

                  <p className={classes.bodyCopy}>
                    Qualifying credit-card balances are often treated as
                    unsecured debt and may be discharged in Chapter 7 or
                    addressed through a Chapter 13 plan. Recent charges and
                    cash advances can require closer review.
                  </p>
                </article>

                <article className={classes.problem}>
                  <h3 className={classes.itemHeading}>
                    Medical Debt
                  </h3>

                  <p className={classes.bodyCopy}>
                    Medical bills and collection accounts are commonly
                    unsecured debts. Bankruptcy may provide relief when those
                    balances have grown beyond what a household can
                    realistically repay.
                  </p>
                </article>

                <article className={classes.problem}>
                  <h3 className={classes.itemHeading}>
                    Foreclosure
                  </h3>

                  <p className={classes.bodyCopy}>
                    Bankruptcy can sometimes stop or delay a foreclosure.
                    Depending on the facts,{" "}
                    <Link
                      href="/chapter-13-bankruptcy-arizona"
                      className={classes.link}
                    >
                      Chapter 13
                    </Link>{" "}
                    may provide a structured way to catch up on mortgage
                    arrears while maintaining ongoing payments.
                  </p>
                </article>

                <article className={classes.problem}>
                  <h3 className={classes.itemHeading}>
                    Vehicle Repossession
                  </h3>

                  <p className={classes.bodyCopy}>
                    Chapter 7 and Chapter 13 treat vehicle loans differently,
                    and filing does not guarantee that every vehicle can be
                    kept. Chapter 13 may allow some borrowers to cure missed
                    payments or, when the requirements are met, use a{" "}
                    <Link
                      href="/chapter-13-vehicle-cram-down"
                      className={classes.link}
                    >
                      vehicle cramdown
                    </Link>
                    .
                  </p>
                </article>

                <article className={classes.problem}>
                  <h3 className={classes.itemHeading}>
                    Business-Related Personal Debt
                  </h3>

                  <p className={classes.bodyCopy}>
                    Personal guarantees, business credit cards, leases, and
                    lines of credit can follow an owner after a business slows
                    or closes. The documents, collateral, co-signers, and
                    nature of each debt need individual review.
                  </p>
                </article>
              </div>
            </section>

            <section
              className={classes.contentSection}
              aria-labelledby="chapters-heading"
            >
              <div className={classes.eyebrow}>
                Two common consumer bankruptcy paths
              </div>

              <h2
                id="chapters-heading"
                className={classes.heading}
              >
                Chapter 7 or Chapter 13: Which Path Fits Your Situation?
              </h2>

              <p className={classes.intro}>
                The right chapter turns on more than the amount owed. Income,
                property, payment history, secured debt, and the goals for a
                home or vehicle all matter.
              </p>

              <div className={classes.chapterGrid}>
                <article className={classes.chapterCard}>
                  <span className={classes.chapterLabel}>
                    Chapter 7
                  </span>

                  <h3 className={classes.itemHeading}>
                    A relatively shorter liquidation process
                  </h3>

                  <p className={classes.bodyCopy}>
                    Chapter 7 can discharge many qualifying unsecured debts
                    without a repayment plan, often within several months.
                  </p>

                  <ul className={classes.cleanList}>
                    <li>
                      Eligibility includes income and means-test
                      considerations.
                    </li>

                    <li>
                      Arizona exemptions affect which property may be
                      protected.
                    </li>

                    <li>
                      Secured debts, liens, recent transactions, and nonexempt
                      assets require careful review.
                    </li>
                  </ul>

                  <Link
                    href="/chapter-7-bankruptcy-arizona"
                    className={classes.link}
                  >
                    Explore the Arizona Chapter 7 guide
                  </Link>

                  <br />

                  <Link
                    href="/chapter-7-means-test-calculator"
                    className={classes.link}
                  >
                    Use the Chapter 7 means-test calculator
                  </Link>
                </article>

                <article className={classes.chapterCard}>
                  <span className={classes.chapterLabel}>
                    Chapter 13
                  </span>

                  <h3 className={classes.itemHeading}>
                    A court-approved repayment plan
                  </h3>

                  <p className={classes.bodyCopy}>
                    Chapter 13 uses a three-to-five-year plan and may help
                    address certain secured debts while a filer keeps eligible
                    property.
                  </p>

                  <ul className={classes.cleanList}>
                    <li>
                      Past-due mortgage payments may be caught up through the
                      plan.
                    </li>

                    <li>
                      Vehicle arrears and some loan terms may be addressed.
                    </li>

                    <li>
                      It can fit some situations involving assets that would
                      be exposed in Chapter 7.
                    </li>
                  </ul>

                  <Link
                    href="/chapter-13-bankruptcy-arizona"
                    className={classes.link}
                  >
                    Explore the Arizona Chapter 13 guide
                  </Link>

                  <br />

                  <Link
                    href="/chapter-13-plan-payment-calculator"
                    className={classes.link}
                  >
                    Estimate a Chapter 13 plan payment
                  </Link>
                </article>
              </div>

              <p className={classes.note}>
                <strong>What about Chapter 11?</strong> Chapter 11 may be
                considered by businesses and, less commonly, by individuals
                who need reorganization but do not fit Chapter 13. Casey can
                help identify whether that more complex path warrants further
                analysis.
              </p>
            </section>

            <section
              className={`${classes.fullBleed} ${classes.tintedSection}`}
              aria-labelledby="testimonials-heading"
            >
              <div className={classes.eyebrow}>
                Client experiences
              </div>

              <h2
                id="testimonials-heading"
                className={classes.heading}
              >
                What Clients Say About Yontz Law
              </h2>

              <p className={classes.intro}>
                Short excerpts from client feedback. Names may be shortened
                for privacy.
              </p>

              <div className={classes.testimonialGrid}>
                <blockquote className={classes.testimonial}>
                  <p className={classes.quote}>
                    “You made the whole process less scary… thx for calming
                    my anxiety.”
                  </p>

                  <cite className={classes.attribution}>
                    — Tish
                  </cite>
                </blockquote>

                <blockquote className={classes.testimonial}>
                  <p className={classes.quote}>
                    “Very professional, knowledgeable and organized. We highly
                    recommend his work!”
                  </p>

                  <cite className={classes.attribution}>
                    — Paul &amp; Maria
                  </cite>
                </blockquote>

                <blockquote className={classes.testimonial}>
                  <p className={classes.quote}>
                    “He walked me step by step… explained every option… never
                    made me feel stupid for asking questions.”
                  </p>

                  <cite className={classes.attribution}>
                    — Melanie
                  </cite>
                </blockquote>

                <blockquote className={classes.testimonial}>
                  <p className={classes.quote}>
                    “My creditors stopped harassing me, my home was saved, and
                    I finally feel hopeful about my future again.”
                  </p>

                  <cite className={classes.attribution}>
                    — Sarah
                  </cite>
                </blockquote>
              </div>
            </section>

            <section
              className={classes.contentSection}
              aria-labelledby="process-heading"
            >
              <div className={classes.eyebrow}>
                A clear path forward
              </div>

              <h2
                id="process-heading"
                className={classes.heading}
              >
                What Happens When You Contact Yontz Law
              </h2>

              <p className={classes.intro}>
                A consultation begins with the immediate problem and a
                dependable picture of your finances. Contacting the firm does
                not commit you to filing.
              </p>

              <div className={classes.processGrid}>
                {[
                  [
                    "01",
                    "Schedule a Consultation",
                    "Submit a consultation request or call the office to get started.",
                  ],
                  [
                    "02",
                    "Meet With Casey",
                    "Discuss the collection pressure, debts, property, and result you need.",
                  ],
                  [
                    "03",
                    "Review Your Finances",
                    "Compare Chapter 7, Chapter 13, and realistic nonbankruptcy options.",
                  ],
                  [
                    "04",
                    "Gather Key Documents",
                    "Collect the information needed to evaluate eligibility and prepare accurate papers.",
                  ],
                  [
                    "05",
                    "Prepare and File, If Appropriate",
                    "If bankruptcy is the right path, the case can be prepared and filed after the required information is complete.",
                  ],
                ].map(([number, title, copy]) => (
                  <article
                    className={classes.processStep}
                    key={number}
                  >
                    <span className={classes.stepNumber}>
                      STEP {number}
                    </span>

                    <h3 className={classes.compactHeading}>
                      {title}
                    </h3>

                    <p className={classes.bodyCopy}>
                      {copy}
                    </p>
                  </article>
                ))}
              </div>

              <div className={classes.checklist}>
                <NextImage
                  src="/img/phoenix-bankruptcy-lawyer-consultation-document-checklist.webp"
                  alt="Checklist graphic showing documents to gather before meeting with a Phoenix bankruptcy lawyer, including recent pay stubs, tax returns, bank statements, car loan or mortgage statements, and recent creditor notices or lawsuit papers."
                  width={800}
                  height={533}
                  sizes="(max-width: 768px) 90vw, 420px"
                  quality={75}
                  className={classes.checklistImage}
                />

                <div>
                  <h3 className={classes.itemHeading}>
                    Helpful documents for the first review
                  </h3>

                  <p className={classes.bodyCopy}>
                    You do not need perfect paperwork to begin. If available,
                    gather recent income records, a creditor list, collection
                    or lawsuit papers, housing and vehicle balances, bank
                    statements, and the most recent tax return. These
                    documents help Casey identify issues and give more
                    reliable guidance.
                  </p>
                </div>
              </div>
            </section>

            <section
              className={`${classes.fullBleed} ${classes.darkSection}`}
              aria-labelledby="media-heading"
            >
              <div className={classes.mediaHeader}>
                <div
                  className={`${classes.eyebrow} ${classes.darkEyebrow}`}
                >
                  Independent editorial sources
                </div>

                <h2
                  id="media-heading"
                  className={`${classes.heading} ${classes.darkHeading} ${classes.mediaSectionHeading}`}
                >
                  Casey Yontz in the Media
                </h2>

                <p
                  className={`${classes.intro} ${classes.darkIntro}`}
                >
                  National financial publications have asked Casey Yontz to
                  explain bankruptcy, creditor protection, student loans,
                  foreclosure, and other consumer-debt issues.
                </p>
              </div>

              <div className={classes.mediaGrid}>
                {mediaItems.map((item, index) => (
                  <article
                    className={`${classes.mediaCard} ${
                      index === 0 ? classes.featuredMediaCard : ""
                    }`}
                    key={item.href}
                  >
                    <span className={classes.outlet}>
                      {item.outlet}
                    </span>

                    <h3 className={classes.mediaTitle}>
                      {item.title}
                    </h3>

                    <p className={classes.mediaCopy}>
                      {item.copy}
                    </p>

                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.mediaLink}
                    >
                      {item.anchor}
                    </a>
                  </article>
                ))}
              </div>
            </section>

            <section
              className={classes.contentSection}
              aria-labelledby="resources-heading"
            >
              <div className={classes.eyebrow}>
                Guides and planning tools
              </div>

              <h2
                id="resources-heading"
                className={classes.heading}
              >
                Helpful Arizona Bankruptcy Resources
              </h2>

              <p className={classes.intro}>
                Use these focused resources to understand Arizona rules and
                prepare better questions for a consultation.
              </p>

              <div className={classes.resourceGrid}>
                <div className={classes.resourceGroup}>
                  <h3 className={classes.itemHeading}>
                    Arizona law and bankruptcy chapters
                  </h3>

                  <ul className={classes.resourceList}>
                    <li className={classes.resourceItem}>
                      <Link
                        href="/arizona-bankruptcy-exemptions"
                        className={classes.link}
                      >
                        Arizona bankruptcy exemptions
                      </Link>
                    </li>

                    <li className={classes.resourceItem}>
                      <Link
                        href="/arizona-bankruptcy-laws"
                        className={classes.link}
                      >
                        Arizona bankruptcy laws
                      </Link>
                    </li>

                    <li className={classes.resourceItem}>
                      <Link
                        href="/chapter-7-bankruptcy-arizona"
                        className={classes.link}
                      >
                        Chapter 7 bankruptcy in Arizona
                      </Link>
                    </li>

                    <li className={classes.resourceItem}>
                      <Link
                        href="/chapter-13-bankruptcy-arizona"
                        className={classes.link}
                      >
                        Chapter 13 bankruptcy in Arizona
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={classes.resourceGroup}>
                  <h3 className={classes.itemHeading}>
                    Calculators and creditor-relief guides
                  </h3>

                  <ul className={classes.resourceList}>
                    <li className={classes.resourceItem}>
                      <Link
                        href="/chapter-7-means-test-calculator"
                        className={classes.link}
                      >
                        Chapter 7 means-test calculator
                      </Link>
                    </li>

                    <li className={classes.resourceItem}>
                      <Link
                        href="/chapter-13-plan-payment-calculator"
                        className={classes.link}
                      >
                        Chapter 13 plan-payment calculator
                      </Link>
                    </li>

                    <li className={classes.resourceItem}>
                      <Link
                        href="/does-bankruptcy-stop-creditors"
                        className={classes.link}
                      >
                        Does bankruptcy stop creditors?
                      </Link>
                    </li>

                    <li className={classes.resourceItem}>
                      <Link
                        href="/bankruptcy-and-lawsuit-debt"
                        className={classes.link}
                      >
                        Bankruptcy and lawsuit debt
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <aside
                className={classes.warningPanel}
                aria-labelledby="before-filing-heading"
              >
                <h3
                  id="before-filing-heading"
                  className={classes.itemHeading}
                >
                  Before You File Bankruptcy
                </h3>

                <p className={classes.bodyCopy}>
                  Timing and a clear paper trail matter. Ask an attorney
                  before making a major financial move, particularly when a
                  lawsuit, foreclosure, or garnishment is already underway.
                </p>

                <ul className={classes.warningGrid}>
                  <li>
                    Avoid unusual credit use or cash advances.
                  </li>

                  <li>
                    Do not transfer money or titles to family or friends
                    without advice.
                  </li>

                  <li>
                    Get advice before withdrawing protected retirement funds.
                  </li>

                  <li>
                    Do not ignore lawsuit, garnishment, or trustee-sale
                    deadlines.
                  </li>

                  <li>
                    Document tax refunds, bonuses, back pay, and other
                    lump-sum deposits.
                  </li>

                  <li>
                    Share details of any existing wage or bank garnishment
                    promptly.
                  </li>
                </ul>
              </aside>
            </section>

            <section
              className={`${classes.fullBleed} ${classes.tintedSection}`}
              aria-labelledby="office-heading"
            >
              <div className={classes.officeGrid}>
                <div>
                  <div className={classes.eyebrow}>
                    Phoenix office and statewide service
                  </div>

                  <h2
                    id="office-heading"
                    className={classes.heading}
                  >
                    Phoenix Office / Arizona Service Area
                  </h2>

                  <p className={classes.bodyCopy}>
                    Yontz Law&apos;s office is located at{" "}
                    <strong>
                      4425 E Agave Rd., Suite 106, Phoenix, AZ 85044
                    </strong>
                    . Call{" "}
                    <a
                      href="tel:+14808860339"
                      className={classes.link}
                    >
                      480-886-0339
                    </a>
                    . Virtual consultations are available for people across
                    Arizona, and in-person meetings are available when
                    helpful.
                  </p>

                  <p
                    className={classes.bodyCopy}
                    style={{ marginTop: 16 }}
                  >
                    The firm serves individuals and families in Phoenix and
                    other Arizona communities. Explore local information for:
                  </p>

                  <ul className={classes.cityLinks}>
                    <li>
                      <Link
                        href="/mesa-az-bankruptcy-attorney"
                        className={classes.link}
                      >
                        Mesa
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/gilbert-az-bankruptcy-attorney"
                        className={classes.link}
                      >
                        Gilbert
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/prescott-az-bankruptcy-lawyer"
                        className={classes.link}
                      >
                        Prescott
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/tucson-az-bankruptcy-attorney"
                        className={classes.link}
                      >
                        Tucson
                      </Link>
                    </li>
                  </ul>
                </div>

                <OfficeMapEmbed containerClassName={classes.map} />
              </div>
            </section>

            <section
              className={classes.contentSection}
              aria-labelledby="faq-heading"
            >
              <div className={classes.eyebrow}>
                Common questions
              </div>

              <h2
                id="faq-heading"
                className={classes.heading}
              >
                Phoenix Bankruptcy FAQs
              </h2>

              <article className={classes.faq}>
                <h3 className={classes.faqHeading}>
                  How Do I Know If Bankruptcy Is the Right Option in Phoenix,
                  AZ?
                </h3>

                <p className={classes.bodyCopy}>
                  Bankruptcy can make sense when debt payments, lawsuits,
                  wage garnishments, or repossession threats are no longer
                  manageable. The quickest way to decide is to look at your
                  goals (protecting income, keeping a car or home, stopping
                  collection pressure), your monthly budget, and the types of
                  debts you have. In a Phoenix bankruptcy consultation, we
                  usually start with a clear snapshot of income, debts, and
                  assets so you can compare bankruptcy to realistic
                  alternatives and choose the best next step.
                </p>
              </article>

              <article className={classes.faq}>
                <h3 className={classes.faqHeading}>
                  Can Bankruptcy Stop Wage Garnishment or a Lawsuit in
                  Phoenix?
                </h3>

                <p className={classes.bodyCopy}>
                  In many cases, yes. Filing typically triggers the{" "}
                  <strong>automatic stay</strong>, which generally pauses most
                  collection activity, including wage garnishments and many
                  lawsuits. Timing matters in Phoenix, especially if a
                  garnishment is already hitting your paycheck or a court
                  deadline is approaching, so it&apos;s smart to get advice
                  before another pay period or hearing date passes. Some
                  situations have exceptions, and creditors may need proper
                  notice.
                </p>
              </article>

              <article className={classes.faq}>
                <h3 className={classes.faqHeading}>
                  Can I Keep My Car or Home If I File Bankruptcy in Phoenix?
                </h3>

                <p className={classes.bodyCopy}>
                  Often, yes, especially when there&apos;s a clear plan.
                  Whether you can keep your home or car depends on your
                  equity, your payment status, and which chapter you file.
                  Arizona&apos;s exemption rules also play a big role. A
                  consultation usually focuses on your liens, payoff amounts,
                  and whether the right strategy is to protect the asset,
                  catch up on arrears, or restructure payments.
                </p>
              </article>

              <article className={classes.faq}>
                <h3 className={classes.faqHeading}>
                  How Fast Can a Phoenix Bankruptcy Case Be Filed If I Have a
                  Garnishment or Lawsuit?
                </h3>

                <p className={classes.bodyCopy}>
                  It depends on how quickly accurate information can be
                  gathered, but many filings can move quickly once the
                  essentials are collected. If you&apos;re dealing with a
                  wage garnishment, a bank garnishment, a pending lawsuit, or
                  a trustee sale date, the priority is to gather a reliable
                  snapshot (income, debts, and key documents) so you
                  don&apos;t lose time to avoidable delays. If time is
                  critical, say so right away so the next steps can be
                  prioritized.
                </p>
              </article>

              <article className={classes.faq}>
                <h3 className={classes.faqHeading}>
                  What Should I Gather for a Phoenix Bankruptcy Consultation?
                </h3>

                <p className={classes.bodyCopy}>
                  You don&apos;t need perfect paperwork. The most helpful
                  items are recent pay stubs (or other income proof), a list
                  of creditors or collection letters, any lawsuit or
                  garnishment documents, and basic housing/vehicle payment
                  details. If you have your most recent tax return, that can
                  help with planning. The goal is a dependable snapshot so
                  you can get clear answers without a lot of back-and-forth.
                </p>
              </article>
            </section>

            <section
              className={`${classes.fullBleed} ${classes.cta}`}
              aria-labelledby="final-cta-heading"
            >
              <h2
                id="final-cta-heading"
                className={classes.heading}
              >
                Book a Free Bankruptcy Consultation
              </h2>

              <p className={classes.ctaCopy}>
                Talk with Yontz Law about the debt problem you are facing,
                the options that may be available, and the information needed
                to decide on a practical next step.
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