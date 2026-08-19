/* eslint-disable */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import sectionTextStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js";
import NextImage from "next/image";

const useStyles = makeStyles((theme) => ({
  ...sectionTextStyle,

  imgContainer: {
    width: "95%",
    maxWidth: 600,
    margin: "1.5rem auto",
  },

  bioLink: {
    color: "#1a73e8",
    textDecoration: "underline",
    textUnderlineOffset: 2,
  },

  sectionHeading: {
    marginTop: 30,
    marginBottom: 12,
  },

  profileLinksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 10,
    marginTop: 12,
    marginBottom: 8,

    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },

  profileLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "11px 14px",
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    background: "#fff",
    color: "#1a73e8",
    fontSize: "0.95rem",
    fontWeight: 600,
    textDecoration: "none",
    transition:
      "border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease",

    "&:hover": {
      borderColor: "#b7c7db",
      boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
      transform: "translateY(-1px)",
      textDecoration: "none",
      color: "#1557b0",
    },
  },

  externalArrow: {
    color: "#64748b",
    fontSize: "1rem",
    lineHeight: 1,
    flexShrink: 0,
  },

  mediaIntro: {
    color: "#555",
    marginTop: 0,
    marginBottom: 14,
    lineHeight: 1.65,
  },

  mediaGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 14,
    marginTop: 12,
  },

  mediaCard: {
    border: "1px solid #e2e8f0",
    borderRadius: 10,
    background: "#fff",
    padding: "18px 20px",
    boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
  },

  mediaCardFeatured: {
    borderLeft: "4px solid #334155",
  },

  mediaCardResearch: {
    borderLeft: "4px solid #94a3b8",
  },

  mediaTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
    marginBottom: 7,

    "@media (max-width: 600px)": {
      flexDirection: "column",
      gap: 6,
    },
  },

  mediaOutlet: {
    color: "#1f2937",
    fontWeight: 700,
    fontSize: "1rem",
    margin: 0,
  },

  mediaType: {
    display: "inline-block",
    padding: "3px 8px",
    borderRadius: 999,
    background: "#f1f5f9",
    color: "#475569",
    fontSize: "0.75rem",
    fontWeight: 700,
    whiteSpace: "nowrap",
    letterSpacing: "0.01em",
  },

  mediaTitle: {
    color: "#222",
    fontSize: "1.05rem",
    fontWeight: 600,
    lineHeight: 1.45,
    margin: "0 0 8px",
  },

  mediaDescription: {
    color: "#4b5563",
    lineHeight: 1.65,
    margin: "0 0 11px",
  },

  mediaLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    color: "#1a73e8",
    fontWeight: 600,
    textDecoration: "none",

    "&:hover": {
      color: "#1557b0",
      textDecoration: "underline",
      textUnderlineOffset: 2,
    },
  },

  consultationWrap: {
    textAlign: "center",
    margin: "30px 0 8px",
    paddingTop: 4,
  },
}));

export default function ArizonaBankrutpcyExemptions() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>
            <h2 className={classes.title}>About Casey Yontz</h2>

            <GridContainer justifyContent="center" alignItems="center">
              <GridItem xs={12} md={4}>
                <div
                  style={{
                    width: "100%",
                    maxWidth: 320,
                    margin: "0 auto 16px",
                  }}
                >
                  <NextImage
                    src="/img/casey.webp"
                    alt="Casey Yontz, Arizona bankruptcy attorney and founder of USBankruptcyHelp.com"
                    width={640}
                    height={640}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 16,
                    }}
                    sizes="(max-width: 768px) 240px, 320px"
                  />
                </div>
              </GridItem>

              <GridItem xs={12} md={8}>
                <p style={{ marginTop: 0 }}>
                  Casey Yontz is the managing attorney at{" "}
                  <strong>Yontz Law PLLC</strong>, where his practice is focused
                  exclusively on bankruptcy law. For more than{" "}
                  <strong>18 years</strong>, he has represented Arizona
                  individuals and families in <strong>thousands</strong> of
                  bankruptcy cases, helping clients stop creditor harassment,
                  address wage garnishments, deal with lawsuits and judgments,
                  and regain financial stability through <em>chapter 7</em> and{" "}
                  <em>chapter 13</em>.
                </p>

                <p>
                  Clients often reach out feeling overwhelmed, embarrassed, or
                  unsure of their options. Casey brings a calm, practical
                  approach built on deep, real-world experience in the Arizona
                  bankruptcy system. He focuses on clear explanations, accurate
                  expectations, and strategies that fit the client&apos;s goals,
                  never a one-size-fits-all plan.
                </p>

                <p>
                  Before focusing exclusively on consumer bankruptcy, Casey
                  served as{" "}
                  <strong>Bar Counsel for the State Bar of Arizona</strong> as a
                  lawyer regulation and litigation attorney. He also serves as a{" "}
                  <strong>court-appointed arbitrator</strong> for the Arizona
                  Superior Court, a volunteer public-service role connected to
                  Arizona bar membership.
                </p>

                <p>
                  Casey is also the founder of{" "}
                  <a
                    href="https://www.usbankruptcyhelp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.bioLink}
                  >
                    <strong>USBankruptcyHelp.com</strong>
                  </a>
                  , a nationwide educational resource built to help people
                  researching bankruptcy understand key concepts and
                  state-specific issues across <strong>all 50 states</strong>.
                  The goal is to make bankruptcy information easier to
                  understand so people can ask better questions, avoid common
                  mistakes, and make informed decisions about next steps.
                </p>

                <h3 className={classes.title}>Education</h3>

                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    color: "#333",
                    margin: "10px 0 0",
                  }}
                >

                  <li style={{ marginBottom: 10 }}>
                    <span
                      aria-hidden="true"
                      style={{ marginRight: "0.5ch" }}
                    >
                      •
                    </span>
                    <strong>
                      Western State University College of Law (2006):
                    </strong>{" "}
                    J.D. (Juris Doctor)
                  </li>

                  <li>
                    <span
                      aria-hidden="true"
                      style={{ marginRight: "0.5ch" }}
                    >
                      •
                    </span>
                    <strong>Ohio University (2003):</strong> Bachelor of Arts
                  </li>
                  
                  <li style={{ marginBottom: 10 }}>
                    <span
                      aria-hidden="true"
                      style={{ marginRight: "0.5ch" }}
                    >
                      •
                    </span>
                    <strong>
                      Massachusetts Institute of Technology X Pro (2025):
                    </strong>{" "}
                    Professional Certificates in Full Stack Development and AI
                    Development
                  </li>
                </ul>

                <h3
                  className={`${classes.title} ${classes.sectionHeading}`}
                >
                  Admissions and Professional Memberships
                </h3>

                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    color: "#333",
                    margin: "10px 0 0",
                  }}
                >
                  <li style={{ marginBottom: 10 }}>
                    <span
                      aria-hidden="true"
                      style={{ marginRight: "0.5ch" }}
                    >
                      •
                    </span>
                    <strong>Admitted:</strong> State Bar of Arizona; United
                    States District Court for the District of Arizona; United
                    States Supreme Court
                  </li>

                  <li style={{ marginBottom: 10 }}>
                    <span
                      aria-hidden="true"
                      style={{ marginRight: "0.5ch" }}
                    >
                      •
                    </span>
                    <strong>Bankruptcy memberships:</strong> National
                    Association of Consumer Bankruptcy Attorneys (NACBA); State
                    Bar of Arizona Bankruptcy Law Section; Maricopa County Bar
                    Association Bankruptcy Law Section; Federal Bar Association
                    Bankruptcy Section
                  </li>

                  <li>
                    <span
                      aria-hidden="true"
                      style={{ marginRight: "0.5ch" }}
                    >
                      •
                    </span>
                    <strong>Public service:</strong> Former Bar Counsel, State
                    Bar of Arizona (lawyer regulation and litigation);
                    Court-appointed arbitrator, Arizona Superior Court
                  </li>
                </ul>

                <h3
                  className={`${classes.title} ${classes.sectionHeading}`}
                >
                  Professional Profiles
                </h3>

                <div className={classes.profileLinksGrid}>
                  <a
                    href="https://www.azbar.org/for-legal-professionals/practice-tools-management/member-directory/?m=casey-yontz-165614"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.profileLink}
                  >
                    <span>State Bar of Arizona</span>
                    <span
                      className={classes.externalArrow}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/casey-yontz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.profileLink}
                  >
                    <span>LinkedIn</span>
                    <span
                      className={classes.externalArrow}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>

                  <a
                    href="https://www.avvo.com/attorneys/casey-yontz-1718298.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.profileLink}
                  >
                    <span>Avvo Attorney Profile</span>
                    <span
                      className={classes.externalArrow}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>

                  <a
                    href="https://lawyers.justia.com/lawyer/casey-yontz-1668554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.profileLink}
                  >
                    <span>Justia Lawyer Profile</span>
                    <span
                      className={classes.externalArrow}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                </div>

                <h3
                  className={`${classes.title} ${classes.sectionHeading}`}
                >
                  Media &amp; Publications
                </h3>

                <p className={classes.mediaIntro}>
                  Casey has contributed professional commentary to national
                  media and publishes research on bankruptcy, consumer debt,
                  and related financial issues.
                </p>

                <div className={classes.mediaGrid}>
                  <div
                    className={`${classes.mediaCard} ${classes.mediaCardFeatured}`}
                  >
                    <div className={classes.mediaTopRow}>
                      <p className={classes.mediaOutlet}>
                        U.S. News &amp; World Report
                      </p>

                      <span className={classes.mediaType}>
                        Expert Commentary
                      </span>
                    </div>

                    <p className={classes.mediaTitle}>
                      Student Loan Disability Discharge: Here&apos;s What You
                      Need to Know
                    </p>

                    <p className={classes.mediaDescription}>
                      Casey was quoted as a bankruptcy attorney and founder of{" "}
                      <a
                        href="https://www.usbankruptcyhelp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.bioLink}
                      >
                        USBankruptcyHelp.com
                      </a>{" "}
                      on disability discharge provisions for private student
                      loans and the importance of reviewing individual loan
                      agreements.
                    </p>

                    <a
                      href="https://money.usnews.com/loans/student-loans/articles/student-loan-disability-discharge-heres-what-you-need-to-know"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.mediaLink}
                    >
                      Read the U.S. News article
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                  <div
                    className={`${classes.mediaCard} ${classes.mediaCardResearch}`}
                  >
                    <div className={classes.mediaTopRow}>
                      <p className={classes.mediaOutlet}>USA Today</p>

                      <span className={classes.mediaType}>
                        Research Release
                      </span>
                    </div>

                    <p className={classes.mediaTitle}>
                      U.S. Bankruptcy Filings Rise 12.2%; Chapter 7 Bankruptcy
                      Cases Account for 74% of the Increase
                    </p>

                    <p className={classes.mediaDescription}>
                      Casey and{" "}
                      <a
                        href="https://www.usbankruptcyhelp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.bioLink}
                      >
                        USBankruptcyHelp.com
                      </a>{" "}
                      published an analysis of recent U.S. bankruptcy filing
                      data, including the increase in chapter 7 filings. The
                      research release was distributed through USA Today&apos;s
                      press release platform.
                    </p>

                    <a
                      href="https://www.usatoday.com/press-release/story/39349/u-s-bankruptcy-filings-rise-12-2-chapter-7-bankruptcy-cases-account-for-74-of-the-increase/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.mediaLink}
                    >
                      View the USA Today publication
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>

                <div className={classes.consultationWrap}>
                  <Button
                    color="primary"
                    size="lg"
                    href="/consultation-request"
                  >
                    Request a Free Consultation
                  </Button>
                </div>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}