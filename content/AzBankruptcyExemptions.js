/* eslint-disable */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import dynamic from "next/dynamic";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Link from "next/link";
import sectionTextStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js";
import NextImage from "next/image";
import PageTopicSelector from "/components/page-topic-selector/PageTopicSelector.js";
//import AzAreas from "/components/AzAreas/AzAreas.js";
const LiteYouTubeEmbed = dynamic(
  () =>
    import('react-lite-youtube-embed').then(
      (mod) => mod.LiteYouTubeEmbed ?? mod.default
    ),
  { ssr: false }
);

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
  exemptionsGlance: {
    margin: "24px 0 32px",
    padding: "clamp(16px, 3vw, 28px)",
    border: "1px solid #d6e2ef",
    borderTop: "4px solid #0656d3",
    borderRadius: 12,
    backgroundColor: "#f4f8fd",
    color: "#263747",
  },
  exemptionsGlanceTitle: {
    margin: "0 0 6px",
    color: "#17324d",
    fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
    fontWeight: 700,
    lineHeight: 1.25,
  },
  exemptionsGlanceIntro: {
    margin: "0 0 16px",
  },
  exemptionsGlanceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
    listStyle: "none",
    margin: 0,
    padding: 0,
    "& > li": {
      margin: 0,
      padding: "14px 16px",
      border: "1px solid #dce6f1",
      borderRadius: 8,
      backgroundColor: "#fff",
      lineHeight: 1.55,
    },
    "& > li:nth-child(-n+2)": {
      backgroundColor: "#eaf3ff",
      borderColor: "#c6dcf7",
    },
    "& > li > strong": {
      display: "block",
      marginBottom: 4,
      color: "#17324d",
    },
    "& a, & a:visited": {
      color: "#0656d3",
      textDecoration: "underline",
      textUnderlineOffset: "0.15em",
    },
    "@media (max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },
  exemptionsCautions: {
    borderColor: "#ead8af",
    borderTopColor: "#a66a16",
    backgroundColor: "#fffaf0",
    "& ul": {
      gridTemplateColumns: "1fr",
      gap: 0,
      marginTop: 12,
    },
    "& ul > li:nth-child(n)": {
      padding: "12px 0",
      border: 0,
      borderTop: "1px solid #ead8af",
      borderRadius: 0,
      backgroundColor: "transparent",
    },
    "& ul > li:last-child": {
      paddingBottom: 0,
    },
  },
  exemptionsInlineLink: {
    "&&, &&:visited": {
      color: "#0656d3",
      textDecoration: "underline",
    },
  },
  exemptionsFaq: {
    borderTop: "1px solid #d8e1ea",
    marginBottom: "1rem",
  },
  exemptionsFaqItem: {
    borderBottom: "1px solid #d8e1ea",
    "&[open] > summary": {
      backgroundColor: "#f4f8fc",
    },
  },
  exemptionsFaqQuestion: {
    padding: "12px 14px",
    cursor: "pointer",
    color: "#17324d",
    fontWeight: 700,
    "&::marker": {
      color: "#0656d3",
    },
    "&:focus-visible": {
      outline: "2px solid #0656d3",
      outlineOffset: "-2px",
    },
  },
  exemptionsFaqAnswer: {
    padding: "10px 14px 14px",
    "& > p": {
      margin: 0,
    },
  },
  
}));

export default function ArizonaBankrutpcyExemptions() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>


  <h1 className={classes.title}>Arizona Bankruptcy Exemptions</h1>
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
      , Attorney (18+ years of bankruptcy experience)
    </div>
    <div>
      <time dateTime="2026-11-25" itemProp="dateModified">
        Last updated: November 25, 2026
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

<p>
Arizona bankruptcy exemptions are laws that protect your property when you file for bankruptcy. Exemptions work differently when you file <Link
    href="/chapter-7-bankruptcy-arizona"
    prefetch={false}
    style={{ color: "#0656d3", textDecoration: "underline", fontWeight: 250 }}
  >
    Chapter 7
  </Link> and when you file <Link
    href="/chapter-13-bankruptcy-arizona"
    prefetch={false}
    style={{ color: "#0656d3", textDecoration: "underline", fontWeight: 250 }}
  >
    Chapter 13
  </Link>. It is very important to understand these Arizona exemptions and how they work in each chapter of bankruptcy.  
</p>


<section className={classes.exemptionsGlance} aria-labelledby="exemptions-at-a-glance">
  <h3 id="exemptions-at-a-glance" className={classes.exemptionsGlanceTitle}>
    Arizona Bankruptcy Exemptions Overview
  </h3>
  <p className={classes.exemptionsGlanceIntro}>
    Here is an overview of what Arizona bankruptcy exemptions can protect.
  </p>

  <ul className={classes.exemptionsGlanceGrid} role="list">
    <li>
      <strong>Home equity: up to $437,600</strong>
      The Arizona homestead exemption protects your equity in a primary residence. Be aware that the federal
      cap limit could effect this Arizona limit if your interest in the home was acquired within 1,215 days before filing bankruptcy.{" "}
      <a href="https://www.azleg.gov/ars/33/01101.htm" target="_blank" rel="noreferrer noopener">A.R.S. § 33-1101</a>
      {" · "}
      <a href="https://www.law.cornell.edu/uscode/text/11/522#p" target="_blank" rel="noreferrer noopener">11 U.S.C. § 522(p)</a>
    </li>

    <li>
      <strong>Vehicle equity: up to $16,500</strong>
      Arizona's vehicle exemption applies to equity in one vehicle. If you or a dependent has a physical disability, the exemption amount rises to $27,500.{" "}
      <a href="https://www.azleg.gov/ars/33/01125.htm" target="_blank" rel="noreferrer noopener">A.R.S. § 33-1125(8)</a>
    </li>

    <li>
      <strong>Household goods and furnishings: up to $16,500 total</strong>
      This includes qualifying furniture,
      appliances, electronics, and other household goods. {" "}
      <a href="https://www.azleg.gov/ars/33/01123.htm" target="_blank" rel="noreferrer noopener">A.R.S. § 33-1123</a>
    </li>

    <li>
  <strong>Bank-account exemption: up to $5,600 per filer</strong>
  A single filer can't split this exemption across multiple accounts. In a joint case, however, each spouse can choose to combine their exemptions in the same
  account, or use their exemptions on different accounts.{" "}
  <a
    href="https://www.azleg.gov/ars/33/01126.htm"
    target="_blank"
    rel="noreferrer noopener"
    className={classes.exemptionsInlineLink}
  >
    A.R.S. § 33-1126(A)(9)
  </a>
  {" · "}
  <a
    href="https://www.azleg.gov/ars/33/01121-01.htm"
    target="_blank"
    rel="noreferrer noopener"
    className={classes.exemptionsInlineLink}
  >
    A.R.S. § 33-1121.01
  </a>
</li>

    <li>
      <strong>Tools of the trade</strong>
      Arizona protects qualifying tools and equipment you use in your 
      business or profession. {" "}
      <a href="https://www.azleg.gov/ars/33/01130.htm" target="_blank" rel="noreferrer noopener">A.R.S. § 33-1130</a>
    </li>

    <li>
      <strong>Retirement</strong>
      Arizona protects many qualified retirement accounts. These rules vary by the type of account, and federal limits can apply to some.{" "}
      <a href="https://www.azleg.gov/ars/33/01126.htm" target="_blank" rel="noreferrer noopener">A.R.S. § 33-1126(B)</a>
      {" · "}
      <a href="https://www.law.cornell.edu/uscode/text/11/522#n" target="_blank" rel="noreferrer noopener">11 U.S.C. § 522(n)</a>
    </li>

    <li>
      <strong>Arizona Doesn't Have a Wildcard Exemption</strong>
Arizona does not have a wild card exemption like other states have. 
    </li>

    <li>
  <strong>Prepaid rent and security deposits of up to $2,000 </strong>
  If you rent your home
  you may be able to protect up to $2,000 combined in prepaid rent and
  security deposits.{" "}
  <a
    href="https://www.azleg.gov/ars/33/01126.htm"
    target="_blank"
    rel="noreferrer noopener"
    className={classes.exemptionsInlineLink}
  >
    A.R.S. § 33-1126(C)
  </a>
</li>
  </ul>
</section>

<section
  className={`${classes.exemptionsGlance} ${classes.exemptionsCautions}`}
  aria-labelledby="exemption-cautions"
>
  <h3 id="exemption-cautions" className={classes.exemptionsGlanceTitle}>
    Important Notices Before You Rely on Any Exemption List
  </h3>

  <ul className={classes.exemptionsGlanceGrid} role="list">
    <li>
      <strong>Exemption amounts and interpretations can change:</strong>
      Exemption statutes get amended, dollar amounts get adjusted, and court rulings can affect how exemptions are applied to assets.
    </li>
    <li>
      <strong>Exemptions aren’t automatic:</strong>
      In most cases, you must list your asset, its value, and the correct exemption statute on your bankruptcy petition.
    </li>
    <li>
      <strong>Small mistakes can be expensive:</strong>
      A wrong exemption statute citation or inaccurate value can lead to objections. If you’re considering bankruptcy, getting advice from an experienced Arizona bankruptcy attorney is strongly recommended.
    </li>
  </ul>
</section>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Get Help Applying Arizona Exemptions to Your Situation
  </Button>
</div>

<h2 className={classes.title}>How Arizona Bankruptcy Exemptions Work in Real Life</h2>

<p>
Here’s a simple way to think about exemptions: your <strong>bankruptcy forms are the “inventory,” and exemptions are the “keep list.”</strong>{' '}
You disclose what you own, put realistic values next to each item, and then claim the Arizona statute that protects it.
</p>

<p>
In a typical case, your bankruptcy trustee will review your schedules and look for anything that appears non-exempt or undervalued.
When you do your research correctly and the exemptions are claimed cleanly with accurate valuations, things usually go smoothly. 
</p>

<div className={`${classes.exemptionsGlance} ${classes.exemptionsCautions}`}>
<h3 id="phoenix-exemption-scenarios" className={classes.exemptionsGlanceTitle}>
    A Phoenix-Area Reality Check: Three Common Scenarios
  </h3>
  <ul className={classes.exemptionsGlanceGrid} role="list">
    <li>
      <strong>Scenario 1: “I own a home in Phoenix and my equity is close to the homestead limit.”</strong>
      <div>
       If your home equity is close to the exemption limit, your strategy may involve timing, valuation support,
        and confirming whether any federal limits could apply (like  the 1,215-day rule){" "}
        (<a
          href="https://www.law.cornell.edu/uscode/text/11/522#p"
          target="_blank"
          rel="nofollow noopener"
        >11 U.S.C. § 522(p)</a>).
      </div>
    </li>

    <li>
      <strong>Scenario 2: “My car is financed, but I need it for work.”</strong>
      <div>
      
        If your vehicle equity is higher, we look at the Arizona vehicle exemption and how it
        applies to your situation{" "}
        (<a
          href="https://www.azleg.gov/ars/33/01125.htm"
          target="_blank"
          rel="nofollow noopener"
        >A.R.S. § 33-1125(8)</a>).
      </div>
    </li>

    <li>
      <strong>Scenario 3: “I’m filing Chapter 13 because I have non-exempt equity.”</strong>
      <div>
        In <em>Chapter 13</em>, exemptions are important, but the question changes
        to: “How much will unsecured creditors need to be paid through my Chapter 13 plan?” Getting the valuations right can have a direct impact on plan math.
      </div>
    </li>
  </ul>
</div>

<h2 className={classes.title}>Arizona Opts Out of the Federal Bankruptcy Exemptions</h2>
<div className={classes.imgContainer}>
              <NextImage
                src="/img/arizona-opt-out-federal-bankruptcy-exemptions-arizona-state-flag.webp"
                alt="Bold headline text reading “Arizona opts out of federal bankruptcy exemptions” over the Arizona state flag background, illustrating that Arizona residents generally use state bankruptcy exemptions instead of the federal exemption list."
                width={800}
                height={533}
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 700px, 900px"
                quality={70}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
<p>
Arizona is an <em>opt-out</em> state. Under{' '}
<a
  href="https://www.azleg.gov/ars/33/01133.htm"
  target="_blank"
  rel="nofollow noopener"
  className={classes.exemptionsInlineLink}
>
  A.R.S. § 33-1133
</a> residents of Arizona are not entitled to the federal exemptions provided in <a
  href="https://uscode.house.gov/us/usc/t11/s522/"
  target="_blank"
  rel="nofollow noopener"
  className={classes.exemptionsInlineLink}
>
  11 U.S.C. § 522(d)
</a>. Directly below, we discuss who has to use Arizona exemptions, and when you may have to use other exemptions.
</p>

<section
  className={`${classes.exemptionsGlance} ${classes.exemptionsCautions}`}
  aria-labelledby="when-arizona-exemptions-apply"
>
  <h2
    id="when-arizona-exemptions-apply"
    className={classes.exemptionsGlanceTitle}
  >
    When Do You Have to Use Arizona Bankruptcy Exemptions?
  </h2>

  <p className={classes.exemptionsGlanceIntro}>
    Whether or not you have to use Arizona exemptions usually depends on how long Arizona has been your <strong>domicile</strong>. 
  </p>

  <ul className={classes.exemptionsGlanceGrid} role="list">
    <li>
      <strong>General rule:</strong>
      <div>
        You usually must use Arizona exemptions if you've been domiciled in Arizona{" "}
        <strong>730 days</strong> before filing{" "}
        (<a
          href="https://www.law.cornell.edu/uscode/text/11/522#b_3_A"
          target="_blank"
          rel="nofollow noopener"
          className={classes.exemptionsInlineLink}
        >
          11 U.S.C. § 522(b)(3)(A)
        </a>).
      </div>
    </li>

    <li>
      <strong>Recent movers:</strong>
      <div>
        If you don’t meet the 730-day rule, you may have to use another state’s
        exemptions (and in some cases a federal option may come into play depending
        on that state’s rules).
      </div>
    </li>

    <li>
      <strong>Businesses:</strong>
      <div>
        Corporations/LLCs don’t use personal exemptions the way individuals do.
      </div>
    </li>
  </ul>
</section>

<h2 className={classes.title}>Overview of Common Arizona Bankruptcy Exemptions</h2>

<p>
  Arizona exemptions cover four major categories.The tables below show the applicable exemption limits, including inflation adjustments where required. Note that some key exemptions, like homestead, vehicle, household goods, and the single-bank-account exemption are{" "}
  <strong>adjusted annually</strong>. As such, confirm the adjusted figure as of your filing date.
</p>

<h3 className={classes.title}>Real Property</h3>
<p style={{ marginTop: 0, color: "#555" }}>
  The Arizona homestead exemption protects equity in a primary residence. Below are the 2026 and 2027 amounts:
</p>

<div
  className={classes.tableWrap}
  role="region"
  aria-label="Arizona real property exemptions table"
>
  <table className={classes.table} style={{ width: "100%", tableLayout: "fixed" }}>
    <thead>
      <tr>
        <th scope="col" className={classes.th} style={{ width: "18%", whiteSpace: "normal" }}>Exemption</th>
        <th scope="col" className={classes.th} style={{ width: "34%", whiteSpace: "normal" }}>What It Protects</th>
        <th scope="col" className={classes.th} style={{ width: "18%", whiteSpace: "normal" }}>Amount</th>
        <th scope="col" className={classes.th} style={{ width: "12%", whiteSpace: "normal" }}>Statute</th>
        <th scope="col" className={classes.th} style={{ width: "18%", whiteSpace: "normal" }}>Practical Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere" }}>
          Homestead
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere" }}>
          Equity in your primary residence (home, condo, manufactured home, etc.)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere" }}>
          <strong>$437,600</strong> for 2026 filings
          <br />
          <strong>$452,500</strong> starting January 1, 2027
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere" }}>
          <a
            href="https://www.azleg.gov/ars/33/01101.htm"
            target="_blank"
            rel="nofollow noopener"
            className={classes.exemptionsInlineLink}
          >
            A.R.S. § 33-1101
          </a>
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere" }}>
          Homestead exemption amounts cannot be doubled in joint cases.
        </td>
      </tr>
    </tbody>
  </table>
</div>


<p style={{ fontSize: "0.95rem", marginTop: "1rem" }}>
  <em>
    Official statute text (including the annual adjustment rule):{" "}
    <a
      href="https://www.azleg.gov/ars/33/01101.htm"
      target="_blank"
      rel="nofollow noopener noreferrer"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      A.R.S. § 33-1101
    </a>
  </em>
</p>
<p>
  When you're doing research on the AZ homestead exemption, you may see different exemption amounts. The statute
  lists a base amount of <strong>$400,000</strong>, and older guides may show
  the limit for past years. Under{" "}
  <a
    href="https://www.azleg.gov/ars/33/01101.htm"
    target="_blank"
    rel="nofollow noopener"
    className={classes.exemptionsInlineLink}
  >
    A.R.S. § 33-1101(D)
  </a>, Arizona adjusts the limit on January 1st each year. The adjustment is based on the national Consumer Price Index (CPI-U) from one August to the next. If you're filing bankruptcy, use the limit that is effective on the day you file your case.
</p>

<h3 className={classes.title}>Motor Vehicle</h3>
<p style={{ marginTop: 0, color: "#555" }}>
  Arizona's motor vehicle exemption protects <strong>equity</strong> in a vehicle. Here are the 2026 and 2027 amounts:
</p>

<div className={classes.tableWrap} role="region" aria-label="Arizona vehicle exemptions table">
  <table className={classes.table} style={{ width: "100%", tableLayout: "fixed" }}>
    <thead>
      <tr>
        <th scope="col" className={classes.th} style={{ width: "18%", whiteSpace: "normal" }}>Exemption</th>
        <th scope="col" className={classes.th} style={{ width: "34%", whiteSpace: "normal" }}>What It Protects</th>
        <th scope="col" className={classes.th} style={{ width: "20%", whiteSpace: "normal" }}>Amount</th>
        <th scope="col" className={classes.th} style={{ width: "12%", whiteSpace: "normal" }}>Statute</th>
        <th scope="col" className={classes.th} style={{ width: "16%", whiteSpace: "normal" }}>Practical Notes</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Motor Vehicle
        </td>

        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Equity in <strong>one</strong> motor vehicle used primarily for personal,
          family, or household purposes.
        </td>

        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          <div>
            <strong>2026 filings</strong><br />
            $16,500 standard<br />
            $27,500 with a physical disability
          </div>
          <div style={{ marginTop: 8 }}>
            <strong>Starting January 1, 2027</strong><br />
            $17,100 standard<br />
            $28,500 with a physical disability
          </div>
          <div style={{ marginTop: 8 }}>
            The higher limit applies if the filer or a dependent has a physical disability.
          </div>
        </td>

        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          <a
            href="https://www.azleg.gov/ars/33/01125.htm"
            target="_blank"
            rel="nofollow noopener"
            className={classes.exemptionsInlineLink}
          >
            A.R.S. § 33-1125(8)
          </a>
        </td>

        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Use a defensible value (KBB/Carfax, photos, condition notes). Filing-date values matter.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p style={{ fontSize: "0.95rem", marginTop: "1rem" }}>
  <em>
    Official statute text:{" "}
    <a
      href="https://www.azleg.gov/ars/33/01125.htm"
      target="_blank"
      rel="nofollow noopener noreferrer"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      A.R.S. § 33-1125
    </a>
  </em>
</p>


<h3 className={classes.title}>Personal Property</h3>
<p style={{ marginTop: 0, color: "#555" }}>
  These exemptions cover the “stuff of daily life” and work essentials. Values are typically fair market value (what it
  would sell for), not “brand new replacement cost.”
</p>

<div className={classes.tableWrap} role="region" aria-label="Arizona personal property exemptions table">
  <table
    className={classes.table}
    style={{
      width: "100%",
      tableLayout: "fixed",
      minWidth: 900, // prevents cramped columns; wrapper can scroll on mobile
    }}
  >
    <thead>
      <tr>
        <th className={classes.th} style={{ width: "18%", whiteSpace: "normal" }}>Exemption</th>
        <th className={classes.th} style={{ width: "34%", whiteSpace: "normal" }}>What It Protects</th>
        <th className={classes.th} style={{ width: "16%", whiteSpace: "normal" }}>Amount</th>
        <th className={classes.th} style={{ width: "14%", whiteSpace: "normal" }}>Statute</th>
        <th className={classes.th} style={{ width: "18%", whiteSpace: "normal" }}>Practical Notes</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Household Goods &amp; Appliances
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Furniture, household goods (including consumer electronics), and appliances
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Up to <strong>$16,500</strong> aggregate fair market value (adjusted annually)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          A.R.S. § 33-1123
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Inventory + photos help if values are questioned. Use realistic resale values.
        </td>
      </tr>

      <tr>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Tools of the Trade
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Tools/equipment/instruments/books (including certain intangible work product) needed for your work
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Up to <strong>$5,000</strong> aggregate fair market value
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          A.R.S. § 33-1130(1)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          “Tools” do not include a personal-use vehicle. Document necessity (receipts/photos/work use).
        </td>
      </tr>

      <tr>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Engagement &amp; Wedding Rings
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Engagement and wedding rings
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Up to <strong>$2,000</strong> aggregate fair market value
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          A.R.S. § 33-1125(4)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Use fair market value, not sentimental value.
        </td>
      </tr>

      <tr>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Computer / Bicycle / Sewing Machine / Bible / Burial Plot
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          One computer, one bicycle, one sewing machine, a family bible, or a burial plot (grouped category)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Up to <strong>$2,000</strong> aggregate fair market value
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          A.R.S. § 33-1125(7)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          List what you’re claiming in the category so it’s clear.
        </td>
      </tr>

      <tr>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Firearms
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Firearms used for personal/family/household purposes
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Up to <strong>$2,000</strong> aggregate fair market value
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          A.R.S. § 33-1125(10)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Value is fair market value; list items clearly.
        </td>
      </tr>

      <tr>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Wearing Apparel
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Clothing
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Up to <strong>$500</strong> fair market value
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          A.R.S. § 33-1125(1)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Usually not contested unless luxury items are involved.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p style={{ fontSize: "0.95rem", marginTop: "1rem" }}>
  <em>
    Official statute text:{" "}
    <a
      href="https://www.azleg.gov/arstitle/"
      target="_blank"
      rel="nofollow noopener noreferrer"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      Arizona Revised Statutes (Title 33)
    </a>
  </em>
</p>


<h3 className={classes.title}>Financial Assets</h3>
<p style={{ marginTop: 0, color: "#555" }}>
  These exemptions are about money: cash in accounts, protected credits/refunds, wages (garnishment limits), and retirement.
  This category often drives “timing” decisions in chapter 7.
</p>

<div className={classes.tableWrap} role="region" aria-label="Arizona financial exemptions table">
  <table
    className={classes.table}
    style={{
      width: "100%",
      tableLayout: "fixed",
      minWidth: 900, // keeps columns from collapsing; wrapper can scroll on mobile
    }}
  >
    <thead>
      <tr>
        <th className={classes.th} style={{ width: "18%", whiteSpace: "normal" }}>Exemption</th>
        <th className={classes.th} style={{ width: "34%", whiteSpace: "normal" }}>What It Protects</th>
        <th className={classes.th} style={{ width: "18%", whiteSpace: "normal" }}>Amount</th>
        <th className={classes.th} style={{ width: "14%", whiteSpace: "normal" }}>Statute</th>
        <th className={classes.th} style={{ width: "16%", whiteSpace: "normal" }}>Practical Notes</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Cash in One Bank Account
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Cash held in a single account at any one financial institution
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Up to <strong>$5,600</strong> in one account (current adjusted amount; adjusted annually)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          A.R.S. § 33-1126(A)(9)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Common chapter 7 pressure point. Filing date (and payday timing) can matter.
        </td>
      </tr>

      <tr>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Earned Income / Child Tax Credits (Refund Portion)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Federal/state earned income tax credits and child tax credits (as described in the statute)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Exempt up to the lesser of total combined refunds or total combined eligible credits claimed
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          A.R.S. § 33-1126(A)(11)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Refund timing is a major planning issue. Bring recent returns and expected refund estimates.
        </td>
      </tr>

      <tr>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Retirement Plans (Many Types)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Many retirement plans under Internal Revenue Code sections listed in the statute
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Generally exempt, with exceptions (including contributions within <strong>120 days</strong> before filing)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          A.R.S. § 33-1126(B)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Plan type and recent contribution timing matter. Confirm details for your specific accounts.
        </td>
      </tr>

      <tr>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Prepaid Rent / Security Deposit (If No Homestead Claimed)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Prepaid rent and security deposit for your residence if you do not claim a homestead exemption
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Up to <strong>$2,000</strong>
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          A.R.S. § 33-1126(C)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Designed for renters. Useful when you’re not using the homestead exemption.
        </td>
      </tr>

      <tr>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Wages (Garnishment Limit)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Limits how much weekly disposable earnings can be taken by process (outside support orders)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Generally the lesser of <strong>10%</strong> of disposable earnings, or the amount above <strong>60×</strong> the applicable minimum hourly wage
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          A.R.S. § 33-1131(B)–(C)
        </td>
        <td className={classes.td} style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}>
          Support orders are treated differently (one-half exempt). Minimum wage changes can move the threshold.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p style={{ fontSize: "0.95rem", marginTop: "1rem" }}>
  <em>
    Statutes: Arizona Revised Statutes, Title 33 (Property). For the official text, start at{" "}
    <a
      href="https://www.azleg.gov/arstitle/"
      target="_blank"
      rel="nofollow noopener noreferrer"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      azleg.gov/arstitle
    </a>{" "}
    and navigate to Title 33, Chapter 8 (Exemptions).
  </em>
</p>
<h2 className={classes.title}>Arizona Bankruptcy Exemptions and Chapter 7 Bankruptcy</h2>

<p>
  In Chapter 7, the stakes are high to get your exemptions right. Chapter 7 is referred to as a liquidation chapter of bankruptcy. Which means that if you miss an exemption or it doesn’t cover enough of your equity, the
  trustee may be able to sell that property to pay creditors. 
</p>

<section
  className={`${classes.exemptionsGlance} ${classes.exemptionsCautions}`}
  aria-labelledby="why-exemptions-matter-chapter-7"
>
<h3 id="why-exemptions-matter-chapter-7" className={classes.exemptionsGlanceTitle}>
  What to Watch Out for When Using Arizona Bankruptcy Exemptions in Chapter 7
</h3>

  <ul className={classes.exemptionsGlanceGrid} role="list">
    <li>
      <strong>The trustee looks for value your exemptions don’t cover.</strong>
      <div>
        The Chapter 7 trustee assigned to your case looks for assets that are either not exempt at all, or aren't fully exempt. If there’s unprotected value, the trustee looks
        at whether selling the asset would leave money for creditors. <strong>Therefore, it is extremely important to research and plan how you're going to use your exemptions before you file a Chapter 7 case</strong>.
      </div>
    </li>

    <li>
      <strong>Getting the Value of Your Property Right Is Extremely Important</strong>
      <div>
        When you list the value of your property, especially real estate and vehicles, make sure you can support it. For example, for real estate, use comps or similar homes, and if you're close to that homestead limit, get an appraisal.
      </div>
    </li>

    <li>
      <strong>Don’t overlook assets that are harder to value.</strong>
      <div>
        Business equipment, legal claims, crypto, collectibles, and an interest
        in an inheritance all deserve a closer look.
      </div>
    </li>

    <li>
      <strong>Make sure you use the correct exemptions.</strong>
      <div>
        Remember that filing in Arizona doesn’t necessarily mean you can use Arizona’s exemptions. For example, if you've recently moved, you may have to use another state's exemption scheme. 
      </div>
    </li>
    <li>
      <strong>Make sure you know exactly how long you've owned your primary residence.</strong>
      <div>
    Arizona's homestead exemption is considered friendly, but remember that there is a federal cap to how much homestead you can claim if you've owned your home for less than <a
      href="https://www.law.cornell.edu/uscode/text/11/522#p"
      target="_blank"
      rel="nofollow noopener"
      className={classes.exemptionsInlineLink}
    >
      1,215 days before filing
    </a>.
  </div>
    </li>
  </ul>
</section>





<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>

<h2 className={classes.title}>Arizona Bankruptcy Exemptions FAQs</h2>

<div className={classes.exemptionsFaq}>
  <details className={classes.exemptionsFaqItem}>
    <summary className={classes.exemptionsFaqQuestion}>
      Do exemptions mean I keep everything I own?
    </summary>
    <div className={classes.exemptionsFaqAnswer}>
      <p>
        No. Exemptions protect specific property up to certain limits.
        If an item has non-exempt equity, that can create risk in Chapter 7
        or affect plan payments in Chapter 13.
      </p>
    </div>
  </details>

  <details className={classes.exemptionsFaqItem}>
    <summary className={classes.exemptionsFaqQuestion}>
      Can I choose the federal exemptions instead?
    </summary>
    <div className={classes.exemptionsFaqAnswer}>
      <p>
        Arizona is an opt-out state, so most Arizona filers use Arizona exemptions{" "}
        (<a
          href="https://www.azleg.gov/ars/33/01133.htm"
          target="_blank"
          rel="nofollow noopener"
          className={classes.exemptionsInlineLink}
        >A.R.S. § 33-1133</a>). Recent movers may have a different outcome
        because of federal domicile rules.
      </p>
    </div>
  </details>

  <details className={classes.exemptionsFaqItem}>
    <summary className={classes.exemptionsFaqQuestion}>
      Does filing jointly double the homestead exemption?
    </summary>
    <div className={classes.exemptionsFaqAnswer}>
      <p>
        No. Arizona allows one homestead exemption per married couple.
        Filing together doesn't double the limit.
      </p>
    </div>
  </details>

  <details className={classes.exemptionsFaqItem}>
    <summary className={classes.exemptionsFaqQuestion}>
      What’s the biggest mistake people make with exemptions?
    </summary>
    <div className={classes.exemptionsFaqAnswer}>
      <p>
        The biggest practical mistake is usually a tie between (1) using the
        wrong exemption system because of recent relocation, and (2) poor
        valuations that create avoidable trustee scrutiny.
      </p>
    </div>
  </details>

  <details className={classes.exemptionsFaqItem}>
    <summary className={classes.exemptionsFaqQuestion}>
      How long do I need to live in Arizona to use Arizona exemptions?
    </summary>
    <div className={classes.exemptionsFaqAnswer}>
      <p>
        Typically <strong>730 days (2 years)</strong> before filing, under
        federal domicile rules{" "}
        (<a
          href="https://www.law.cornell.edu/uscode/text/11/522#b_3_A"
          target="_blank"
          rel="nofollow noopener"
          className={classes.exemptionsInlineLink}
        >11 U.S.C. § 522(b)(3)(A)</a>).
      </p>
    </div>
  </details>
</div>

<p style={{ fontSize: "0.95rem" }}>
  <em>
    For informational purposes only, not legal advice. Exemption outcomes
    depend on facts, timing, and current law. Always seek advice from a
    qualified bankruptcy attorney.
  </em>
</p>

</GridItem>
        </GridContainer>
      </div>
    </>
  );
}