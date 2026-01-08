/* eslint-disable */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import dynamic from "next/dynamic";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Link from "next/link";
import sectionTextStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js";
//import NextImage from "next/image";
//import PageTopicSelector from "/components/page-topic-selector/PageTopicSelector.js";
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


          <h1 className={classes.title}>Contact Us</h1>

<p>
  If you’re dealing with debt stress, wage garnishments, lawsuits, or nonstop creditor calls, you don’t have to figure this out alone.
  The simplest way to get started is to send us a quick consultation request. We’ll review what you share and follow up with next steps.
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
  <p style={{ margin: "0 0 10px" }}>
    <strong>Fastest Option:</strong> Request a Free Consultation
  </p>

  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>

  <p style={{ margin: "10px 0 0", fontSize: "0.95rem", color: "#555" }}>
    Prefer to talk first? You can call us below, but the consultation form helps us respond with more accurate answers.
  </p>
</div>

<h2 className={classes.title}>Contact Information</h2>

<div
  style={{
    margin: "1rem 0 1.5rem",
    padding: "14px 16px",
    border: "1px solid #e6e6e6",
    borderRadius: 12,
    background: "#fafafa",
  }}
>
    <p style={{ margin: "0 0 10px" }}>
      <strong>Phone:</strong>{" "}
      <a
        href="tel:+14808860339"
        style={{ color: "#0656d3", textDecoration: "underline" }}
      >
        (480) 886-0339
      </a>
    </p>

    <p style={{ margin: "0 0 10px" }}>
      <strong>Address:</strong> 4425 E Agave Rd Suite 106, Phoenix, AZ 85044
    </p>

    <p style={{ margin: "0 0 10px" }}>
      <strong>Hours:</strong> Open 9 AM · Closes 5 PM
    </p>

    <p style={{ margin: 0 }}>
      <strong>Appointments:</strong>{" "}
      <a
        href="/consultation-request"
        style={{ color: "#0656d3", textDecoration: "underline" }}
      >
        phoenixazbankruptcyattorney.com
      </a>
    </p>
  </div>


<h2 className={classes.title}>What to Include in Your Message</h2>

<p>
  You don’t need perfect paperwork to reach out. If you can share a few details, we can usually give you clearer answers faster:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>What’s happening right now:</strong> wage garnishment, lawsuit, collections, repossession risk, foreclosure concerns, etc.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Income snapshot:</strong> a quick estimate of household monthly income (or recent pay stubs if available).
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Debt overview:</strong> credit cards, medical bills, loans, tax debts, support obligations, or any judgment amounts.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Major assets:</strong> home equity estimate, vehicle(s), retirement accounts, or anything you’re worried about losing.
  </li>
</ul>

<h2 className={classes.title}>Where We Serve</h2>

<p>
  We’re based in Phoenix and help clients throughout the Phoenix metro area and across Arizona. If meeting in person is helpful, we can discuss what makes sense for your situation. Virtual consultations are also available.
</p>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>

<p style={{ fontSize: "0.95rem", marginTop: "1rem" }}>
  <em>For informational purposes only, not legal advice. Always seek advice from a qualified bankruptcy attorney.</em>
</p>



</GridItem>
        </GridContainer>
      </div>
    </>
  );
}