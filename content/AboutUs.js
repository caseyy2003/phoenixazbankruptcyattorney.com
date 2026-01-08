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


          <h2 className={classes.title}>About Casey Yontz</h2>

<GridContainer justifyContent="center" alignItems="center">
  <GridItem xs={12} md={4}>
    <div style={{ width: "100%", maxWidth: 320, margin: "0 auto 16px" }}>
      <NextImage
        src="/img/casey-yontz-headshot.webp"
        alt="Casey Yontz, Arizona bankruptcy attorney and founder of USBankruptcyHelp.com"
        width={640}
        height={640}
        style={{ width: "100%", height: "auto", borderRadius: 16 }}
        sizes="(max-width: 768px) 240px, 320px"
      />
    </div>
  </GridItem>

  <GridItem xs={12} md={8}>
    <p style={{ marginTop: 0 }}>
      Casey Yontz is the managing attorney at <strong>Yontz Law PLLC</strong>, where his practice is focused exclusively on
      bankruptcy law. For more than <strong>18 years</strong>, he has represented Arizona individuals and families in{" "}
      <strong>thousands</strong> of bankruptcy cases—helping clients stop creditor harassment, address wage garnishments,
      deal with lawsuits and judgments, and regain financial stability through <em>chapter 7</em> and <em>chapter 13</em>.
    </p>

    <p>
      Clients often reach out feeling overwhelmed, embarrassed, or unsure of their options. Casey brings a calm, practical
      approach built on deep, real-world experience in the Arizona bankruptcy system. He focuses on clear explanations,
      accurate expectations, and strategies that fit the client’s goals—never a one-size-fits-all plan.
    </p>

    <p>
      Before focusing exclusively on consumer bankruptcy, Casey served as <strong>Bar Counsel for the State Bar of Arizona</strong> as
      a lawyer regulation and litigation attorney. He also serves as a <strong>court-appointed arbitrator</strong> for the Arizona
      Superior Court (a volunteer public-service role connected to Arizona bar membership).
    </p>

    <p>
      Casey is also the founder of <strong>USBankruptcyHelp.com</strong>, a nationwide educational resource built to help people
      researching bankruptcy understand key concepts and state-specific issues across <strong>all 50 states</strong>. The goal is to
      make bankruptcy information easier to understand so people can ask better questions, avoid common mistakes, and make informed
      decisions about next steps.
    </p>

    <h3 className={classes.title}>Education</h3>
    <ul style={{ listStyleType: "none", padding: 0, color: "#333", margin: "10px 0 0" }}>
      <li style={{ marginBottom: 10 }}>
        <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
        <strong>Massachusetts Institute of Technology (2025):</strong> Post-Grad Certificate in Full Stack Development and AI Development
      </li>
      <li style={{ marginBottom: 10 }}>
        <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
        <strong>Western State University College of Law (2006):</strong> J.D. (Juris Doctor)
      </li>
      <li>
        <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
        <strong>Ohio University (2003):</strong> Bachelor of Arts
      </li>
    </ul>

    <h3 className={classes.title} style={{ marginTop: 24 }}>Admissions and Professional Memberships</h3>
    <ul style={{ listStyleType: "none", padding: 0, color: "#333", margin: "10px 0 0" }}>
      <li style={{ marginBottom: 10 }}>
        <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
        <strong>Admitted:</strong> State Bar of Arizona; United States District Court for the District of Arizona; United States Supreme Court
      </li>
      <li style={{ marginBottom: 10 }}>
        <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
        <strong>Bankruptcy memberships:</strong> National Association of Consumer Bankruptcy Attorneys (NACBA); State Bar of Arizona Bankruptcy Law Section;
        Maricopa County Bar Association Bankruptcy Law Section; Federal Bar Association Bankruptcy Section
      </li>
      <li>
        <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
        <strong>Public service:</strong> Former Bar Counsel, State Bar of Arizona (lawyer regulation and litigation); Court-appointed arbitrator, Arizona Superior Court
      </li>
    </ul>

    <div style={{ textAlign: "center", margin: "24px 0 8px" }}>
      <Button color="primary" size="lg" href="/consultation-request">
        Request a Free Consultation
      </Button>
    </div>

  
  </GridItem>
</GridContainer>

          



</GridItem>
        </GridContainer>
      </div>
    </>
  );
}