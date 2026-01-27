/* eslint-disable */
import React from "react";
//import dynamic from "next/dynamic";
import PerfPageLayout from "/components/PerfPageLayout";
import Button from "/components/CustomButtons/Button.js";
import LcpImagePreload from "/components/LcpImagePreload";
import JsonLd from "/components/JsonLd";
import AzBkLaws from "../../content/ArizonaBkLaws.js";
import AzAreas from "/components/AzAreas/AzAreas.js";

const HEADER_HEIGHT = 52;

const SITE_URL = "https://www.phoenixazbankruptcyattorney.com";
const PAGE_URL = "https://www.phoenixazbankruptcyattorney.com/arizona-bankruptcy-laws";

const PRIMARY_IMAGE_ID = `${PAGE_URL}#hero-image`;

const HERO_WEBP = "/img/bankruptcy-technical-topic.webp";
const HERO_JPG = "/img/bankruptcy-technical-topic.jpg";

const PUBLISHED_ISO = "2026-01-27T00:00:00-07:00";
const MODIFIED_ISO = "2026-01-27T00:00:00-07:00";

const OPT_OUT_WEBP = "/img/az-opt-out-rule.webp";
const OPT_OUT_ID = `${PAGE_URL}#img-az-opt-out-rule`;
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
      "name": "Arizona Bankruptcy Laws — Hero",
      "description":
        "Wide hero image for Arizona bankruptcy law information, branded for Yontz Law, PLLC in Phoenix, Arizona.",
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
      "name": "Do I have to live in Arizona for a certain amount of time before filing bankruptcy here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "You generally file bankruptcy in the federal district where you live, but the property exemption rules you can use may depend on how long you have lived in Arizona. If you moved recently, different exemption rules can sometimes apply. A bankruptcy attorney can help you identify which exemption system would be used in your situation.",
      },
    },
    {
      "@type": "Question",
      "name": "Will filing bankruptcy stop a wage garnishment or lawsuit in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "In many cases, filing bankruptcy triggers an automatic stay that generally pauses most collection actions, including many lawsuits and garnishments. There are exceptions, and timing can matter if a creditor is already taking active enforcement steps. If you’re facing an urgent garnishment or court date, getting advice quickly is important.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I keep my house if I file bankruptcy in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Whether you can keep a home often depends on your equity, whether you are current on the mortgage, and how Arizona’s exemption rules apply to your specific facts. Being behind on payments is a different issue than having equity. For a deeper explanation of property protection, review the Arizona Bankruptcy Exemptions page on this site.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I keep my car if I file bankruptcy in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Many people are able to keep a vehicle, but the answer usually depends on your equity, the loan status, and the exemption rules that may protect vehicle equity. If you are behind, the strategy can be different than if you are current but owe more than the car is worth. For more detailed Arizona-specific guidance, review the Arizona Bankruptcy Exemptions page on this site.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the difference between Chapter 7 and Chapter 13 for Arizona residents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Chapter 7 is often used when someone cannot realistically repay unsecured debts and needs a faster reset, while Chapter 13 is a repayment plan that can help people catch up on certain secured debts or manage priority debts over time. Which chapter fits best depends on income, assets, and goals. For a fuller breakdown, see the Chapter 7 Bankruptcy in Arizona and Chapter 13 Bankruptcy in Arizona pages on this site.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Arizona being a community property state change how bankruptcy works for married couples?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "It can. Arizona’s community property rules may affect how household income and debts are analyzed, even if only one spouse files. Because the details can vary based on how debts were incurred and how finances are handled, it’s a good topic to discuss with an attorney before choosing a filing strategy.",
      },
    },
    {
      "@type": "Question",
      "name": "Can bankruptcy remove all my debts, including taxes and student loans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Some debts are commonly dischargeable, but others have special rules or may not be dischargeable in many cases. Recent taxes, child support, and most student loans often require careful review and may need separate analysis. A consultation can help you understand which debts are likely to be treated differently and what alternatives might exist.",
      },
    },
    {
      "@type": "Question",
      "name": "Do I need to be behind on payments before I can file bankruptcy in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Not necessarily. Some people file before they fall behind, while others file after collections or lawsuits begin. Timing can affect fees, interest, and your options for keeping secured property, so it’s usually best to evaluate your situation sooner rather than later.",
      },
    },
    {
      "@type": "Question",
      "name": "What is a Chapter 13 vehicle cram down, and does it apply to every car loan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A Chapter 13 vehicle cram down is a tool that may allow some filers to restructure certain vehicle loans based on the vehicle’s value and other legal requirements. It does not apply in every case and depends on meeting specific conditions. For a focused explanation, see the Chapter 13 Vehicle Cram Downs page on this site.",
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
    { "@type": "ListItem", "position": 2, "name": "Arizona Bankruptcy Laws", "item": PAGE_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  "url": PAGE_URL,
  "name": "Arizona Bankruptcy Laws Explained | Yontz Law, PLLC",
  "description":
    "Learn key Arizona bankruptcy laws, filing options, and what to expect in Chapter 7 or 13. Get clear guidance from Yontz Law, PLLC.",
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
  "headline": "Arizona Bankruptcy Laws Explained | Yontz Law, PLLC",
  "name": "Arizona Bankruptcy Laws Explained | Yontz Law, PLLC",
  "description":
    "An overview of Arizona bankruptcy laws, including chapters, the automatic stay, and how Arizona’s exemption rules affect what you can protect.",
  "inLanguage": "en-US",
  "author": { "@id": `${SITE_URL}/about-us#casey-yontz` },
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "image": [{ "@id": PRIMARY_IMAGE_ID }, { "@id": OPT_OUT_ID }],
  "datePublished": PUBLISHED_ISO,
  "dateModified": MODIFIED_ISO,
  "isAccessibleForFree": true,
};

export default function ArizonaBankruptcyLaws() {
  return (
    <div style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}>
      {/* title: 51 chars | meta: 130 chars */}
      <PerfPageLayout
        title="Arizona Bankruptcy Laws Explained | Yontz Law, PLLC"
        description="Learn key Arizona bankruptcy laws, filing options, and what to expect in Chapter 7 or 13. Get clear guidance from Yontz Law, PLLC."
        canonical={PAGE_URL}
        hero={{
          srcWebp: HERO_WEBP,
          srcJpg: HERO_JPG,
          width: 900,
          height: 600,
          alt:
            "Wide hero image introducing Arizona bankruptcy laws, branded for Arizona Bankruptcy Lawyers at Yontz Law, PLLC.",
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

        <JsonLd id="arizona-bankruptcy-laws-image-graph" data={imageSchemas} />
        <JsonLd id="arizona-bankruptcy-laws-org" data={orgSchema} />
        <JsonLd id="arizona-bankruptcy-laws-website" data={websiteSchema} />
        <JsonLd id="arizona-bankruptcy-laws-author" data={personSchema} />
        <JsonLd id="arizona-bankruptcy-laws-breadcrumb" data={breadcrumbSchema} />
        <JsonLd id="arizona-bankruptcy-laws-webpage" data={webPageSchema} />
        <JsonLd id="arizona-bankruptcy-laws-article" data={articleSchema} />
        <JsonLd id="arizona-bankruptcy-laws-faq" data={faqSchema} />

        <AzBkLaws />
        <AzAreas />
      </PerfPageLayout>
    </div>
  );
}
