/* eslint-disable */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Link from "next/link";
import sectionTextStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js";
import NextImage from "next/image";
import PageTopicSelector from "/components/page-topic-selector/PageTopicSelector.js";
//import AzAreas from "/components/AzAreas/AzAreas.js";


const useStyles = makeStyles((theme) => ({
  ...sectionTextStyle,
  videoItem: {
    marginTop: 32,
    marginBottom: 16,
    width: '100%',
    maxWidth: '100%',         
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    contentVisibility: 'auto', 
    containIntrinsicSize: '700px 393px', 
    '&::before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',    
    },
    '@media (min-width: 640px)': {
      maxWidth: 700,           
    },
  },


  iframeContainer: {
    width:  '95%',
    maxWidth: 750,
    margin: '1.5rem auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  moduleWrapper: {
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100vw',
    background: '#fff',
    boxShadow:
      '0 16px 24px 2px rgba(0,0,0,0.14),' +
      '0 6px 30px 5px rgba(0,0,0,0.12),' +
      '0 8px 10px -5px rgba(0,0,0,0.2)',
    borderRadius: 6,
    padding: '20px 15px',
    margin: '32px 0',
  },
  imgContainer: {
    width: '95%',
    maxWidth: 600,
    margin: '1.5rem auto',
    
  },
  imgContainer1: {
    width: '95%',
    maxWidth: 550,
    margin: '1.5rem auto',
    
  },
  tableWrap: {
    width: '100%',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    margin: '16px 0 24px',
    borderRadius: 6,
    boxShadow:
      '0 1px 2px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.1)',
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
    whiteSpace: 'nowrap',
    color: '#111',  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #eee',
    verticalAlign: 'top',
    color: '#333',
  },
  
}));

export default function Chapter7Az() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>


          <h1 className={classes.title}>Chapter 7 Bankruptcy in Arizona: How It Works, Who Qualifies, and What You Can
  Keep</h1>
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
      <time dateTime="2026-01-13" itemProp="dateModified">
        Last updated: January 13, 2026
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
<div
  style={{
    margin: "0.25rem 0 1rem",
    padding: "10px 12px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
  aria-label="Key sources used for this guide"
>
  <div style={{ fontWeight: 700, color: "#555", marginBottom: 8 }}>
    Key Sources
  </div>

  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
  <Link
  href="https://www.law.cornell.edu/uscode/text/11/chapter-7"
  target="_blank"
  rel="noopener noreferrer nofollow"
  style={{
    display: "inline-block",
    padding: "6px 10px",
    border: "1px solid #e6e6e6",
    borderRadius: 999,
    background: "#fff",
    color: "#0656d3",
    textDecoration: "underline",
    fontSize: "0.95rem",
  }}
>
  Bankruptcy Code (11 U.S.C. ch. 7)
</Link>

    <Link
      href="https://www.azleg.gov/ars/33/01101.htm"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{
        display: "inline-block",
        padding: "6px 10px",
        border: "1px solid #e6e6e6",
        borderRadius: 999,
        background: "#fff",
        color: "#0656d3",
        textDecoration: "underline",
        fontSize: "0.95rem",
      }}
    >
      A.R.S. § 33-1101 (Homestead)
    </Link>

    <Link
      href="https://www.azleg.gov/ars/33/01125.htm"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{
        display: "inline-block",
        padding: "6px 10px",
        border: "1px solid #e6e6e6",
        borderRadius: 999,
        background: "#fff",
        color: "#0656d3",
        textDecoration: "underline",
        fontSize: "0.95rem",
      }}
    >
      A.R.S. § 33-1125 (Vehicle / Personal Property)
    </Link>

    <Link
      href="https://www.justice.gov/ust/means-testing"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{
        display: "inline-block",
        padding: "6px 10px",
        border: "1px solid #e6e6e6",
        borderRadius: 999,
        background: "#fff",
        color: "#0656d3",
        textDecoration: "underline",
        fontSize: "0.95rem",
      }}
    >
      U.S. Trustee Program (Means Testing)
    </Link>

    <Link
      href="https://www.justice.gov/ust/eo/bapcpa/20251101/bci_data/median_income_table.htm"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{
        display: "inline-block",
        padding: "6px 10px",
        border: "1px solid #e6e6e6",
        borderRadius: 999,
        background: "#fff",
        color: "#0656d3",
        textDecoration: "underline",
        fontSize: "0.95rem",
      }}
    >
      UST Median Income Table
    </Link>

    <Link
      href="https://www.azb.uscourts.gov/filing-fees"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{
        display: "inline-block",
        padding: "6px 10px",
        border: "1px solid #e6e6e6",
        borderRadius: 999,
        background: "#fff",
        color: "#0656d3",
        textDecoration: "underline",
        fontSize: "0.95rem",
      }}
    >
      AZ Bankruptcy Court Filing Fees
    </Link>
  </div>
</div>

<div
  style={{
    margin: "1rem 0 1.5rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
>
  <h3 className={classes.title} style={{ marginTop: 0, marginBottom: 12 }}>
    Why You Can Trust This Guide
  </h3>

  <ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Arizona-focused, attorney-reviewed:</strong> Built from real Arizona chapter 7 filing issues—what you can keep,
      who qualifies, and what to watch out for—reviewed by an Arizona bankruptcy attorney with 18+ years of experience.
    </li>

    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Primary sources are linked on this page:</strong> We link directly to the Arizona exemption statutes (A.R.S.)
      and U.S. Trustee Program means test resources so you can verify key rules and numbers.
    </li>

    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Clear scope, plain-English explanations:</strong> We cover the common path for consumer cases and flag areas
      where results can vary (like equity, taxes, recent transfers, or unusual income) so you know what’s “normal” and what
      needs a closer look.
    </li>

    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Practical, decision-first structure:</strong> The goal is to help you make the next right move—understand
      eligibility, protect what matters, and avoid preventable mistakes before filing.
    </li>
  </ul>
</div>

<p>
  If you’re researching <strong>chapter 7 bankruptcy Arizona</strong>, you’re
  probably trying to answer a few practical questions: “Can I erase credit cards
  and medical bills?”, “Will I lose my house or car?”, and “Do I qualify under
  the means test?” This guide walks through how{" "}
  <strong>bankruptcy chapter 7 in Arizona</strong> works in plain English, what
  the process looks like in real life, and the big decisions people usually face
  before filing.
</p>
<h2 className={classes.title}>What Chapter 7 Bankruptcy Does (and Does Not) Do</h2>

<p>
  Most people looking at chapter 7 want the same bottom-line answers:{" "}
  <strong>Will this stop collection pressure?</strong>{" "}
  <strong>Can I keep my house and car?</strong>{" "}
  <strong>Which debts actually go away?</strong> Chapter 7 is designed to give
  eligible filers a fresh start by wiping out many unsecured debts—usually
  without a long repayment plan.
</p>

<div
  style={{
    margin: "1rem 0 1.25rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
>
  <h3 className={classes.title} style={{ marginTop: 0, marginBottom: 12 }}>
    What Chapter 7 Typically Does for People in Arizona
  </h3>

  <ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Stops most collection activity quickly:</strong> In most cases,
      filing triggers the “automatic stay,” which typically pauses collection
      calls, lawsuits, garnishments, and many other collection actions while
      your case is pending.
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Erases many unsecured debts:</strong> Most people use chapter 7 to
      wipe out the kinds of debts that don’t have collateral attached.
    </li>
    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Moves on a fairly predictable timeline:</strong> Many cases follow
      a simple path: file → 341 meeting → discharge (in eligible cases).
    </li>
  </ul>
</div>

<h3 className={classes.title}>Debts Chapter 7 Commonly Discharges</h3>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Credit card debt
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Medical bills
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Personal loans and many signature loans
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Many older utility balances and collections
  </li>
</ul>
<div className={classes.imgContainer}>
  <NextImage
    src="/img/arizona-chapter-7-dischargeable-vs-not-dischargeable-debts.webp"
    alt="Infographic showing an Arizona outline comparing debts usually dischargeable in chapter 7 bankruptcy (credit card debt, medical bills, personal loans, utility bills) versus debts generally not dischargeable (child support, recent taxes, student loans, court fines), with a legal disclaimer at the bottom."
    width={800}
    height={533}
    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 700px, 900px"
    quality={70}
    style={{ width: "100%", height: "auto" }}
  />
</div>
<h3 className={classes.title}>Important Limits to Know Up Front</h3>

<p>
  Some obligations typically survive bankruptcy, even after a chapter 7
  discharge. The goal isn’t to discourage you—it’s to help you set accurate
  expectations before you{" "}
  <strong>file bankruptcy chapter 7 Arizona</strong>.
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Support obligations:</strong> child support and spousal maintenance
    generally do not go away.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Most student loans:</strong> many require a separate legal standard
    in a separate proceeding to discharge.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Some taxes:</strong> especially recent taxes or taxes tied to
    missing filings can be complicated.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Fines, restitution, and certain “bad acts” debts:</strong> some
    debts tied to fraud or intentional harm can be challenged and may not be
    discharged.
  </li>
</ul>
<div
  style={{
    margin: "1rem 0 1.25rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
>
  <h3 className={classes.title} style={{ marginTop: 0, marginBottom: 12 }}>
    Common Scenarios Arizona Filers Ask About
  </h3>

  <h4 className={classes.title} style={{ marginTop: 0, marginBottom: 10 }}>
    Scenario 1: “I Want to Keep My Car”
  </h4>

  <p style={{ margin: "0 0 10px" }}>
    Keeping a car in chapter 7 often comes down to two practical questions:
    (1) whether there’s meaningful <strong>equity</strong>, and (2) whether the
    loan situation is workable going forward.
  </p>

  <ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Equity check:</strong> estimate the car’s value minus the loan balance.
      If there’s little to no equity (or it’s protected), car-retention is often
      straightforward in many consumer cases.
    </li>
    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>If you’re behind on payments:</strong> chapter 7 usually doesn’t provide
      a built-in long-term catch-up plan. If the goal is to catch up over time,
      it’s often smart to compare a repayment plan under{" "}
      <Link
        href="/chapter-13-bankruptcy-arizona"
        style={{ color: "#0656d3", textDecoration: "underline" }}
      >
        Chapter 13 bankruptcy in Arizona
      </Link>
      .
    </li>
  </ul>

  <p style={{ margin: "10px 0 0" }}>
    If the car is critical for work or family logistics, it’s worth doing a quick
    equity estimate and mapping out the payment plan before you file.
  </p>

  <div style={{ height: 14 }} />

  <h4 className={classes.title} style={{ marginTop: 0, marginBottom: 10 }}>
    Scenario 2: “I’m Behind on My Mortgage and Want to Keep the House”
  </h4>

  <p style={{ margin: "0 0 10px" }}>
    Chapter 7 can wipe out unsecured debts and may create short-term breathing room,
    but mortgage arrears are different. If your main goal is to keep the home, the
    key question is whether you need time to catch up.
  </p>

  <ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Short-term pause:</strong> filing often triggers the automatic stay,
      which can temporarily pause foreclosure activity while the case is pending.
    </li>
    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Catch-up plan:</strong> if you need a structured way to repay arrears
      over time, that’s typically when it makes sense to look closely at{" "}
      <Link
        href="/chapter-13-bankruptcy-arizona"
        style={{ color: "#0656d3", textDecoration: "underline" }}
      >
        chapter 13 bankruptcy in Arizona
      </Link>
      , which is designed around a court-approved repayment plan.
    </li>
  </ul>

  <p style={{ margin: "10px 0 0" }}>
    If you’re trying to keep a home, the best next step is usually to estimate the
    arrears, confirm whether you can resume normal payments, and then choose the
    chapter that fits that plan.
  </p>

  <div style={{ height: 14 }} />

  <h4 className={classes.title} style={{ marginTop: 0, marginBottom: 10 }}>
    Scenario 3: “I’m Worried About What I Can Keep”
  </h4>

  <p style={{ margin: "0 0 10px" }}>
    This is the most common fear people have about chapter 7. In many consumer cases,
    people keep their typical household property—but the correct answer depends on
    equity and how Arizona’s exemption rules apply to your specific assets.
  </p>

  <p style={{ margin: "0 0 10px" }}>
    If you want the full, Arizona-specific exemptions breakdown (categories, common
    issues, and the practical way lawyers analyze “keep vs. risk”), start here:{" "}
    <Link
      href="/arizona-bankruptcy-exemptions"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      Arizona bankruptcy exemptions guide
    </Link>
    .
  </p>

</div>
<p style={{ margin: 0 }}>
  If you’re close to the line on a home, vehicle, or other higher-value property,
  it’s worth getting an Arizona bankruptcy attorney to review the numbers before you file—especially
  equity estimates, which Arizona protections apply, and any timing issues that could create extra
  trustee questions. A quick review can prevent unpleasant surprises.
</p>

<div
  style={{
    margin: "1rem 0 0",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fff",
    textAlign: "center",
  }}
>
  <p style={{ margin: "0 0 10px" }}>
    If you’d like, tell us what’s going on and we’ll help you identify the best next step.
  </p>

  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>

  <p style={{ margin: "10px 0 0", color: "#555" }}>
    <small>
      For informational purposes only, not legal advice. Always seek advice from a qualified bankruptcy attorney.
    </small>
  </p>
</div>

<h2 className={classes.title}>What Happens to Your Property in an Arizona Chapter 7 Case</h2>

<p>
  A chapter 7 case is administered by a trustee, who reviews the paperwork,
  looks for non-exempt value, and can administer non-exempt assets if it makes
  financial sense for creditors. Most consumer chapter 7 cases are “no-asset”
  cases, meaning the filer keeps their protected property and there’s nothing
  to liquidate.
</p>

<div
  style={{
    margin: "1rem 0 1.25rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
>
  <h3 className={classes.title} style={{ marginTop: 0, marginBottom: 12 }}>
    Plain-English Property Rule: Equity + Protection Rules
  </h3>

  <p style={{ margin: "0 0 10px" }}>
    In chapter 7, property questions usually come down to <strong>equity</strong>{" "}
    and whether Arizona’s <strong>protection rules</strong> cover that equity.
  </p>

  <ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Equity</strong> is generally the value of something minus the loans
      against it (for example, home value − mortgage balance).
    </li>
    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Protection rules</strong> are the Arizona laws that can shield certain
      equity or property in a bankruptcy case. The details matter, so it’s worth
      using a dedicated exemptions reference when you’re making decisions.
    </li>
  </ul>

  <p style={{ margin: "10px 0 0" }}>
    For the full Arizona-specific breakdown (categories, common issues, and how it’s
    applied in real cases), use our{" "}
    <Link
      href="/arizona-bankruptcy-exemptions"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      Arizona bankruptcy exemptions guide
    </Link>
    .
  </p>
</div>

<h3 className={classes.title}>Two High-Level Examples People Ask About</h3>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Home equity (homestead):</strong> Arizona has a homestead protection
    rule for a primary residence. Source:{" "}
    <Link
      href="https://www.azleg.gov/ars/33/01101.htm"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      A.R.S. § 33-1101
    </Link>
    .
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Vehicle equity:</strong> Arizona has a protection rule for equity in
    a motor vehicle. Source:{" "}
    <Link
      href="https://www.azleg.gov/ars/33/01125.htm"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      A.R.S. § 33-1125
    </Link>
    .
  </li>
</ul>

<p>
  If property is your main concern, the safest next step is to estimate equity and
  confirm how the Arizona rules apply to your specific assets before you file.
</p>




<h2 className={classes.title}>Do You Qualify? The Chapter 7 Means Test in Arizona</h2>

<p>
  The means test is the eligibility screen most people think of when they search{" "}
  <strong>chapter 7 bankruptcy Arizona</strong>. Here’s the practical way to approach
  it so you can get a reliable “likely yes / maybe / likely no” answer before you
  go too far down the road.
</p>

<div
  style={{
    margin: "1rem 0 1.25rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
>
  <h3 className={classes.title} style={{ marginTop: 0, marginBottom: 12 }}>
    Quick Checklist: What to Gather Before You Run the Means Test
  </h3>

  <ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Pay stubs (or income records) for the last 6 full calendar months:</strong>{" "}
      the means test uses a lookback window, not just your current paycheck.
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Your most recent tax return(s):</strong> helpful for confirming income sources and
      spotting one-time items (bonuses, contract work, distributions).
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>A list of everyone in your household and who you support:</strong>{" "}
      household size can change the median threshold and the analysis.
    </li>
    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Big monthly obligations:</strong> mortgage or rent, car payments, child support, and
      any unusual expenses that might need documentation.
    </li>
  </ul>
</div>

<p>
  Most people qualify for <strong>bankruptcy chapter 7 in Arizona</strong> in one of two ways:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>You’re under Arizona’s median income threshold</strong> for your household size,
    based on your average gross income over the last six full calendar months.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>You’re over median, but you still pass the means test</strong> after allowed deductions
    (certain living expenses and other deductions the bankruptcy forms apply).
  </li>
</ul>

<p>
  Being above the median doesn’t automatically mean you can’t file. It usually means you have
  more math to do before you know whether <strong>chapter 7</strong> is available to you.
</p>

<h3 className={classes.title}>Step 1: Compare Your 6-Month Average to Arizona’s Median Income</h3>

<p>
  Start by calculating your <strong>average gross income</strong> over the last six full calendar months.
  If that average is below the median for your household size, you typically qualify under the first “gate.”
</p>

<div
  style={{
    margin: "1rem 0 1.25rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
>
  <h3 className={classes.title} style={{ marginTop: 0, marginBottom: 12 }}>
    Quick Self-Check: Are You Using the Right 6 Months?
  </h3>

  <ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      Use the <strong>last 6 full calendar months</strong> before you file (not “the last 6 paychecks”).
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      Include <strong>overtime, bonuses, commissions, and side income</strong> that appeared in that period.
    </li>
    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      If income recently dropped, the six-month average can still be high—so timing and documentation matter.
    </li>
  </ul>
</div>

<h3 className={classes.title}>Arizona Chapter 7 Income Limits</h3>

<p>
  The table below shows Arizona’s median income levels for common household sizes. If your household’s
  average gross income over the last six full months is below the median for your household size, you
  typically qualify under the first “gate” of the analysis.
</p>

<div className={classes.tableWrap} role="region" aria-label="Arizona chapter 7 median income limits table">
  <table className={classes.table}>
    <thead>
      <tr>
        <th className={classes.th}>Household Size</th>
        <th className={classes.th}>Annual Median Income (USD)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className={classes.td}>1</td>
        <td className={classes.td}>$72,039</td>
      </tr>
      <tr>
        <td className={classes.td}>2</td>
        <td className={classes.td}>$86,745</td>
      </tr>
      <tr>
        <td className={classes.td}>3</td>
        <td className={classes.td}>$102,274</td>
      </tr>
      <tr>
        <td className={classes.td}>4</td>
        <td className={classes.td}>$118,067</td>
      </tr>
      <tr>
        <td className={classes.td} colSpan={2}>
          <em>Add $11,100 for each person over 4.</em>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p style={{ marginTop: 8, color: "#555" }}>
  <small>
    These figures reflect <em>chapter 7 bankruptcy Arizona income limits</em> effective for cases filed on or after{" "}
    <strong>November 1, 2025</strong>, based on the U.S. Trustee Program’s median income table (updated periodically).
    Always verify the most recent table here:{" "}
    <Link
      href="https://www.justice.gov/ust/eo/bapcpa/20251101/bci_data/median_income_table.htm"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      UST Median Family Income by Family Size
    </Link>
    .
  </small>
</p>

<h3 className={classes.title}>Step 2: If You’re Above Median, Run the Full Means Test (Deductions Matter)</h3>

<p>
  If your income is above the Arizona median, you typically complete the chapter 7 means test calculation.
  The question becomes whether, after allowed deductions, the numbers show enough “disposable income” to repay
  a meaningful amount of debt. If the calculation shows you don’t, you may still qualify to{" "}
  <strong>file bankruptcy chapter 7 Arizona</strong>.
</p>

<div
  style={{
    margin: "1rem 0 1.25rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
>
  <h3 className={classes.title} style={{ marginTop: 0, marginBottom: 12 }}>
    Above Median? Here Are the 4 Mistakes That Cause Bad Results
  </h3>

  <ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Using today’s income instead of the six-month average:</strong> the means test can look “worse” than your
      current situation if overtime or a bonus was in the lookback window.
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Assuming deductions equal your real spending:</strong> many categories use standardized amounts and rules
      from the bankruptcy forms.
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Miscounting household size:</strong> being off by one person can change the median threshold and the
      calculation.
    </li>
    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Not documenting unusual expenses or income changes:</strong> if your income dropped, or you have a special
      situation, the paperwork and timing matter.
    </li>
  </ul>
</div>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Your “current monthly income” uses a lookback:</strong> it’s based on the last six full months, not just what
    you’re earning today.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Allowed deductions aren’t always your exact spending:</strong> many categories use standardized amounts and
    rules from the bankruptcy forms.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Timing can matter:</strong> if your income recently dropped (job change, reduced overtime, medical leave), a
    careful review of the six-month average and documentation can be important.
  </li>
</ul>

<p>
  For an official overview of how the U.S. Trustee Program approaches means testing (including the data sources and forms
  involved), see:{" "}
  <Link
    href="https://www.justice.gov/ust/means-testing"
    target="_blank"
    rel="noopener noreferrer nofollow"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    U.S. Trustee Program: Means Testing
  </Link>
  .
</p>

<div
  style={{
    margin: "1rem 0 1.25rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
>
  <h3 className={classes.title} style={{ marginTop: 0, marginBottom: 12 }}>
    When to Get Help With the Means Test
  </h3>

  <ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      You’re <strong>close to the median</strong> and you’re not sure which 6-month period applies.
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      You have <strong>self-employment, commissions, bonuses, or irregular income</strong>.
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      You recently had a <strong>job change, reduced hours, medical leave, or a major income drop</strong>.
    </li>
    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      Your situation involves <strong>support payments</strong>, unusual expenses, or anything you think a trustee might question.
    </li>
  </ul>
</div>

<p>
  If you’re on the line, or you’re not sure how household size, overtime, self-employment, or irregular income should be
  handled, that’s one of the situations where speaking with an{" "}
  <strong>arizona chapter 7 bankruptcy lawyer</strong> can save you time and help you avoid filing mistakes.
</p>

<h2 className={classes.title}>How to File Bankruptcy Chapter 7 in Arizona: The Real-World Steps</h2>

<p>
  If you’re considering <strong>filing for bankruptcy chapter 7 in Arizona</strong>, this is the
  typical roadmap. The exact timing can vary, but these are the steps most cases follow.
</p>

<div
  style={{
    margin: "1rem 0 1.25rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
>
  <p style={{ margin: 0 }}>
    <strong>In most cases:</strong> gather documents → credit counseling → file → 341 meeting → debtor education → discharge.
  </p>
</div>

<ol style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>1.</span>
    <strong>Get organized:</strong> Gather pay stubs (last 6 full months), tax returns, bank statements,
    a creditor list, and a simple monthly budget.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>2.</span>
    <strong>Take the required credit counseling course:</strong> This is a pre-filing requirement and must be completed
    before you file. Timing matters, so don’t take it too early.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>3.</span>
    <strong>Prepare and file the petition and schedules:</strong> Accuracy matters. Missing creditors,
    incorrect values, or incomplete disclosures can cause delays—or worse.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>4.</span>
    <strong>The automatic stay begins:</strong> Filing typically pauses most collection activity (calls,
    lawsuits, garnishments) while the case is pending.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>5.</span>
    <strong>Attend the 341 meeting:</strong> You’ll answer trustee questions under oath about your paperwork.
    It’s usually brief, but preparation and honesty are essential.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>6.</span>
    <strong>Complete the debtor education course:</strong> This is the post-filing course required to receive a discharge.
    Missing it can delay or prevent discharge.
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>7.</span>
    <strong>Receive the discharge (if eligible):</strong> Many cases receive a discharge a few months after filing
    if there are no objections, unusual issues, or missing documents.
  </li>
</ol>

<h2 className={classes.title}>When an Arizona Chapter 7 Bankruptcy Lawyer Helps the Most</h2>

<p>
  You can file on your own, but chapter 7 is easiest when your situation is
  simple and your paperwork is clean. If you’re dealing with anything that could
  raise questions—like home or car equity, recent transfers, irregular income,
  tax issues, or a prior filing—getting an Arizona bankruptcy attorney involved
  early can prevent delays and mistakes.
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Confirm eligibility before you file:</strong> run the means test correctly and spot issues
    that could lead to dismissal or unnecessary complications.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Protect what matters:</strong> identify where equity exists and apply the Arizona protection rules
    appropriately so you don’t walk into avoidable property problems.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Stay ahead of trustee questions:</strong> prepare documentation for anything that commonly
    triggers follow-up (income changes, transfers, unusual deposits, tax refunds, or business income).
  </li>
</ul>

<p>
  If you’re deciding between chapter 7 and a repayment plan under chapter 13, you can compare approaches here:{" "}
  <Link
    href="/chapter-13-bankruptcy-arizona"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    Chapter 13 bankruptcy in Arizona
  </Link>
  .
</p>

<div
  style={{
    margin: "1rem 0 0",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
    textAlign: "center",
  }}
>
  <p style={{ margin: "0 0 10px" }}>
    If you’d like, tell us what’s going on and we’ll help you identify the best next step.
  </p>

  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>

  <p style={{ margin: "10px 0 0", color: "#555" }}>
    <small>
      For informational purposes only, not legal advice. Always seek advice from a qualified bankruptcy attorney.
    </small>
  </p>
</div>


<h2 className={classes.title}>Downsides and Tradeoffs to Consider Before You File</h2>

<p>
  Chapter 7 can be a powerful reset, but it’s not a magic wand. The best outcomes
  usually come from going in with clear expectations—what chapter 7 fixes, what
  it doesn’t fix, and what decisions you may still have to make after filing.
</p>

<div
  style={{
    margin: "1rem 0 1.25rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
>
  <h3 className={classes.title} style={{ marginTop: 0, marginBottom: 12 }}>
    A People-First Way to Think About Tradeoffs
  </h3>

  <p style={{ margin: 0 }}>
    Ask yourself two questions: (1) What problem am I trying to solve right now
    (lawsuits, garnishment, impossible payments, stress)? (2) What do I need to
    protect (housing, transportation, income stability)? These tradeoffs are
    easier to evaluate when you’re clear on your goal.
  </p>
</div>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 12 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Credit impact (realistic timeline):</strong> A chapter 7 filing can affect
    your credit for years. That said, many people begin rebuilding sooner than they
    expect—especially when the monthly minimum-payment pressure is gone and bills are
    paid on time going forward. The tradeoff is short-term credit fallout in exchange
    for long-term stability.
  </li>

  <li style={{ marginBottom: 12 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Property risk if there’s unprotected equity:</strong> Most consumer chapter 7
    cases are “no-asset,” but if you have meaningful equity that isn’t protected by the
    Arizona rules, the trustee can step in. The practical takeaway: before you file,
    estimate equity and identify the items that could realistically be questioned.
  </li>

  <li style={{ marginBottom: 12 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Co-signers are not automatically protected:</strong> Your discharge clears
    <em>your</em> personal liability, but it doesn’t automatically stop collection against a
    co-signer on the same debt. If you have co-signed accounts, it’s worth planning ahead
    for what the lender might do next.
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Some debts remain (budget after bankruptcy matters):</strong> Certain categories
    often survive, so it’s important to know what your monthly budget will look like after
    the case—housing, car, insurance, taxes, support obligations, and other essentials.
    Chapter 7 works best when the “after” budget is actually sustainable.
  </li>
</ul>

<div
  style={{
    margin: "1rem 0 0",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fff",
  }}
>
  <h3 className={classes.title} style={{ marginTop: 0, marginBottom: 12 }}>
    Before You File: 3 Quick Reality Checks
  </h3>

  <ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Are you current on the things you want to keep?</strong> (house, car, insurance)
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Is there any asset with meaningful equity?</strong> If yes, get it reviewed before filing.
    </li>
    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Will your “after” budget work?</strong> If key debts remain, make sure the plan is sustainable.
    </li>
  </ul>
</div>


<h2 className={classes.title}>Alternatives to Chapter 7 (When They Make Sense)</h2>

<p>
  Not everyone who searches <strong>bankruptcy chapter 7 arizona</strong> ends up filing
  chapter 7. The best option depends on what you’re trying to accomplish—stopping a lawsuit,
  catching up on a home or car, protecting an asset, or simply getting your monthly payments
  back under control.
</p>

<div
  style={{
    margin: "1rem 0 1.25rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
>
  <h3 className={classes.title} style={{ marginTop: 0, marginBottom: 12 }}>
    Quick Decision Guide
  </h3>

  <ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      If you have <strong>steady income</strong> but need time to catch up on a home or car, compare{" "}
      <Link
        href="/chapter-13-bankruptcy-arizona"
        style={{ color: "#0656d3", textDecoration: "underline" }}
      >
        chapter 13 bankruptcy in Arizona
      </Link>
      .
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      If you can realistically pay debts down but need <strong>lower interest and a structured payment</strong>,
      a debt management plan may fit.
    </li>
    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      If you have access to a <strong>lump sum</strong> and your debts are negotiable, settlement can sometimes
      be a faster exit—but it has tradeoffs.
    </li>
  </ul>
</div>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 12 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Negotiation or settlement:</strong> This can be workable when you have lump-sum funds or leverage
    (for example, a temporary hardship, a disputed balance, or a creditor willing to deal). The tradeoffs are
    that settlement can require cash up front, collections may continue while you negotiate, and there can be
    tax and credit consequences depending on the situation.
  </li>

  <li style={{ marginBottom: 12 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Debt management plan (DMP):</strong> A structured plan through a reputable credit counseling agency
    that may reduce interest rates and simplify payments. A DMP typically doesn’t reduce principal the way
    bankruptcy can, so it tends to work best when your income is stable and the payment is truly affordable.
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Chapter 13 repayment plan:</strong> If your goal is to keep a home or car and you need time to catch
    up on arrears, chapter 13 is often the tool designed for that. It can also be used to protect certain assets
    and handle some types of debt over time. If this is your situation, start here:{" "}
    <Link
      href="/chapter-13-bankruptcy-arizona"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      Chapter 13 bankruptcy in Arizona
    </Link>
    .
  </li>
</ul>




<h2 className={classes.title}>Bottom Line: Is Chapter 7 Bankruptcy in Arizona Right for You?</h2>

<p>
  Chapter 7 can be a strong option when unsecured debt has become unmanageable and you need a clean reset—especially if
  your budget is tight and a long repayment plan isn’t realistic. But the “right” answer usually comes down to a few
  specific facts, not a generic rule.
</p>

<div
  style={{
    margin: "1rem 0 1.25rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
>
<h3 className={classes.title} style={{ marginTop: 0, marginBottom: 12 }}>
  Quick Self-Check: Chapter 7 Is Often a Good Fit When…
</h3>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Most of your debt is <strong>unsecured</strong> (credit cards, medical bills, personal loans).
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Your income is <strong>below the median</strong> or you can pass the means test after allowed deductions.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    You don’t have meaningful <strong>unprotected equity</strong> in property you need to keep.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Creditors are actively trying to collect (calls, letters, a lawsuit/summons, wage garnishment, or bank levies),
    and you need a legal pause while you get your footing.
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    You mainly need <strong>relief now</strong>—to stop collection pressure and stabilize your finances.
  </li>
</ul>

</div>

<div
  style={{
    margin: "1rem 0 1.25rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fff",
  }}
>
  <h3 className={classes.title} style={{ marginTop: 0, marginBottom: 12 }}>
    When Chapter 13 Is Often Worth Comparing
  </h3>

  <ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      You’re <strong>behind on a mortgage</strong> and need time to catch up through a structured plan.
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      You’re <strong>behind on a car</strong> and keeping the vehicle is essential.
    </li>
    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      You have <strong>steady income</strong> and need a court-approved payment plan to protect important assets.
    </li>
  </ul>

  <p style={{ margin: "10px 0 0" }}>
    If any of these fit, start here:{" "}
    <Link
      href="/chapter-13-bankruptcy-arizona"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      Chapter 13 bankruptcy in Arizona
    </Link>
    .
  </p>
</div>


<p>
  If you’d like a personalized review of whether you can <strong>file bankruptcy chapter 7 Arizona</strong>, the most
  reliable next step is to have an Arizona bankruptcy attorney review eligibility, equity concerns, and any timing issues
  before you file. That kind of review helps you avoid preventable mistakes and choose the chapter that fits your goal.
</p>

<div
  style={{
    margin: "1rem 0 0",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
    textAlign: "center",
  }}
>
  <p style={{ margin: "0 0 10px" }}>
    If you’d like, tell us what’s going on and we’ll help you identify the best next step.
  </p>

  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>

  <p style={{ margin: "10px 0 0", color: "#555" }}>
    <small>
      For informational purposes only, not legal advice. Always seek advice from a qualified bankruptcy attorney.
    </small>
  </p>
</div>

<div className={classes.moduleWrapper}>
            <PageTopicSelector />
</div>
<h2 className={classes.title}>Arizona Chapter 7 Bankruptcy FAQs</h2>

<h3 className={classes.title}>What debts can chapter 7 bankruptcy discharge in Arizona?</h3>
<p>
  chapter 7 commonly discharges many unsecured debts, such as credit card balances, medical bills, personal loans, and many collection accounts. Some categories often have special rules or may not be discharged in a typical case—so it’s important to identify exactly what debts you have (including any lawsuits, judgments, support obligations, or recent tax issues) before assuming everything will be wiped out. A review of your creditor list and any court paperwork helps set accurate expectations.
</p>

<h3 className={classes.title}>Will I lose my house or car if I file chapter 7 bankruptcy in Arizona?</h3>
<p>
  Not necessarily. In most consumer chapter 7 cases, people keep their exempt property, and many cases are “no-asset” cases. What you can keep usually depends on Arizona exemptions and how much equity you have in the home or vehicle. Payment status can matter too—being current versus behind can change the strategy. If you’re worried about a home or car, the key is to evaluate equity, exemptions, and timing before you file.
</p>

<h3 className={classes.title}>How do I qualify for chapter 7 bankruptcy in Arizona?</h3>
<p>
  Most people qualify in one of two ways: their household’s average gross income over the last six full calendar months is below Arizona’s median for their household size, or they’re above the median but still pass the means test after allowed deductions. Because the “current monthly income” calculation uses a six-month lookback, recent changes in overtime, job hours, or self-employment income can affect the result. If you’re close to the line, a careful means test review can prevent mistakes.
</p>

<h3 className={classes.title}>How long does a chapter 7 bankruptcy case usually take in Arizona?</h3>
<p>
  Many chapter 7 cases follow a predictable timeline: complete the required pre-filing credit counseling course, file the petition and schedules, attend the 341 meeting with the trustee, complete the post-filing debtor education course, and then receive a discharge in eligible cases. While timelines vary, many cases reach discharge a few months after filing if there are no unusual issues or objections. The fastest cases are usually the ones with complete, accurate paperwork and good documentation.
</p>

<h3 className={classes.title}>What should I avoid doing before filing chapter 7 bankruptcy in Arizona?</h3>
<p>
  The most common problems come from last-minute decisions that create extra questions later—like using credit right before filing (especially cash advances), transferring property to family “for safekeeping,” repaying relatives right before filing, or withdrawing retirement funds without understanding the tax and bankruptcy consequences. If bankruptcy is on the table, it’s usually smart to pause major financial moves and get advice on what to do (and not do) before you file.
</p>

</GridItem>
        </GridContainer>
      </div>
    </>
  );
}