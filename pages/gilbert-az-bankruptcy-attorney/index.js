/* eslint-disable */
import React from "react";
import PerfPageLayout from "/components/PerfPageLayout";
import Button from "/components/CustomButtons/Button.js";
import LcpImagePreload from "/components/LcpImagePreload";
import JsonLd from "/components/JsonLd";
import GilbertHomePage from "../../content/GilbertHomePage.js";
import AzAreas from "/components/AzAreas/AzAreas.js";

const SITE_URL = "https://www.phoenixazbankruptcyattorney.com";
const PAGE_URL =
  "https://www.phoenixazbankruptcyattorney.com/gilbert-az-bankruptcy-attorney";

const PRIMARY_IMAGE_ID = `${PAGE_URL}#hero-image`;

const HERO_WEBP = "/img/gilbert-az-skyline.webp";
const HERO_JPG = "/img/gilbert-az-skyline.jpg";

const PUBLISHED_ISO = "2026-01-13T00:00:00-07:00";
const MODIFIED_ISO = "2026-01-13T00:00:00-07:00";

const HERO_ALT =
  "Hero image showing the Gilbert, Arizona skyline.";

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
      <circle
        r="66"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="2"
        fill="none"
      />
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
      name: "Bankruptcy Law Firms in Gilbert, AZ — Hero",
      description:
        "Hero background showing the Gilbert, Arizona skyline with Yontz Law, PLLC branding for the Gilbert bankruptcy law firms page.",
      
      inLanguage: "en-US",
      contentUrl: `${SITE_URL}${HERO_WEBP}`,
      thumbnailUrl: `${SITE_URL}${HERO_WEBP}`,
      representativeOfPage: true,
      license: `${SITE_URL}/terms-and-conditions`,
      creator: { "@type": "Organization", name: "Yontz Law, PLLC" },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you help people in Gilbert, Arizona?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We work with people in Gilbert who are dealing with credit cards, medical bills, lawsuits, garnishments, and behind payments—and who want a clear plan for what to do next.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to come to your office to get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Coming to the Phoenix office is always an option, but it’s your choice. If it isn’t convenient, the steps needed to move a case forward can be handled remotely by phone, secure online forms, and electronic document sharing.",
      },
    },
    {
      "@type": "Question",
      name: "If I’m in Gilbert, which court would my case be filed in?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Bankruptcy is filed in federal court. Gilbert cases are typically handled through the Arizona bankruptcy court process, and your specific filing location and procedures depend on where you live and your circumstances.",
      },
    },
    {
      "@type": "Question",
      name: "What debt problems bring Gilbert residents to a bankruptcy lawyer?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The most common triggers we see are a debt pile-up that won’t shrink, a lawsuit, wage garnishment, a repossession threat, or falling behind on a mortgage or car payment after a life change.",
      },
    },
    {
      "@type": "Question",
      name: "Is bankruptcy a good option if I’m worried about wage garnishment?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Often, yes—especially if a creditor has already filed suit or you’ve received garnishment paperwork. Timing matters, so it’s best to get advice quickly if a court date or garnishment start date is approaching.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know whether chapter 7 or chapter 13 makes more sense for me in Gilbert?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "It depends on your goals. Some people need the fastest possible relief from unsecured debt, while others need a structured plan to catch up on a home, car, or other priority obligations. We’ll explain the tradeoffs in plain English and help you choose the most sensible path.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I get a clear answer on next steps?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Usually, it starts with a short conversation. Once we understand the basics—your income situation, what debts you’re dealing with, and any urgent deadlines—we can outline clear next steps and what makes the most sense.",
      },
    },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Yontz Law, PLLC",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.svg`,
    contentUrl: `${SITE_URL}/logo.svg`,
    width: 512,
    height: 512,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "4425 E Agave Rd Suite 106",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85044",
    addressCountry: "US",
  },
  telephone: "+1-480-886-0339",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Arizona Bankruptcy Lawyers | Yontz Law, PLLC",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/about#casey-yontz`,
  name: "Casey Yontz",
  jobTitle: "Bankruptcy Attorney",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  url: `${SITE_URL}/about`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Bankruptcy Law Firms in Gilbert, AZ", item: PAGE_URL },
  ],
};

// <= 60 chars
const META_TITLE = "Bankruptcy Law Firms in Gilbert, AZ | Free Consult";

// <= 160 chars
const META_DESCRIPTION =
  "Searching bankruptcy law firms in Gilbert? Get clear guidance on chapter 7 and chapter 13 options, garnishments, and next steps.";

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: META_TITLE,
  description: META_DESCRIPTION,
  inLanguage: "en-US",
  breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  primaryImageOfPage: { "@id": PRIMARY_IMAGE_ID },
  datePublished: PUBLISHED_ISO,
  dateModified: MODIFIED_ISO,
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
  headline: META_TITLE,
  name: META_TITLE,
  description: META_DESCRIPTION,

  inLanguage: "en-US",
  author: { "@id": `${SITE_URL}/about#casey-yontz` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  isPartOf: { "@id": `${SITE_URL}/#website` },
  image: [{ "@id": PRIMARY_IMAGE_ID }],
  datePublished: PUBLISHED_ISO,
  dateModified: MODIFIED_ISO,
  isAccessibleForFree: true,
};

export default function GilbertBankruptcyAttorney() {
  return (
    <PerfPageLayout
      title={META_TITLE}
      description={META_DESCRIPTION}
      canonical={PAGE_URL}
      hero={{
        srcWebp: HERO_WEBP,
        srcJpg: HERO_JPG,
        width: 900,
        height: 600,
        alt: HERO_ALT,
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

      <JsonLd id="gilbert-az-bankruptcy-image-graph" data={imageSchemas} />
      <JsonLd id="gilbert-az-bankruptcy-org" data={orgSchema} />
      <JsonLd id="gilbert-az-bankruptcy-website" data={websiteSchema} />
      <JsonLd id="gilbert-az-bankruptcy-author" data={personSchema} />
      <JsonLd id="gilbert-az-bankruptcy-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="gilbert-az-bankruptcy-webpage" data={webPageSchema} />
      <JsonLd id="gilbert-az-bankruptcy-article" data={articleSchema} />
      <JsonLd id="gilbert-az-bankruptcy-attorney-faq" data={faqSchema} />

      <GilbertHomePage />
      <AzAreas />
    </PerfPageLayout>
  );
}
