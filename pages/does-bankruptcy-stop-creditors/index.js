/* eslint-disable */
import React from "react";
//import dynamic from "next/dynamic";
import PerfPageLayout from "/components/PerfPageLayout";
import Button from "/components/CustomButtons/Button.js";
import LcpImagePreload from "/components/LcpImagePreload";
import JsonLd from "/components/JsonLd";
import DoesBankruptcyStopCreditors from "../../content/DoesBankruptcyStopCreditors.js";
import AzAreas from "/components/AzAreas/AzAreas.js";


const SITE_URL = "https://www.phoenixazbankruptcyattorney.com";
const PAGE_URL = "https://www.phoenixazbankruptcyattorney.com/does-bankruptcy-stop-creditors";

const PRIMARY_IMAGE_ID = `${PAGE_URL}#hero-image`;

const HERO_WEBP = "/img/bankruptcy-technical-topic.webp";
const HERO_JPG = "/img/bankruptcy-technical-topic.jpg";

const PUBLISHED_ISO = "2026-01-10T00:00:00-07:00";
const MODIFIED_ISO = "2026-01-10T00:00:00-07:00";

const ARTICLE_IMAGE_WEBP = "/img/does-bankruptcy-stop-creditors-article-hero-automatic-stay-shield.webp";
const ARTICLE_IMAGE_ID = `${PAGE_URL}#img-does-bankruptcy-stop-creditors-automatic-stay-shield`;
const ARTICLE_IMAGE_ALT =
  "Illustrated article image showing a couple reviewing past-due bills at a table with an “automatic stay” shield icon and crossed-out collection symbols, representing how bankruptcy can stop most creditor collection actions.";

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
      "name": "Does Bankruptcy Stop Creditors? — Hero",
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
      "@id": ARTICLE_IMAGE_ID,
      "name": "Automatic Stay Shield Illustration",
      "description": ARTICLE_IMAGE_ALT,
      "caption": "Illustration showing how the automatic stay can stop many collection actions.",
      "inLanguage": "en-US",
      "contentUrl": `${SITE_URL}${ARTICLE_IMAGE_WEBP}`,
      "thumbnailUrl": `${SITE_URL}${ARTICLE_IMAGE_WEBP}`,
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
      "name": "How fast does bankruptcy stop creditor calls and collection lawsuits in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "In most cases, the automatic stay goes into effect when a bankruptcy case is filed, and that typically stops (or pauses) most collection activity right away—including many collection calls and pending lawsuits. Real-world timing can depend on notice and logistics (for example, how quickly the creditor or their attorney receives the case information). If you’re up against a court date or active lawsuit, it’s smart to share the paperwork and deadlines early so the strategy matches the timeline.",
      },
    },
    {
      "@type": "Question",
      "name": "Does bankruptcy stop wage garnishments in Arizona immediately?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Bankruptcy often stops many wage garnishments going forward once the case is filed, but timing details matter. If a garnishment is already in motion, there can be a lag while the stay is communicated and processed by the creditor and the employer (or bank). Also, what has already been withheld can involve additional rules and fact-specific analysis. If you’re dealing with garnishment, gather the writ/papers and recent pay stubs so the next steps can be handled correctly.",
      },
    },
    {
      "@type": "Question",
      "name": "Can bankruptcy stop a foreclosure sale or repossession in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Bankruptcy can pause many foreclosure and repossession actions through the automatic stay, but where you are in the timeline matters. If a sale date is close or a repossession is imminent, earlier planning usually creates more options. Chapter choice can matter too: chapter 7 and chapter 13 both trigger the stay, but chapter 13 is often used when you need time and a structured plan to catch up on certain payments.",
      },
    },
    {
      "@type": "Question",
      "name": "What does bankruptcy not stop automatically in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The automatic stay has exceptions. Certain criminal matters and many family law issues—especially support-related actions—can follow different rules. Some eviction situations can also be limited depending on timing and court orders. The safest approach is to identify the specific type of action you’re facing and confirm whether it’s covered by the stay based on your exact facts and deadlines.",
      },
    },
    {
      "@type": "Question",
      "name": "What if a creditor keeps trying to collect after I file bankruptcy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "If a creditor continues collection after filing, it may be a notice issue (they don’t have the case details yet) or it may require enforcement steps. Keep records of calls, letters, and any lawsuit activity, and make sure your attorney has the creditor’s correct contact information. Also, some creditors can file a motion asking the court for permission to move forward (relief from the automatic stay) in certain situations—so the goal is to respond quickly and keep the case organized.",
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
    { "@type": "ListItem", "position": 2, "name": "Does Bankruptcy Stop Creditors?", "item": PAGE_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  "url": PAGE_URL,
  "name": "Does Bankruptcy Stop Creditors? | Arizona Guide",
  "description":
    "Learn how the automatic stay can stop creditor calls, lawsuits, and garnishments in Arizona—and what bankruptcy may not stop.",
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
  "headline": "Does Bankruptcy Stop Creditors? | Arizona Guide",
  "name": "Does Bankruptcy Stop Creditors? | Arizona Guide",
  "description":
    "An Arizona-focused overview of how bankruptcy’s automatic stay affects creditor collections, lawsuits, garnishments, foreclosure, and repossession timelines.",
  "inLanguage": "en-US",
  "author": { "@id": `${SITE_URL}/about-us#casey-yontz` },
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "image": [{ "@id": PRIMARY_IMAGE_ID }, { "@id": ARTICLE_IMAGE_ID }],
  "datePublished": PUBLISHED_ISO,
  "dateModified": MODIFIED_ISO,
  "isAccessibleForFree": true,
};

export default function AzBkStopCred() {
  return (
    <PerfPageLayout
      title="Does Bankruptcy Stop Creditors? | Arizona Guide"
      description="Does bankruptcy stop creditors? Learn how the automatic stay affects calls, lawsuits, and garnishments in Arizona."
      canonical={PAGE_URL}
      hero={{
        srcWebp: HERO_WEBP,
        srcJpg: HERO_JPG,
        width: 900,
        height: 600,
        alt:
          "Wide hero image introducing an Arizona guide on whether bankruptcy stops creditors, branded for Arizona Bankruptcy Lawyers at Yontz Law, PLLC.",
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

      <JsonLd id="does-bankruptcy-stop-creditors-image-graph" data={imageSchemas} />
      <JsonLd id="does-bankruptcy-stop-creditors-org" data={orgSchema} />
      <JsonLd id="does-bankruptcy-stop-creditors-website" data={websiteSchema} />
      <JsonLd id="does-bankruptcy-stop-creditors-author" data={personSchema} />
      <JsonLd id="does-bankruptcy-stop-creditors-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="does-bankruptcy-stop-creditors-webpage" data={webPageSchema} />
      <JsonLd id="does-bankruptcy-stop-creditors-article" data={articleSchema} />
      <JsonLd id="does-bankruptcy-stop-creditors-faq" data={faqSchema} />

      <DoesBankruptcyStopCreditors />
      <AzAreas />
    </PerfPageLayout>
  );
}
