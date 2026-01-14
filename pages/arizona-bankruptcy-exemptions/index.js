/* eslint-disable */
import React from "react";
//import dynamic from "next/dynamic";
import PerfPageLayout from "/components/PerfPageLayout";
import Button from "/components/CustomButtons/Button.js";
import LcpImagePreload from "/components/LcpImagePreload";
import JsonLd from "/components/JsonLd";
import AzBkExemptions from "../../content/AzBankruptcyExemptions.js";
import AzAreas from "/components/AzAreas/AzAreas.js";

const HEADER_HEIGHT = 52;

const SITE_URL = "https://www.phoenixazbankruptcyattorney.com";
const PAGE_URL = "https://www.phoenixazbankruptcyattorney.com/arizona-bankruptcy-exemptions";

const PRIMARY_IMAGE_ID = `${PAGE_URL}#hero-image`;

const HERO_WEBP = "/img/bankruptcy-technical-topic.webp";
const HERO_JPG = "/img/bankruptcy-technical-topic.jpg";

const PUBLISHED_ISO = "2026-01-10T00:00:00-07:00";
const MODIFIED_ISO = "2026-01-10T00:00:00-07:00";

const OPT_OUT_WEBP = "/img/arizona-opt-out-federal-bankruptcy-exemptions-arizona-state-flag.webp";
const OPT_OUT_ID = `${PAGE_URL}#img-arizona-opt-out-federal-exemptions`;
const OPT_OUT_ALT =
  "Bold headline text reading “Arizona opts out of federal bankruptcy exemptions” over the Arizona state flag background, illustrating that Arizona residents generally use state bankruptcy exemptions instead of the federal exemption list.";

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
      "name": "Arizona Bankruptcy Exemptions — Hero",
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
      "@id": OPT_OUT_ID,
      "name": "Arizona Opt-Out of Federal Bankruptcy Exemptions",
      "description": OPT_OUT_ALT,
      "caption": "Arizona opts out of the federal bankruptcy exemption list.",
      "inLanguage": "en-US",
      "contentUrl": `${SITE_URL}${OPT_OUT_WEBP}`,
      "thumbnailUrl": `${SITE_URL}${OPT_OUT_WEBP}`,
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
      "name": "How long does a chapter 13 plan last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Plans are typically three to five years, and the required length often depends on income compared to the applicable median.",
      },
    },
    {
      "@type": "Question",
      "name": "Can chapter 13 stop foreclosure in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "chapter 13 can stop foreclosure proceedings and may allow you to cure delinquent mortgage payments over time, as long as you keep up with the payments that come due during the plan.",
      },
    },
    {
      "@type": "Question",
      "name": "Does a garnishment stop during a chapter 13 Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "In many cases, yes. Once a chapter 13 case is filed, the automatic stay generally stops most collection activity, including wage garnishments and bank garnishments. Exceptions exist and timing matters, so notify your attorney promptly if a garnishment is already in process. Some obligations, such as certain support-related collections, can follow different rules.",
      },
    },
    {
      "@type": "Question",
      "name": "Do I need a minimum amount of debt to file?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "There’s no minimum debt requirement, but chapter 13 is usually most helpful when you need a court-backed structure to catch up on arrears, manage multiple debts, or protect assets while you repay over time.",
      },
    },
    {
      "@type": "Question",
      "name": "Where can I read the official basics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The U.S. Courts publish an overview of chapter 13 basics on their website (search: “U.S. Courts Chapter 13 Bankruptcy Basics”).",
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
    { "@type": "ListItem", "position": 2, "name": "Arizona Bankruptcy Exemptions", "item": PAGE_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  "url": PAGE_URL,
  "name": "Arizona Bankruptcy Exemptions | Yontz Law, PLLC",
  "description":
    "Arizona bankruptcy exemptions explained, including opt-out rules and how exemptions can protect property. Request a free consultation with Yontz Law, PLLC.",
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
  "headline": "Arizona Bankruptcy Exemptions | Yontz Law, PLLC",
  "name": "Arizona Bankruptcy Exemptions | Yontz Law, PLLC",
  "description":
    "A practical guide to Arizona bankruptcy exemptions, including the opt-out rule and how exemptions can protect assets in chapter 7 and chapter 13.",
  "inLanguage": "en-US",
  "author": { "@id": `${SITE_URL}/about-us#casey-yontz` },
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "image": [{ "@id": PRIMARY_IMAGE_ID }],
  "datePublished": PUBLISHED_ISO,
  "dateModified": MODIFIED_ISO,
  "isAccessibleForFree": true,
};



export default function Chp13AZ() {
  return (
    <PerfPageLayout
      title="Arizona Bankruptcy Exemptions | Yontz Law, PLLC"
      description="Arizona bankruptcy exemptions explained, including opt-out rules and how exemptions protect property. Request a free consultation."
      canonical={PAGE_URL}
      hero={{
        srcWebp: HERO_WEBP,
        srcJpg: HERO_JPG,
        width: 900,
        height: 600,
        alt:
          "Wide hero image introducing Arizona bankruptcy exemptions, branded for Arizona Bankruptcy Lawyers at Yontz Law, PLLC.",
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

      <JsonLd id="arizona-bankruptcy-exemptions-image-graph" data={imageSchemas} />
      <JsonLd id="arizona-bankruptcy-exemptions-org" data={orgSchema} />
      <JsonLd id="arizona-bankruptcy-exemptions-website" data={websiteSchema} />
      <JsonLd id="arizona-bankruptcy-exemptions-author" data={personSchema} />
      <JsonLd id="arizona-bankruptcy-exemptions-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="arizona-bankruptcy-exemptions-webpage" data={webPageSchema} />
      <JsonLd id="arizona-bankruptcy-exemptions-article" data={articleSchema} />
      <JsonLd id="arizona-bankruptcy-exemptions-faq" data={faqSchema} />

      <AzBkExemptions />
      <AzAreas />
    </PerfPageLayout>
  );
}
