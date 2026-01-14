/* eslint-disable */
import React from "react";
import dynamic from "next/dynamic";
import PerfPageLayout from "/components/PerfPageLayout";
import Button from "/components/CustomButtons/Button.js";
import LcpImagePreload from "/components/LcpImagePreload";
import JsonLd from "/components/JsonLd";
import PrescottHomePage from "../../content/PrescottHomePage.js";
import AzAreas from "/components/AzAreas/AzAreas.js";

const HEADER_HEIGHT = 52;

const SITE_URL = "https://www.phoenixazbankruptcyattorney.com";
const PAGE_URL = "https://www.phoenixazbankruptcyattorney.com/prescott-az-bankruptcy-lawyer";

const PRIMARY_IMAGE_ID = `${PAGE_URL}#hero-image`;

const HERO_WEBP =
  "/img/prescott-az-bankruptcy-lawyer-hero-courthouse-plaza-thumb-butte-yavapai-us-bankruptcy-help.webp";
const HERO_JPG =
  "/img/prescott-az-bankruptcy-lawyer-hero-courthouse-plaza-thumb-butte-yavapai-us-bankruptcy-help.jpg";

const PUBLISHED_ISO = "2026-01-10T00:00:00-07:00";
const MODIFIED_ISO = "2026-01-10T00:00:00-07:00";

const DOC_CHECKLIST_WEBP = "/img/prescott-bankruptcy-consultation-document-checklist.webp";
const DOC_CHECKLIST_ID = `${PAGE_URL}#img-prescott-consultation-document-checklist`;
const DOC_CHECKLIST_ALT =
  "Checklist graphic of documents to gather before speaking with a Prescott bankruptcy lawyer, including pay stubs, tax returns, bank statements, and creditor notices.";

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
      "name": "Prescott, AZ Bankruptcy Lawyer — Hero",
      "description":
        "Wide hero background image of Prescott, Arizona featuring Courthouse Plaza and downtown landmarks with pine-covered hills near Thumb Butte in the background, representing local bankruptcy legal help for Prescott residents.",
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
      "name": "Prescott Bankruptcy Consultation Document Checklist",
      "description": DOC_CHECKLIST_ALT,
      "caption": "Document checklist to prepare for a Prescott bankruptcy consultation.",
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
      "name": "What should I expect when I contact a Prescott bankruptcy lawyer for a consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A consultation should feel practical: we identify the pressure you’re facing (lawsuit, garnishment, vehicle issues, medical debt, or overwhelm), review your income and a basic budget snapshot, and talk through your assets and goals. From there, we explain whether bankruptcy is likely to help, which chapter is usually worth comparing, and what timing or paperwork decisions matter most. The goal is clarity and a realistic next step—not hype.",
      },
    },
    {
      "@type": "Question",
      "name": "Will bankruptcy stop creditor calls, lawsuits, and wage garnishments in Prescott, AZ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "In many cases, filing bankruptcy triggers an automatic stay that pauses most collection activity, including many lawsuits and wage garnishments. Timing can matter if you have a court date, a garnishment start date, or a repossession risk, so it helps to share any lawsuit or garnishment paperwork as early as possible. Some situations have exceptions, so a quick review is the best way to understand what applies in your specific case.",
      },
    },
    {
      "@type": "Question",
      "name": "How do chapter 7 and chapter 13 work for Prescott residents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Prescott residents usually compare chapter 7 and chapter 13 based on the goal. chapter 7 is typically faster and is often used to address unsecured debts like credit cards, medical bills, and many personal loans (if the eligibility numbers line up and assets can be protected with exemptions). chapter 13 is a court-approved repayment plan (often 3–5 years) that can be used to catch up on certain obligations or protect assets through a structured plan. The right fit depends on income, assets, equity, and what you’re trying to protect.",
      },
    },
    {
      "@type": "Question",
      "name": "Where do Prescott residents attend the 341 meeting of creditors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The 341 meeting (meeting of creditors) is usually a short, scheduled appointment with the trustee to confirm basic information from your bankruptcy paperwork. In Arizona, many 341 meetings are commonly handled remotely (often by Zoom or similar procedures listed on your official notice). After your case is filed, you receive a court notice with your trustee information and specific instructions for the date, time, and how to attend—so your notice controls the details for your case.",
      },
    },
    {
      "@type": "Question",
      "name": "What documents should I gather before speaking with a Prescott bankruptcy attorney?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "You don’t need a perfect folder to start, but a few items help you get clear answers faster: recent pay stubs (or income records if self-employed), a basic list of creditors/collections, any lawsuit or garnishment paperwork, and your housing/vehicle payment details. If you have recent tax returns and bank statements, those can also help with planning and timing. If you’re facing a deadline, mention it—deadlines can change the best next step.",
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
    { "@type": "ListItem", "position": 2, "name": "Prescott, AZ Bankruptcy Lawyer", "item": PAGE_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  "url": PAGE_URL,
  "name": "Prescott, AZ Bankruptcy Lawyer | Yontz Law, PLLC",
  "description":
    "Prescott bankruptcy lawyer for chapter 7 and chapter 13 options. Get help stopping garnishments and request a free consultation.",
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
  "headline": "Prescott, AZ Bankruptcy Lawyer | Yontz Law, PLLC",
  "name": "Prescott, AZ Bankruptcy Lawyer | Yontz Law, PLLC",
  "description":
    "Guidance for Prescott residents on stopping collection pressure and comparing chapter 7 and chapter 13.",
  "inLanguage": "en-US",
  "author": { "@id": `${SITE_URL}/about-us#casey-yontz` },
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "image": [{ "@id": PRIMARY_IMAGE_ID }],
  "datePublished": PUBLISHED_ISO,
  "dateModified": MODIFIED_ISO,
  "isAccessibleForFree": true,
};

export default function TucsonBankruptcy() {
  return (
    <PerfPageLayout
      title="Prescott, AZ Bankruptcy Lawyer | Yontz Law, PLLC"
      description="Prescott bankruptcy lawyer for chapter 7 and chapter 13 options. Stop garnishments and request a free consultation."
      canonical={PAGE_URL}
      hero={{
        srcWebp: HERO_WEBP,
        srcJpg: HERO_JPG,
        width: 900,
        height: 600,
        alt:
          "Wide hero background image of Prescott, Arizona featuring Courthouse Plaza and downtown landmarks with pine-covered hills near Thumb Butte in the background, representing local bankruptcy legal help for Prescott residents.",
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

      <JsonLd id="prescott-az-bankruptcy-image-graph" data={imageSchemas} />
      <JsonLd id="prescott-az-bankruptcy-org" data={orgSchema} />
      <JsonLd id="prescott-az-bankruptcy-website" data={websiteSchema} />
      <JsonLd id="prescott-az-bankruptcy-author" data={personSchema} />
      <JsonLd id="prescott-az-bankruptcy-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="prescott-az-bankruptcy-webpage" data={webPageSchema} />
      <JsonLd id="prescott-az-bankruptcy-article" data={articleSchema} />
      <JsonLd id="prescott-az-bankruptcy-faq" data={faqSchema} />

      <PrescottHomePage />
      <AzAreas />
    </PerfPageLayout>
  );
}
