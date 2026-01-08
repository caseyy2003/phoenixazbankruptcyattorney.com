/* eslint-disable */
import React from "react";
import dynamic from "next/dynamic";
import PerfPageLayout from "/components/PerfPageLayout";
import Button from "/components/CustomButtons/Button.js";
import LcpImagePreload from "/components/LcpImagePreload";
import JsonLd from "/components/JsonLd";
import ContactUs from "../../content/ContactUs.js";
import AzAreas from "/components/AzAreas/AzAreas.js";

const HEADER_HEIGHT = 52;


/* ---------- Canonicals & shared IDs ---------- */

const SITE_URL = "https://www.usbankruptcyhelp.com";
const PAGE_URL = "https://www.usbankruptcyhelp.com/bankruptcy-info-by-state/maryland";

// hero image id used across schemas
const PRIMARY_IMAGE_ID = `${PAGE_URL}#hero-image`;

// hero assets
const HERO_WEBP = "/img/bankruptcy-technical-topic.webp";
const HERO_JPG = "/img/bankruptcy-technical-topic.jpg";

// dates
const PUBLISHED_ISO = "2025-12-12T00:00:00-07:00";
const MODIFIED_ISO = "2025-12-12T00:00:00-07:00";

/* ---------- DROP-IN: Inline SVG Logo Component (lives in this file) ---------- */

const YontzLawLogo = ({ width = 280 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={(width * 240) / 960}
    viewBox="0 0 960 240"
    role="img"
    aria-label="Yontz Law, PLLC"
  >
    {/* Badge */}
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

    {/* Wordmark */}
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
        Phoenix Bankruptcy Lawyers
      </text>
    </g>
  </svg>
);

/* ---------- DROP-IN: Hero CTA wrapper that includes logo + button ---------- */

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
      <strong>
        Request a Free Bankruptcy Consult
      </strong>
    </Button>
  </div>
);

/* ---------- Image graph (Maryland-specific) ---------- */

const imageSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageObject",
      "@id": PRIMARY_IMAGE_ID,
      "name": "Bankruptcy in Maryland — Hero",
      "description":
        "Wide hero background showing Arizona desert landscape with saguaro cacti, Phoenix skyline, and mountains at sunset.",
      "inLanguage": "en-US",
      "contentUrl": `${SITE_URL}${HERO_JPG}`,
      "thumbnailUrl": `${SITE_URL}${HERO_JPG}`,
      "representativeOfPage": true,
      "license": `${SITE_URL}/terms-and-conditions`,
      "creator": { "@type": "Organization", "name": "US Bankruptcy Help" },
    },
    {
      "@type": "ImageObject",
      "@id": `${PAGE_URL}#img-maryland-beaver-teacher`,
      "name": "Maryland Bankruptcy Beaver Teacher Illustration",
      "description":
        "Cartoon beaver teaching a class on “Bankruptcy in Maryland,” standing by a chalkboard with a Maryland state outline and the US Bankruptcy Help logo in the corner.",
      "caption": "Playful beaver illustration teaching bankruptcy in Maryland, branded with the US Bankruptcy Help logo.",
      "inLanguage": "en-US",
      "contentUrl": `${SITE_URL}/img/maryland-bankruptcy-beaver-teacher-us-bankruptcy-help.webp`,
      "thumbnailUrl": `${SITE_URL}/img/maryland-bankruptcy-beaver-teacher-us-bankruptcy-help.webp`,
      "license": `${SITE_URL}/terms-and-conditions`,
      "creator": { "@type": "Organization", "name": "US Bankruptcy Help" },
    },
    {
      "@type": "ImageObject",
      "@id": `${PAGE_URL}#img-maryland-bankruptcy-basics`,
      "name": "Maryland Bankruptcy Basics — Courts and Divisions",
      "description":
        "Infographic titled “Maryland Bankruptcy” showing a navy silhouette of the state of Maryland, the Maryland flag, bullet points about the exemption scheme, 4th Circuit and U.S. District Court for the District of Maryland, plus a note about two bankruptcy divisions and the US Bankruptcy Help logo at the bottom.",
      "caption":
        "Maryland bankruptcy basics infographic showing courts, divisions and Maryland map with US Bankruptcy Help branding.",
      "inLanguage": "en-US",
      "contentUrl": `${SITE_URL}/img/maryland-bankruptcy-basics-courts-divisions-us-bankruptcy-help.webp`,
      "thumbnailUrl": `${SITE_URL}/img/maryland-bankruptcy-basics-courts-divisions-us-bankruptcy-help.webp`,
      "license": `${SITE_URL}/terms-and-conditions`,
      "creator": { "@type": "Organization", "name": "US Bankruptcy Help" },
    },
  ],
};

/* ---------- FAQ schema (MD) ---------- */

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
          "Many people who file bankruptcy in Phoenix are trying to protect housing and reliable transportation. Whether you can keep a home or car depends on factors like Arizona exemption rules, how much equity you have, whether you’re behind on payments, and which bankruptcy chapter you file. A consultation typically focuses on your current payment status, payoff amounts, and the protect-versus-catch-up strategy that best fits your goals.",
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
          "Timing varies by chapter and by how quickly documents are gathered, but many cases follow a predictable flow: completing a pre-filing credit counseling course, filing the petition, attending the 341 meeting with the trustee (often by phone or video), completing the post-filing debtor education course, and then receiving a discharge in eligible cases. Your exact timeline depends on your case complexity, the chapter you file under, and any issues that need extra review.",
      },
    },
  ],
};


/* ---------- Site-wide schemas (unchanged, but reused) ---------- */

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "US Bankruptcy Help",
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
    "streetAddress": "4425 E Agave Rd. Suite 110",
    "addressLocality": "Phoenix",
    "addressRegion": "AZ",
    "postalCode": "85044",
    "addressCountry": "US",
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "help@usbankruptcyhelp.com",
      "availableLanguage": ["English"],
      "areaServed": "US",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": SITE_URL,
  "name": "US Bankruptcy Help",
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
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

/* ---------- Breadcrumbs & page/article schema ---------- */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Bankruptcy Info by State", "item": `${SITE_URL}/bankruptcy-info-by-state/` },
    { "@type": "ListItem", "position": 3, "name": "Maryland Bankruptcy Laws", "item": PAGE_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  "url": PAGE_URL,
  "name": "Maryland Bankruptcy Laws: Essential Guide & Process",
  "description":
    "Understand Maryland bankruptcy laws, court process, costs and protections with this clear guide for individuals and small businesses.",
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
  "headline": "Maryland Bankruptcy Laws: Essential Guide & Process",
  "name": "Maryland Bankruptcy Laws: Essential Guide & Process",
  "description":
    "Comprehensive overview of Maryland bankruptcy laws, including filing steps, court process, eligibility, costs, and life after bankruptcy.",
  "inLanguage": "en-US",
  "author": { "@id": `${SITE_URL}/about-us#casey-yontz` },
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "image": [{ "@id": PRIMARY_IMAGE_ID }],
  "datePublished": PUBLISHED_ISO,
  "dateModified": MODIFIED_ISO,
  "isAccessibleForFree": true,
};

/* ---------- Page component ---------- */

export default function Contact() {
  return (
    <PerfPageLayout
      title="Maryland Bankruptcy Laws: Essential Guide & Process"
      description="Wide hero background showing Mesa, Arizona at sunrise with saguaro cacti in the foreground and the Superstition Mountains in the distance."
      canonical={PAGE_URL}
      hero={{
        srcWebp: HERO_WEBP,
        srcJpg: HERO_JPG,
        width: 900,
        height: 600,
        alt: 'Wide hero background image of Tucson, Arizona with saguaro cacti in the foreground and the city skyline below the Santa Catalina Mountains at sunset, representing bankruptcy legal help for Tucson residents.',
        priority: true,

        // DROP-IN CHANGE: logo + button inside hero.cta
        cta: <HeroCtaWithLogo />,
      }}
    >
      <LcpImagePreload
        srcWebp={HERO_WEBP}
        srcJpg={HERO_JPG}
        sizes="(max-width: 768px) 100vw, 1000px"
        preloadWidth={828}
      />

      {/* JSON-LD blocks */}
      <JsonLd id="md-bankruptcy-laws-image-graph" data={imageSchemas} />
      <JsonLd id="md-bankruptcy-laws-org" data={orgSchema} />
      <JsonLd id="md-bankruptcy-laws-website" data={websiteSchema} />
      <JsonLd id="md-bankruptcy-laws-author" data={personSchema} />
      <JsonLd id="md-bankruptcy-laws-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="md-bankruptcy-laws-webpage" data={webPageSchema} />
      <JsonLd id="md-bankruptcy-laws-article" data={articleSchema} />
      <JsonLd id="phx-bankruptcy-lawyer-faq" data={faqSchema} />

     
      <ContactUs />
      <AzAreas />
    </PerfPageLayout>
  );
}
