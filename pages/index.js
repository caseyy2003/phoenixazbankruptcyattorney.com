/* eslint-disable */
import React from "react";
import PerfPageLayout from "/components/PerfPageLayout";
import Button from "/components/CustomButtons/Button.js";
import JsonLd from "/components/JsonLd";

import HomePage from "../content/HomePage.js";
import AzAreas from "/components/AzAreas/AzAreas.js";



const SITE_URL = "https://www.phoenixazbankruptcyattorney.com";
const PAGE_URL = "https://www.phoenixazbankruptcyattorney.com/";

const PRIMARY_IMAGE_ID = `${PAGE_URL}#hero-image`;

const HERO_WEBP = "/img/phoenix-arizona-desert-skyline-hero-background.webp";
const HERO_JPG = "/img/phoenix-arizona-desert-skyline-hero-background.jpg";

const PUBLISHED_ISO = "2017-05-22T00:00:00-07:00";
const MODIFIED_ISO = "2026-01-10T00:00:00-07:00";

const DOC_CHECKLIST_WEBP = "/img/phoenix-bankruptcy-lawyer-consultation-document-checklist.webp";
const DOC_CHECKLIST_ID = `${PAGE_URL}#img-phoenix-consultation-document-checklist`;
const DOC_CHECKLIST_ALT =
  "Checklist graphic showing documents to gather before meeting with a Phoenix bankruptcy lawyer, including recent pay stubs, tax returns, bank statements, car loan or mortgage statements, and recent creditor notices or lawsuit papers.";

const YontzLawLogo = ({ width = 280 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={(width * 240) / 960}
    viewBox="0 0 960 240"
    role="img"
    aria-label="Yontz Law, PLLC"
  >
    <g transform="translate(80,120)">
      <circle r="76" stroke="#caa24a" strokeWidth="10" fill="none" />
      <circle r="66" stroke="rgba(255,255,255,0.25)" strokeWidth="2" fill="none" />
      <circle
        r="54"
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="2"
      />
      <text
        x="0"
        y="18"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        fontSize="54"
        fontWeight="900"
        fill="#ffffff"
      >
        YL
      </text>
      <circle cx="56" cy="-52" r="8" fill="#caa24a" />
    </g>

    <g transform="translate(190,92)">
      <text
        x="0"
        y="0"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        fontSize="64"
        fontWeight="800"
        fill="#ffffff"
      >
        Yontz Law
      </text>
      <text
        x="2"
        y="50"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        fontSize="22"
        letterSpacing="0.18em"
        fill="#e5e7eb"
      >
        PLLC
      </text>
      <rect x="2" y="70" width="520" height="2" fill="rgba(255,255,255,0.22)" />
      <text
        x="2"
        y="106"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        fontSize="22"
        fill="#e5e7eb"
      >
        Arizona Bankruptcy Lawyers
      </text>
    </g>
  </svg>
);

const HeroCtaWithLogo = () => (
  <div
    style={{
      padding: "16px 18px",
      borderRadius: 14,
      background: "rgba(0,0,0,0.35)",
      backdropFilter: "blur(6px)",
      textAlign: "center",
    }}
  >
    <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
      <YontzLawLogo width={700} />
    </div>

    <Button color="primary" size="lg" href="/consultation-request" style={{ marginTop: 0 }}>
      <strong>Request a Free Bankruptcy Consult</strong>
    </Button>
  </div>
);

const imageSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageObject",
      "@id": PRIMARY_IMAGE_ID,
      "name": "Phoenix, AZ Bankruptcy Lawyer — Hero",
      "description":
        "Wide hero image for Arizona Bankruptcy Lawyers, branded for Yontz Law, PLLC in Phoenix, Arizona.",
      "inLanguage": "en-US",
      "contentUrl": `${SITE_URL}${HERO_JPG}`,
      "thumbnailUrl": `${SITE_URL}${HERO_JPG}`,
      "representativeOfPage": true,
      "license": `${SITE_URL}/terms-and-conditions`,
      "creator": { "@type": "Organization", "name": "Yontz Law, PLLC" },
    },
    {
      "@type": "ImageObject",
      "@id": DOC_CHECKLIST_ID,
      "name": "Phoenix Bankruptcy Consultation Document Checklist",
      "description": DOC_CHECKLIST_ALT,
      "caption": "Document checklist to prepare for a Phoenix bankruptcy consultation.",
      "inLanguage": "en-US",
      "contentUrl": `${SITE_URL}${DOC_CHECKLIST_WEBP}`,
      "thumbnailUrl": `${SITE_URL}${DOC_CHECKLIST_WEBP}`,
      "license": `${SITE_URL}/terms-and-conditions`,
      "creator": { "@type": "Organization", "name": "Yontz Law, PLLC" },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  "inLanguage": "en-US",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if bankruptcy is the right option in Phoenix, AZ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Bankruptcy can be a strong option when debt payments, lawsuits, garnishments, or repossession threats are no longer manageable—but it isn’t the right fit for everyone. The best way to tell is to look at your goals (protecting a paycheck, keeping a car or home, stopping collection pressure), your income, your assets, and the types of debts you have. A Phoenix bankruptcy consultation usually starts by reviewing a clear snapshot of your situation so you can compare bankruptcy to alternatives with realistic expectations.",
      },
    },
    {
      "@type": "Question",
      "name": "Will filing bankruptcy stop creditor calls, lawsuits, and wage garnishments in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "In most cases, filing triggers an automatic stay that can pause many collection actions, including ongoing lawsuits and wage garnishments. Some situations have exceptions or require quick attention (for example, certain family law matters or repeat filings), and creditors may still need proper notice. If you’re dealing with active garnishments or a pending lawsuit in Phoenix, timing matters—so it’s smart to get advice before deadlines or pay periods pass.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I keep my home or car if I file bankruptcy in Phoenix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Many people who file bankruptcy in Phoenix are trying to protect housing and reliable transportation. Whether you can keep a home or car depends on factors like Arizona bankruptcy exemptions, how much equity you have, whether you’re behind on payments, and which bankruptcy chapter you file. A consultation typically focuses on your current payment status, payoff amounts, and the protect-versus-catch-up strategy that best fits your goals.",
      },
    },
    {
      "@type": "Question",
      "name": "What documents should I gather for a Phoenix bankruptcy consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "You don’t need perfect paperwork, but a few items can make the conversation much more productive: recent pay stubs or income proof, a list of creditors or collection letters, any lawsuit or garnishment documents, and basic housing/vehicle payment details. If you have your most recent tax return, that can also help with planning. The goal is a reliable snapshot—so you can get clear answers without lots of back-and-forth.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does the bankruptcy process usually take in Phoenix, Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Timing varies by chapter and by how quickly documents are gathered, but many cases follow a predictable flow: pre-filing credit counseling, filing the petition, attending the 341 meeting with the trustee (often by phone or video), completing the post-filing debtor education course, and then receiving a discharge in eligible cases. Your exact timeline depends on your case complexity, the chapter you file under, and any issues that need extra review.",
      },
    },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  "name": "Yontz Law, PLLC",
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/logo.svg`,
    "contentUrl": `${SITE_URL}/logo.svg`,
    "width": 512,
    "height": 512,
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4425 E Agave Rd Suite 106",
    "addressLocality": "Phoenix",
    "addressRegion": "AZ",
    "postalCode": "85044",
    "addressCountry": "US",
  },
  "telephone": "+1-480-886-0339",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  "url": SITE_URL,
  "name": "Arizona Bankruptcy Lawyers | Yontz Law, PLLC",
  "publisher": { "@id": `${SITE_URL}#organization` },
  "inLanguage": "en-US",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/about#casey-yontz`,
  "name": "Casey Yontz",
  "jobTitle": "Bankruptcy Attorney",
  "worksFor": { "@id": `${SITE_URL}#organization` },
  "url": `${SITE_URL}/about`,
  "inLanguage": "en-US",
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}#legalservice`,
  "name": "Arizona Bankruptcy Lawyers | Yontz Law, PLLC",
  "url": SITE_URL,
  "telephone": "+1-480-886-0339",
  "image": [{ "@id": PRIMARY_IMAGE_ID }],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4425 E Agave Rd Suite 106",
    "addressLocality": "Phoenix",
    "addressRegion": "AZ",
    "postalCode": "85044",
    "addressCountry": "US",
  },
  "areaServed": [{ "@type": "City", "name": "Phoenix" }, { "@type": "State", "name": "Arizona" }],
  "parentOrganization": { "@id": `${SITE_URL}#organization` },
  "founder": { "@id": `${SITE_URL}/about#casey-yontz` },
  "inLanguage": "en-US",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": PAGE_URL }],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  "url": PAGE_URL,
  "name": "Phoenix, AZ Bankruptcy Lawyer | Yontz Law, PLLC",
  "description":
    "Trusted Phoenix bankruptcy lawyer at Yontz Law, PLLC. Get help with chapter 7 or chapter 13, stop garnishments, and request a free consultation.",
  "inLanguage": "en-US",
  "breadcrumb": { "@id": `${PAGE_URL}#breadcrumb` },
  "isPartOf": { "@id": `${SITE_URL}#website` },
  "publisher": { "@id": `${SITE_URL}#organization` },
  "primaryImageOfPage": { "@id": PRIMARY_IMAGE_ID },
  "datePublished": PUBLISHED_ISO,
  "dateModified": MODIFIED_ISO,
};

export default function PhoenixHome() {
  return (
    <PerfPageLayout
      title="Phoenix, AZ Bankruptcy Lawyer | Yontz Law, PLLC"
      description="Trusted Phoenix bankruptcy lawyer at Yontz Law, PLLC. Get help with chapter 7 or chapter 13, stop garnishments, and request a free consultation."
      canonical={PAGE_URL}
      hero={{
        srcWebp: HERO_WEBP,
        srcJpg: HERO_JPG,
        width: 900,
        height: 600,
        alt: "Wide hero image for Arizona Bankruptcy Lawyers branded for Yontz Law, PLLC in Phoenix, Arizona.",
        priority: true,
        sizes: "(max-width: 768px) 100vw, 1200px",
        quality: 60,
        cta: <HeroCtaWithLogo />,
      }}
      
    >
   

      <JsonLd id="phoenix-home-image-graph" data={imageSchemas} />
      <JsonLd id="phoenix-home-org" data={orgSchema} />
      <JsonLd id="phoenix-home-website" data={websiteSchema} />
      <JsonLd id="phoenix-home-author" data={personSchema} />
      <JsonLd id="phoenix-home-legalservice" data={legalServiceSchema} />
      <JsonLd id="phoenix-home-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="phoenix-home-webpage" data={webPageSchema} />
      <JsonLd id="phoenix-home-faq" data={faqSchema} />

      <HomePage />
      <AzAreas />
    </PerfPageLayout>
  );
}
