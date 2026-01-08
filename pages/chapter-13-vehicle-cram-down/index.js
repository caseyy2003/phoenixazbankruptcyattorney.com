/* eslint-disable */
import React from "react";
//import dynamic from "next/dynamic";
import PerfPageLayout from "/components/PerfPageLayout";
import Button from "/components/CustomButtons/Button.js";
import LcpImagePreload from "/components/LcpImagePreload";
import JsonLd from "/components/JsonLd";
import Chapter13Cramdown from "../../content/Chapter13Cramdown.js";
import AzAreas from "/components/AzAreas/AzAreas.js";

const HEADER_HEIGHT = 52;

const SITE_URL = "https://www.phoenixazbankruptcyattorney.com";
const PAGE_URL = "https://www.phoenixazbankruptcyattorney.com/chapter-13-vehicle-cram-down";

const PRIMARY_IMAGE_ID = `${PAGE_URL}#hero-image`;

const HERO_WEBP = "/img/bankruptcy-technical-topic.webp";
const HERO_JPG = "/img/bankruptcy-technical-topic.jpg";

const PUBLISHED_ISO = "2026-01-10T00:00:00-07:00";
const MODIFIED_ISO = "2026-01-10T00:00:00-07:00";

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
      "name": "Chapter 13 Vehicle Cram Down — Hero",
      "description":
        "Wide hero image for Arizona Bankruptcy Lawyers, branded for Yontz Law, PLLC in Phoenix, Arizona.",
      "inLanguage": "en-US",
      "contentUrl": `${SITE_URL}${HERO_JPG}`,
      "thumbnailUrl": `${SITE_URL}${HERO_JPG}`,
      "representativeOfPage": true,
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
      "name": "What is a chapter 13 vehicle cram down in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A vehicle cram down is a chapter 13 strategy that can restructure an auto loan when you owe more than the vehicle is worth. In a qualifying case, the loan may be treated as two parts: a secured portion based on the vehicle’s current value and an unsecured portion for the upside-down balance above that value. The unsecured portion is treated with other unsecured debts in the plan and may be paid only partially, depending on your budget and plan requirements.",
      },
    },
    {
      "@type": "Question",
      "name": "Who qualifies for a chapter 13 car cram down in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Eligibility depends on several factors, but the most common rule is the 910-day rule. In many cases, you can only cram down a vehicle loan if the car was purchased more than 910 days (about 2.5 years) before you file chapter 13. Your budget must also support a realistic chapter 13 plan, and the strategy usually makes the most sense when you are significantly upside-down on the loan and you actually want to keep the vehicle.",
      },
    },
    {
      "@type": "Question",
      "name": "Does a vehicle cram down reduce the interest rate too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Often, yes. In many chapter 13 cases, the interest rate applied to the secured portion may be adjusted to a court-approved rate rather than the contract rate. The exact rate depends on legal standards and the facts of your case. For many people, the interest-rate change is a major part of why the cram down can make the monthly structure more workable.",
      },
    },
    {
      "@type": "Question",
      "name": "How is the vehicle value determined for a cram down?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The key number is the vehicle’s current value, usually supported by evidence. Valuation often considers widely used market guides, the vehicle’s condition, mileage, options, and prior damage history. Lenders sometimes dispute value, so internet math can be misleading—two vehicles of the same model year can have very different values based on real-world condition and mileage.",
      },
    },
    {
      "@type": "Question",
      "name": "When is a chapter 13 vehicle cram down not a good idea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A cram down can be powerful, but it’s not always the best tool. It may not be available if you purchased the vehicle within the 910-day window. It can also be a poor fit if the car is unreliable or likely to need major repairs, if your budget can’t support a realistic chapter 13 plan payment, or if other priorities (like mortgage arrears, taxes, or support obligations) will drive the plan structure more than the vehicle loan.",
      },
    },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
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
  "@id": `${SITE_URL}/#website`,
  "url": SITE_URL,
  "name": "Arizona Bankruptcy Lawyers | Yontz Law, PLLC",
  "publisher": { "@id": `${SITE_URL}/#organization` },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/about#casey-yontz`,
  "name": "Casey Yontz",
  "jobTitle": "Bankruptcy Attorney",
  "description": "Attorney with 18+ years of bankruptcy experience.",
  "worksFor": { "@id": `${SITE_URL}/#organization` },
  "url": `${SITE_URL}/about#casey-yontz`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Chapter 13 Vehicle Cram Down", "item": PAGE_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  "url": PAGE_URL,
  "name": "Chapter 13 Vehicle Cram Down | Arizona Guide",
  "description":
    "Learn how a chapter 13 vehicle cram down works in Arizona, including the 910-day rule, valuation, and interest rate changes.",
  "inLanguage": "en-US",
  "breadcrumb": { "@id": `${PAGE_URL}#breadcrumb` },
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "primaryImageOfPage": { "@id": PRIMARY_IMAGE_ID },
  "datePublished": PUBLISHED_ISO,
  "dateModified": MODIFIED_ISO,
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  "mainEntityOfPage": { "@id": `${PAGE_URL}#webpage` },
  "headline": "Chapter 13 Vehicle Cram Down | Arizona Guide",
  "name": "Chapter 13 Vehicle Cram Down | Arizona Guide",
  "description":
    "A practical overview of Arizona chapter 13 vehicle cram downs, including eligibility rules and how the secured balance is determined.",
  "inLanguage": "en-US",
  "author": { "@id": `${SITE_URL}/about#casey-yontz` },
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "image": [{ "@id": PRIMARY_IMAGE_ID }],
  "datePublished": PUBLISHED_ISO,
  "dateModified": MODIFIED_ISO,
  "isAccessibleForFree": true,
};

export default function Chap13CramdownAz() {
  return (
    <PerfPageLayout
      title="Chapter 13 Vehicle Cram Down | Arizona Guide"
      description="Chapter 13 vehicle cram down in Arizona: 910-day rule, valuation, and interest rate changes. Request a free consultation."
      canonical={PAGE_URL}
      hero={{
        srcWebp: HERO_WEBP,
        srcJpg: HERO_JPG,
        width: 900,
        height: 600,
        alt:
          "Wide hero image introducing chapter 13 vehicle cram down information for Arizona, branded for Arizona Bankruptcy Lawyers at Yontz Law, PLLC.",
        priority: true,
        cta: <HeroCtaWithLogo />,
      }}
    >
      <LcpImagePreload
        srcWebp={HERO_WEBP}
        srcJpg={HERO_JPG}
        sizes="(max-width: 768px) 100vw, 1000px"
        preloadWidth={828}
      />

      <JsonLd id="chapter-13-vehicle-cram-down-image-graph" data={imageSchemas} />
      <JsonLd id="chapter-13-vehicle-cram-down-org" data={orgSchema} />
      <JsonLd id="chapter-13-vehicle-cram-down-website" data={websiteSchema} />
      <JsonLd id="chapter-13-vehicle-cram-down-author" data={personSchema} />
      <JsonLd id="chapter-13-vehicle-cram-down-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="chapter-13-vehicle-cram-down-webpage" data={webPageSchema} />
      <JsonLd id="chapter-13-vehicle-cram-down-article" data={articleSchema} />
      <JsonLd id="chapter-13-cramdown-az-faq" data={faqSchema} />

      <Chapter13Cramdown />
      <AzAreas />
    </PerfPageLayout>
  );
}
