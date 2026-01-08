/* eslint-disable */
import React from "react";
import dynamic from "next/dynamic";
import PerfPageLayout from "/components/PerfPageLayout";
import Button from "/components/CustomButtons/Button.js";
import LcpImagePreload from "/components/LcpImagePreload";
import JsonLd from "/components/JsonLd";
import Chapter7Az from "../../content/Chapter7Az.js";
import AzAreas from "/components/AzAreas/AzAreas.js";

const HEADER_HEIGHT = 52;

const SITE_URL = "https://www.phoenixazbankruptcyattorney.com";
const PAGE_URL = "https://www.phoenixazbankruptcyattorney.com/pages/chapter-7-bankruptcy-arizona";

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
      "name": "Chapter 7 Bankruptcy in Arizona — Hero",
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
      "name": "What debts can chapter 7 bankruptcy discharge in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "chapter 7 commonly discharges many unsecured debts, such as credit card balances, medical bills, personal loans, and many collection accounts. Some categories often have special rules or may not be discharged in a typical case—so it’s important to identify exactly what debts you have (including any lawsuits, judgments, support obligations, or recent tax issues) before assuming everything will be wiped out. A review of your creditor list and any court paperwork helps set accurate expectations.",
      },
    },
    {
      "@type": "Question",
      "name": "Will I lose my house or car if I file chapter 7 bankruptcy in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Not necessarily. In most consumer chapter 7 cases, people keep their exempt property, and many cases are no-asset cases. What you can keep usually depends on Arizona exemptions and how much equity you have in the home or vehicle. Payment status can matter too—being current versus behind can change the strategy. If you’re worried about a home or car, the key is to evaluate equity, exemptions, and timing before you file.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I qualify for chapter 7 bankruptcy in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Most people qualify in one of two ways: their household’s average gross income over the last six full calendar months is below Arizona’s median for their household size, or they’re above the median but still pass the means test after allowed deductions. Because the current monthly income calculation uses a six-month lookback, recent changes in overtime, job hours, or self-employment income can affect the result. If you’re close to the line, a careful means test review can prevent mistakes.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does a chapter 7 bankruptcy case usually take in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Many chapter 7 cases follow a predictable timeline: complete the required pre-filing credit counseling course, file the petition and schedules, attend the 341 meeting with the trustee, complete the post-filing debtor education course, and then receive a discharge in eligible cases. While timelines vary, many cases reach discharge a few months after filing if there are no unusual issues or objections. The fastest cases are usually the ones with complete, accurate paperwork and good documentation.",
      },
    },
    {
      "@type": "Question",
      "name": "What should I avoid doing before filing chapter 7 bankruptcy in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The most common problems come from last-minute decisions that create extra questions later—like using credit right before filing (especially cash advances), transferring property to family for safekeeping, repaying relatives right before filing, or withdrawing retirement funds without understanding the tax and bankruptcy consequences. If bankruptcy is on the table, it’s usually smart to pause major financial moves and get advice on what to do (and not do) before you file.",
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
    { "@type": "ListItem", "position": 2, "name": "Chapter 7 Bankruptcy in Arizona", "item": PAGE_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  "url": PAGE_URL,
  "name": "Chapter 7 Bankruptcy in Arizona | Yontz Law, PLLC",
  "description":
    "Chapter 7 bankruptcy in Arizona explained: eligibility, process, debts, and what you can protect. Request a free consultation with Yontz Law, PLLC.",
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
  "headline": "Chapter 7 Bankruptcy in Arizona | Yontz Law, PLLC",
  "name": "Chapter 7 Bankruptcy in Arizona | Yontz Law, PLLC",
  "description":
    "A practical guide to chapter 7 bankruptcy in Arizona, including qualification, timelines, and what happens to your property.",
  "inLanguage": "en-US",
  "author": { "@id": `${SITE_URL}/about#casey-yontz` },
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "image": [{ "@id": PRIMARY_IMAGE_ID }],
  "datePublished": PUBLISHED_ISO,
  "dateModified": MODIFIED_ISO,
  "isAccessibleForFree": true,
};

export default function Chapter7BkAz() {
  return (
    <PerfPageLayout
      title="Chapter 7 Bankruptcy in Arizona | Yontz Law, PLLC"
      description="Chapter 7 bankruptcy in Arizona: eligibility, process, debts, and exemptions. Request a free consultation with Yontz Law, PLLC."
      canonical={PAGE_URL}
      hero={{
        srcWebp: HERO_WEBP,
        srcJpg: HERO_JPG,
        width: 900,
        height: 600,
        alt:
          "Wide hero image introducing Chapter 7 bankruptcy in Arizona, branded for Arizona Bankruptcy Lawyers at Yontz Law, PLLC.",
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

      <JsonLd id="chapter-7-bankruptcy-arizona-image-graph" data={imageSchemas} />
      <JsonLd id="chapter-7-bankruptcy-arizona-org" data={orgSchema} />
      <JsonLd id="chapter-7-bankruptcy-arizona-website" data={websiteSchema} />
      <JsonLd id="chapter-7-bankruptcy-arizona-author" data={personSchema} />
      <JsonLd id="chapter-7-bankruptcy-arizona-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="chapter-7-bankruptcy-arizona-webpage" data={webPageSchema} />
      <JsonLd id="chapter-7-bankruptcy-arizona-article" data={articleSchema} />
      <JsonLd id="chapter-7-bankruptcy-arizona-faq" data={faqSchema} />

      <Chapter7Az />
      <AzAreas />
    </PerfPageLayout>
  );
}
