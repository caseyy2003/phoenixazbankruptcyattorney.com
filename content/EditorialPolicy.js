/* eslint-disable */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Link from "next/link";
import sectionTextStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js";

const useStyles = makeStyles((theme) => ({
  ...sectionTextStyle,
}));

export default function EditorialPolicyPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>
            <h1 className={classes.title}>Editorial Policy and Content Standards</h1>

            <p>
              We publish bankruptcy education content to help people understand their options, prepare
              better questions, and make informed decisions. Our goal is to provide helpful,
              reliable, people-first information in plain English—without hype or scare tactics.
            </p>

            <p>
              <strong>Important:</strong> The information on this site is for informational purposes
              only and is not legal advice. Bankruptcy outcomes depend on individual facts and
              changing laws and procedures. If you need advice about your situation, you should
              consult a qualified bankruptcy attorney.
            </p>

            <h2 className={classes.title}>Our Editorial Principles</h2>

            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>People first:</strong> We write for readers who are stressed and trying to
                make decisions. We aim for clarity, calm tone, and practical next steps.
              </li>

              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Accuracy over volume:</strong> We avoid publishing content that is
                speculative, exaggerated, or unclear. If we can’t explain something simply, we keep
                working until we can.
              </li>

              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Arizona and court reality:</strong> Bankruptcy is federal, but real-world
                process and trustee practices matter. We try to describe what people typically see
                in practice, while explaining where outcomes vary.
              </li>

              <li style={{ marginBottom: 0 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Plain English:</strong> We define jargon, use examples where helpful, and
                avoid legalese when a simpler explanation is available.
              </li>
            </ul>

            <h2 className={classes.title}>Who Creates and Reviews Content</h2>

            <p>
              Content is written and edited under attorney oversight. For pages that list “Reviewed
              by” information, the named attorney has reviewed and edited the page for clarity and
              legal accuracy before publication.
            </p>

            <p>
              Learn more about our attorney background on{" "}
              <Link
                href="/about-us"
                style={{ color: "#0656d3", textDecoration: "underline" }}
              >
                our About page
              </Link>
              .
            </p>

            <h2 className={classes.title}>How We Research Information</h2>

            <p>
              We rely on primary and official materials where possible, and we cross-check
              information before publishing. Depending on the topic, sources may include:
            </p>

            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Federal law and rules:</strong> the Bankruptcy Code, Federal Rules of
                Bankruptcy Procedure, and official forms.
              </li>

              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Arizona-specific authority:</strong> Arizona statutes and official guidance
                related to exemptions and local requirements.
              </li>

              <li style={{ marginBottom: 0 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Court and trustee guidance:</strong> official court websites, local rules,
                and trustee instructions where applicable.
              </li>
            </ul>

            <h2 className={classes.title}>Updates and Maintenance</h2>

            <p>
              Bankruptcy laws, forms, and procedures can change. We update pages when we become
              aware of material changes, and we also revise content for clarity when we see the same
              questions come up repeatedly in consultations.
            </p>

            <p>
              When a page includes a “Last updated” date, it reflects the most recent substantive
              edit to improve accuracy, clarity, or completeness.
            </p>

            <h2 className={classes.title}>AI and Automation Use</h2>

            <p>
              We may use AI-assisted tools to help organize topics, improve readability, and tighten
              wording. AI tools do not replace attorney judgment. Content is reviewed and edited by
              a human before publication, and we do not publish a page solely from an automated
              output without review.
            </p>

            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>What AI may help with:</strong> outlining, formatting, readability, and
                summarizing complex concepts into plain English drafts.
              </li>

              <li style={{ marginBottom: 0 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>What AI does not do:</strong> provide legal advice, determine outcomes, or
                replace attorney review of facts and law.
              </li>
            </ul>

            <h2 className={classes.title}>Corrections and Feedback</h2>

            <p>
              If you believe something on our site is inaccurate, unclear, or outdated, we want to
              know. The fastest way to flag an issue is to contact us with the page URL and the
              specific statement you’re referencing.
            </p>

            <p>
              <Link
                href="/contact-us"
                style={{ color: "#0656d3", textDecoration: "underline" }}
              >
                Contact us here
              </Link>
              .
            </p>

            <h2 className={classes.title}>Testimonials and Privacy</h2>

            <p>
              When we share client feedback excerpts, we may shorten names or remove identifying
              details to protect privacy. Testimonials reflect individual experiences and do not
              guarantee future results.
            </p>

            <h2 className={classes.title}>Advertising and Affiliates</h2>

            <p>
              If we ever publish sponsored content, paid placements, or affiliate links, we will
              clearly label them so readers can distinguish editorial content from advertising.
            </p>

            <p style={{ marginTop: 24, color: "#555" }}>
              <small>
                Last reviewed:{" "}
                <time dateTime="2026-01-08">
                  January 8, 2026
                </time>
              </small>
            </p>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}
