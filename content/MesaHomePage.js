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

export default function MesaHomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>
          


          <h1 className={classes.title}>Mesa AZ Bankruptcy Attorney</h1>

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
  Looking for a <strong>Mesa AZ bankruptcy attorney</strong> usually means the pressure is real—creditor calls, a lawsuit,
  a garnishment notice, or the fear of losing a vehicle you rely on every day. Most people don’t wake up “wanting” bankruptcy.
  They want the stress to stop and a plan that makes sense.
</p>

<p>
  We help individuals and families in Mesa and the East Valley understand their options and take the next step with confidence.
  Many consultations are handled virtually, and we’ll tell you plainly whether bankruptcy is the right tool—or whether another
  approach makes more sense.
</p>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>

<h2 className={classes.title}>Mesa Bankruptcy Attorney Consultation Snapshot</h2>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Clarity fast:</strong> what bankruptcy can realistically fix in your situation, and what it won’t.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Strategy and timing:</strong> how to avoid common pitfalls before you file.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Respectful process:</strong> no judgment, no lectures—just straightforward answers.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Help across Arizona:</strong> we serve clients statewide, in-person and virtual meetings available at your convenience.
  </li>
</ul>

<h2 className={classes.title}>Choosing a Bankruptcy Attorney in Mesa</h2>

<p>
  When you’re searching for a <strong>bankruptcy attorney mesa az</strong> residents can trust, experience and communication
  matter as much as legal knowledge. You should know what the timeline looks like, what documents matter most, and what
  decisions could complicate things.
</p>

<p>
  Attorney Casey Yontz has practiced bankruptcy law for over <strong>18 years</strong> and has handled <strong>thousands</strong>{" "}
  of bankruptcy matters. The benefit of that experience is simple: we’ve seen the patterns, we know where people get tripped up,
  and we can help you avoid preventable mistakes.
</p>

<h2 className={classes.title}>Common Debt Pressures We See in Mesa</h2>

<p>
  People searching for <strong>bankruptcy lawyers mesa</strong> often reach out because something has shifted—income dropped,
  expenses spiked, or a lawsuit/garnishment hit at the worst possible time. We commonly help with:
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
      <strong>Collections and lawsuits:</strong> creditor suits, judgments, and the stress of court paperwork.
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Wage garnishments:</strong> money being taken from each paycheck and the urgency that creates.
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Medical and family expenses:</strong> bills that snowball into collections.
    </li>
    <li style={{ marginBottom: 10 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Vehicle payment stress:</strong> the risk of repossession when transportation is non-negotiable.
    </li>
    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Credit card overload:</strong> balances that keep growing even when you’re doing “everything right.”
    </li>
  </ul>
</div>
<h2 className={classes.title}>Mesa Economy Snapshot</h2>

<p>
  Mesa is a large East Valley city with a diverse workforce. In our consultations, we often see budgeting pressure and
  debt stress tied to changes in hours, overtime, contract work, and rising household expenses.
</p>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Key local industries:</strong> Mesa highlights healthcare, education, and aerospace/aviation/defense among its
    major industry priorities.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Large employers:</strong> Mesa’s major employers include organizations across healthcare, logistics, higher
    education, and advanced manufacturing.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Why it matters for bankruptcy:</strong> variable schedules and income swings can affect timing, paperwork, and
    which bankruptcy path fits best.
  </li>
</ul>

<p style={{ marginTop: 12 }}>
  If you’re unsure how your job situation or income pattern affects eligibility, a quick consultation can bring clarity.
</p>

<h2 className={classes.title}>Bankruptcy Paths Mesa Residents Typically Compare</h2>

<p>
  Two common options for individuals are <strong>chapter 7</strong> and <strong>chapter 13</strong>. The right fit depends on income,
  assets, and what you’re trying to protect. A good <strong>bankruptcy attorney in mesa</strong> should walk you through trade-offs
  before you commit to a path.
</p>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Chapter 7:</strong> often used to eliminate qualifying unsecured debt and move toward a faster reset when the numbers fit.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Chapter 13:</strong> often used to catch up over time and protect assets through a structured repayment plan.
  </li>
</ul>

<h2 className={classes.title}>East Valley Timing Issues That Come Up Before Filing</h2>

<p>
  Most complications come from timing and paperwork—not from “doing bankruptcy wrong.” Here are a few situations we see often that
  are easier to handle when you address them early:
</p>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Last-minute credit use:</strong> especially cash advances or unusually large charges.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Repaying a family member:</strong> “I just wanted to make them whole” can create avoidable issues.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Moving titles or assets:</strong> transfers done “for safekeeping” often backfire.
  </li>
</ul>

<h2 className={classes.title}>What Clients Say</h2>

<p>
  People reach out when they’re overwhelmed. We focus on clear explanations and calm guidance. Here are a few snippets from real client feedback:
</p>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
<li style={{ margin: 0, padding: "14px 16px", borderLeft: "4px solid #e6e6e6", background: "#fafafa" }}>
    <p style={{ margin: "0 0 6px", fontWeight: 700 }}>Professional and Above-and-Beyond Service</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “I was so impressed by the level of professionalism, and the service I experienced was consistently over and above all I could have asked.”
    </p>
  </li>
  <li style={{ margin: "0 0 14px", padding: "14px 16px", borderLeft: "4px solid #e6e6e6", background: "#fafafa" }}>
    <p style={{ margin: "0 0 6px", fontWeight: 700 }}>Less Anxiety</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “You made the whole process less scary… thx for calming my anxiety.”
    </p>
  </li>

  <li style={{ margin: "0 0 14px", padding: "14px 16px", borderLeft: "4px solid #e6e6e6", background: "#fafafa" }}>
    <p style={{ margin: "0 0 6px", fontWeight: 700 }}>Clear Explanations</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “He walked me step by step… explained every option… never made me feel stupid for asking questions.”
    </p>
  </li>
</ul>

<h2 className={classes.title}>Serving Mesa and the East Valley</h2>

<p>We serve Mesa and nearby East Valley communities, including:</p>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li><span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>Downtown Mesa</li>
  <li><span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>East Mesa</li>
  <li><span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>Dobson Ranch</li>
  <li><span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>Las Sendas</li>
  <li><span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>Red Mountain</li>
  <li><span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>Mesa Riverview area</li>
</ul>

<p>
  Appointments are available, and <strong>virtual consultations are always an option</strong> if that’s easier. We’ll help you
  understand your next step based on your situation.
</p>




<h2 className={classes.title}>What to Have Ready for Your Consultation Request</h2>

<p>
  You don’t need perfect paperwork to start. If you have any of the items below, we can give you clearer answers faster:
</p>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Income snapshot:</strong> recent pay stubs or a quick summary of monthly income.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Debt list:</strong> creditors, collections, and any lawsuits or garnishment paperwork.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Housing/vehicle basics:</strong> payment amounts and whether you’re behind.
  </li>
</ul>

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