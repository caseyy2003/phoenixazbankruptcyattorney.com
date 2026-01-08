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

export default function PrescottHomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>
          <h1 className={classes.title}>Bankruptcy Attorneys in Tucson, Arizona</h1>
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
  If you’re searching for <strong>bankruptcy attorneys in Tucson Arizona</strong>, there’s a good chance something feels urgent:
  a lawsuit, a wage garnishment, a repossession threat, or creditor calls that won’t quit. When pressure is high, you don’t
  need hype — you need clear answers and a plan you can actually follow.
</p>

<p>
  Our office has decades of experience representing tousands of bankruptcy cases throughout the state of Arizona. If you’re looking for a <strong>bankruptcy lawyer Tucson</strong> residents can trust for straightforward guidance,
  we’ll walk through your options, explain what matters most in your situation, and help you avoid the common mistakes that
  can complicate a case.
</p>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>

<h2 className={classes.title}>What You Get From a Tucson Bankruptcy Consultation</h2>

<p>
  Most people reach out because they’re tired of guessing. A good consultation should reduce uncertainty — not add to it.
  Here’s what you can expect when we talk about <strong>bankruptcy tucson</strong> options:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>A straight answer:</strong> whether bankruptcy helps — and if it doesn’t, we’ll say so.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>A practical game plan:</strong> what to do first, what to stop doing, and what timeline makes sense.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Asset-protection guidance:</strong> how Arizona exemptions usually fit into real-life decisions.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Respect and discretion:</strong> no judgment, no lectures, and no pressure.
  </li>
</ul>

<h2 className={classes.title}>Choosing Between Chapter 7 and Chapter 13</h2>

<p>
  Most people in Tucson end up comparing two paths:{" "}
  <Link
    href="/chapter-7-bankruptcy-arizona"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    our chapter 7 guide
  </Link>{" "}
  and{" "}
  <Link
    href="/chapter-13-bankruptcy-arizona"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    our chapter 13 guide
  </Link>
  . The better fit depends on your goals and your numbers—like income stability, what you’re trying to protect, and whether
  there are urgent deadlines.
</p>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 14,
    margin: "1rem 0 1.25rem",
  }}
>
  <div
    style={{
      border: "1px solid #e6e6e6",
      borderRadius: 12,
      background: "#fafafa",
      padding: "14px 16px",
    }}
  >
    <p style={{ margin: "0 0 6px", fontWeight: 800 }}>Chapter 7</p>
    <p style={{ margin: 0 }}>
      Often explored when the main goal is relief from unsecured debt and the numbers fit. It’s usually the “simpler” path,
      but planning still matters.
    </p>
  </div>

  <div
    style={{
      border: "1px solid #e6e6e6",
      borderRadius: 12,
      background: "#fafafa",
      padding: "14px 16px",
    }}
  >
    <p style={{ margin: "0 0 6px", fontWeight: 800 }}>Chapter 13</p>
    <p style={{ margin: 0 }}>
      Often explored when you need time and structure—like catching up on certain payments or protecting assets with a plan.
    </p>
  </div>
</div>

<p>
  During a consultation, we focus on your priorities (stop a garnishment, deal with a lawsuit, keep a vehicle, or catch up a
  payment) and map them to the option that fits—without oversimplifying. If you want the deeper details, start with{" "}
  <Link
    href="/chapter-7-bankruptcy-arizona"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    Arizona chapter 7 basics
  </Link>{" "}
  and{" "}
  <Link
    href="/chapter-13-bankruptcy-arizona"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    Arizona chapter 13 basics
  </Link>
  .
</p>


<h2 className={classes.title}>Local Insights: Tucson Details That Matter</h2>

<p>
  Tucson isn’t just “another Arizona city” — daily life shapes the stress people bring into a bankruptcy conversation. We often
  talk with folks juggling commutes along I-10, caring for family across town, and trying to keep reliable transportation while
  dealing with rising bills. Whether you’re in Oro Valley, Rita Ranch, Vail, Midtown, Downtown, or near the University of Arizona,
  the same theme shows up: when your car is essential and the mail starts bringing legal notices, things get real fast.
</p>

<p>
  The goal is to make decisions that fit your actual routine — school schedules, shift work, commuting, and family responsibilities —
  instead of a generic internet checklist.
</p>

<h2 className={classes.title}>Common Reasons Tucson Residents Contact a Bankruptcy Attorney</h2>

<p>
  People don’t call because they want a “fresh start” catchphrase. They call because something is escalating. Here are some of the
  most common problems we help solve:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Collection lawsuits and judgments:</strong> summons, default judgments, and the worry that paychecks are next.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Wage garnishments:</strong> less take-home pay right when expenses are already stretched.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Credit card and personal loan debt:</strong> minimum payments that never seem to shrink the balance.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Medical bills:</strong> a single event that snowballs into collections and stress.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Vehicle repossession risk:</strong> when transportation is essential for work, school, and family.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Behind-on payments:</strong> housing or other critical obligations where timing matters.
  </li>
</ul>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>

<h2 className={classes.title}>Tucson Bankruptcy Pitfalls to Avoid</h2>

<p>
  Bankruptcy usually goes sideways because of timing, transfers, or misunderstandings — not because you “did something wrong.”
  Here are a few issues that are easier to handle when you talk to a lawyer early:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Using credit right before filing:</strong> even “necessary” purchases can raise questions later.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Moving money or titles around the family:</strong> repaying a relative, transferring a vehicle, or “parking” funds can
    create problems you didn’t expect.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Ignoring a lawsuit because you feel overwhelmed:</strong> the clock doesn’t pause, and default judgments can follow.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Withdrawing retirement money to stay afloat:</strong> it can feel like a quick fix, but it’s worth talking through
    before you do it.
  </li>
</ul>

<h2 className={classes.title}>What Clients Say</h2>

<p>
  The best outcome isn’t just a filed case — it’s less anxiety and more control. Here are a few short snippets from client feedback:
</p>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 14,
    margin: "1rem 0 1.25rem",
  }}
>
  <div style={{ padding: "14px 16px", borderLeft: "4px solid #e6e6e6", background: "#fafafa", borderRadius: 12 }}>
    <p style={{ margin: "0 0 6px", fontWeight: 800 }}>Clear Answers, No Pressure</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “The office explained my options in plain English and didn’t push me. For once, I finally felt like I had a plan.”
    </p>
    <p style={{ margin: "8px 0 0", fontWeight: 800 }}>— Dan J.</p>
  </div>

  <div style={{ padding: "14px 16px", borderLeft: "4px solid #e6e6e6", background: "#fafafa", borderRadius: 12 }}>
    <p style={{ margin: "0 0 6px", fontWeight: 800 }}>Professional and Organized</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “Very professional, knowledgeable, and organized. The process felt manageable instead of overwhelming.”
    </p>
    <p style={{ margin: "8px 0 0", fontWeight: 800 }}>— Amanda H.</p>
  </div>

  <div style={{ padding: "14px 16px", borderLeft: "4px solid #e6e6e6", background: "#fafafa", borderRadius: 12 }}>
    <p style={{ margin: "0 0 6px", fontWeight: 800 }}>Helped Me Breathe Again</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “I was stressed nonstop. After the consult, I understood what to do next and felt calmer immediately.”
    </p>
    <p style={{ margin: "8px 0 0", fontWeight: 800 }}>— Kim J.</p>
  </div>

  <div style={{ padding: "14px 16px", borderLeft: "4px solid #e6e6e6", background: "#fafafa", borderRadius: 12 }}>
    <p style={{ margin: "0 0 6px", fontWeight: 800 }}>Treated Me With Respect</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “I never felt judged. Every question was taken seriously, and everything was explained step by step.”
    </p>
    <p style={{ margin: "8px 0 0", fontWeight: 800 }}>— Michael W.</p>
  </div>
</div>

<h2 className={classes.title}>What to Bring to a Tucson Bankruptcy Consult</h2>

<p>
  You don’t need a perfect binder. If you have a few basics, we can give better answers faster. Helpful items include:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Income info:</strong> recent pay stubs, benefit letters, or a quick summary if you’re self-employed.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Debt list:</strong> credit cards, medical bills, personal loans, and any collection accounts you know about.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Housing details:</strong> rent or mortgage payment and whether you’re behind.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Vehicle info:</strong> lender, payment amount, and whether repossession is a concern.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Tax Returns:</strong> Not necessary for the first consult, but eventually tax returns will need to be reviewed.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Any court papers:</strong> especially lawsuits, garnishments, or notices with deadlines.
  </li>
</ul>

<h2 className={classes.title}>Serving Tucson From Our Arizona Home Base</h2>

<p>
  We’re based in Phoenix and serve clients across Arizona, including Tucson. Consultations can be handled by phone or video when
  that’s convenient, and if an in-person meeting is important for your situation, we’ll discuss what makes the most sense. The goal
  is simple: make it easy to get answers without pretending we have offices all over the state.
</p>
<div className={classes.imgContainer}>
              <NextImage
                src="/img/tucson-bankruptcy-lawyer-consultation-document-checklist.webp"
                alt="Checklist graphic showing documents to gather before meeting with a Tucson bankruptcy lawyer, including pay stubs from the past six months, tax returns from the past two years, bank account statements, car loan and mortgage statements, and recent creditor notices or lawsuit papers."
                layout="responsive"
                width={850}           
                height={567}
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 700px, 900px"
                quality={75}
                priority={false}
                decoding="async"
              />
            </div>
<h2 className={classes.title}>Searching Another City Too?</h2>

<p>
  Sometimes people compare options across Arizona — or they typed the wrong city into Google at 1:00 a.m. If what you really meant
  to search is <strong>prescott az bankruptcy lawyer</strong>, that’s a different market and a different page on our site. Either way,
  the best next step is the same: tell us what’s happening (garnishment, lawsuit, repossession risk, behind-on payments), and we’ll
  point you to the right resource and the right plan.
</p>

<h2 className={classes.title}>Request a Free Bankruptcy Consultation</h2>

<p>
  If you’re looking for a <strong>bankruptcy attorney tucson</strong> residents can contact for clear, experienced guidance, submit a short
  consultation request. We’ll follow up with next steps based on your situation and timing.
</p>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>
<div className={classes.moduleWrapper}>
            <PageTopicSelector />
</div>
<h2 className={classes.title}>Tucson Bankruptcy FAQs</h2>

<h3 className={classes.title}>What does a Tucson bankruptcy consultation cover?</h3>
<p>
  A consultation is designed to replace guesswork with a practical plan. We start with what’s driving the urgency (lawsuit, wage garnishment, repossession risk, nonstop creditor calls, or behind-on payments), then review your income pattern, debts, and assets at a high level. From there, we explain which option fits best—whether that’s chapter 7, chapter 13, or a non-bankruptcy alternative—and what to do first so you don’t accidentally create avoidable problems before filing.
</p>

<h3 className={classes.title}>Can filing bankruptcy stop a wage garnishment or collection lawsuit in Tucson?</h3>
<p>
  In many cases, filing bankruptcy triggers an “automatic stay” that pauses most collection activity, including many wage garnishments and pending lawsuits. Timing matters if you have a court date, a garnishment start date, or a repossession threat, so it helps to gather any lawsuit papers, garnishment documents, and recent pay stubs early. Some situations have exceptions, so a quick review is the best way to understand what applies to your specific case.
</p>

<h3 className={classes.title}>How do chapter 7 and chapter 13 differ for Tucson residents?</h3>
<p>
  The right chapter depends on your goals and your numbers—not a one-size-fits-all slogan. chapter 7 is often considered when someone wants relief from qualifying unsecured debt (like credit cards and medical bills) and the eligibility requirements are met. chapter 13 is a court-approved repayment plan (often 3–5 years) that can help people catch up on certain obligations and protect assets through a structured plan. The best fit depends on income, assets, debt type, and what you’re trying to protect.
</p>

<h3 className={classes.title}>What are common Tucson bankruptcy pitfalls to avoid before filing?</h3>
<p>
  Most cases get complicated due to timing and paper trails, not because someone is “doing bankruptcy wrong.” Common pitfalls include using credit right before filing (especially cash advances), moving money or titles around within the family, ignoring a lawsuit deadline, and withdrawing retirement money without understanding the tax and bankruptcy consequences. If bankruptcy is on the table, it’s usually smart to pause major financial moves and get guidance before making quick decisions.
</p>

<h3 className={classes.title}>What documents should I bring to a Tucson bankruptcy attorney consultation?</h3>
<p>
  You don’t need a perfect binder, but a few basics help you get clear answers faster: recent pay stubs or income proof, a simple list of creditors/collections, any lawsuit or garnishment paperwork, and housing and vehicle payment details (including whether you’re behind). If you have tax returns and bank statements, those can also help with planning and timing. If you’re facing a deadline, mention it—deadlines can change the best next step.
</p>

          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}