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
      <time dateTime="2025-01-10" itemProp="dateModified">
        Last updated: January 10, 2026
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
  Looking for a <strong>Mesa AZ bankruptcy attorney</strong> usually means the pressure is real—creditor calls, a lawsuit,
  a garnishment notice, or the fear of losing a vehicle you rely on every day. Most people don’t wake up “wanting” bankruptcy.
  They want the stress to stop and a plan that makes sense.
</p>
<div className={classes.imgContainer}>
              <NextImage
                src="/img/mesa-bankruptcy-help-hero-superstition-mountains-downtown-mesa-arts-center.webp"
                alt="Hero banner for Mesa bankruptcy help showing downtown Mesa near the Mesa Arts Center with the Superstition Mountains at sunset, plus a gavel and legal documents in the foreground and the text “Mesa Bankruptcy Help”."
                width={800}
                height={533}
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 700px, 900px"
                quality={70}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
<p>
  We help individuals and families in Mesa and the East Valley understand their options and take the next step with confidence.
  Virtual consultations are always an option if that’s easier, and we’ll tell you plainly whether bankruptcy is the right tool—or whether another
  approach makes more sense.
</p>

<h2 className={classes.title}>Mesa Bankruptcy Attorney Consultation Snapshot</h2>

<p>
  A good consultation should feel practical and grounded—less like a sales pitch,
  and more like a clear “here’s where you stand” conversation. Here’s what we
  focus on in a first meeting so you can leave with a plan (or at least the next
  right step).
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
    <strong>Clarity fast:</strong> what bankruptcy can realistically fix in your
    situation, and what it won’t.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Strategy and timing:</strong> how to avoid common pitfalls before
    you file.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Respectful process:</strong> no judgment, no lectures—just
    straightforward answers.
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Help across Arizona:</strong> we serve clients statewide, with
    in-person and virtual meetings available at your convenience.
  </li>
</ul>

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
    If you’d like, tell us what’s going on and we’ll help you identify the best
    next step—whether that’s bankruptcy or another option.
  </p>

  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>

<h2 className={classes.title}>Choosing a Bankruptcy Attorney in Mesa</h2>

<p>
  When you’re searching for a <strong>bankruptcy attorney mesa az</strong> residents
  can trust, it helps to think beyond “who can file the paperwork.” A strong
  bankruptcy lawyer should help you make good decisions <em>before</em> you file—
  because timing, documentation, and strategy can affect what you keep, what you
  pay, and how smooth the process feels.
</p>

<p>
  Here are a few practical things to look for when comparing attorneys in Mesa:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333", }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Clear expectations:</strong> You should walk away understanding the
    likely timeline, the steps ahead, and what “success” looks like for your
    specific goals (stopping garnishment, catching up a car, protecting equity,
    etc.).
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Up-front document guidance:</strong> A good office tells you exactly
    what matters most (pay stubs, tax returns, bank statements, vehicle info,
    lawsuits/garnishments) and why—so you’re not scrambling later.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Risk spotting:</strong> The attorney should ask about common “gotchas”
    (recent transfers, using credit before filing, cashing out retirement, large
    tax refunds, or selling property) and explain how to avoid problems.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Responsiveness and plain-English answers:</strong> Bankruptcy is
    stressful. You shouldn’t feel in the dark or talked down to.
  </li>
</ul>

<p>
  Attorney Casey Yontz has practiced bankruptcy law for over <strong>18 years</strong>{" "}
  and has handled <strong>thousands</strong> of bankruptcy matters. The benefit of
  that experience is straightforward: we’ve seen the patterns, we know where
  people get tripped up, and we focus on helping you avoid preventable mistakes
  while keeping the process respectful and efficient.
</p>

<p>
  If you’d like, we can start with a quick, practical review of your situation—
  what bankruptcy can realistically fix, what it won’t, and what timing decisions
  matter most—so you can decide the next step with confidence.
</p>

<h2 className={classes.title}>Common Debt Pressures We See in Mesa</h2>

<p>
  People searching for <strong>bankruptcy lawyers mesa</strong> usually aren’t
  doing it “just because.” Something changed—income dropped, expenses spiked, a
  lawsuit showed up, or a garnishment hit at the worst possible time. Below are
  some of the most common debt pressures we hear about in Mesa and the East
  Valley, along with the first practical steps that often help.
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
      <strong>Collections and lawsuits:</strong> creditor suits, judgments, and
      the stress of court paperwork.
      <div style={{ marginTop: 6, color: "#555" }}>
        <small>
          <strong>Helpful next step:</strong> Don’t ignore a lawsuit—even if you
          can’t pay. Deadlines matter. Save any summons/complaint paperwork and
          write down the dates on the documents so you can get accurate advice
          quickly.
        </small>
      </div>
    </li>

    <li style={{ marginBottom: 12 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Wage garnishments:</strong> money being taken from each paycheck
      and the urgency that creates.
      <div style={{ marginTop: 6, color: "#555" }}>
        <small>
          <strong>Helpful next step:</strong> Gather your most recent pay stubs
          and any garnishment paperwork. Timing can be important when the goal
          is to stop (or prevent) a garnishment and stabilize your budget.
        </small>
      </div>
    </li>

    <li style={{ marginBottom: 12 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Medical and family expenses:</strong> bills that snowball into
      collections.
      <div style={{ marginTop: 6, color: "#555" }}>
        <small>
          <strong>Helpful next step:</strong> Make a simple list of providers,
          approximate balances, and which accounts are already in collections.
          That snapshot helps you evaluate options without spending hours
          gathering every statement first.
        </small>
      </div>
    </li>

    <li style={{ marginBottom: 12 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Vehicle payment stress:</strong> the risk of repossession when
      transportation is non-negotiable.
      <div style={{ marginTop: 6, color: "#555" }}>
        <small>
          <strong>Helpful next step:</strong> Find your lender name, monthly
          payment, and whether you’re behind (and by how much). If keeping the
          car is a priority, the strategy can look different depending on the
          loan status and your overall budget.
        </small>
      </div>
    </li>

    <li style={{ marginBottom: 0 }}>
      <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
      <strong>Credit card overload:</strong> balances that keep growing even
      when you’re doing “everything right.”
      <div style={{ marginTop: 6, color: "#555" }}>
        <small>
          <strong>Helpful next step:</strong> Write down your total monthly
          minimum payments versus what’s realistically left after essentials.
          That one comparison often makes it clearer whether a reset option is
          worth exploring.
        </small>
      </div>
    </li>
  </ul>
</div>

<p>
  <strong>Quick guardrail:</strong> If you’re thinking about bankruptcy, try to
  avoid last-minute moves that can create complications—like transferring
  property to family, draining retirement accounts, or running up new credit.
  A short consultation can often clarify what’s safe and what to pause.
</p>


<h2 className={classes.title}>Mesa Economy Snapshot</h2>

<p>
  Mesa’s workforce is broad—and that variety shows up in real-life budget stress.
  In consultations, we often meet people whose finances changed because of
  fluctuating hours, overtime that dried up, contract work, seasonal schedules,
  or rising household costs. This matters because income patterns can affect
  timing, paperwork, and eligibility in a bankruptcy case.
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
    <strong>Key local industries:</strong> Mesa’s economic development priorities
    include healthcare, education, and aerospace/aviation/defense (among other
    targeted sectors).{" "}
    <Link
      href="https://www.selectmesa.com/industries"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      City of Mesa: Industries
    </Link>
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Large employers:</strong> Mesa’s major employers include Mesa Public
    Schools, Banner Health, the City of Mesa, The Boeing Company, and Dexcom.{" "}
    <Link
      href="https://www.selectmesa.com/business-environment/major-employers"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      City of Mesa: Major Employers
    </Link>
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Why it matters for bankruptcy:</strong> If your pay varies (overtime,
    bonuses, contract work, or reduced hours), the “lookback” income period and
    documentation can make the process feel confusing. A quick review can help
    you understand what numbers matter, what to gather, and whether timing could
    improve your options.
  </li>
</ul>

<p style={{ marginTop: 12 }}>
  If you’re unsure how your income pattern affects eligibility or which path
  fits best, a consultation can bring clarity—without pressure. In-person and
  virtual meetings are available.
</p>


<h2 className={classes.title}>Bankruptcy Paths Mesa Residents Typically Compare</h2>

<p>
  When Mesa clients start exploring bankruptcy, the decision usually isn’t “should I file?”—it’s{" "}
  <em>which</em> path actually matches the goal. Some people need a fast reset from unsecured debt,
  others need time to catch up on protected assets, and business owners sometimes need a different tool
  entirely. A thoughtful <strong>bankruptcy attorney in Mesa</strong> should explain the trade-offs in
  plain English (and what the paperwork will look like) before you commit.
</p>

<p>
  We keep the detailed, in-depth breakdowns on our dedicated guides, which are the best “go-to” resources
  if you want to go deeper:{" "}
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
    <strong>Chapter 7:</strong> often considered when someone wants a clean financial reset and the eligibility
    numbers line up.{" "}
    <span style={{ color: "#555" }}>
      <small>
        (For a full explanation of who qualifies and what to expect, see our{" "}
        <Link
          href="/chapter-7-bankruptcy-arizona"
          style={{ color: "#0656d3", textDecoration: "underline" }}
        >
          Arizona Chapter 7 Guide
        </Link>
        .)
      </small>
    </span>
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Chapter 13:</strong> often compared when someone needs time to catch up on certain obligations or
    protect assets through a court-approved monthly plan.{" "}
    <span style={{ color: "#555" }}>
      <small>
        (For the plan structure, common goals, and how eligibility works, see our{" "}
        <Link
          href="/chapter-13-bankruptcy-arizona"
          style={{ color: "#0656d3", textDecoration: "underline" }}
        >
          Arizona Chapter 13 Guide
        </Link>
        .)
      </small>
    </span>
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Chapter 11:</strong> sometimes used by businesses, and occasionally by individuals who don’t fit within
    chapter 13’s debt limits but still need a structured reorganization approach.{" "}
    <span style={{ color: "#555" }}>
      <small>
        If you’re a business owner (or your debt levels are outside chapter 13’s limits), it’s worth asking whether
        a reorganization option makes more sense than forcing a “one-size-fits-all” plan.
      </small>
    </span>
  </li>
</ul>
<div className={classes.moduleWrapper}>
            <PageTopicSelector />
</div>

<h2 className={classes.title}>East Valley Timing Issues That Come Up Before Filing</h2>

<p>
  Most bankruptcy “problems” aren’t about bad people or bad intentions—they’re
  about timing, paperwork, and a few common decisions that seem harmless in the
  moment. If you address these issues early, cases tend to run smoother, feel
  less stressful, and involve fewer surprises.
</p>
<div className={classes.imgContainer}>
              <NextImage
                src="/img/bankruptcy-timeline-what-to-expect-after-you-file-infographic.webp"
                alt="Bankruptcy timeline infographic titled “Bankruptcy Timeline: What to Expect After You File” showing four steps—File Your Case, Document Review, Attend a Meeting (341 meeting of creditors), and Receive a Discharge—with brief explanations and a note that timelines vary."
                width={800}
                height={533}
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 700px, 900px"
                quality={75}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
<p>
  If you’re considering filing, a helpful rule of thumb is: <em>pause major
  financial moves</em> and get clarity before you act. Here are a few situations
  we see often in Mesa and across the East Valley that are usually easier to
  handle when you tackle them up front:
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
    <strong>Last-minute credit use:</strong> especially cash advances or unusually
    large charges.
    <div style={{ marginTop: 6, color: "#555" }}>
      <small>
        <strong>Why it matters:</strong> Recent credit activity can draw extra
        attention and create disputes in some situations. If bankruptcy is on the
        table, it’s usually safer to avoid non-essential credit use and ask what’s
        appropriate for necessities (food, utilities, basic transportation).
      </small>
    </div>
  </li>

  <li style={{ marginBottom: 12 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Repaying a family member:</strong> “I just wanted to make them whole”
    can create avoidable issues.
    <div style={{ marginTop: 6, color: "#555" }}>
      <small>
        <strong>Why it matters:</strong> Payments to relatives (and certain close
        connections) can be reviewed differently than ordinary bills. Even when the
        intent is good, it can complicate timing and paperwork. It’s usually better
        to get guidance before making “cleanup” payments.
      </small>
    </div>
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Moving titles or assets:</strong> transfers done “for safekeeping”
    often backfire.
    <div style={{ marginTop: 6, color: "#555" }}>
      <small>
        <strong>Why it matters:</strong> Transfers can trigger questions and slow
        down an otherwise straightforward case—even if you didn’t mean anything by
        it. If you’re worried about an asset, ask about lawful ways to protect it
        instead of moving it around.
      </small>
    </div>
  </li>
</ul>

<p>
  If any of these sound familiar, don’t panic—most situations are manageable.
  The point is to get clear guidance before filing so you avoid preventable
  headaches and keep your case as smooth as possible.
</p>


<h2 className={classes.title}>What Clients Say</h2>

<p>
  Reaching out about bankruptcy usually happens at a stressful moment. Our goal is
  simple: clear explanations, calm guidance, and a process that feels respectful
  from start to finish. Here are a few short excerpts that reflect themes we hear
  often—professionalism, reduced stress through clarity, and patient answers.
</p>

<p style={{ marginTop: 8, color: "#555" }}>
  <small>
    <strong>Reliability note:</strong> These are short excerpts from client feedback
    (wording may be lightly shortened for length). Results vary, and past feedback
    can’t guarantee a future outcome.
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
    <p style={{ margin: "0 0 6px", fontWeight: 700 }}>
      Professional and Above-and-Beyond Service
    </p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “I was so impressed by the level of professionalism, and the service I
      experienced was consistently over and above all I could have asked.”
    </p>
    <p style={{ margin: "10px 0 0", color: "#555" }}>
      <small>
        <strong>What this means for you:</strong> You should expect organized
        communication, clear next steps, and a process that doesn’t feel chaotic.
      </small>
    </p>
  </li>

  <li
    style={{
      margin: "0 0 14px",
      padding: "14px 16px",
      borderLeft: "4px solid #e6e6e6",
      background: "#fafafa",
    }}
  >
    <p style={{ margin: "0 0 6px", fontWeight: 700 }}>Less Anxiety</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “You made the whole process less scary… thx for calming my anxiety.”
    </p>
    <p style={{ margin: "10px 0 0", color: "#555" }}>
      <small>
        <strong>What this means for you:</strong> Bankruptcy is legal paperwork,
        but it’s also emotional. A good attorney should explain what’s happening,
        what’s next, and what you can stop worrying about today.
      </small>
    </p>
  </li>

  <li
    style={{
      margin: 0,
      padding: "14px 16px",
      borderLeft: "4px solid #e6e6e6",
      background: "#fafafa",
    }}
  >
    <p style={{ margin: "0 0 6px", fontWeight: 700 }}>Clear Explanations</p>
    <p style={{ margin: 0, fontStyle: "italic" }}>
      “He walked me step by step… explained every option… never made me feel
      stupid for asking questions.”
    </p>
    <p style={{ margin: "10px 0 0", color: "#555" }}>
      <small>
        <strong>What this means for you:</strong> You should feel comfortable
        asking basic questions. You should also leave a consultation understanding
        the path you’re considering and why it fits your goal.
      </small>
    </p>
  </li>
</ul>

<h2 className={classes.title}>Serving Mesa and the East Valley</h2>

<p>
  Your bankruptcy case is filed in the federal bankruptcy court, but the outcome
  is still shaped by Arizona-specific rules—especially when it comes to what you
  can protect. For example, Arizona Revised Statutes (A.R.S.) play a major role
  in determining which exemptions apply and what property you may be able to
  keep. That’s why local, Arizona-focused guidance matters just as much as
  knowing the federal process.
</p>

<p style={{ marginTop: 10 }}>
  We serve Mesa and nearby East Valley communities and aim to make the process
  straightforward, respectful, and convenient.
</p>

<p style={{ marginTop: 10 }}>
  We commonly work with clients in and around:
</p>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Downtown Mesa
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    East Mesa
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Dobson Ranch
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Las Sendas
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Red Mountain
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Mesa Riverview area
  </li>
</ul>

<p>
  Appointments are available, and <strong>virtual consultations are always an option</strong>{" "}
  if that’s easier. If an in-person meeting is helpful, we can discuss what makes
  sense for your situation and schedule.
</p>

<p style={{ marginTop: 10, color: "#555" }}>
  <small>
    <strong>Helpful tip:</strong> If you’re booking a consultation, it helps to
    have your most recent pay stubs, your last tax return, and any lawsuit or
    garnishment paperwork handy. If you don’t have everything, don’t worry—we can
    still start with a clear plan for what to gather next.
  </small>
</p>

<h2 className={classes.title}>What to Have Ready for Your Consultation Request</h2>

<p>
  If you’ve made it this far, you’re probably not looking for generic advice—you
  want a clear plan. The goal of a consultation is to turn uncertainty into
  specific next steps: what option fits best, what it would look like in your
  situation, and what to do first.
</p>
<div className={classes.imgContainer}>
              <NextImage
                src="/img/mesa-bankruptcy-lawyer-consultation-document-checklist.webp"
                alt="Checklist graphic showing documents to gather before meeting with a Mesa bankruptcy lawyer, including pay stubs from the past six months, tax returns from the past two years, bank account statements, car loan and mortgage statements, and recent creditor notices or lawsuit papers."
                width={800}
                height={533}
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 700px, 900px"
                quality={70}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
<p>
  You don’t need perfect paperwork to start. But if you have any of the items
  below, we can usually give you clearer answers faster and avoid back-and-forth:
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
    quick summary of monthly income (especially if income changes month to
    month).
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Debt list:</strong> a list of creditors and collections, plus any
    lawsuits, judgments, or garnishment paperwork (if you have it).
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Housing and vehicle basics:</strong> monthly payment amounts, whether
    you’re behind, and (if you know it) the approximate payoff balance.
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Recent tax return (helpful, not required):</strong> if you have your
    most recent return handy, it can speed up eligibility and planning
    discussions.
  </li>
</ul>

<p style={{ marginTop: 12 }}>
  <strong>If you’re dealing with a deadline</strong>—a lawsuit date, a
  garnishment, a repossession threat, or a foreclosure notice—mention that when
  you reach out. Timing can change the best next step.
</p>

<p style={{ marginTop: 12, color: "#555" }}>
  <small>
    For informational purposes only, not legal advice. The right strategy depends
    on your income, assets, debts, and goals. A consultation is the fastest way
    to get clarity on what applies to your situation and what to do next.
  </small>
</p>


<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>
<h2 className={classes.title}>Mesa Bankruptcy FAQs</h2>

<h3 className={classes.title}>What does a Mesa AZ bankruptcy attorney review during a first consultation?</h3>
<p>
  A first consultation is usually a “snapshot review” designed to give you clear direction quickly. We focus on the pressure you’re facing (collections, lawsuits, garnishments, repossession risk, or housing concerns), your income pattern (steady vs. fluctuating), your assets, and your main goal—like stopping a garnishment, keeping a vehicle, or getting a fresh start from unsecured debt. From there, we explain which bankruptcy path (if any) fits best and what timing or paperwork decisions matter most.
</p>

<h3 className={classes.title}>Can bankruptcy stop wage garnishments and collection lawsuits in Mesa?</h3>
<p>
  In many cases, filing bankruptcy triggers an “automatic stay” that can pause most collection activity, including many wage garnishments and pending lawsuits. Because deadlines and payroll timing can matter, it helps to share any garnishment paperwork, lawsuit documents, and your most recent pay stubs during your consultation request. Some situations have exceptions, so getting advice early is the best way to avoid surprises.
</p>

<h3 className={classes.title}>What’s the difference between chapter 7 and chapter 13 for Mesa residents?</h3>
<p>
  Mesa residents usually compare chapter 7 and chapter 13 based on the problem they’re trying to solve. chapter 7 is often explored when someone wants relief from unsecured debt and the eligibility numbers line up. chapter 13 is often explored when someone needs time to catch up on certain obligations or protect assets through a court-approved payment plan. The best fit depends on income, assets, debt type, and whether you’re trying to protect a home or vehicle.
</p>

<h3 className={classes.title}>What should I avoid doing right before filing bankruptcy in the East Valley?</h3>
<p>
  Many complications come from last-minute moves that look harmless but create extra questions later—such as using credit right before filing (especially cash advances), transferring property or vehicle titles “for safekeeping,” or repaying family members. If bankruptcy is on the table, a helpful rule of thumb is to pause major financial moves and get guidance first. A short review can help you understand what to stop, what’s safe, and what documentation you’ll need.
</p>

<h3 className={classes.title}>What documents should I gather for a Mesa bankruptcy consultation request?</h3>
<p>
  You don’t need perfect paperwork to start, but a few items can help you get clear answers faster: recent pay stubs or proof of income, a basic debt list (collections letters help), any lawsuit or garnishment paperwork, and your housing/vehicle payment details. If you have your most recent tax return, that can also help with planning and eligibility questions. If you’re missing something, you can still start—just share what you have and what deadlines you’re facing.
</p>



</GridItem>
        </GridContainer>
      </div>
    </>
  );
}