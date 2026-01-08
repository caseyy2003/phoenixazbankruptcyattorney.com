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

export default function PrivacyPolicyPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>
            <h1 className={classes.title}>Privacy Policy</h1>

            <p>
              This Privacy Policy explains how we collect, use, and share information when you visit
              this website or contact us through our forms, phone, email, or other methods. We aim
              to keep this policy clear and practical.
            </p>

            <p>
              <strong>Important:</strong> Submitting information through this website does not, by
              itself, create an attorney-client relationship. Please do not send sensitive or
              confidential information until we confirm representation in writing.
            </p>

            <p style={{ color: "#555" }}>
              <small>
                Effective Date:{" "}
                <time dateTime="2026-01-08">January 8, 2026</time>
              </small>
            </p>

            <h2 className={classes.title}>1) Information We Collect</h2>

            <p>We may collect information in these categories:</p>

            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Information you provide:</strong> name, email address, phone number, and any
                details you include in messages or intake forms.
              </li>

              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Consultation request details:</strong> information you submit to help us
                understand your situation (for example: general income ranges, types of debts, or
                whether there are lawsuits, garnishments, repossession risks, or foreclosure
                concerns).
              </li>

              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Files you choose to share:</strong> if our website allows uploads, you may
                provide documents or images (for example: a pay stub or a creditor notice).
              </li>

              <li style={{ marginBottom: 0 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Automatically collected data:</strong> IP address, device type, browser
                type, pages viewed, referring/exit pages, approximate location (e.g., city/region),
                and interaction data (such as clicks or time on page), typically through logs,
                cookies, or analytics tools.
              </li>
            </ul>

            <h2 className={classes.title}>2) How We Use Information</h2>

            <p>We use information for purposes such as:</p>

            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Responding to requests:</strong> to reply to your message, follow up on a
                consultation request, and communicate about next steps.
              </li>

              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Intake and evaluation:</strong> to understand your situation at a high level
                and determine whether we may be able to help (and, when appropriate, to check for
                potential conflicts).
              </li>

              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Operating the website:</strong> to provide site functionality, prevent
                abuse, troubleshoot issues, and maintain security.
              </li>

              <li style={{ marginBottom: 0 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Improving content:</strong> to understand what pages are helpful and improve
                the site experience (for example, measuring which pages people read most often).
              </li>
            </ul>

            <h2 className={classes.title}>3) Cookies, Analytics, and Similar Technologies</h2>

            <p>
              We may use cookies and similar technologies to help the website function, understand
              site traffic, and measure performance. Cookies are small files stored on your device
              that can help remember preferences and support analytics.
            </p>

            <p>
              You can control cookies through your browser settings. If you disable cookies, some
              features may not work as intended.
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
                <strong>Service providers:</strong> vendors who help us operate the website and
                communicate with you (for example: web hosting, form providers, email services,
                analytics providers, scheduling tools, or phone systems). These providers are
                permitted to use information only to perform services for us.
              </li>

              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Legal and safety reasons:</strong> if required by law, subpoena, court
                order, or if we believe disclosure is necessary to protect rights, safety, or the
                security of the website.
              </li>

              <li style={{ marginBottom: 0 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Business changes:</strong> if our business undergoes a reorganization,
                merger, acquisition, or asset transfer, information may be transferred as part of
                that transaction, subject to appropriate confidentiality protections.
              </li>
            </ul>

            <h2 className={classes.title}>5) Contact Forms and Third-Party Tools</h2>

            <p>
              If you submit information through a form that is provided by a third-party platform,
              that platform may process your information under its own privacy terms in addition to
              this policy. We encourage you to review those policies when you submit information.
            </p>

            <p>
              We may also embed third-party content (for example, a Google Maps location embed). An
              embed may allow the third party to receive certain information (such as your IP
              address) and set cookies, depending on your settings and the provider’s policies.
            </p>

            <h2 className={classes.title}>6) Confidentiality and Attorney-Client Relationship</h2>

            <p>
              Please do not send confidential information through this website unless and until we
              have confirmed an attorney-client relationship in writing. Communications through web
              forms, email, or voicemail may not be secure and may not be treated as privileged if
              representation has not been established.
            </p>

            <h2 className={classes.title}>7) Data Retention</h2>

            <p>
              We retain information as reasonably necessary for the purposes described above, such
              as responding to inquiries, maintaining records, meeting legal/ethical obligations,
              resolving disputes, and enforcing our agreements. Retention periods vary depending on
              the type of information and the context of your request.
            </p>

            <h2 className={classes.title}>8) Security</h2>

            <p>
              We use reasonable administrative, technical, and physical safeguards designed to
              protect information. However, no method of transmission or storage is completely
              secure, and we cannot guarantee absolute security.
            </p>

            <h2 className={classes.title}>9) Your Choices</h2>

            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Cookies:</strong> you can manage cookies through your browser settings.
              </li>

              <li style={{ marginBottom: 10 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Marketing emails:</strong> if you receive email communications from us, you
                can opt out by using the unsubscribe method described in the message (when
                applicable).
              </li>

              <li style={{ marginBottom: 0 }}>
                <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
                <strong>Access or deletion requests:</strong> you can contact us to request access
                to or deletion of certain personal information, subject to legal/ethical retention
                requirements and verification.
              </li>
            </ul>

            <h2 className={classes.title}>10) Children’s Privacy</h2>

            <p>
              This website is intended for a general audience and is not directed to children under
              13. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className={classes.title}>11) Changes to This Policy</h2>

            <p>
              We may update this Privacy Policy from time to time. If we make changes, we will post
              the updated policy on this page and update the effective date above.
            </p>

            <h2 className={classes.title}>12) Contact Us</h2>

            <p>
              If you have questions about this Privacy Policy or our privacy practices, contact us
              through our{" "}
              <Link href="/contact" style={{ color: "#0656d3", textDecoration: "underline" }}>
                Contact page
              </Link>
              .
            </p>

            <p style={{ marginTop: 24, color: "#555" }}>
              <small>
                If you are looking for how we create and review content, see our{" "}
                <Link href="/editorial-policy" style={{ color: "#0656d3", textDecoration: "underline" }}>
                  Editorial Policy
                </Link>
                .
              </small>
            </p>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}
