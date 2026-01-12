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

export default function ArizonaBankrutpcyExemptions() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>


          <h1 className={classes.title}>Arizona Bankruptcy Exemptions: What You Can Protect</h1>
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
If you’re searching for “Arizona bankruptcy exemptions,” you’re probably trying to answer one practical question: <strong>“If I file bankruptcy, what do I get to keep?”</strong>
That’s exactly what exemptions are for. They’re the set of rules that protect certain property so you can get debt relief without losing the basics you need to live and work.
</p>

<p>
This page is written for people in the Phoenix area who want a clear, real-world explanation—not a wall of legalese. I’ll give you a working overview, show you how exemptions actually get claimed in a bankruptcy case, and point out the common traps that can cost people money or property.
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
<h3 className={classes.title}>Arizona Bankruptcy Exemptions at a Glance</h3>
<p style={{ marginTop: 0, color: "#555" }}>
Quick reference only. Exemption amounts and rules can change, and outcomes depend on your facts. Verify current law before filing.
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Arizona is an “opt-out” state:</strong> Most filers use Arizona exemptions, not the federal list{" "}
    (<a href="https://www.azleg.gov/ars/33/01133.htm" target="_blank" rel="nofollow noopener">A.R.S. § 33-1133</a>).
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Residency matters:</strong> To use Arizona exemptions, you generally must have lived in Arizona for{" "}
    <strong>730 days (2 years)</strong> before filing{" "}
    (<a href="https://www.law.cornell.edu/uscode/text/11/522#b_3_A" target="_blank" rel="nofollow noopener">11 U.S.C. § 522(b)(3)(A)</a>).
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Homestead (primary residence):</strong> Arizona protects significant home equity (commonly referenced up to{" "}
    <strong>$425,000</strong>){" "}
    (<a href="https://www.azleg.gov/ars/33/01101.htm" target="_blank" rel="nofollow noopener">A.R.S. § 33-1101</a>). Federal law can cap certain newly acquired equity in some cases (the “1,215-day rule”){" "}
    (<a href="https://www.law.cornell.edu/uscode/text/11/522#p" target="_blank" rel="nofollow noopener">11 U.S.C. § 522(p)</a>).
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Vehicle:</strong> Arizona commonly protects vehicle equity (often referenced up to{" "}
    <strong>$16,000</strong>, and higher if the debtor or a dependent is physically disabled){" "}
    (<a href="https://www.azleg.gov/ars/33/01125.htm" target="_blank" rel="nofollow noopener">A.R.S. § 33-1125(8)</a>).
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Household goods &amp; essentials:</strong> Many everyday household items are protected under Arizona’s personal property statutes{" "}
    (<a href="https://www.azleg.gov/ars/33/01123.htm" target="_blank" rel="nofollow noopener">A.R.S. § 33-1123</a>), with certain amounts adjusted by statute{" "}
    (<a href="https://www.azleg.gov/ars/33/01126.htm" target="_blank" rel="nofollow noopener">A.R.S. § 33-1126</a>).
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Tools of the trade:</strong> Certain work tools/equipment can be protected{" "}
    (<a href="https://www.azleg.gov/ars/33/01130.htm" target="_blank" rel="nofollow noopener">A.R.S. § 33-1130</a>).
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Retirement:</strong> Many qualified retirement plans are protected by federal and Arizona law; IRAs may have federal caps in some situations{" "}
    (<a href="https://www.law.cornell.edu/uscode/text/11/522#n" target="_blank" rel="nofollow noopener">11 U.S.C. § 522(n)</a>).
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Wildcard:</strong> Arizona does <em>not</em> have a broad “use-it-on-anything” wildcard exemption. That makes accuracy and planning more important.
  </li>

  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>chapter 7 vs. chapter 13:</strong> In <em>chapter 7</em>, exemptions help decide what you keep. In <em>chapter 13</em>, non-exempt equity can affect the minimum amount that must be paid to unsecured creditors through the plan.
  </li>
</ul>
</div>

<h3 className={classes.title}>Important Cautions Before You Rely on Any Exemption List</h3>
<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Amounts and interpretations can change:</strong> Statutes get amended, dollar amounts adjust, and court rulings affect how exemptions work in real cases.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Exemptions aren’t automatic:</strong> You must list the asset, value it, and claim the correct statute on your bankruptcy forms.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Small mistakes can be expensive:</strong> A wrong statute citation, inconsistent values, or messy proceeds can lead to objections. If you’re considering bankruptcy, getting advice from an experienced Arizona bankruptcy attorney is strongly recommended.
  </li>
</ul>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Get Help Applying Arizona Exemptions to Your Situation
  </Button>
</div>

<h2 className={classes.title}>How Arizona Bankruptcy Exemptions Work in Real Life</h2>

<p>
Here’s the simplest way to think about exemptions: <strong>bankruptcy forms are the “inventory,” and exemptions are the “keep list.”</strong>{' '}
You disclose what you own, put realistic values next to each item, and then claim the Arizona statute that protects it.
</p>

<p>
In a typical consumer case, your trustee will review your schedules, ask a few questions, and look for anything that appears non-exempt or undervalued.
When exemptions are claimed cleanly and supported with reasonable documentation, things usually go smoothly.
</p>

<h3 className={classes.title}>A Phoenix-Area Reality Check: Three Common Scenarios</h3>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Scenario 1: “I own a home and my equity is close to the limit.”</strong>{" "}
    The number that matters is <strong>equity</strong> (fair market value minus liens). If you’re close, your strategy may involve timing, valuation support, and confirming whether any federal limits apply (such as the 1,215-day rule){" "}
    (<a href="https://www.law.cornell.edu/uscode/text/11/522#p" target="_blank" rel="nofollow noopener">11 U.S.C. § 522(p)</a>).
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Scenario 2: “My car is financed, but I need it for work.”</strong>{" "}
    Most people care about <strong>equity</strong>, not the purchase price. If the loan balance is close to the vehicle’s value, equity may be low. If equity is higher, we look at the Arizona vehicle exemption and how it applies to your situation{" "}
    (<a href="https://www.azleg.gov/ars/33/01125.htm" target="_blank" rel="nofollow noopener">A.R.S. § 33-1125(8)</a>).
  </li>

  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Scenario 3: “I’m filing chapter 13 because I have non-exempt equity.”</strong>{" "}
    In <em>chapter 13</em>, exemptions still matter, but the question changes to: “How much must unsecured creditors receive at minimum because of my non-exempt equity?”
    Getting the valuations right can have a direct impact on plan math.
  </li>
</ul>

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
Arizona is an <em>opt-out</em> state. That means most individual filers in Arizona use the state exemption system rather than the federal exemption list{" "}
(<a href="https://www.azleg.gov/ars/33/01133.htm" target="_blank" rel="nofollow noopener">A.R.S. § 33-1133</a>).
You still claim exemptions on your bankruptcy forms, but the statute citations are Arizona’s.
</p>



<h2 className={classes.title}>Who Can Use Arizona Bankruptcy Exemptions?</h2>

<p>
For most people, qualification is about <strong>domicile and timing</strong>, not citizenship. If you’ve lived in Arizona long enough to satisfy the domicile rules, you can typically claim Arizona exemptions in an individual bankruptcy case.
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>General rule:</strong> Arizona exemptions typically apply if you lived in Arizona for the <strong>730 days</strong> before filing{" "}
    (<a href="https://www.law.cornell.edu/uscode/text/11/522#b_3_A" target="_blank" rel="nofollow noopener">11 U.S.C. § 522(b)(3)(A)</a>).
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Recent movers:</strong> If you don’t meet the 730-day rule, you may have to use another state’s exemptions (and in some cases a federal option may come into play depending on that state’s rules).
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Businesses:</strong> Corporations/LLCs don’t use personal exemptions the way individuals do.
  </li>
</ul>

<h2 className={classes.title}>Overview of Common Arizona Exemptions</h2>

<p>
  Arizona exemptions cover four big buckets below. Amounts shown are the <strong>base amounts stated in the statutes</strong>.
  Several key exemptions (including homestead, vehicle, household goods, and the single-bank-account exemption) are{" "}
  <strong>adjusted annually</strong>, so confirm the adjusted figure as of your filing date.
</p>

<h3 className={classes.title}>Real Property</h3>
<p style={{ marginTop: 0, color: "#555" }}>
  These rules focus on your primary residence. In most cases, the key number is{" "}
  <strong>equity</strong>: market value minus valid liens.
</p>

<div className={classes.tableWrap} role="region" aria-label="Arizona real property exemptions table">
  <table className={classes.table} style={{ width: "100%", tableLayout: "fixed" }}>
    <thead>
      <tr>
        <th className={classes.th} style={{ width: "18%", whiteSpace: "normal" }}>Exemption</th>
        <th className={classes.th} style={{ width: "34%", whiteSpace: "normal" }}>What It Protects</th>
        <th className={classes.th} style={{ width: "18%", whiteSpace: "normal" }}>Amount</th>
        <th className={classes.th} style={{ width: "12%", whiteSpace: "normal" }}>Statute</th>
        <th className={classes.th} style={{ width: "18%", whiteSpace: "normal" }}>Practical Notes</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td
          className={classes.td}
          style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}
        >
          Homestead
        </td>

        <td
          className={classes.td}
          style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}
        >
          Equity in your primary residence (home/condo/manufactured home, etc.)
        </td>

        <td
          className={classes.td}
          style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}
        >
          Up to <strong>$425,200</strong> equity (current adjusted amount; adjusted annually)
        </td>

        <td
          className={classes.td}
          style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}
        >
          A.R.S. § 33-1101
        </td>

        <td
          className={classes.td}
          style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}
        >
          Only one homestead per married couple or single person. In bankruptcy, federal law can cap certain newly acquired equity in some cases.
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


<h3 className={classes.title}>Motor Vehicle</h3>
<p style={{ marginTop: 0, color: "#555" }}>
  This exemption protects <strong>equity</strong> in a vehicle, not the purchase price. Equity is generally fair market value
  minus the loan payoff.
</p>

<div className={classes.tableWrap} role="region" aria-label="Arizona vehicle exemptions table">
  <table className={classes.table} style={{ width: "100%", tableLayout: "fixed" }}>
    <thead>
      <tr>
        <th className={classes.th} style={{ width: "18%", whiteSpace: "normal" }}>Exemption</th>
        <th className={classes.th} style={{ width: "34%", whiteSpace: "normal" }}>What It Protects</th>
        <th className={classes.th} style={{ width: "20%", whiteSpace: "normal" }}>Amount</th>
        <th className={classes.th} style={{ width: "12%", whiteSpace: "normal" }}>Statute</th>
        <th className={classes.th} style={{ width: "16%", whiteSpace: "normal" }}>Practical Notes</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td
          className={classes.td}
          style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}
        >
          Motor Vehicle
        </td>

        <td
          className={classes.td}
          style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}
        >
          Equity in <strong>one</strong> motor vehicle used for personal/family/household purposes
        </td>

        <td
          className={classes.td}
          style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}
        >
          <strong>Individual filers:</strong> Up to <strong>$16,000</strong> in equity
          <br />
          <strong>Filers with disabilities:</strong> Up to <strong>$26,700</strong> in equity if the debtor or a dependent has a
          physical disability and the vehicle is <strong>specially equipped</strong>
        </td>

        <td
          className={classes.td}
          style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}
        >
          A.R.S. § 33-1125(8)
        </td>

        <td
          className={classes.td}
          style={{ verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "break-word" }}
        >
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
          Up to <strong>$5,200</strong> in one account (current adjusted amount; adjusted annually)
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
<h2 className={classes.title}>Arizona Chapter 7 Bankruptcy Exemptions: What They Mean in a Real Case</h2>

<p>
  If you searched for <strong>“Arizona chapter 7 bankruptcy exemptions”</strong>, you’re likely trying to answer one practical question:
  <strong> “If I file chapter 7 in Arizona, what do I get to keep?”</strong> In a <Link
    href="/chapter-7-bankruptcy-arizona"
    prefetch={false}
    style={{ color: "#0656d3", textDecoration: "underline", fontWeight: 700 }}
  >
    chapter 7
  </Link> case, exemptions are the rules that
  protect certain property from the trustee. You still must disclose everything you own—the exemptions determine{" "}
  <strong>what stays protected</strong> after that disclosure.
</p>

<p>
  Chapter 7 is often described as a “fresh start,” but it’s also a very structured legal process. The trustee’s job is to look for{" "}
  <strong>non-exempt equity</strong>. If an asset isn’t covered by an exemption (or the exemption is claimed incorrectly),
  you may be forced to negotiate a buyback, pay money into the estate, or in a worst-case scenario,{" "}
  <strong>surrender an asset</strong>. That’s why the two most important themes in Arizona chapter 7 exemptions are{" "}
  <strong>accurate valuations</strong> and <strong>proper statute selection</strong>.
</p>

<h3 className={classes.title}>Why Exemptions Matter So Much in Chapter 7</h3>
<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Chapter 7 is equity-driven:</strong> trustees look for <strong>non-exempt equity</strong>.” Trustee's look at all of your assets and ask, is there something here that has equity or value that is not exempt?
    
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Valuations should be defensible:</strong> use real-world support like KBB/market comps for vehicles and credible
    value support for a home (payoff statement + market comps, or an appraisal if you’re close to a limit).
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Arizona has no broad wildcard:</strong> you usually can’t “patch” a mistake by shifting value to a wildcard exemption.
    The statute selection has to fit the asset.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Timing changes outcomes:</strong> paydays, tax refunds, bank balances, and recent purchases can all change the risk level
    of a chapter 7 filing.
  </li>
</ul>

<h3 className={classes.title}>What Arizona Chapter 7 Exemptions Commonly Protect</h3>
<p style={{ marginTop: 0, color: "#555" }}>
  Every case is different, but these categories are the usual “make-or-break” areas when someone is deciding if chapter 7 is a safe fit.
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Your primary residence:</strong> the key is <strong>equity</strong> (value minus liens). If your equity is within the
    Arizona homestead protection, that often reduces risk in chapter 7.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Your vehicle:</strong> exemptions protect <strong>equity</strong>, not the sticker price. Proper payoff figures and realistic
    valuations matter.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Household goods and essentials:</strong> everyday items are usually protected when valued realistically at resale.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Retirement:</strong> many retirement plans are protected, but plan type and recent contribution timing can matter.
  </li>
</ul>

<h3 className={classes.title}>When Chapter 7 Exemptions Get Risky</h3>
<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    You’re close to exemption limits (especially home or vehicle equity) and need tight valuation support.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    You expect a large tax refund, have high cash/bank balances, or receive irregular income.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    You own non-routine assets (business equipment, claims/lawsuits, crypto, collectibles, inheritance interests).
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    You moved to Arizona recently and the residency look-back may change which state’s exemptions apply.
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
    Want the full Arizona chapter 7 picture (who qualifies, what debts are wiped out, and how exemptions fit into the strategy)?
    Read our in-depth guide:
  </p>

  <Link
    href="/chapter-7-bankruptcy-arizona"
    prefetch={false}
    style={{ color: "#0656d3", textDecoration: "underline", fontWeight: 700 }}
  >
    Chapter 7 Bankruptcy in Arizona: Complete Guide
  </Link>
</div>



<h2 className={classes.title}>Step-by-Step: How Exemptions Get Claimed in an Arizona Bankruptcy Case</h2>

<p>
  This section is a <strong>general overview</strong> of how exemptions are claimed in a real Arizona bankruptcy case. It is{" "}
  <strong>not a DIY guide</strong> and it is not meant to teach you how to fill out bankruptcy forms on your own.
  The reason is simple: exemptions can look straightforward on paper, but the <strong>details</strong> (statute selection, timing,
  documentation, and accurate valuations) are where cases go wrong.
</p>

<p>
  When exemptions are claimed correctly, they help protect the property you need to live and work while you get debt relief.
  When they’re claimed incorrectly—or when values are inconsistent or unsupported—your trustee can ask questions, request proof,
  and in worst-case situations, property can become <strong>non-exempt</strong> and exposed. That can mean negotiating with the trustee,
  paying additional money to keep an asset, or even having to <strong>surrender an asset</strong> that could have been protected with a better strategy.
  That’s why it’s strongly recommended to consult an experienced <strong>Arizona bankruptcy attorney</strong> before filing.
</p>

<p style={{ marginTop: 0, color: "#555" }}>
  The theme: <strong>disclose everything</strong>, use <strong>credible fair-market values</strong>, and match each asset to the{" "}
  <strong>correct Arizona statute</strong>—with consistent numbers across your paperwork.
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>1) List your property completely:</strong> You disclose assets such as real estate, vehicles, bank accounts,
    household goods, tools, tax refunds, and any potential claims (lawsuits, injury claims, inheritance interests, etc.).
    Missing assets can create credibility issues and unnecessary risk.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>2) Value each item accurately:</strong> Trustees focus on <strong>fair market value</strong> (what it would sell for),
    not “brand new replacement cost.” The closer you are to an exemption limit, the more important it is to have support—photos,
    statements, KBB/market comps, or an appraisal if appropriate.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>3) Claim the correct exemption:</strong> Each asset needs to be tied to the right statute.
    Arizona has no broad “wildcard” that saves you if you pick the wrong category, so correct statute selection matters.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>4) Keep your paperwork consistent:</strong> Values and descriptions should match across your schedules.
    Inconsistencies are one of the fastest ways to invite questions and document requests.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>5) Trustee review happens quickly:</strong> The trustee can ask follow-up questions and request documentation.
    Clean schedules and credible valuations typically make this stage smoother.
  </li>

  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>6) There is an objection window:</strong> Exemptions are generally allowed unless someone objects within the time
    permitted by the bankruptcy rules{" "}
    (<a
      href="https://www.law.cornell.edu/rules/frbp/rule_4003"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      Fed. R. Bankr. P. 4003(b)
    </a>
    ).
  </li>
</ul>

<p style={{ fontSize: "0.95rem", marginTop: "1rem" }}>
  <em>
    Bottom line: This is an overview so you understand the process and why details matter. If you’re considering bankruptcy—especially
    if you’re near exemption limits, recently moved, have a refund coming, or own anything out of the ordinary—consulting an experienced{" "}
    Arizona bankruptcy attorney can help you protect the maximum property the law allows and avoid preventable worst-case outcomes.
  </em>
</p>


<h2 className={classes.title}>Common Mistakes That Create Problems With Exemptions</h2>

<p>
Most exemption issues are preventable. The patterns below show up again and again in Arizona cases—and they’re exactly why experienced guidance matters.
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Using the wrong exemption system:</strong> Recent movers can get tripped up by the 730-day rule{" "}
    (<a href="https://www.law.cornell.edu/uscode/text/11/522#b_3_A" target="_blank" rel="nofollow noopener">11 U.S.C. § 522(b)(3)(A)</a>).
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Bad valuations:</strong> Overvaluing can create unnecessary exposure; undervaluing can look dishonest. Use fair market value and keep support.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Assuming Arizona has a wildcard:</strong> It doesn’t. Each asset needs a clear “home” in the statutes.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Messy proceeds and timing:</strong> Home sale proceeds, refunds, and last-minute financial moves can create complications if not handled carefully.
  </li>

  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Missing documentation:</strong> If the trustee asks for proof and you can’t produce it, you may end up negotiating problems that should never have existed.
  </li>
</ul>

<h2 className={classes.title}>When It Makes Sense to Speak With a Bankruptcy Attorney</h2>

<p>
If your situation is straightforward, exemptions may look simple on paper. But “simple” changes fast when you’re near limits, recently moved, sold property, or have anything outside the usual checklist.
If any of the items below sound like you, it’s worth getting legal guidance before you file.
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    You’re close to homestead or vehicle limits, or you’re not sure what your equity really is.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    You moved to Arizona within the last two years (residency look-back issues).
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    You’re deciding between <strong>Chapter 7 vs. Chapter 13</strong>, and you want the plan math done correctly.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    You have non-routine assets (business equipment, claims, inheritance concerns, major tax refunds, crypto, or property transfers).
  </li>
</ul>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>
<div className={classes.moduleWrapper}>
            <PageTopicSelector />
</div>
<h2 className={classes.title}>Arizona Bankruptcy Exemptions FAQs</h2>

<h3 className={classes.title}>Do exemptions mean I keep everything I own?</h3>
<p>
No. Exemptions protect specific property up to certain limits. If an item has non-exempt equity, that can create risk in chapter 7 or affect plan payments in chapter 13.
</p>

<h3 className={classes.title}>Can I choose the federal exemptions instead?</h3>
<p>
Arizona is an opt-out state, so most Arizona filers use Arizona exemptions{" "}
(<a href="https://www.azleg.gov/ars/33/01133.htm" target="_blank" rel="nofollow noopener">A.R.S. § 33-1133</a>).
Recent movers may have a different outcome because of federal domicile rules.
</p>

<h3 className={classes.title}>Does filing jointly double the homestead exemption?</h3>
<p>
Not always. Some exemptions can effectively “stack” or be used strategically, but certain Arizona exemptions are not doubled simply because two spouses file together.
This is a detail worth confirming with counsel based on how title, community property, and equity look in your case.
</p>

<h3 className={classes.title}>What’s the biggest mistake people make with exemptions?</h3>
<p>
The biggest practical mistake is usually a tie between (1) using the wrong exemption system because of recent relocation, and (2) poor valuations that create avoidable trustee scrutiny.
</p>

<h3 className={classes.title}>How long do I need to live in Arizona to use Arizona exemptions?</h3>
<p>
Typically <strong>730 days (2 years)</strong> before filing, under federal domicile rules{" "}
(<a href="https://www.law.cornell.edu/uscode/text/11/522#b_3_A" target="_blank" rel="nofollow noopener">11 U.S.C. § 522(b)(3)(A)</a>).
</p>

<p style={{ fontSize: "0.95rem" }}>
  <em>
    For informational purposes only, not legal advice. Exemption outcomes depend on facts, timing, and current law. Always seek advice from a qualified bankruptcy attorney.
  </em>
</p>

</GridItem>
        </GridContainer>
      </div>
    </>
  );
}