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

export default function BankruptcyAndCivillawsuiteDebt() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>

<h1 className={classes.title}>Does Bankruptcy Clear Civil Lawsuit Debt?</h1>
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
  If you’ve been sued (or a judgment has already been entered) it’s normal to feel
  overwhelmed—and to wonder whether bankruptcy can “make it go away.” The helpful
  answer is: <strong>sometimes yes, sometimes no</strong>, and it depends on what the
  lawsuit is about.
</p>

<p>
  In real life, there are usually <strong>two separate questions</strong>:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Does bankruptcy stop the lawsuit right now?</strong> (Often yes, because of the automatic stay.)
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Does bankruptcy wipe out the debt later?</strong> (Sometimes—depending on the type of claim and any nondischargeability issues.)
  </li>
</ul>

<p>
  I’m Casey Yontz, an Arizona bankruptcy attorney with 18+ years of experience. This guide is written
  to help you understand the big moving pieces so you can make smarter decisions—especially if you have
  upcoming court dates, a default risk, or collection pressure.
</p>

<p style={{ fontSize: "0.95rem", color: "#666" }}>
  For informational purposes only, not legal advice. Outcomes depend on your facts, your timeline, and the
  type of lawsuit.
</p>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>

<h2 className={classes.title}>How Bankruptcy Affects a Pending Civil Lawsuit</h2>

<p>
  In most consumer situations, filing bankruptcy triggers the <strong>automatic stay</strong>, a federal protection that
  typically pauses many collection actions—including ongoing civil lawsuits that are trying to collect money.
</p>

<h3 className={classes.title}>What “Paused” Usually Means</h3>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    The lawsuit generally cannot continue against you while the stay is in place.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Collection activity (calls, letters, garnishments) is typically required to stop.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    If there is a hearing scheduled, the court is usually notified and the case is stayed as to you.
  </li>
</ul>

<p>
  There are exceptions to the automatic stay, and some creditors may ask the bankruptcy court for permission to continue
  (for example, to resolve certain issues or to pursue a claim they believe won’t be dischargeable). If your lawsuit involves
  unusual facts—fraud allegations, intentional harm, or multiple defendants—get legal guidance early.
</p>

<h2 className={classes.title}>Does Bankruptcy Eliminate a Civil Judgment?</h2>

<p>
  A civil judgment is usually just a court’s way of confirming a debt. In bankruptcy, the key question is not “judgment vs no judgment”—
  it’s the <strong>nature of the underlying claim</strong>.
</p>

<p>
  Many everyday civil judgments (credit card lawsuits, contract disputes, unpaid services) are based on unsecured debt and
  may be dischargeable. But some lawsuit debts are legally protected from discharge, especially where fraud or intentional injury is involved.
</p>

<h3 className={classes.title}>Important: Judgments and Judgment Liens Are Not the Same Thing</h3>

<p>
  Even when bankruptcy wipes out your <strong>personal obligation</strong> to pay a judgment, a{" "}
  <strong>judgment lien</strong> recorded against property can be a separate problem. In many cases, liens survive unless
  they’re avoided or resolved through the bankruptcy process.
</p>

<p>
  That’s why “I filed, so the judgment is gone” can be incomplete. If you own a home or other property, ask specifically:
  <strong> “Is there a judgment lien, and can it be avoided?”</strong>
</p>

<h2 className={classes.title}>Which Civil Lawsuit Debts Usually Are Dischargeable?</h2>

<p>
  Many civil lawsuit debts are dischargeable when they are essentially ordinary unsecured debts. Examples often include:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Contract-based debts (unpaid bills, breach of contract claims)
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Many debt collection lawsuits and money judgments based on consumer debt
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Some negligence-based claims (fact-specific)
  </li>
</ul>

<p>
  “Usually” matters here. A creditor can challenge dischargeability in certain situations, and the details of the complaint,
  the evidence, and the judgment language can affect the outcome.
</p>

<h2 className={classes.title}>Which Civil Lawsuit Debts Might Not Be Dischargeable?</h2>

<p>
  Bankruptcy law includes categories of debts that are harder—or sometimes impossible—to discharge. Civil lawsuit debts that often raise
  red flags include claims involving:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Fraud or misrepresentation</strong> (for example, a creditor claiming you obtained money through false pretenses)
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Willful and malicious injury</strong> (intentional harm to a person or property)
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Domestic support obligations</strong> (child support / spousal support)
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Some tax-related and government-related debts</strong> (highly fact-specific)
  </li>
</ul>

<p>
  If your lawsuit includes allegations like these, it doesn’t automatically mean “you can’t file.” It means you should evaluate the case
  carefully and understand what bankruptcy can realistically accomplish.
</p>

<h2 className={classes.title}>Which Option Works Better When You’re Facing a Lawsuit?</h2>

<p>
  In many cases, both{" "}
  <Link
    href="/chapter-7-bankruptcy-arizona"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    chapter 7
  </Link>{" "}
  and{" "}
  <Link
    href="/chapter-13-bankruptcy-arizona"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    chapter 13
  </Link>{" "}
  can pause a civil lawsuit through the automatic stay. The more important question is what you need to happen next—because
  lawsuit debt isn’t always “just another bill,” especially when allegations like fraud are involved.
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
    <p style={{ margin: "0 0 6px", fontWeight: 800 }}>When fast discharge is the priority</p>
    <p style={{ margin: 0 }}>
      If the lawsuit is about ordinary unsecured debt, a chapter 7-style approach may be worth exploring. But if the case
      involves fraud-type allegations or intentional injury claims, the discharge rules can be different—so the complaint and
      judgment language matters.
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
    <p style={{ margin: "0 0 6px", fontWeight: 800 }}>When you need time and structure</p>
    <p style={{ margin: 0 }}>
      A chapter 13-style approach can make sense when your strategy is to stay protected while you work through multiple
      moving parts. These cases can also involve more creditor motions and court events (like requests to lift the stay),
      so staying organized and responding quickly matters.
    </p>
  </div>
</div>

<p>
  For the full details on each chapter, use the guides here:{" "}
  <Link
    href="/chapter-7-bankruptcy-arizona"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    Arizona chapter 7 guide
  </Link>{" "}
  and{" "}
  <Link
    href="/chapter-13-bankruptcy-arizona"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    Arizona chapter 13 guide
  </Link>
  .
</p>


<h2 className={classes.title}>If You’ve Been Served With a Lawsuit: Practical Next Steps</h2>

<p>
  If you were just served, the biggest risk is often missing deadlines and getting a default judgment. Here are steps that help you move from
  panic to plan:
</p>

<ol style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>1.</span>
    <strong>Find your deadline:</strong> Look for the response date on the summons/complaint. Put it on a calendar.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>2.</span>
    <strong>Collect the paperwork:</strong> Complaint, summons, any exhibits, and any prior settlement letters.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>3.</span>
    <strong>Identify what the lawsuit is actually alleging:</strong> Contract debt vs. fraud vs. intentional harm matters a lot for discharge.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>4.</span>
    <strong>Don’t do “panic transfers”:</strong> Moving assets around can create avoidable problems and doesn’t fix the lawsuit.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>5.</span>
    <strong>Talk to a bankruptcy lawyer early:</strong> Timing affects options—especially if garnishment is starting or a hearing is imminent.
  </li>
</ol>
<h2 className={classes.title}>Bottom Line</h2>

<p>
  Bankruptcy can often stop a pending civil lawsuit and may discharge many civil judgment debts—but not all. The fastest way to get a clear answer is to
  review <strong>what you’re being sued for</strong>, <strong>where the case is in the timeline</strong>, and whether any nondischargeability issues could apply.
</p>
<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>
<div className={classes.moduleWrapper}>
            <PageTopicSelector />
</div>
<h2 className={classes.title}>Common Questions</h2>

<h3 className={classes.title}>Will bankruptcy stop my civil lawsuit right away?</h3>

<p>
  In many cases, yes—the automatic stay typically pauses a money-collection lawsuit after filing. But exceptions exist, and some creditors may
  ask the bankruptcy court for permission to continue in limited circumstances.
</p>

<h3 className={classes.title}>What if I already have a judgment?</h3>

<p>
  A judgment based on ordinary unsecured debt may still be dischargeable. But if a judgment lien has been recorded, that lien may require separate
  attention. This is especially important if you own a home or other property.
</p>

<h3 className={classes.title}>Can bankruptcy remove a judgment lien?</h3>

<p>
  Sometimes, liens can be avoided or otherwise addressed, depending on the facts and the exemption rules that apply. This is a detail-driven issue—
  bring the judgment documents and any recorded lien information to your consultation.
</p>

<h3 className={classes.title}>What if the lawsuit says “fraud” or “intentional harm”?</h3>

<p>
  That’s a sign to slow down and get legal advice. Some debts tied to fraud or willful injury can be nondischargeable. The complaint, judgment language,
  and evidence can matter, and creditors sometimes file additional litigation in bankruptcy court to challenge dischargeability.
</p>

<h2 className={classes.title}>References</h2>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <a
      href="https://www.law.cornell.edu/uscode/text/11/362"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      11 U.S.C. § 362 (Automatic Stay)
    </a>
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <a
      href="https://www.law.cornell.edu/uscode/text/11/523"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      11 U.S.C. § 523 (Exceptions to Discharge)
    </a>
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <a
      href="https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{ color: "#0656d3", textDecoration: "underline" }}
    >
      United States Courts: Bankruptcy Basics
    </a>
  </li>

</ul>


</GridItem>
        </GridContainer>
      </div>
    </>
  );
}