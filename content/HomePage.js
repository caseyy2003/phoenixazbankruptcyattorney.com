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
import OfficeMapEmbed from "/components/office-map-imbed-phoenix/OfficeMapEmbed";
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

<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: 12,
    margin: "0.5rem 0 1.25rem",
    color: "#555",
  }}
  aria-label="Attorney review and page update information"
>
  <NextImage
    src="/img/casey-yontz-headshot.webp"
    alt="Attorney Casey Yontz headshot"
    width={64}
    height={64}
    style={{ borderRadius: "50%" }}
    priority={false}
  />

  <div>
    <div>
      <strong>Reviewed by:</strong>{" "}
      <a
        href="/about-us"
        rel="author"
        itemProp="author"
        style={{ color: "#0656d3", textDecoration: "underline" }}
      >
        Casey Yontz
      </a>
      , Bankruptcy Attorney (18+ years experience)
    </div>

    <div>
      <time dateTime="2026-01-10" itemProp="dateModified">
        Last updated: January 10, 2026
      </time>
    </div>
  </div>
</div>


<p>
  If you’re searching for <strong>bankruptcy lawyers Phoenix AZ</strong>, you’re
  probably dealing with more than a budgeting problem. Wage garnishments,
  lawsuits, repossession threats, or nonstop creditor calls can turn everyday
  life into a constant fire drill—especially when you’re trying to protect your
  paycheck, your transportation, and your family’s stability.
</p>

<p>
  Our goal is straightforward: help Phoenix residents get clear answers and a
  realistic plan. If bankruptcy is the right tool, we’ll explain what it can
  (and can’t) do, what the process typically looks like, and what information we
  need to give you reliable guidance. If bankruptcy isn’t the best fit, we’ll
  tell you that too—and discuss other options that may make more sense.
</p>

<h2 className={classes.title}>At-a-Glance: What to Expect After You Submit a Consultation Request</h2>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Clear, honest guidance:</strong> a straight answer about whether
    bankruptcy makes sense for your goals and your current finances.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Phoenix-and-Arizona-specific planning:</strong> guidance that takes
    Arizona rules into account—especially exemptions that can affect what
    property you may be able to keep.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Respect and discretion:</strong> no judgment, no lectures, and no
    pressure—just practical answers.
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Flexible meeting options:</strong> virtual consultations are always
    an option, and in-person meetings are available when helpful.
  </li>
</ul>
<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>
<h2 className={classes.title}>Why Phoenix Residents Reach Out About Bankruptcy</h2>

<p>
  Most people who submit a consultation request aren’t looking for a “fresh start”
  slogan—they’re looking for relief and a plan they can trust. Below are some of
  the most common pressures we see in Phoenix, along with a few practical notes
  that can help you get clearer answers faster.
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
    <li style={{ marginBottom: 12 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Credit card debt:</strong> balances that snowballed and became
      impossible to manage.
      <div style={{ marginTop: 6, color: "#555" }}>
        <small>
          <strong>Helpful note:</strong> Your total monthly minimum payments and
          the top balances often tell the story quickly.
        </small>
      </div>
    </li>

    <li style={{ marginBottom: 12 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Medical bills:</strong> expenses that piled up faster than income
      could keep up.
      <div style={{ marginTop: 6, color: "#555" }}>
        <small>
          <strong>Helpful note:</strong> If accounts are already in collections,
          list which ones and any recent letters you’ve received.
        </small>
      </div>
    </li>

    <li style={{ marginBottom: 12 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Lawsuits and garnishments:</strong> judgments, wage garnishments,
      and collection actions.
      <div style={{ marginTop: 6, color: "#555" }}>
        <small>
          <strong>Helpful note:</strong> If you have paperwork, keep it together
          (photos or PDFs are fine) so the details don’t get lost.
        </small>
      </div>
    </li>

    <li style={{ marginBottom: 12 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Foreclosure pressure:</strong> behind-on-payments situations where
      you want to understand your options and the likely path forward.
      <div style={{ marginTop: 6, color: "#555" }}>
        <small>
          <strong>Helpful note:</strong> It helps to know your monthly payment
          and how far behind you are, if at all.
        </small>
      </div>
    </li>

    <li style={{ marginBottom: 12 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Vehicle repossession risk:</strong> transportation issues and
      lender pressure.
      <div style={{ marginTop: 6, color: "#555" }}>
        <small>
          <strong>Helpful note:</strong> If keeping the vehicle matters, share
          the lender name, payment amount, and whether you’re behind.
        </small>
      </div>
    </li>

    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Business-related personal debt:</strong> personal guarantees and
      the personal fallout from a downturn.
      <div style={{ marginTop: 6, color: "#555" }}>
        <small>
          <strong>Helpful note:</strong> Let us know whether the debt is tied to
          a business (cards, lines of credit, leases) and whether there are
          co-signers or partners involved.
        </small>
      </div>
    </li>
  </ul>
</div>

<h2 className={classes.title}>Bankruptcy Lawyers in Phoenix, AZ With 18+ Years of Experience</h2>

<p>
  When you’re overwhelmed, the most helpful thing isn’t hype—it’s steady guidance and clear
  explanations. Attorney Casey Yontz has practiced bankruptcy law for <strong>18+ years</strong> and
  has helped <strong>thousands</strong> of Arizona clients work through real-world financial
  problems.
</p>

<p>
  That experience matters because bankruptcy is rarely “just paperwork.” Timing, documentation, and
  pre-filing decisions can change outcomes and cause delays if handled the wrong way. Our job is to
  explain your options in plain English and help you choose a plan you can actually follow.
</p>

<p>
  Learn more about Attorney Yontz’s background here:{" "}
  <Link
    href="/about-us#casey-yontz"
    rel="author"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    About the Author
  </Link>
  .
</p>


<h2 className={classes.title}>Bankruptcy Paths Phoenix Residents Typically Compare</h2>

<p>
  Most Phoenix filers are comparing options based on one core question:{" "}
  <em>What problem are we solving?</em> Some people want relief from unsecured
  debt. Others need time to catch up on protected assets. Business owners (and a
  small number of higher-debt households) may need a different reorganization
  tool. The right fit depends on your income, assets, goals, and the specific
  pressures you’re facing.
</p>

<p>
  We keep the deeper, in-depth explanations on our dedicated guides, which are
  the best “go-to” resources if you want to learn how each chapter works in
  Arizona:
  {" "}
  <Link
    href="/chapter-7-bankruptcy-arizona"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    Arizona Chapter 7 Guide
  </Link>{" "}
  and{" "}
  <Link
    href="/chapter-13-bankruptcy-arizona"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    Arizona Chapter 13 Guide
  </Link>
  .
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
    <strong>Chapter 7:</strong> often considered when someone wants a clean
    financial reset and the eligibility numbers line up.{" "}
    <span style={{ color: "#555" }}>
      <small>
        For the full “who qualifies / what to expect” walkthrough, use our{" "}
        <Link
          href="/chapter-7-bankruptcy-arizona"
          style={{ color: "#0656d3", textDecoration: "underline" }}
        >
          Arizona Chapter 7 Guide
        </Link>
        .
      </small>
    </span>
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Chapter 13:</strong> often compared when someone needs time to catch
    up on certain obligations or protect assets through a court-approved monthly
    plan.{" "}
    <span style={{ color: "#555" }}>
      <small>
        For plan structure and common goals, use our{" "}
        <Link
          href="/chapter-13-bankruptcy-arizona"
          style={{ color: "#0656d3", textDecoration: "underline" }}
        >
          Arizona Chapter 13 Guide
        </Link>
        .
      </small>
    </span>
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Chapter 11:</strong> sometimes used by businesses, and occasionally
    by individuals who don’t fit within chapter 13’s debt limits but still need a
    structured reorganization approach.{" "}
    <span style={{ color: "#555" }}>
      <small>
        If you’re a business owner—or your debt levels are outside chapter 13’s
        limits—it’s worth asking whether a reorganization path fits better than
        forcing a “one-size-fits-all” plan.
      </small>
    </span>
  </li>
</ul>

<h2 className={classes.title}>Phoenix-Specific Mistakes That Can Complicate a Bankruptcy Case</h2>

<p>
  Most bankruptcy complications don’t come from “doing bankruptcy wrong”—they come from timing,
  paper trails, and well-meaning decisions made under pressure. Phoenix-area filers often run into
  the same few issues because they’re trying to solve problems fast (protect a paycheck, keep a car,
  stop collection stress) without realizing certain moves can create extra questions later.
</p>

<p>
  The goal here isn’t to scare you—it’s to give you a simple pause list so you can avoid preventable
  headaches.
</p>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li style={{ marginBottom: 12 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Waiting too long when a wage garnishment is active:</strong> letting multiple pay periods
    pass without getting advice.
    <div style={{ marginTop: 6, color: "#555" }}>
      <small>
        <strong>Why it matters:</strong> Timing can affect how much is taken and what steps are needed
        to stop it. If a garnishment is hitting your paycheck, it’s worth getting guidance before the
        next pay date.
      </small>
    </div>
  </li>

  <li style={{ marginBottom: 12 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Using credit right before filing:</strong> especially cash advances or unusually large
    charges.
    <div style={{ marginTop: 6, color: "#555" }}>
      <small>
        <strong>Why it matters:</strong> Recent credit activity can trigger extra questions and, in
        some situations, disputes. If bankruptcy is on the table, it’s usually smart to pause
        non-essential credit use and ask what’s appropriate for necessities.
      </small>
    </div>
  </li>

  <li style={{ marginBottom: 12 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Moving money or titles between family members:</strong> repaying a relative, “borrowing”
    from a family account, or transferring a vehicle title “for safekeeping.”
    <div style={{ marginTop: 6, color: "#555" }}>
      <small>
        <strong>Why it matters:</strong> Family transactions are often reviewed more closely than
        ordinary payments. Even well-intentioned transfers can slow down an otherwise straightforward
        case.
      </small>
    </div>
  </li>

  <li style={{ marginBottom: 12 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Ignoring a lawsuit or default deadline:</strong> assuming bankruptcy can fix any timing
    issue later.
    <div style={{ marginTop: 6, color: "#555" }}>
      <small>
        <strong>Why it matters:</strong> A judgment can lead to garnishment or bank levies. Getting
        advice early helps you choose the right strategy and avoid avoidable escalation.
      </small>
    </div>
  </li>

  <li style={{ marginBottom: 12 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Tax refunds and other lump-sum deposits:</strong> refunds, bonuses, or back pay that hit
    the account right before filing.
    <div style={{ marginTop: 6, color: "#555" }}>
      <small>
        <strong>Why it matters:</strong> A lump-sum deposit is often money you’re counting on—but it
        can also create trustee questions. Planning around timing and documentation can help you
        avoid surprises.
      </small>
    </div>
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Cashing out retirement to pay debts:</strong> or moving retirement funds into a regular
    bank account without advice.
    <div style={{ marginTop: 6, color: "#555" }}>
      <small>
        <strong>Why it matters:</strong> Retirement funds often have stronger protection than cash.
        Cashing out can create taxes, penalties, and weaker protection. It’s usually worth getting
        guidance before moving funds.
      </small>
    </div>
  </li>
</ul>

<p>
  If any of these sound familiar, don’t panic—most situations are manageable. The key is getting
  clarity before you file so you can choose a strategy you feel good about and avoid the common “I
  wish I’d asked sooner” moments.
</p>


<h2 className={classes.title}>What Clients Say</h2>

<p>
  Bankruptcy is personal. People come to us when they’re stressed, embarrassed,
  or simply exhausted from trying to keep up. Our goal is to make the process
  feel clear and manageable—plain-English answers, a respectful tone, and a plan
  you can follow.
</p>

<p style={{ marginTop: 8, color: "#555" }}>
  <small>
    These are short excerpts from client feedback. Names may be shortened for
    privacy.
  </small>
</p>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li
    style={{
      margin: "0 0 14px",
      padding: "14px 16px",
      borderLeft: "4px solid #e6e6e6",
      background: "#fafafa",
    }}
  >
    <p style={{ margin: "0 0 6px", fontWeight: 700 }}>Less Scary, Less Anxiety</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “You made the whole process less scary… thx for calming my anxiety.”
    </p>
    <p style={{ margin: "10px 0 0", color: "#555" }}>
      <small>
        <strong>What this means for you:</strong> You should leave a consultation
        understanding what happens next, what matters most, and what you can stop
        worrying about today.
      </small>
    </p>
    <p style={{ margin: "8px 0 0", fontWeight: 700 }}>— Tish</p>
  </li>

  <li
    style={{
      margin: "0 0 14px",
      padding: "14px 16px",
      borderLeft: "4px solid #e6e6e6",
      background: "#fafafa",
    }}
  >
    <p style={{ margin: "0 0 6px", fontWeight: 700 }}>Professional and Organized</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “Very professional, knowledgeable and organized. We highly recommend his work!”
    </p>
    <p style={{ margin: "10px 0 0", color: "#555" }}>
      <small>
        <strong>What this means for you:</strong> You can expect clear document
        guidance, reliable communication, and a process that doesn’t feel chaotic.
      </small>
    </p>
    <p style={{ margin: "8px 0 0", fontWeight: 700 }}>— Paul &amp; Maria</p>
  </li>

  <li
    style={{
      margin: "0 0 14px",
      padding: "14px 16px",
      borderLeft: "4px solid #e6e6e6",
      background: "#fafafa",
    }}
  >
    <p style={{ margin: "0 0 6px", fontWeight: 700 }}>Explained Every Option</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “He walked me step by step… explained every option… never made me feel stupid for asking questions.”
    </p>
    <p style={{ margin: "10px 0 0", color: "#555" }}>
      <small>
        <strong>What this means for you:</strong> You should feel comfortable
        asking basic questions and comparing options without being rushed.
      </small>
    </p>
    <p style={{ margin: "8px 0 0", fontWeight: 700 }}>— Melanie</p>
  </li>

  <li
    style={{
      margin: 0,
      padding: "14px 16px",
      borderLeft: "4px solid #e6e6e6",
      background: "#fafafa",
    }}
  >
    <p style={{ margin: "0 0 6px", fontWeight: 700 }}>Hope and Peace of Mind</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “My creditors stopped harassing me, my home was saved, and I finally feel hopeful about my future again.”
    </p>
    <p style={{ margin: "10px 0 0", color: "#555" }}>
      <small>
        <strong>What this means for you:</strong> We focus on practical outcomes
        and realistic expectations—so you understand what bankruptcy can do and
        what steps actually move you forward.
      </small>
    </p>
    <p style={{ margin: "8px 0 0", fontWeight: 700 }}>— Sarah</p>
  </li>
</ul>

<div className={classes.moduleWrapper}>
  <PageTopicSelector />
</div>

<h2 className={classes.title}>Serving Phoenix and Clients Across Arizona</h2>

<p>
  Phoenix is our home base, but we work with individuals and families throughout
  Arizona. Modern bankruptcy practice makes it possible to handle most of the
  process remotely when that’s more convenient—without sacrificing clarity or
  communication.
</p>

<p>
  For example, the 341 meeting (the required meeting with the bankruptcy trustee)
  is commonly conducted by phone or video, and many routine court appearances (if
  they’re needed at all) are handled virtually as well. If an in-person meeting
  is helpful for your situation, we can discuss what makes sense based on your
  schedule and comfort level.
</p>


<h2 className={classes.title}>Find Our Phoenix Office</h2>

<p>
  Our office is located at 4425 E Agave Rd. Suite 106, Phoenix, AZ 85044. Virtual consultations are available, and in-person meetings are available when helpful.
</p>

<OfficeMapEmbed containerClassName={classes.iframeContainer} />


<h2 className={classes.title}>What to Have Ready for a Phoenix Bankruptcy Consultation</h2>

<p>
  You don’t need a perfect folder of paperwork to get started. The goal is simply
  to get a clear snapshot of what’s going on so the guidance you receive is
  practical and reliable. If you have any of the items below, we can usually give
  you clearer answers faster (and avoid back-and-forth).
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
    <strong>Income snapshot:</strong> recent pay stubs, benefits statements, or a
    quick summary of monthly income (especially if it changes month to month).
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Debt list:</strong> a list of creditors and collections, plus any
    lawsuit, judgment, or garnishment paperwork (if you have it).
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Housing and vehicle basics:</strong> payment amounts, whether you’re
    behind, and (if you know it) the approximate payoff balance.
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Recent tax return (helpful, not required):</strong> if you have your
    most recent return handy, it can speed up eligibility and planning
    discussions.
  </li>
</ul>

<h2 className={classes.title}>Request a Free Bankruptcy Consultation</h2>

<div className={classes.imgContainer}>
  <NextImage
    src="/img/phoenix-bankruptcy-lawyer-consultation-document-checklist.webp"
    alt="Checklist graphic showing documents to gather before meeting with a Phoenix bankruptcy lawyer, including recent pay stubs, tax returns, bank statements, car loan or mortgage statements, and recent creditor notices or lawsuit papers."
    width={800}
    height={533}
    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 700px, 900px"
    quality={75}
    style={{ width: "100%", height: "auto" }}
  />
</div>

<p>
  If you’re overwhelmed and searching for <strong>bankruptcy attorney phoenix az</strong>,
  the simplest next step is to submit a short consultation request. We serve
  clients across Arizona and will follow up with next steps based on the details
  you share.
</p>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>

<h2 className={classes.title}>Phoenix Bankruptcy FAQs</h2>

<h3 className={classes.title}>How Do I Know If Bankruptcy Is the Right Option in Phoenix, AZ?</h3>
<p>
  Bankruptcy can make sense when debt payments, lawsuits, wage garnishments, or repossession threats are no longer manageable. The quickest way to decide is to look at your goals (protecting income, keeping a car or home, stopping collection pressure), your monthly budget, and the types of debts you have. In a Phoenix bankruptcy consultation, we usually start with a clear snapshot of income, debts, and assets so you can compare bankruptcy to realistic alternatives and choose the best next step.
</p>

<h3 className={classes.title}>Can Bankruptcy Stop Wage Garnishment or a Lawsuit in Phoenix?</h3>
<p>
  In many cases, yes. Filing typically triggers the <strong>automatic stay</strong>, which generally pauses most collection activity, including wage garnishments and many lawsuits. Timing matters in Phoenix—especially if a garnishment is already hitting your paycheck or a court deadline is approaching—so it’s smart to get advice before another pay period or hearing date passes. Some situations have exceptions, and creditors may need proper notice.
</p>

<h3 className={classes.title}>Can I Keep My Car or Home If I File Bankruptcy in Phoenix?</h3>
<p>
  Often, yes—especially when there’s a clear plan. Whether you can keep your home or car depends on your equity, your payment status, and which chapter you file. Arizona’s exemption rules also play a big role. You can review them here:{" "}
  <Link
    href="/arizona-bankruptcy-exemptions"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    Arizona bankruptcy exemptions
  </Link>
  . A consultation usually focuses on your liens, payoff amounts, and whether the right strategy is to protect the asset, catch up on arrears, or restructure payments.
</p>

<h3 className={classes.title}>How Fast Can a Phoenix Bankruptcy Case Be Filed If I Have a Garnishment or Lawsuit?</h3>
<p>
  It depends on how quickly we can get accurate information, but many filings can move quickly once the essentials are collected. If you’re dealing with a wage garnishment, a bank garnishment, a pending lawsuit, or a trustee sale date, the priority is to gather a reliable snapshot (income, debts, and key documents) so you don’t lose time to avoidable delays. If time is critical, tell us right away so we can focus on the right steps in the right order.
</p>

<h3 className={classes.title}>What Should I Gather for a Phoenix Bankruptcy Consultation?</h3>
<p>
  You don’t need perfect paperwork. The most helpful items are recent pay stubs (or other income proof), a list of creditors or collection letters, any lawsuit or garnishment documents, and basic housing/vehicle payment details. If you have your most recent tax return, that can help with planning. The goal is a dependable snapshot—so you can get clear answers without a lot of back-and-forth.
</p>



</GridItem>
        </GridContainer>
      </div>
    </>
  );
}