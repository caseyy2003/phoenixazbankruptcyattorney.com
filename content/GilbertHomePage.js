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

export default function GilbertHomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>
          


          <h1 className={classes.title}>Bankruptcy Law Firms in Gilbert: Local Help, Clear Answers, Next Steps</h1>

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
      <Link
        href="/about-us#casey-yontz"
        rel="author"
        itemProp="author"
        style={{ color: "#0656d3", textDecoration: "underline" }}
      >
        Casey Yontz
      </Link>
      , Attorney (18+ years bankruptcy experience)
    </div>
    <div>
      <time dateTime="2026-01-13" itemProp="dateModified">
        Last updated: January 13, 2026
      </time>
    </div>
    <div style={{ marginTop: "0.5rem" }}>
      <Link
        href="/about-us#casey-yontz"
        rel="author"
        style={{ color: "#0656d3", textDecoration: "underline" }}
      >
        About the Author
      </Link>
    </div>
  </div>
</div>

<p>
  If you’re searching for <strong>bankruptcy law firms in Gilbert</strong>, you’re probably not looking for “generic bankruptcy info.”
  You want to know what actually matters for someone living in Gilbert—what your options are, what the process feels like, and how to choose
  a lawyer who will guide you without confusion or pressure.
</p>

<p>
  This is a Gilbert hub page designed to help you get oriented fast. If you’re ready to talk, the simplest next step is to submit a
  consultation request so we can review your situation and give you a clear plan.
</p>

<div
  style={{
    margin: "1.25rem 0 0",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
    textAlign: "center",
  }}
>
  <p style={{ margin: "0 0 10px" }}>
    Tell us what’s going on. We’ll help you figure out the best next step.
  </p>

  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>

<h2 className={classes.title}>Gilbert, Arizona: When People Usually Start Looking at Bankruptcy</h2>

<p>
  Most people don’t wake up wanting to file bankruptcy. Usually something changes—income drops, expenses rise, a lawsuit shows up, or the
  minimum payments stop working. In Gilbert, we commonly see people start researching bankruptcy when:
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
    They’re juggling <strong>credit cards, medical bills, and personal loans</strong> and can’t get ahead.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    A <strong>lawsuit</strong> is filed (or a default judgment already happened).
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    They’re facing <strong>wage garnishment</strong> or a <strong>bank levy</strong>.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    They’re behind on a <strong>car payment</strong> or worried about repossession.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    They’re trying to keep a home but need a plan to <strong>catch up</strong>.
  </li>
</ul>

<p>
  If any of that sounds familiar, you’re not alone. The most important thing is getting a plan you understand—one that matches your goals and
  your budget.
</p>

<h2 className={classes.title}>How to Choose Bankruptcy Law Firms in Gilbert Without Wasting Time</h2>

<p>
  Google results can be overwhelming. Here’s how to compare <strong>bankruptcy law firms in Gilbert</strong> in a way that actually protects
  you.
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
    <strong>Look for a clear strategy:</strong> a good consult explains <em>why</em> a chapter fits, not just which one.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Ask what could complicate your case:</strong> recent transfers, big purchases, tax issues, or a pending lawsuit.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Confirm what’s included:</strong> filing, normal follow-ups, and what happens if something unexpected comes up.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Pay attention to communication:</strong> you should leave the call calmer—not more confused.
  </li>
</ul>

<p>
  A helpful question to ask any firm is: <em>“What are the top two risks in my situation, and how do you plan for them?”</em>
</p>

<h2 className={classes.title}>Chapter 7 Bankruptcy Attorneys in Gilbert: A Quick Fit Check</h2>

<p>
  If you’re searching for <strong>chapter 7 bankruptcy attorneys in gilbert</strong>, you’re usually trying to answer one practical question:
  <em> is chapter 7 a realistic option for me right now?</em> For many people, it can provide fast relief from unsecured debts like credit
  cards and medical bills. Whether it’s a good fit depends on your income, household size, recent financial activity, and what property you own.
</p>

<p>
  This Gilbert hub page keeps things high-level. For the full Arizona explanation (how eligibility works, timing issues, what to avoid before
  filing, and the step-by-step process), see:
  {" "}
  <Link
    href="/chapter-7-bankruptcy-arizona"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    Chapter 7 Bankruptcy in Arizona
  </Link>
  .
</p>

<h3 className={classes.title}>Four Things That Usually Determine Whether Chapter 7 Fits</h3>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Income:</strong> how much is coming in each month and whether it’s steady or variable.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Household size:</strong> the number of people you support financially.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Property and equity:</strong> especially a home or vehicle(s), and whether there’s meaningful equity.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Urgency:</strong> lawsuits, garnishments, repossession threats, or other time-sensitive collection actions.
  </li>
</ul>

<p>
  If you’re not sure where you fall, the simplest next step is to submit a consultation request. We’ll start by getting the basic facts and
  outlining the most sensible path forward—whether that’s chapter 7, another chapter, or a non-bankruptcy option.
</p>


<h2 className={classes.title}>Chapter 13 Bankruptcy Lawyer Gilbert: A Quick Fit Check</h2>

<p>
  If you’re searching for a <strong>chapter 13 bankruptcy lawyer gilbert</strong>, you’re usually looking for one thing: a realistic plan
  that protects you while you catch up over time. This option is often used when someone needs structure—especially to get current on a home,
  car, or certain priority debts—without trying to solve everything in one month.
</p>

<p>
  This Gilbert hub page stays high-level on purpose. For the full Arizona guide (how plans work, how payments are calculated, timelines, and
  the step-by-step process), see:
  {" "}
  <Link
    href="/chapter-13-bankruptcy-arizona"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    Chapter 13 Bankruptcy in Arizona
  </Link>
  .
</p>

<h3 className={classes.title}>Four Things That Usually Shape Whether a Plan Works</h3>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Your goal:</strong> what you’re trying to protect or catch up on (home, car, taxes, support, or something else).
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Your budget:</strong> what’s realistically left after normal living expenses.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Your income stability:</strong> whether your income is steady enough to support a monthly payment.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Your timing:</strong> whether there are urgent collection actions (sale date, repossession threat, or active lawsuit).
  </li>
</ul>

<p>
  If you’re not sure whether a structured plan is the right tool, the simplest next step is to submit a consultation request. We’ll start with
  the basics and outline the most sensible path forward based on your goals.
</p>



<h2 className={classes.title}>Bankruptcy Lawyers in Gilbert, AZ: What the Process Usually Looks Like</h2>

<p>
  If you’re comparing <strong>bankruptcy lawyers in Gilbert, AZ</strong>, it helps to understand the usual flow of a case. While the details
  vary, most cases follow a predictable path when the paperwork is prepared correctly.
</p>

<ol
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>1.</span>
    <strong>Consultation:</strong> you explain what’s going on; we identify the best next step.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>2.</span>
    <strong>Documents:</strong> income, taxes, bank statements, and a complete list of debts and assets.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>3.</span>
    <strong>Preparation:</strong> careful review to avoid omissions or inconsistencies.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>4.</span>
    <strong>Filing:</strong> in most cases, collection activity must stop once the case is filed.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>5.</span>
    <strong>Meeting of creditors:</strong> a standard step where the trustee asks questions under oath.
  </li>
</ol>

<p>
  Most problems come from missing documents or incomplete information. The smoother the preparation, the smoother the case tends to be.
</p>
<div className={classes.moduleWrapper}>
            <PageTopicSelector />
</div>
<h2 className={classes.title}>Gilbert AZ Bankruptcy Attorney: What to Have Ready</h2>

<p>
  If you want the consultation to be productive, you don’t need perfect paperwork. Bring whatever you have. These items help us give you
  clearer answers faster:
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
    <strong>Income:</strong> recent pay stubs (or a quick summary of monthly income).
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Taxes:</strong> last two years if available.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Bank statements:</strong> last 2–3 months if available.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Debt list:</strong> creditors, collections, and any lawsuit or garnishment paperwork.
  </li>
</ul>

<h2 className={classes.title}>Serving Gilbert From Our Phoenix Office</h2>

<p>
  Our office is in Phoenix, and we help people in Gilbert and throughout Arizona. You’ll get straightforward guidance, clear next steps,
  and a plan that matches your goals—without hype or confusion.
</p>

<p>
  Most steps in a bankruptcy case can be handled remotely—by phone, secure online forms, and electronic document sharing—so you don’t usually
  need multiple in-person visits. If you prefer to meet at our Phoenix office, you’re always welcome to do so.
</p>



<h2 className={classes.title}>Helpful Official Resources</h2>

<p>
  If you want to double-check information using official sources, these are reliable starting points:
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
    <Link
      href="https://www.uscourts.gov/services-forms/bankruptcy"
      target="_blank"
      rel="nofollow noopener noreferrer"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      U.S. Courts: Bankruptcy Basics
    </Link>
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <Link
      href="https://www.uscourts.gov/forms-rules/forms/bankruptcy-forms"
      target="_blank"
      rel="nofollow noopener noreferrer"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      Official Bankruptcy Forms
    </Link>
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <Link
      href="https://www.justice.gov/ust"
      target="_blank"
      rel="nofollow noopener noreferrer"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      U.S. Trustee Program (General Information)
    </Link>
  </li>
</ul>

<h2 className={classes.title}>Next Step: Get a Clear Plan</h2>

<p>
If you want help deciding whether bankruptcy is the right tool—and if so, which chapter fits—submit a consultation request.
We’ll schedule a time to talk and give you clear next steps.

</p>

<div
  style={{
    margin: "1.25rem 0 0",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
    textAlign: "center",
  }}
>
  <p style={{ margin: "0 0 10px" }}>
    Start with the consultation request. We’ll help you figure out the best next step.
  </p>

  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>

<p style={{ marginTop: 18, fontSize: 14, color: "#555" }}>
  For informational purposes only, not legal advice. Always seek advice from a qualified bankruptcy attorney.
</p>

<h2 className={classes.title}>Frequently Asked Questions</h2>

<h3 className={classes.title}>Do you help people in Gilbert, Arizona?</h3>
<p>
  Yes. We work with people in Gilbert who are dealing with credit cards, medical bills, lawsuits, garnishments, and behind payments—and who
  want a clear plan for what to do next.
</p>

<h3 className={classes.title}>Do I have to come to your office to get started?</h3>
<p>
  No. Coming to the Phoenix office is always an option, but it’s your choice. If it isn’t convenient, the steps needed to move a case forward
  can be handled remotely by phone, secure online forms, and electronic document sharing.
</p>

<h3 className={classes.title}>If I’m in Gilbert, which court would my case be filed in?</h3>
<p>
  Bankruptcy is filed in federal court. Gilbert cases are typically handled through the Arizona bankruptcy court process, and your specific
  filing location and procedures depend on where you live and your circumstances.
</p>

<h3 className={classes.title}>What debt problems bring Gilbert residents to a bankruptcy lawyer?</h3>
<p>
  The most common triggers we see are a debt pile-up that won’t shrink, a lawsuit, wage garnishment, a repossession threat, or falling behind
  on a mortgage or car payment after a life change.
</p>

<h3 className={classes.title}>Is bankruptcy a good option if I’m worried about wage garnishment?</h3>
<p>
  Often, yes—especially if a creditor has already filed suit or you’ve received garnishment paperwork. Timing matters, so it’s best to get
  advice quickly if a court date or garnishment start date is approaching.
</p>

<h3 className={classes.title}>How do I know whether chapter 7 or chapter 13 makes more sense for me in Gilbert?</h3>
<p>
  It depends on your goals. Some people need the fastest possible relief from unsecured debt, while others need a structured plan to catch up
  on a home, car, or other priority obligations. We’ll explain the tradeoffs in plain English and help you choose the most sensible path.
</p>

<h3 className={classes.title}>How fast can I get a clear answer on next steps?</h3>
<p>
  Usually, it starts with a short conversation. Once we understand the basics—your income situation, what debts you’re dealing with, and any
  urgent deadlines—we can outline clear next steps and what makes the most sense.
</p>




</GridItem>
</GridContainer>
      </div>
    </>
  );
}