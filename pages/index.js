/* eslint-disable */
import React from "react";
import PerfPageLayout from "/components/PerfPageLayout";

import JsonLd from "/components/JsonLd";
import HomepageHero from "/components/HomepageHero";
import HomePage from "../content/HomePage.js";
import AzAreas from "/components/AzAreas/AzAreas.js";



const SITE_URL = "https://www.phoenixazbankruptcyattorney.com";
const PAGE_URL = "https://www.phoenixazbankruptcyattorney.com/";

const PRIMARY_IMAGE_ID = `${PAGE_URL}#hero-image`;

const HERO_WEBP = "/img/phoenix-arizona-desert-skyline-hero-background.webp";
const HERO_JPG = "/img/phoenix-arizona-desert-skyline-hero-background.jpg";

const PUBLISHED_ISO = "2017-05-22T00:00:00-07:00";
const MODIFIED_ISO = "2026-03-05T00:00:00-07:00";

const DOC_CHECKLIST_WEBP = "/img/phoenix-bankruptcy-lawyer-consultation-document-checklist.webp";
const DOC_CHECKLIST_ID = `${PAGE_URL}#img-phoenix-consultation-document-checklist`;
const DOC_CHECKLIST_ALT =
  "Checklist graphic showing documents to gather before meeting with a Phoenix bankruptcy lawyer, including recent pay stubs, tax returns, bank statements, car loan or mortgage statements, and recent creditor notices or lawsuit papers.";


const imageSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageObject",
      "@id": PRIMARY_IMAGE_ID,
      "name": "Phoenix, AZ Bankruptcy Lawyer — Hero",
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
      "@id": DOC_CHECKLIST_ID,
      "name": "Phoenix Bankruptcy Consultation Document Checklist",
      "description": DOC_CHECKLIST_ALT,
      "caption": "Document checklist to prepare for a Phoenix bankruptcy consultation.",
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
      "name": "How Do I Know If Bankruptcy Is the Right Option in Phoenix, AZ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Bankruptcy can make sense when debt payments, lawsuits, wage garnishments, or repossession threats are no longer manageable. The quickest way to decide is to look at your goals (protecting income, keeping a car or home, stopping collection pressure), your monthly budget, and the types of debts you have. In a Phoenix bankruptcy consultation, we usually start with a clear snapshot of income, debts, and assets so you can compare bankruptcy to realistic alternatives and choose the best next step.",
      },
    },
    {
      "@type": "Question",
      "name": "Can Bankruptcy Stop Wage Garnishment or a Lawsuit in Phoenix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "In many cases, yes. Filing typically triggers the automatic stay, which generally pauses most collection activity, including wage garnishments and many lawsuits. Timing matters in Phoenix—especially if a garnishment is already hitting your paycheck or a court deadline is approaching—so it’s smart to get advice before another pay period or hearing date passes. Some situations have exceptions, and creditors may need proper notice.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I Keep My Car or Home If I File Bankruptcy in Phoenix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Often, yes—especially when there’s a clear plan. Whether you can keep your home or car depends on your equity, your payment status, and which chapter you file. Arizona’s exemption rules also play a big role. A consultation usually focuses on your liens, payoff amounts, and whether the right strategy is to protect the asset, catch up on arrears, or restructure payments.",
      },
    },
    {
      "@type": "Question",
      "name": "How Fast Can a Phoenix Bankruptcy Case Be Filed If I Have a Garnishment or Lawsuit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "It depends on how quickly accurate information can be gathered, but many filings can move quickly once the essentials are collected. If you’re dealing with a wage garnishment, a bank garnishment, a pending lawsuit, or a trustee sale date, the priority is to gather a reliable snapshot (income, debts, and key documents) so you don’t lose time to avoidable delays. If time is critical, say so right away so the next steps can be prioritized.",
      },
    },
    {
      "@type": "Question",
      "name": "What Should I Gather for a Phoenix Bankruptcy Consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "You don’t need perfect paperwork. The most helpful items are recent pay stubs (or other income proof), a list of creditors or collection letters, any lawsuit or garnishment documents, and basic housing/vehicle payment details. If you have your most recent tax return, that can help with planning. The goal is a dependable snapshot—so you can get clear answers without a lot of back-and-forth.",
      },
    },
  ],
};


const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  "name": "Yontz Law, PLLC",
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/logo.svg`,
    "contentUrl": `${SITE_URL}/logo.svg`,

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
  "@id": `${SITE_URL}#website`,
  "url": SITE_URL,
  "name": "Arizona Bankruptcy Lawyers | Yontz Law, PLLC",
  "publisher": { "@id": `${SITE_URL}#organization` },
  "inLanguage": "en-US",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/about#casey-yontz`,
  "name": "Casey Yontz",
  "jobTitle": "Bankruptcy Attorney",
  "worksFor": { "@id": `${SITE_URL}#organization` },
  "url": `${SITE_URL}/about-us`,
  "inLanguage": "en-US",
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}#legalservice`,
  "name": "Arizona Bankruptcy Lawyers | Yontz Law, PLLC",
  "url": SITE_URL,
  "telephone": "+1-480-886-0339",
  "image": [{ "@id": PRIMARY_IMAGE_ID }],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4425 E Agave Rd Suite 106",
    "addressLocality": "Phoenix",
    "addressRegion": "AZ",
    "postalCode": "85044",
    "addressCountry": "US",
  },
  "areaServed": [{ "@type": "City", "name": "Phoenix" }, { "@type": "State", "name": "Arizona" }],
  "parentOrganization": { "@id": `${SITE_URL}#organization` },
  "founder": { "@id": `${SITE_URL}/about#casey-yontz` },
  "inLanguage": "en-US",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": PAGE_URL }],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  "url": PAGE_URL,
  "name": "Phoenix, AZ Bankruptcy Lawyer | Yontz Law, PLLC",
  "description":
    "Trusted Phoenix bankruptcy lawyer at Yontz Law, PLLC. Get help with chapter 7 or chapter 13, stop garnishments, and request a free consultation.",
  "inLanguage": "en-US",
  "breadcrumb": { "@id": `${PAGE_URL}#breadcrumb` },
  "isPartOf": { "@id": `${SITE_URL}#website` },
  "publisher": { "@id": `${SITE_URL}#organization` },
  "primaryImageOfPage": { "@id": PRIMARY_IMAGE_ID },
  "datePublished": PUBLISHED_ISO,
  "dateModified": MODIFIED_ISO,
};

export default function PhoenixHome() {
  return (
    <PerfPageLayout
      title="Phoenix, AZ Bankruptcy Lawyer | Yontz Law, PLLC"
      description="Trusted Phoenix bankruptcy lawyer at Yontz Law, PLLC. Get help with chapter 7 or chapter 13, stop garnishments, and request a free consultation."
      canonical={PAGE_URL}
      contentOverlap={false}
      hero={{
        srcWebp: HERO_WEBP,
        srcJpg: HERO_JPG,
        width: 900,
        height: 600,
        alt: "Wide hero image for Arizona Bankruptcy Lawyers branded for Yontz Law, PLLC in Phoenix, Arizona.",
        priority: true,
        sizes: "(max-width: 768px) 100vw, 1200px",
        quality: 60,
        useBg: false,
        cta: <HomepageHero />,
      }}
      
    >
   

      <JsonLd id="phoenix-home-image-graph" data={imageSchemas} />
      <JsonLd id="phoenix-home-org" data={orgSchema} />
      <JsonLd id="phoenix-home-website" data={websiteSchema} />
      <JsonLd id="phoenix-home-author" data={personSchema} />
      <JsonLd id="phoenix-home-legalservice" data={legalServiceSchema} />
      <JsonLd id="phoenix-home-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="phoenix-home-webpage" data={webPageSchema} />
      <JsonLd id="phoenix-home-faq" data={faqSchema} />

      <HomePage />
      <AzAreas />
    </PerfPageLayout>
  );
}
