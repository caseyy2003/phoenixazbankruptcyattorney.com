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
  
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>
          


<h1 className={classes.title}>Bankruptcy Lawyers in Phoenix, AZ</h1>

{/* TRUST / AUTHOR MODULE */}
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
      <time dateTime="2025-12-12" itemProp="dateModified">
        Last updated: December 12, 2025
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
  If you’re searching for <strong>bankruptcy lawyers Phoenix AZ</strong>, you’re probably dealing with more than a
  spreadsheet problem. Wage garnishments, lawsuits, repossession threats, or relentless creditor calls can make it feel
  like your life has become a constant fire drill.
</p>

<p>
  Our firm helps Phoenix residents get clear answers and a realistic plan. If bankruptcy is the right tool, we’ll explain
  how it works, what to expect, and how to protect what matters most. If it’s not the right fit, we’ll tell you that too.
</p>

{/* PRIMARY CTA — place your lead gen button here */}
{/* <Button ...>Free Consultation</Button> */}
<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
  Request a Free Consultation
  </Button>
</div>
<h2 className={classes.title}>At-a-Glance: What You Get When You Call</h2>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li>
    <strong>Clear, honest guidance:</strong> a straight answer about whether bankruptcy makes sense in your situation.
  </li>
  <li>
    <strong>Local Phoenix focus:</strong> guidance grounded in how cases are actually handled here, not generic internet advice.
  </li>
  <li>
    <strong>Respect and discretion:</strong> no judgment, no lectures, and no pressure.
  </li>
  <li>
  <strong>Virtual consultations statewide:</strong> we work with clients across Arizona, with in-person meetings available when needed.
</li>

</ul>

<h2 className={classes.title}>Bankruptcy Lawyers in Phoenix, AZ With 18+ Years of Experience</h2>

<p>
  When people are scared, they don’t need hype — they need someone who has seen the terrain. Attorney Casey Yontz has
  practiced bankruptcy law for over <strong>18 years</strong> and has worked with <strong>thousands</strong> of individuals
  facing real-world financial problems.
</p>


<p>
  That experience matters because bankruptcy is rarely “just paperwork.” Timing, strategy, and avoiding preventable
  mistakes can change the outcome. Our job is to explain your options in plain English and help you choose a path you can
  actually live with.
</p>
<div className={classes.imgContainer}>
              <NextImage
                src="/img/arizona-bankruptcy-exemptions-homestead-umbrella-protecting-home-yontz-law.webp"
                alt="Arizona home protected by an Arizona-flag umbrella, symbolizing Arizona bankruptcy exemptions shielding home equity from creditors."
                layout="responsive"
                width={800}           
                height={533}
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 700px, 900px"
                quality={70}
                priority={false}
                decoding="async"
              />
            </div>
{/* SECONDARY CTA — after EEAT */}
{/* <Button ...>Talk to a Phoenix Bankruptcy Attorney</Button> */}

<h2 className={classes.title}>Why Phoenix Residents Call a Bankruptcy Attorney</h2>

<p>
  Most people who reach out aren’t looking for a “fresh start” slogan — they’re looking for relief. We commonly help with:
</p>

<div
  style={{
    margin: "1rem 0 1.5rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
>
  <ul
    style={{
      listStyleType: "none",
      padding: 0,
      color: "#333",
      margin: 0,
    }}
  >
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Credit card debt:</strong> balances that have snowballed and become impossible to manage.
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Medical bills:</strong> expenses that piled up faster than income could keep up.
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Lawsuits and garnishments:</strong> judgments, wage garnishments, and collection actions.
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Foreclosure pressure:</strong> behind-on-payments situations and urgent timeline concerns.
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Vehicle repossession risk:</strong> transportation issues and lender pressure.
    </li>
    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Business-related personal debt:</strong> personal guarantees and fallout from a downturn.
    </li>
  </ul>
</div>


<h2 className={classes.title}>Chapter 7 and Chapter 13 Bankruptcy in Phoenix</h2>

<p>
  Two common bankruptcy options for individuals are <strong>chapter 7</strong> and <strong>chapter 13</strong>. The right
  choice depends on your income, assets, goals, and the specific pressures you’re facing.
</p>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li>
    <strong>Chapter 7:</strong> often used to eliminate qualifying unsecured debts and get a clean reset when income and
    assets fit the requirements.
  </li>
  <li>
    <strong>Chapter 13:</strong> often used to catch up on important debts over time and protect assets through a structured
    repayment plan.
  </li>
</ul>

<p>
  We’ll be adding detailed Phoenix-specific guides on both topics so you can go deeper when you’re ready.
</p>
<h2 className={classes.title}>Phoenix-Specific Mistakes That Can Complicate a Bankruptcy Case</h2>

<p>
  Most bankruptcy problems aren’t caused by the filing itself—they come from timing and paper trails. Here are a few
  issues we commonly see with Phoenix-area filers that are easy to avoid once you know they matter:
</p>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li>
    <strong>Using credit right before filing:</strong> running up cards for groceries, travel, or cash advances can create
    headaches later—even if the spending feels necessary at the time.
  </li>
  <li>
    <strong>Moving money between family members:</strong> repaying a relative, “borrowing” from a family account, or
    transferring a vehicle title to someone you trust can raise red flags.
  </li>
  <li>
    <strong>Tax refunds and stimulus-style payments:</strong> refunds can affect timing and planning. It’s worth discussing
    before you file so you don’t get surprised.
  </li>
  <li>
    <strong>Retirement accounts vs. bank accounts:</strong> people sometimes cash out or move funds without realizing how
    differently those accounts can be treated.
  </li>
</ul>

<p>
  A quick consultation can help you avoid the common “I wish I’d asked sooner” moments and choose a filing timeline that
  makes sense.
</p>

<h2 className={classes.title}>What Clients Say</h2>

<p>
  Bankruptcy is personal. Our goal is simple: clear answers, less anxiety, and a plan. Here are a few quick snippets from
  real client feedback:
</p>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li style={{ margin: "0 0 14px", padding: "14px 16px", borderLeft: "4px solid #e6e6e6", background: "#fafafa" }}>
    <p style={{ margin: "0 0 6px", fontWeight: 700 }}>Less Scary, Less Anxiety</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “You made the whole process less scary… thx for calming my anxiety.”
    </p>
    <p style={{ margin: "8px 0 0", fontWeight: 700 }}>— Tish</p>
  </li>

  <li style={{ margin: "0 0 14px", padding: "14px 16px", borderLeft: "4px solid #e6e6e6", background: "#fafafa" }}>
    <p style={{ margin: "0 0 6px", fontWeight: 700 }}>Professional and Organized</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “Very professional, knowledgeable and organized. We highly recommend his work!”
    </p>
    <p style={{ margin: "8px 0 0", fontWeight: 700 }}>— Paul &amp; Maria</p>
  </li>

  <li style={{ margin: "0 0 14px", padding: "14px 16px", borderLeft: "4px solid #e6e6e6", background: "#fafafa" }}>
    <p style={{ margin: "0 0 6px", fontWeight: 700 }}>Explained Every Option</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “He walked me step by step… explained every option… never made me feel stupid for asking questions.”
    </p>
    <p style={{ margin: "8px 0 0", fontWeight: 700 }}>— Melanie</p>
  </li>

  <li style={{ margin: 0, padding: "14px 16px", borderLeft: "4px solid #e6e6e6", background: "#fafafa" }}>
    <p style={{ margin: "0 0 6px", fontWeight: 700 }}>Hope and Peace of Mind</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “My creditors stopped harassing me, my home was saved, and I finally feel hopeful about my future again.”
    </p>
    <p style={{ margin: "8px 0 0", fontWeight: 700 }}>— Melanie</p>
  </li>
</ul>
<div className={classes.moduleWrapper}>
            <PageTopicSelector />
</div>
<h2 className={classes.title}>Serving Phoenix and Clients Across Arizona</h2>

<p>
  While Phoenix is our home base, we work with individuals and families throughout Arizona. Many clients prefer virtual
  meetings, and we’re set up for that. If an in-person meeting is helpful, we can discuss what makes sense for your
  situation.
</p>


{/* FINAL CTA — bottom of page */}
{/* <Button ...>Schedule a Free Consultation</Button> */}

<h2 className={classes.title}>Find Our Phoenix Office</h2>

<p>
  Our office is located at 4425 E Agave Rd. Suite 110, Phoenix, AZ 85044. Most clients prefer a virtual consultation,
  but in-person meetings are available when needed.
</p>


<div className={classes.iframeContainer}>
  <iframe
    title="Yontz Law, PLLC office location in Phoenix, Arizona"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    style={{ width: "100%", height: 380, border: 0, borderRadius: 8 }}
    src="https://www.google.com/maps?q=4425%20E%20Agave%20Rd.%20Suite%20110%2C%20Phoenix%2C%20AZ%2085044&output=embed"
  />
</div>

<h2 className={classes.title}>What to Have Ready for a Phoenix Bankruptcy Consultation</h2>

<p>
  You don’t need a perfect folder of paperwork to get started. But if you have any of the items below, we can give you
  clearer answers faster:
</p>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li>
    <strong>Recent pay stubs or income details:</strong> the last month or two is a great start.
  </li>
  <li>
    <strong>A rough list of debts:</strong> credit cards, medical bills, personal loans, and any collection lawsuits.
  </li>
  <li>
    <strong>Your housing info:</strong> rent amount or mortgage payment, and whether you’re behind.
  </li>
  <li>
    <strong>Vehicle info:</strong> the lender, payment amount, and whether repossession is a concern.
  </li>
  <li>
    <strong>Any court papers:</strong> especially wage garnishment, lawsuits, or trustee sale/foreclosure notices.
  </li>
</ul>

<p>
  If you don’t have these yet, that’s okay—submit a consultation request and we’ll tell you what matters most for your
  situation.
</p>
<h2 className={classes.title}>Request a Free Bankruptcy Consultation</h2>

<div className={classes.imgContainer}>
              <NextImage
                src="/img/phoenix-bankruptcy-lawyer-consultation-document-checklist.webp"
                alt="Checklist graphic showing documents to gather before meeting with a Phoenix bankruptcy lawyer, including pay stubs from the past six months, tax returns from the past two years, bank account statements, car loan and mortgage statements, and recent creditor notices or lawsuit papers."
                layout="responsive"
                width={800}           
                height={533}
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 700px, 900px"
                quality={70}
                priority={false}
                decoding="async"
              />
            </div>
<p>
  If you’re overwhelmed and searching for <strong>bankruptcy attorney phoenix az</strong>, the fastest way to get clarity
  is to submit a short consultation request. We serve clients across Arizona and will follow up with next steps based on
  your situation.
</p>
<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>


</GridItem>
        </GridContainer>
      </div>
    </>
  );
}