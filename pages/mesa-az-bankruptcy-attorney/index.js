/* eslint-disable */
import React from "react";
import dynamic from "next/dynamic";
import PerfPageLayout from "/components/PerfPageLayout";
import Button from "/components/CustomButtons/Button.js";
import LcpImagePreload from "/components/LcpImagePreload";
import JsonLd from "/components/JsonLd";
import MesaHomePage from "../../content/MesaHomePage.js";
import AzAreas from "/components/AzAreas/AzAreas.js";

const HEADER_HEIGHT = 52;

const SITE_URL = "https://www.phoenixazbankruptcyattorney.com";
const PAGE_URL = "https://www.phoenixazbankruptcyattorney.com/mesa-az-bankruptcy-attorney";

const PRIMARY_IMAGE_ID = `${PAGE_URL}#hero-image`;

const HERO_WEBP = "/img/mesa-az-superstition-mountains-saguaro-sunrise-hero-background.webp";
const HERO_JPG = "/img/mesa-az-superstition-mountains-saguaro-sunrise-hero-background.jpg";

const PUBLISHED_ISO = "2026-01-10T00:00:00-07:00";
const MODIFIED_ISO = "2026-01-10T00:00:00-07:00";

const MESA_HELP_HERO_WEBP =
  "/img/mesa-bankruptcy-help-hero-superstition-mountains-downtown-mesa-arts-center.webp";
const MESA_HELP_HERO_ID = `${PAGE_URL}#img-mesa-bankruptcy-help-arts-center`;
const MESA_HELP_HERO_ALT =
  "Hero banner for Mesa bankruptcy help showing downtown Mesa near the Mesa Arts Center with the Superstition Mountains at sunset, plus a gavel and legal documents in the foreground and the text “Mesa Bankruptcy Help”.";

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
      "name": "Mesa, AZ Bankruptcy Attorney — Hero",
      "description":
        "Wide hero background showing Mesa, Arizona at sunrise with saguaro cacti in the foreground and the Superstition Mountains in the distance.",
      "inLanguage": "en-US",
      "contentUrl": `${SITE_URL}${HERO_JPG}`,
      "thumbnailUrl": `${SITE_URL}${HERO_JPG}`,
      "representativeOfPage": true,
      "license": `${SITE_URL}/terms-and-conditions`,
      "creator": { "@type": "Organization", "name": "Yontz Law, PLLC" },
    },
    {
      "@type": "ImageObject",
      "@id": MESA_HELP_HERO_ID,
      "name": "Mesa Bankruptcy Help — Mesa Arts Center and Superstition Mountains",
      "description": MESA_HELP_HERO_ALT,
      "caption": "Mesa bankruptcy help hero banner near the Mesa Arts Center at sunset.",
      "inLanguage": "en-US",
      "contentUrl": `${SITE_URL}${MESA_HELP_HERO_WEBP}`,
      "thumbnailUrl": `${SITE_URL}${MESA_HELP_HERO_WEBP}`,
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
      "name": "What does a Mesa AZ bankruptcy attorney review during a first consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A first consultation is usually a snapshot review designed to give you clear direction quickly. We focus on the pressure you’re facing (collections, lawsuits, garnishments, repossession risk, or housing concerns), your income pattern (steady vs. fluctuating), your assets, and your main goal—like stopping a garnishment, keeping a vehicle, or getting a fresh start from unsecured debt. From there, we explain which bankruptcy path (if any) fits best and what timing or paperwork decisions matter most.",
      },
    },
    {
      "@type": "Question",
      "name": "Can bankruptcy stop wage garnishments and collection lawsuits in Mesa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "In many cases, filing bankruptcy triggers an automatic stay that can pause most collection activity, including many wage garnishments and pending lawsuits. Because deadlines and payroll timing can matter, it helps to share any garnishment paperwork, lawsuit documents, and your most recent pay stubs during your consultation request. Some situations have exceptions, so getting advice early is the best way to avoid surprises.",
      },
    },
    {
      "@type": "Question",
      "name": "What’s the difference between chapter 7 and chapter 13 for Mesa residents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Mesa residents usually compare chapter 7 and chapter 13 based on the problem they’re trying to solve. chapter 7 is often explored when someone wants relief from unsecured debt and the eligibility numbers line up. chapter 13 is often explored when someone needs time to catch up on certain obligations or protect assets through a court-approved payment plan. The best fit depends on income, assets, debt type, and whether you’re trying to protect a home or vehicle.",
      },
    },
    {
      "@type": "Question",
      "name": "What should I avoid doing right before filing bankruptcy in the East Valley?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Many complications come from last-minute moves that look harmless but create extra questions later—such as using credit right before filing (especially cash advances), transferring property or vehicle titles for safekeeping, or repaying family members. If bankruptcy is on the table, a helpful rule of thumb is to pause major financial moves and get guidance first. A short review can help you understand what to stop, what’s safe, and what documentation you’ll need.",
      },
    },
    {
      "@type": "Question",
      "name": "What documents should I gather for a Mesa bankruptcy consultation request?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "You don’t need perfect paperwork to start, but a few items can help you get clear answers faster: recent pay stubs or proof of income, a basic debt list (collections letters help), any lawsuit or garnishment paperwork, and your housing/vehicle payment details. If you have your most recent tax return, that can also help with planning and eligibility questions. If you’re missing something, you can still start—just share what you have and what deadlines you’re facing.",
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
  "worksFor": { "@id": `${SITE_URL}/#organization` },
  "url": `${SITE_URL}/about`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Mesa, AZ Bankruptcy Attorney", "item": PAGE_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  "url": PAGE_URL,
  "name": "Mesa Bankruptcy Attorney | Local Help in the East Valley",
  "description":
    "Mesa bankruptcy attorney help with chapter 7 and chapter 13. Stop garnishments, review options, and request a free consultation today.",
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
  "headline": "Mesa Bankruptcy Attorney | Local Help in the East Valley",
  "name": "Mesa Bankruptcy Attorney | Local Help in the East Valley",
  "description":
    "Mesa bankruptcy attorney guidance on stopping collection pressure and choosing between chapter 7 and chapter 13.",
  "inLanguage": "en-US",
  "author": { "@id": `${SITE_URL}/about-us#casey-yontz` },
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "image": [{ "@id": PRIMARY_IMAGE_ID }],
  "datePublished": PUBLISHED_ISO,
  "dateModified": MODIFIED_ISO,
  "isAccessibleForFree": true,
};

export default function MesaBankruptcy() {
  return (
    <PerfPageLayout
      title="Mesa AZ Bankruptcy Attorney | Yontz Law, PLLC"
      description="Mesa bankruptcy attorney for chapter 7 and chapter 13 options. Get help stopping garnishments and request a free consultation."
      canonical={PAGE_URL}
      hero={{
        srcWebp: HERO_WEBP,
        srcJpg: HERO_JPG,
        width: 900,
        height: 600,
        alt:
          "Wide hero background showing Mesa, Arizona at sunrise with saguaro cacti in the foreground and the Superstition Mountains in the distance.",
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

      <JsonLd id="mesa-az-bankruptcy-image-graph" data={imageSchemas} />
      <JsonLd id="mesa-az-bankruptcy-org" data={orgSchema} />
      <JsonLd id="mesa-az-bankruptcy-website" data={websiteSchema} />
      <JsonLd id="mesa-az-bankruptcy-author" data={personSchema} />
      <JsonLd id="mesa-az-bankruptcy-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="mesa-az-bankruptcy-webpage" data={webPageSchema} />
      <JsonLd id="mesa-az-bankruptcy-article" data={articleSchema} />
      <JsonLd id="mesa-az-bankruptcy-lawyer-faq" data={faqSchema} />

      <MesaHomePage />
      <AzAreas />
    </PerfPageLayout>
  );
}
