/* eslint-disable */
import React from "react";
//import dynamic from "next/dynamic";
import PerfPageLayout from "/components/PerfPageLayout";
import Button from "/components/CustomButtons/Button.js";
import LcpImagePreload from "/components/LcpImagePreload";
import JsonLd from "/components/JsonLd";
import BankruptcyAndCivilLawsuitDebt from "../../content/BankruptcyAndCivilLawsuitDebt.js";
import AzAreas from "/components/AzAreas/AzAreas.js";

const HEADER_HEIGHT = 52;

const SITE_URL = "https://www.phoenixazbankruptcyattorney.com";
const PAGE_URL = "https://www.phoenixazbankruptcyattorney.com/bankruptcy-and-lawsuit-debt";

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
      "name": "Bankruptcy and Lawsuit Debt — Hero",
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
      "name": "Can bankruptcy stop a lawsuit in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "In many cases, filing bankruptcy triggers an automatic stay that pauses most civil collection lawsuits right away. Timing still matters—if you have a hearing date or a default deadline, it’s smart to get advice before the deadline passes so you don’t lose options.",
      },
    },
    {
      "@type": "Question",
      "name": "Can bankruptcy discharge a lawsuit judgment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Often, yes—many money judgments based on typical consumer debts (like credit cards or personal loans) are treated as unsecured debts and may be discharged. Some judgments tied to fraud, intentional injury, or other special categories can follow different discharge rules, so the underlying claim matters—not just the fact that there is a judgment.",
      },
    },
    {
      "@type": "Question",
      "name": "What if a lawsuit is for fraud or intentional wrongdoing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Some debts based on fraud or certain intentional acts may be challenged as non-dischargeable. The facts, the type of claim, and what happened in the lawsuit can matter a lot. If you have a pending fraud allegation or a judgment that mentions fraud, it’s important to review the complaint and any court orders before assuming bankruptcy will wipe it out.",
      },
    },
    {
      "@type": "Question",
      "name": "Can bankruptcy stop wage garnishment from a lawsuit judgment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "In many cases, yes. Filing usually triggers the automatic stay, which can stop many wage garnishments going forward. Real-world timing can depend on notice and payroll processing, so if a garnishment is active, share the writ and employer paperwork early.",
      },
    },
    {
      "@type": "Question",
      "name": "Is chapter 7 or chapter 13 better for lawsuit debt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "It depends on your goals and what else is going on. chapter 7 is often explored when someone wants to eliminate qualifying unsecured debt quickly and the eligibility numbers line up. chapter 13 is often explored when someone needs time to catch up on certain obligations or protect assets through a repayment plan. A quick review of your income, assets, and deadlines usually determines which path fits best.",
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
    { "@type": "ListItem", "position": 2, "name": "Bankruptcy and Lawsuit Debt", "item": PAGE_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  "url": PAGE_URL,
  "name": "Bankruptcy and Lawsuit Debt | Arizona Guide",
  "description":
    "Learn how bankruptcy can affect lawsuits, judgments, and garnishments in Arizona, including what bankruptcy may not discharge.",
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
  "headline": "Bankruptcy and Lawsuit Debt | Arizona Guide",
  "name": "Bankruptcy and Lawsuit Debt | Arizona Guide",
  "description":
    "A practical overview of how bankruptcy interacts with civil lawsuits in Arizona, including the automatic stay and discharge rules.",
  "inLanguage": "en-US",
  "author": { "@id": `${SITE_URL}/about#casey-yontz` },
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "image": [{ "@id": PRIMARY_IMAGE_ID }],
  "datePublished": PUBLISHED_ISO,
  "dateModified": MODIFIED_ISO,
  "isAccessibleForFree": true,
};

export default function BankruptcyClearCivilLawsuitDebt() {
  return (
    <PerfPageLayout
      title="Bankruptcy and Lawsuit Debt | Arizona Guide"
      description="Bankruptcy and lawsuit debt in Arizona: stopping lawsuits, judgments, and garnishments. Learn your options and next steps."
      canonical={PAGE_URL}
      hero={{
        srcWebp: HERO_WEBP,
        srcJpg: HERO_JPG,
        width: 900,
        height: 600,
        alt:
          "Wide hero image introducing an Arizona guide on bankruptcy and lawsuit debt, branded for Arizona Bankruptcy Lawyers at Yontz Law, PLLC.",
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

      <JsonLd id="bankruptcy-and-lawsuit-debt-image-graph" data={imageSchemas} />
      <JsonLd id="bankruptcy-and-lawsuit-debt-org" data={orgSchema} />
      <JsonLd id="bankruptcy-and-lawsuit-debt-website" data={websiteSchema} />
      <JsonLd id="bankruptcy-and-lawsuit-debt-author" data={personSchema} />
      <JsonLd id="bankruptcy-and-lawsuit-debt-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="bankruptcy-and-lawsuit-debt-webpage" data={webPageSchema} />
      <JsonLd id="bankruptcy-and-lawsuit-debt-article" data={articleSchema} />
      <JsonLd id="bankruptcy-and-lawsuit-debt-faq" data={faqSchema} />

      <BankruptcyAndCivilLawsuitDebt />
      <AzAreas />
    </PerfPageLayout>
  );
}
