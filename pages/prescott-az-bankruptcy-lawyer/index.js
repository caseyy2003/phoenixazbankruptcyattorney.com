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
const LocalNavBar = dynamic(() => import("../../components/LocalNavBar/LocalNavBar.js"), {
  ssr: true,
  loading: () => <nav style={{ height: HEADER_HEIGHT }} />,
});

/* ---------- Canonicals & shared IDs ---------- */

const SITE_URL = "https://www.usbankruptcyhelp.com";
const PAGE_URL = "https://www.usbankruptcyhelp.com/bankruptcy-info-by-state/maryland";

// hero image id used across schemas
const PRIMARY_IMAGE_ID = `${PAGE_URL}#hero-image`;

// hero assets
const HERO_WEBP = "/img/prescott-az-bankruptcy-lawyer-hero-courthouse-plaza-thumb-butte-yavapai-us-bankruptcy-help.webp";
const HERO_JPG = "/img/prescott-az-bankruptcy-lawyer-hero-courthouse-plaza-thumb-butte-yavapai-us-bankruptcy-help.jpg";

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
      "name": "How do I file bankruptcy in Maryland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "To file bankruptcy in Maryland, you typically complete a pre-filing credit counseling course, gather detailed information about your income, expenses, assets, and debts, and prepare a bankruptcy petition and schedules. You or your attorney then file these documents with the US Bankruptcy Court for the District of Maryland. After filing, the court schedules a 341 meeting of creditors, and you must complete a post-filing debtor education course before the court can enter a discharge in most cases. The exact steps and paperwork differ depending on whether you file under chapter 7, chapter 13, or chapter 11.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does it cost to file bankruptcy in Maryland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The bankruptcy cost in Maryland includes court filing fees, attorney fees, and the cost of required credit counseling and debtor education courses. Court filing fees are set at the federal level and are generally a little over $330 for a chapter 7 case and just over $310 for a chapter 13 case, although these amounts can change. Attorney fees vary widely based on the chapter you file under and how complex your case is, with chapter 13 and chapter 11 cases usually costing more than simpler chapter 7 cases. Many Maryland bankruptcy attorneys offer payment options and will explain their fee structure during an initial consultation.",
      },
    },
    {
      "@type": "Question",
      "name": "How many times can you file bankruptcy in Maryland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "There is no lifetime limit on how many times you can file bankruptcy in Maryland, but federal law places waiting periods on how soon you can receive another discharge after a prior case. The timing rules depend on which chapter you filed before and which chapter you want to file now. For example, the waiting period between a prior chapter 7 discharge and a new chapter 7 case is different from the rules for filing a chapter 13 after a previous chapter 7. It is important to review the specific timing rules with a bankruptcy attorney to make sure you are eligible for a discharge before filing again.",
      },
    },
    {
      "@type": "Question",
      "name": "Where to file bankruptcy in Maryland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "If you live, work, or have most of your property in Maryland, your case is generally filed with the US Bankruptcy Court for the District of Maryland, not a state court. The court has multiple locations within the state, and the correct venue is usually based on your county of residence or where your primary business is located. Most attorneys file cases electronically on behalf of their clients, but individuals who file without an attorney must follow the local rules and procedures of the US Bankruptcy Court for the District of Maryland.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I file bankruptcy without my spouse in Maryland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, it is possible to file bankruptcy without your spouse in Maryland. One spouse can file individually even if the couple is married. However, whether this makes sense depends on how your debts are structured, which debts are joint, how your assets are titled, and how Maryland law treats marital and jointly owned property. In some cases an individual filing is sufficient, while in others a joint filing may provide better protection or a cleaner outcome. Because the analysis is fact-specific, it is best to review your situation with a bankruptcy attorney before deciding whether only one spouse should file.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I get fired in Maryland for bankruptcy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "In most cases, you cannot be fired solely because you filed for bankruptcy. Federal law generally prohibits both private and government employers from terminating an employee or taking adverse employment action against them just because they sought relief under the Bankruptcy Code. However, a bankruptcy filing may still appear on certain background checks and can be a factor in some sensitive roles involving money, security clearances, or positions of trust. If you are concerned about how a bankruptcy filing might affect your job or professional license in Maryland, it is important to discuss your specific situation with an experienced attorney.",
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

export default function MarylandBankruptcyLawsPage() {
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
        alt: 'Wide hero background image of Prescott, Arizona featuring Courthouse Plaza and downtown landmarks with pine-covered hills near Thumb Butte in the background, representing local bankruptcy legal help for Prescott residents.',
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
      <JsonLd id="md-bankruptcy-laws-faq" data={faqSchema} />

      <LocalNavBar />
      <PrescottHomePage />
      <AzAreas />
    </PerfPageLayout>
  );
}
