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

export default function Chapter13Cramdown() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>


          <h1 className={classes.title}>Chapter 13 Vehicle Cram Down in Arizona</h1>
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
      <time dateTime="2025-01-10" itemProp="dateModified">
        Last updated: January 10, 2026
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
  If your car payment feels impossible right now, you’re not alone and there are options. A vehicle
  loan can quietly become the biggest line item in a household budget—especially
  after job changes, medical bills, or a stretch where everything costs more
  than it used to.
</p>

<p>
  In the right situation, <strong>chapter 13</strong> can offer a tool called a{" "}
  <strong>vehicle “cram down”</strong> that may reduce what you must pay on a
  financed vehicle to something closer to the vehicle’s current value. Done
  correctly, this can lower the effective cost of keeping the car and free up
  cash flow for essentials.
</p>

<p>
  I’m Casey Yontz, an Arizona bankruptcy attorney with 18+ years of experience.
  This guide explains what a cram down is, who qualifies, what it can (and can’t)
  do, and how to tell whether it’s a smart move in your specific situation.
</p>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>

<h2 className={classes.title}>What Is a Vehicle Cram Down?</h2>

<p>
  A vehicle cram down is a <strong>chapter 13</strong> strategy that can
  restructure an auto loan when you owe more than the car is worth. In many
  cases, it allows you to treat the loan as two pieces:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Secured portion:</strong> the value of the vehicle (what the car is
    worth).
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Unsecured portion:</strong> the “upside-down” amount above that
    value (the part of the balance that isn’t supported by the car’s value).
  </li>
</ul>

<p>
  The unsecured portion is treated like other unsecured debts in the plan and
  may be paid only partially, depending on your budget, your required plan
  payment, and other factors in your case. This is why cram downs can be so
  valuable for people who are upside-down on a vehicle.
</p>

<h2 className={classes.title}>Why This Matters for Arizona Drivers</h2>

<p>
  Many people can manage a car payment when life is stable. The problem is that
  vehicles depreciate while interest and fees keep the balance high. That can
  leave you paying “years of payments” on a car that’s worth much less than the
  payoff.
</p>

<p>
  If your goal is to <strong>keep the car</strong> but the loan is out of
  proportion, a cram down can be one way to bring the numbers back to reality.
</p>

<h2 className={classes.title}>Who Qualifies for a Chapter 13 Vehicle Cram Down?</h2>

<p>
  Not every car loan qualifies. The most common rule people run into is the{" "}
  <strong>910-day rule</strong>.
</p>

<h3 className={classes.title}>The 910-Day Rule (Important)</h3>

<p>
  In many cases, you can only cram down a vehicle loan if you bought the car{" "}
  <strong>more than 910 days</strong> (about 2.5 years) before filing your{" "}
  <strong>chapter 13</strong> case. If you purchased the vehicle within 910
  days, the cram down option may not be available for that loan.
</p>

<h3 className={classes.title}>Other Practical Factors That Matter</h3>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>You’re upside-down:</strong> The bigger the gap between value and
    payoff, the more a cram down may help.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Your budget supports a plan:</strong> chapter 13 requires regular
    payments over time.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>You actually want to keep the vehicle:</strong> If the car is
    unreliable or too expensive to maintain, it may be better to pivot rather
    than lock yourself into a multi-year plan around it.
  </li>
</ul>

<h2 className={classes.title}>How the Cram Down Is Calculated</h2>

<p>
  The key number is the vehicle’s value. In practice, that usually means a
  valuation method supported by evidence (often based on widely used market
  guides and the vehicle’s condition, mileage, and options). Your lender may
  disagree with your value, and valuation disputes can happen.
</p>

<p>
  This is why “internet math” can be misleading. Two identical model years can
  have very different values based on mileage, condition, and prior damage.
</p>

<h2 className={classes.title}>A Simple Example</h2>

<p>
  Here’s an easy way to understand the concept:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Your car is worth <strong>$10,000</strong>.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    You owe <strong>$18,000</strong>.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    The “secured” portion may be treated as <strong>$10,000</strong>.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    The “unsecured” portion may be <strong>$8,000</strong>, treated with other
    unsecured debt in the plan.
  </li>
</ul>

<p>
  This doesn’t mean you pay “nothing” on the unsecured portion. It means the
  unsecured portion is handled under the chapter 13 rules for unsecured debts,
  which often results in a smaller payoff than paying the full upside-down
  balance outside bankruptcy.
</p>

<h2 className={classes.title}>Does a Cram Down Lower the Interest Rate Too?</h2>

<p>
  In many chapter 13 cases, the interest rate applied to the secured portion can
  be adjusted to a court-approved rate rather than your contract rate. The
  correct rate depends on legal standards and your case facts, and it can be a
  major part of the savings.
</p>

<p>
  This is another reason cram downs can be meaningful: it’s not only the balance
  that changes—it can also be the structure of how the secured portion is paid.
</p>

<h2 className={classes.title}>How Chapter 13 Simplifies Car Payments</h2>

<p>
  Chapter 13 is a structured repayment plan. Instead of juggling multiple
  creditors, you make a single monthly plan payment to the chapter 13 trustee,
  who distributes funds according to the confirmed plan.
</p>

<p>
  Depending on your case, your auto loan may be paid through the plan or handled
  directly, but the overall goal is the same: a predictable payment structure
  that keeps you protected while you catch up and move forward.
</p>

<h2 className={classes.title}>When a Vehicle Cram Down Might Not Be the Best Choice</h2>

<p>
  A cram down can be powerful, but it’s not always the right tool. Examples
  where you should slow down and evaluate include:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>You bought the vehicle recently:</strong> If you’re inside the 910-day window,
    a cram down may not be available.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>The car is unreliable:</strong> If you’re facing major repairs, it may be
    smarter to rethink the vehicle rather than commit to a long plan around it.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Your budget is already stretched:</strong> chapter 13 requires plan payments.
    If the payment is not realistic, other strategies may fit better.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>You have other urgent priorities:</strong> Mortgage arrears, tax issues, or
    support obligations may drive the plan structure more than the car.
  </li>
</ul>

<h2 className={classes.title}>A More Realistic “Real-Life” Scenario</h2>

<p>
  Let’s make the example feel more like real life:
</p>

<p>
  You financed a vehicle four years ago. The payment is high, and you’ve stayed
  current—but just barely. The car is now worth <strong>$12,000</strong>, but
  the payoff is <strong>$21,000</strong>. You’re not trying to “get out of
  paying.” You’re trying to keep reliable transportation without sacrificing
  rent, groceries, or childcare.
</p>

<p>
  In a qualifying chapter 13 case, the loan may be restructured so the secured
  portion aligns with value and the upside-down portion is treated with other
  unsecured debts. The result is often a more workable monthly plan structure,
  and at the end of the plan you may emerge with the vehicle paid off under the
  plan terms.
</p>

<h2 className={classes.title}>If You’re Worried About Repossession</h2>

<p>
  If repossession is on the horizon, timing matters. The earlier you get advice,
  the more options you generally have. A consultation can help you understand
  whether chapter 13 is realistic, whether a cram down is available, and what
  strategy best protects your transportation and your budget.
</p>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>

<h2 className={classes.title}>Talk With an Arizona Bankruptcy Lawyer About Your Vehicle Loan</h2>

<p>
  If you live in Arizona and your car payment is dragging you under, a chapter 13
  vehicle cram down might be one of the tools that helps you stabilize. The key
  is getting the facts right: the 910-day timing, the vehicle value, your budget,
  and how the plan would treat the loan.
</p>

<p>
  If you’d like, we can look at your loan documents, your payoff, and your
  deadline (if repossession is a risk) and map out options that make sense for
  your situation.
</p>
<div className={classes.moduleWrapper}>
            <PageTopicSelector />
</div>
<h2 className={classes.title}>Arizona Vehicle Cram Down FAQs</h2>

<h3 className={classes.title}>What is a chapter 13 vehicle cram down in Arizona?</h3>
<p>
  A vehicle cram down is a chapter 13 strategy that can restructure an auto loan when you owe more than the vehicle is worth. In a qualifying case, the loan may be treated as two parts: a secured portion based on the vehicle’s current value and an unsecured portion for the upside-down balance above that value. The unsecured portion is treated with other unsecured debts in the plan and may be paid only partially, depending on your budget and plan requirements.
</p>

<h3 className={classes.title}>Who qualifies for a chapter 13 car cram down in Arizona?</h3>
<p>
  Eligibility depends on several factors, but the most common rule is the 910-day rule. In many cases, you can only cram down a vehicle loan if the car was purchased more than 910 days (about 2.5 years) before you file chapter 13. Your budget must also support a realistic chapter 13 plan, and the strategy usually makes the most sense when you are significantly upside-down on the loan and you actually want to keep the vehicle.
</p>

<h3 className={classes.title}>Does a vehicle cram down reduce the interest rate too?</h3>
<p>
  Often, yes. In many chapter 13 cases, the interest rate applied to the secured portion may be adjusted to a court-approved rate rather than the contract rate. The exact rate depends on legal standards and the facts of your case. For many people, the interest-rate change is a major part of why the cram down can make the monthly structure more workable.
</p>

<h3 className={classes.title}>How is the vehicle value determined for a cram down?</h3>
<p>
  The key number is the vehicle’s current value, usually supported by evidence. Valuation often considers widely used market guides, the vehicle’s condition, mileage, options, and prior damage history. Lenders sometimes dispute value, so “internet math” can be misleading—two vehicles of the same model year can have very different values based on real-world condition and mileage.
</p>

<h3 className={classes.title}>When is a chapter 13 vehicle cram down not a good idea?</h3>
<p>
  A cram down can be powerful, but it’s not always the best tool. It may not be available if you purchased the vehicle within the 910-day window. It can also be a poor fit if the car is unreliable or likely to need major repairs, if your budget can’t support a realistic chapter 13 plan payment, or if other priorities (like mortgage arrears, taxes, or support obligations) will drive the plan structure more than the vehicle loan.
</p>

</GridItem>
        </GridContainer>
      </div>
    </>
  );
}