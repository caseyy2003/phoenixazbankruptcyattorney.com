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



          <h1 className={classes.title}>Terms and Conditions</h1>

<p style={{ marginTop: 0, color: "#555" }}>
  <strong>Last Updated:</strong> January 2026
</p>

<p>
  Welcome to this website (the “Site”). The Site is owned and operated by <strong>Yontz Law, PLLC</strong> (“Yontz Law,” “we,” “us,” or “our”).
  By accessing or using the Site, you agree to these Terms and Conditions (the “Terms”). If you do not agree, do not use the Site.
</p>

<h2 className={classes.title}>1) Informational Purposes Only — No Legal Advice</h2>

<p>
  The Site provides general information about bankruptcy and related topics for educational purposes only.
  <strong> Nothing on this Site is legal advice</strong>, and the information is not a substitute for advice from a qualified bankruptcy attorney
  who can evaluate your specific facts.
</p>

<p>
  While we work hard to keep information accurate and up to date, laws and court practices change and mistakes can occur.
  <strong> You agree that your use of (and reliance on) any information on this Site is at your own risk</strong>.
  You should verify any information before acting on it, and you should only take legal action after consulting a qualified bankruptcy lawyer.
</p>

<h2 className={classes.title}>2) No Attorney–Client Relationship</h2>

<p>
  Using this Site, reading content, or sending a message through the Site <strong>does not</strong> create an attorney–client relationship with Yontz Law.
  An attorney–client relationship is formed only if and when <strong>(1)</strong> we agree to represent you and <strong>(2)</strong> a written fee agreement is signed
  by both you and Yontz Law, PLLC.
</p>

<h2 className={classes.title}>3) Consultation Requests and Lead Forms</h2>

<p>
  The Site may allow you to submit a consultation request or lead form (a “Consultation Request”). Submitting a Consultation Request:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Does not obligate us to accept your case.</strong> We may decline representation for any reason permitted by law and professional rules.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Does not guarantee a response.</strong> We may not respond to every Consultation Request, and we may respond by phone, email, text, or other reasonable means.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Should not include highly sensitive information.</strong> Do not send passwords, account numbers, or unusually sensitive personal details through the form.
  </li>
</ul>

<h3 className={classes.title}>Authorization to Share Your Consultation Request</h3>

<p>
  If we choose not to contact you, you agree that we may, at our discretion, <strong>share your Consultation Request</strong> (including the information you provide and
  your contact details) with one or more <strong>independent, qualified bankruptcy attorneys</strong> or law firms in our professional network so they may contact you.
  Reasons we may do this include (without limitation) our current workload, conflicts, geography, case complexity, or a belief that another attorney is better suited
  to assist you.
</p>

<p>
  <strong>By submitting a Consultation Request, you provide informed consent</strong> for Yontz Law to share your submitted information for the purpose described above,
  and you agree that those attorneys/law firms may contact you using the information you provide.
</p>

<p>
  Any attorney or law firm that contacts you is an <strong>independent third party</strong>. They are not our employees or agents, and we are not responsible for their advice,
  fees, actions, outcomes, or communications. Any attorney–client relationship you form with another lawyer is separate from Yontz Law and will be governed by that lawyer’s
  own engagement agreement and policies.
</p>

<h3 className={classes.title}>Compensation and Marketing Arrangements</h3>

<p>
  You understand that we may be compensated for marketing services or referrals in some situations. Any such arrangements are intended to comply with applicable professional
  conduct rules and do not affect a lawyer’s independent professional judgment. We do not promise outcomes, and we do not guarantee that you will be matched with an attorney.
</p>

<h2 className={classes.title}>4) Communications and Consent to Contact</h2>

<p>
  By providing your contact information, you authorize Yontz Law (and, if applicable, attorneys/law firms we share your information with as described above) to contact you
  about your inquiry using reasonable methods, including phone calls, emails, and text messages. Message and data rates may apply.
</p>

<h2 className={classes.title}>5) Intellectual Property</h2>

<p>
  Unless otherwise noted, the Site content (text, graphics, logos, images, and layout) is owned by Yontz Law, PLLC or used with permission and is protected by applicable
  intellectual property laws. You may view and print content for personal, non-commercial use only. You may not reproduce, distribute, modify, or republish Site content without
  our prior written consent.
</p>
<h2 className={classes.title}>6) Privacy Policy</h2>

<p>
  By using this website, you acknowledge that you have read and agree to our{" "}
  <Link
    href="/privacy-policy"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    Privacy Policy
  </Link>
  .
</p>

<h2 className={classes.title}>7) Third-Party Links</h2>

<p>
  The Site may contain links to third-party websites for convenience. We do not control third-party sites and are not responsible for their content, privacy practices, or terms.
  Access third-party sites at your own risk.
</p>

<h2 className={classes.title}>8) Disclaimers; No Warranties</h2>

<p>
  The Site is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, Yontz Law disclaims all warranties of any kind, whether express or implied,
  including (without limitation) accuracy, completeness, merchantability, fitness for a particular purpose, and non-infringement.
</p>

<h2 className={classes.title}>9) Limitation of Liability</h2>

<p>
  To the fullest extent permitted by law, Yontz Law will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your
  use of (or inability to use) the Site, including reliance on Site content. In all events, Yontz Law’s total liability for any claim relating to the Site will not exceed $100.
</p>

<h2 className={classes.title}>10) Governing Law; Venue</h2>

<p>
  These Terms are governed by the laws of the State of Arizona, without regard to conflict-of-laws principles. Any dispute arising out of or relating to these Terms or the Site
  will be brought exclusively in state or federal courts located in Arizona, and you consent to personal jurisdiction and venue in Arizona.
</p>

<h2 className={classes.title}>11) Changes to These Terms</h2>

<p>
  We may update these Terms from time to time. Changes are effective when posted on this page. Your continued use of the Site after changes are posted constitutes acceptance
  of the updated Terms.
</p>

<h2 className={classes.title}>12) Contact</h2>

<p>
  If you have questions about these Terms, you may contact:
</p>

<p style={{ marginBottom: 0 }}>
  <strong>Yontz Law, PLLC</strong>
</p>
<p style={{ marginTop: 6 }}>
  4425 E Agave Rd Suite 106, Phoenix, AZ 85044
  <br />
  Phone: (480) 886-0339
</p>


</GridItem>
        </GridContainer>
      </div>
    </>
  );
}