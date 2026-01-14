/* eslint-disable */
import React from "react";
import dynamic from "next/dynamic";
import PerfPageLayout from "/components/PerfPageLayout";
import Button from "/components/CustomButtons/Button.js";
import LcpImagePreload from "/components/LcpImagePreload";
import JsonLd from "/components/JsonLd";
import TucsonHomePage from "../../content/TucsonHomePage.js";
import AzAreas from "/components/AzAreas/AzAreas.js";

const HEADER_HEIGHT = 52;

const SITE_URL = "https://www.phoenixazbankruptcyattorney.com";
const PAGE_URL = "https://www.phoenixazbankruptcyattorney.com/tucson-az-bankruptcy-attorney";

const PRIMARY_IMAGE_ID = `${PAGE_URL}#hero-image`;

const HERO_WEBP = "/img/tucson-az-bankruptcy-lawyer-hero-saguaro-cactus-santa-catalina-mountains.webp";
const HERO_JPG = "/img/tucson-az-bankruptcy-lawyer-hero-saguaro-cactus-santa-catalina-mountains.jpg";

const PUBLISHED_ISO = "2026-01-10T00:00:00-07:00";
const MODIFIED_ISO = "2026-01-10T00:00:00-07:00";

const DOC_CHECKLIST_WEBP = "/img/tucson-bankruptcy-lawyer-consultation-document-checklist.webp";
const DOC_CHECKLIST_ID = `${PAGE_URL}#img-tucson-consultation-document-checklist`;
const DOC_CHECKLIST_ALT =
  "Checklist graphic showing documents to gather before meeting with a Tucson bankruptcy lawyer, including pay stubs from the past six months, tax returns from the past two years, bank account statements, car loan and mortgage statements, and recent creditor notices or lawsuit papers.";

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
      "name": "Tucson, AZ Bankruptcy Attorney — Hero",
      "description":
        "Wide hero background image of Tucson, Arizona with saguaro cacti in the foreground and the city skyline below the Santa Catalina Mountains at sunset, representing bankruptcy legal help for Tucson residents.",
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
      "name": "Tucson Bankruptcy Consultation Document Checklist",
      "description": DOC_CHECKLIST_ALT,
      "caption": "Document checklist to prepare for a Tucson bankruptcy consultation.",
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
      "name": "What does a Tucson bankruptcy consultation cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A consultation is designed to replace guesswork with a practical plan. We start with what’s driving the urgency (lawsuit, wage garnishment, repossession risk, nonstop creditor calls, or behind-on payments), then review your income pattern, debts, and assets at a high level. From there, we explain which option fits best—whether that’s chapter 7, chapter 13, or a non-bankruptcy alternative—and what to do first so you don’t accidentally create avoidable problems before filing.",
      },
    },
    {
      "@type": "Question",
      "name": "Can filing bankruptcy stop a wage garnishment or collection lawsuit in Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "In many cases, filing bankruptcy triggers an automatic stay that pauses most collection activity, including many wage garnishments and pending lawsuits. Timing matters if you have a court date, a garnishment start date, or a repossession threat, so it helps to gather any lawsuit papers, garnishment documents, and recent pay stubs early. Some situations have exceptions, so a quick review is the best way to understand what applies to your specific case.",
      },
    },
    {
      "@type": "Question",
      "name": "How do chapter 7 and chapter 13 differ for Tucson residents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The right chapter depends on your goals and your numbers—not a one-size-fits-all slogan. chapter 7 is often considered when someone wants relief from qualifying unsecured debt (like credit cards and medical bills) and the eligibility requirements are met. chapter 13 is a court-approved repayment plan (often 3–5 years) that can help people catch up on certain obligations and protect assets through a structured plan. The best fit depends on income, assets, debt type, and what you’re trying to protect.",
      },
    },
    {
      "@type": "Question",
      "name": "What are common Tucson bankruptcy pitfalls to avoid before filing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Most cases get complicated due to timing and paper trails, not because someone is doing bankruptcy wrong. Common pitfalls include using credit right before filing (especially cash advances), moving money or titles around within the family, ignoring a lawsuit deadline, and withdrawing retirement money without understanding the tax and bankruptcy consequences. If bankruptcy is on the table, it’s usually smart to pause major financial moves and get guidance before making quick decisions.",
      },
    },
    {
      "@type": "Question",
      "name": "What documents should I bring to a Tucson bankruptcy attorney consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "You don’t need a perfect binder, but a few basics help you get clear answers faster: recent pay stubs or income proof, a simple list of creditors/collections, any lawsuit or garnishment paperwork, and housing and vehicle payment details (including whether you’re behind). If you have tax returns and bank statements, those can also help with planning and timing. If you’re facing a deadline, mention it—deadlines can change the best next step.",
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
  "url": `${SITE_URL}/about#casey-yontz`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Tucson, AZ Bankruptcy Attorney", "item": PAGE_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  "url": PAGE_URL,
  "name": "Tucson Bankruptcy Attorney | Yontz Law, PLLC",
  "description":
    "Tucson bankruptcy attorney for chapter 7 and chapter 13 options. Stop garnishments and request a free consultation.",
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
  "headline": "Tucson Bankruptcy Attorney | Yontz Law, PLLC",
  "name": "Tucson Bankruptcy Attorney | Yontz Law, PLLC",
  "description":
    "Guidance for Tucson residents on stopping collection pressure and comparing chapter 7 and chapter 13.",
  "inLanguage": "en-US",
  "author": { "@id": `${SITE_URL}/about-us#casey-yontz` },
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "image": [{ "@id": PRIMARY_IMAGE_ID }],
  "datePublished": PUBLISHED_ISO,
  "dateModified": MODIFIED_ISO,
  "isAccessibleForFree": true,
};

export default function MarylandBankruptcyLawsPage() {
  return (
    <PerfPageLayout
      title="Tucson Bankruptcy Attorney | Yontz Law, PLLC"
      description="Tucson bankruptcy attorney for chapter 7 and chapter 13 options. Stop garnishments and request a free consultation."
      canonical={PAGE_URL}
      hero={{
        srcWebp: HERO_WEBP,
        srcJpg: HERO_JPG,
        width: 900,
        height: 600,
        alt:
          "Wide hero background image of Tucson, Arizona with saguaro cacti in the foreground and the city skyline below the Santa Catalina Mountains at sunset, representing bankruptcy legal help for Tucson residents.",
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

      <JsonLd id="tucson-az-bankruptcy-image-graph" data={imageSchemas} />
      <JsonLd id="tucson-az-bankruptcy-org" data={orgSchema} />
      <JsonLd id="tucson-az-bankruptcy-website" data={websiteSchema} />
      <JsonLd id="tucson-az-bankruptcy-author" data={personSchema} />
      <JsonLd id="tucson-az-bankruptcy-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="tucson-az-bankruptcy-webpage" data={webPageSchema} />
      <JsonLd id="tucson-az-bankruptcy-article" data={articleSchema} />
      <JsonLd id="tucson-az-bankruptcy-faq" data={faqSchema} />

      <TucsonHomePage />
      <AzAreas />
    </PerfPageLayout>
  );
}
