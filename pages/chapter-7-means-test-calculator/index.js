/* eslint-disable */
import React from "react";
import LcpImagePreload from "components/LcpImagePreload";
import JsonLd from "components/JsonLd";
import PerfPageLayout from "components/PerfPageLayout";
import MeansTestCalculatorPageContent from "../../content/MeansTestCalculatorPageContent.js";
import AzAreas from "/components/AzAreas/AzAreas.js";
import Button from "components/CustomButtons/Button.js";

const SITE_URL = "https://www.phoenixazbankruptcyattorney.com";
const PAGE_URL = "https://www.phoenixazbankruptcyattorney.com/chapter-7-means-test-calculator";

const PRIMARY_IMAGE_ID = `${PAGE_URL}#hero-image`;

const HERO_WEBP = "/img/bankruptcy-technical-topic.webp";
const HERO_JPG = "/img/bankruptcy-technical-topic.jpg";
const PUBLISHED_ISO = "2026-04-23T00:00:00-07:00";
const MODIFIED_ISO = "2026-04-23T00:00:00-07:00";

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
      "name": "Chapter 7 Means Test Calculator — Hero",
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
  "@id": `${SITE_URL}/about-us#casey-yontz`,
  "name": "Casey Yontz",
  "jobTitle": "Bankruptcy Attorney",
  "description": "Attorney with 18+ years of bankruptcy experience.",
  "worksFor": { "@id": `${SITE_URL}/#organization` },
  "url": `${SITE_URL}/about-us#casey-yontz`,
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Chapter 7 Means Test Calculator", "item": PAGE_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  "url": PAGE_URL,
  "name": "Chapter 7 Means Test Calculator | Yontz Law, PLLC",
  "description":
    "Estimate whether you may qualify for chapter 7 bankruptcy using our means test calculator. Simple, fast, and designed to give you a clear starting point.",
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
  "headline": "Chapter 7 Means Test Calculator | Yontz Law, PLLC",
  "name": "Chapter 7 Means Test Calculator | Yontz Law, PLLC",
  "description":
    "Estimate whether you may qualify for chapter 7 bankruptcy using our means test calculator. Simple, fast, and designed to give you a clear starting point.",
  "inLanguage": "en-US",
  "author": { "@id": `${SITE_URL}/about-us#casey-yontz` },
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "datePublished": PUBLISHED_ISO,
  "dateModified": MODIFIED_ISO,
  "isAccessibleForFree": true,
};


/* ── Page component ─────────────────────────── */
export default function MeansTestCalculatorPage() {
  return (
    <PerfPageLayout
      title="Chapter 7 Means Test Calculator | Yontz Law, PLLC"
      description="Estimate whether you may qualify for chapter 7 bankruptcy using our means test calculator. Simple, fast, and designed to give you a clear starting point."
      canonical={PAGE_URL}
      hero={{
        srcWebp: HERO_WEBP,
        srcJpg: HERO_JPG,
        width: 900,
        height: 600,
        alt: "Wide hero image introducing the Chapter 7 means test calculator, branded for Arizona Bankruptcy Lawyers at Yontz Law, PLLC.",
        priority: true,
        cta: <HeroCtaWithLogo />,
      }}
    >
  <LcpImagePreload
  src={HERO_WEBP || HERO_JPG}
  sizes="100vw"
  />

      {/* ----------  Structured data  ---------- */}
      <JsonLd id="chapter-7-means-test-calculator-arizona-image-graph" data={imageSchemas} />
      <JsonLd id="chapter-7-means-test-calculator-arizona-org" data={orgSchema} />
      <JsonLd id="chapter-7-means-test-calculator-arizona-website" data={websiteSchema} />
      <JsonLd id="chapter-7-means-test-calculator-arizona-author" data={personSchema} />
      <JsonLd id="chapter-7-means-test-calculator-arizona-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="chapter-7-means-test-calculator-arizona-webpage" data={webPageSchema} />
      <JsonLd id="chapter-7-means-test-calculator-arizona-article" data={articleSchema} />

      {/* ----------  Page content  ---------- */}
      <MeansTestCalculatorPageContent />
      <AzAreas />
    </PerfPageLayout>
  );
}