/* eslint-disable */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import dynamic from "next/dynamic";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Link from "next/link";
import sectionTextStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js";
import NextImage from "next/image";
import PageTopicSelector from "/components/page-topic-selector/PageTopicSelector.js";
//import AzAreas from "/components/AzAreas/AzAreas.js";
const LiteYouTubeEmbed = dynamic(
  () =>
    import('react-lite-youtube-embed').then(
      (mod) => mod.LiteYouTubeEmbed ?? mod.default
    ),
  { ssr: false }
);

const useStyles = makeStyles((theme) => ({
  ...sectionTextStyle,
  videoItem: {
    marginTop: 32,
    marginBottom: 16,
    width: '100%',
    maxWidth: '100%',         
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    contentVisibility: 'auto', 
    containIntrinsicSize: '700px 393px', 
    '&::before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',    
    },
    '@media (min-width: 640px)': {
      maxWidth: 700,           
    },
  },


  iframeContainer: {
    width:  '95%',
    maxWidth: 750,
    margin: '1.5rem auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  moduleWrapper: {
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100vw',
    background: '#fff',
    boxShadow:
      '0 16px 24px 2px rgba(0,0,0,0.14),' +
      '0 6px 30px 5px rgba(0,0,0,0.12),' +
      '0 8px 10px -5px rgba(0,0,0,0.2)',
    borderRadius: 6,
    padding: '20px 15px',
    margin: '32px 0',
  },
  imgContainer: {
    width: '95%',
    maxWidth: 600,
    margin: '1.5rem auto',
    
  },
  imgContainer1: {
    width: '95%',
    maxWidth: 550,
    margin: '1.5rem auto',
    
  },
  tableWrap: {
    width: '100%',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    margin: '16px 0 24px',
    borderRadius: 6,
    boxShadow:
      '0 1px 2px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.1)',
    background: '#fff',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
    fontSize: '0.95rem',
    color: '#333',
  },
  th: {
    textAlign: 'left',
    fontWeight: 700,
    padding: '12px 10px',
    borderBottom: '2px solid #e5e7eb',
    background: '#f9fafb',
    whiteSpace: 'nowrap',
    color: '#111',  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #eee',
    verticalAlign: 'top',
    color: '#333',
  },
  
}));

export default function PrescottHomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>
          


<h1 className={classes.title}>Bankruptcy Lawyers in Prescott, AZ</h1>
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: 12,
    margin: "0.5rem 0 1.25rem",
    color: "#555",
  }}
  aria-label="Attorney oversight and page update information"
>
  <NextImage
    src="/img/casey-yontz-headshot.webp"
    alt="Portrait of attorney Casey Yontz, bankruptcy lawyer"
    width={64}
    height={64}
    style={{ borderRadius: "50%" }}
    priority={false}
  />
  <div>
    <div>
      <strong>Reviewed by:</strong>{" "}
      <a
        href="/about-us#casey-yontz"
        rel="author"
        itemProp="author"
        style={{ color: "#0656d3", textDecoration: "underline" }}
      >
        Casey Yontz
      </a>
      , Attorney (18+ years bankruptcy experience)
    </div>
    <div>
      <time dateTime="2025-12-12" itemProp="dateModified">
        Last updated: December 12, 2025
      </time>
    </div>
    <div style={{ marginTop: "0.5rem" }}>
      <a
        href="/about-us#casey-yontz"
        rel="author"
        style={{ color: "#0656d3", textDecoration: "underline" }}
      >
        About the Author
      </a>
    </div>
  </div>
</div>
<p>
  If you’re searching for <strong>bankruptcy lawyers in Prescott, AZ</strong>,
  you’re probably looking for two things at once: relief you can actually feel,
  and a plan that doesn’t leave you guessing. I’m Casey Yontz, an Arizona
  bankruptcy attorney with 18+ years of experience helping people protect what
  matters, stop collection pressure, and move forward with clarity.
</p>

<p>
  This Prescott page is written for real people (not bots). You’ll find straight
  answers about timing, costs, common pitfalls, and what the process typically
  looks like—without promises or hype. Every situation is different, and the
  right next step depends on your income, assets, and goals.
</p>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>

<h2 className={classes.title}>Looking for a Bankruptcy Lawyer in Prescott?</h2>

<p>
  When someone types <strong>bankruptcy lawyer Prescott</strong> into Google,
  they’re usually dealing with one (or more) of these: credit card lawsuits,
  wage garnishment threats, nonstop collection calls, medical bills, a vehicle
  that’s falling behind, or a paycheck that can’t keep up with Arizona living
  expenses.
</p>

<p>
  Bankruptcy isn’t about “giving up.” For many people, it’s a legal reset button—used
  carefully—to stop the bleeding and rebuild stability. The key is choosing the
  right chapter and filing at the right time, with the right information on the
  paperwork.
</p>

<h2 className={classes.title}>What Bankruptcy Can (and Can’t) Do</h2>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    <strong>Stop collection activity:</strong> Bankruptcy can trigger the
    automatic stay, which typically stops most collection calls, lawsuits, and
    garnishments.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    <strong>Create a structured plan:</strong> In some cases, a repayment plan
    under chapter 13 can help you catch up on arrears over time.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    <strong>Address secured debts:</strong> Depending on your situation, you may
    be able to keep a vehicle or home and deal with missed payments.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    <strong>Deal with tax/priority issues carefully:</strong> Some debts have
    special rules (recent taxes, support obligations, certain judgments). We’ll
    identify what’s realistically on the table.
  </li>
</ul>

<p>
  Bankruptcy also has limits. It can’t fix the underlying budget overnight, it
  doesn’t erase every type of debt, and it can create risk if you file without
  understanding exemptions, transfers, or timing. That’s why a careful review
  matters.
</p>

<h2 className={classes.title}>Chapter 7 vs. Chapter 13 for Prescott Residents</h2>

<p>
  The right chapter depends on income, assets, and your goals. Here’s a
  plain-English way to think about it:
</p>

<h3 className={classes.title}>Chapter 7</h3>

<p>
  Chapter 7 is typically faster and is often used to address unsecured debts
  like credit cards, medical bills, and many personal loans. The big issues are
  (1) qualification under the means test and (2) whether your assets can be
  protected with exemptions.
</p>

<h3 className={classes.title}>Chapter 13</h3>

<p>
  Chapter 13 is a court-supervised repayment plan (usually 3–5 years). It’s
  commonly used when someone needs time to catch up on a home or vehicle, has
  income above certain limits, or has assets that need added protection.
  Exemptions still matter, but in a different way: they can affect how much
  must be paid to unsecured creditors in the plan.
</p>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>
<h2 className={classes.title}>Bankruptcy Court and 341 Meetings for Prescott Residents</h2>

<p>
  Prescott bankruptcy cases are handled in the <strong>United States Bankruptcy Court for the District of Arizona</strong>. Yavapai County
  cases (including Prescott) are assigned to the court’s <strong>Prescott office code</strong>.
</p>

<h3 className={classes.title}>Where Prescott Residents Attend 341 Meetings</h3>

<p>
  The <strong>341 meeting</strong> (also called the “meeting of creditors”) is not a courtroom hearing and it is typically not held in front
  of a judge. It’s usually a short, scheduled meeting run by the trustee where you answer basic questions under oath about your paperwork,
  income, assets, and debts.
</p>

<p>
  <strong>How 341 meetings work now:</strong> In Arizona, most chapter 7, chapter 12, and chapter 13 341 meetings are conducted
  <strong> virtually via Zoom</strong>. The Meeting ID / passcode (and phone audio option, if needed) are usually tied to the assigned
  trustee and appear on your official notice.
</p>
<p>
  You’ll receive an official court notice after a bankruptcy case is filed. This notice includes key details like your case
  number, the trustee information, and instructions for attending the 341 meeting.
  {" "}
  <a
    href="https://www.uscourts.gov/forms-rules/forms/bankruptcy-forms"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    See the official bankruptcy notice forms (Official Form 309 series)
  </a>
  {" "}
  so you know what the notice looks like and where the meeting information appears.
</p>

<p>
  For additional context on what to expect at the meeting, the U.S. Trustee Program explains how 341 meetings work and why the
  instructions on your notice matter.
  {" "}
  <a
    href="https://www.justice.gov/ust/moc"
    target="_blank"
    rel="noopener noreferrer nofollow"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    U.S. Trustee Program: Section 341 Meeting of Creditors
  </a>
  .
</p>

<p>
  <strong>Before Zoom:</strong> 341 meetings were typically held in-person at designated meeting locations. Today, the default format is
  usually remote unless the trustee’s notice says otherwise.
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Look at your official notice:</strong> It will show the date/time and the instructions to join (Zoom link/Meeting ID, passcode,
    and any audio-only details).
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Have ID ready:</strong> Be prepared to show government-issued photo ID and proof of your Social Security number (the trustee’s
    office will specify exactly what they want and how).
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Choose a quiet spot:</strong> Good audio matters. Treat it like an appointment—log in early and avoid background noise.
  </li>
</ul>

<h3 className={classes.title}>What Bankruptcy Court Serves Prescott?</h3>

<p>
  Prescott residents file under the <strong>District of Arizona</strong>, and Yavapai County cases are assigned under the court’s “Prescott”
  office code. Filing and payment can generally be handled through the court’s official channels, and the court also has listed hearing
  locations around the state.
</p>

<h3 className={classes.title}>If Your Case Needs a Court Hearing</h3>

<p>
  Most bankruptcy cases don’t require you to appear in a courtroom. That said, some cases do involve hearings—more commonly in
  <strong> chapter 13</strong>, where issues like motions to lift the automatic stay, plan objections, or other contested matters can come up.
</p>

<p>
  In Arizona, many hearings are conducted <strong>remotely</strong> (Zoom/telephonic) under the court’s procedures. If a hearing is set in
  your case, you’ll receive a notice that tells you <strong>exactly</strong> how to attend and whether it’s remote or in-person.
</p>

<p>
  <strong>If an in-person appearance is required</strong>, the notice will list the location. For northern Arizona matters, a common hearing
  site is the <strong>Flagstaff hearing location</strong>. Depending on the judge and the issue, some proceedings may also be set in the
  <strong>Phoenix</strong> courthouse. Always rely on your notice of hearing for the authoritative location and instructions.
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Read the notice line-by-line:</strong> It will say whether you appear by Zoom, telephone, or in person.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Test your connection ahead of time:</strong> If the hearing is by Zoom, check your camera/mic and join a few minutes early.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Plan travel only if the notice requires it:</strong> If you must attend in person, arrive early, bring the hearing notice, and
    expect security screening.
  </li>
</ul>

<p style={{ fontSize: "0.95rem", color: "#666" }}>
  Note: Court procedures can change. Your trustee’s notice for the 341 meeting and your court notice of hearing control the time, format,
  and location for your specific case.
</p>

<h2 className={classes.title}>
  Local Insights: Prescott Life and Common Bankruptcy Pressure Points
</h2>

<p>
  Prescott has its own rhythm. Downtown around Courthouse Plaza and Whiskey Row
  stays busy, and many residents balance a mix of local work, commuting toward
  Prescott Valley, and seasonal income patterns. We also see a lot of long-time
  homeowners and retirees—people who may have equity concerns, fixed-income
  budgeting issues, or medical-related debt that snowballed quickly.
</p>

<p>
  In practical terms, Prescott bankruptcy filings often turn on questions like:
  “Can I protect my home equity under Arizona exemptions?” “What happens if I
  co-signed for a family member?” “Can I keep my truck if I’m behind?” “Will a
  credit card lawsuit turn into a wage garnishment?” These are the kinds of
  nuts-and-bolts issues we focus on from day one.
</p>

<h2 className={classes.title}>
  How We Approach Prescott AZ Bankruptcy Attorneys Work
</h2>

<p>
  If you’re comparing <strong>Prescott AZ bankruptcy attorneys</strong>, look
  for someone who’s comfortable with details and explains the “why,” not just
  the “what.” My approach is simple:
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    <strong>Listen first:</strong> What’s the real problem—lawsuit pressure,
    foreclosure risk, vehicle repossession, or just drowning?
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    <strong>Map the risks:</strong> Equity, transfers, tax refunds, recent
    payments to family, business income, and timing.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    <strong>Choose the chapter that fits:</strong> The “best” chapter is the
    one that matches your goals and your numbers.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    <strong>Make it manageable:</strong> Clear checklist, clear timeline, and
    no mystery about what happens next.
  </li>
</ul>

<p>
  We’re Phoenix-based, and we help people across Arizona, including Prescott.
  Consultations can be handled remotely as an option, and if an in-person
  meeting is important for your situation, we can talk through what makes sense.
</p>

<h2 className={classes.title}>
  Common Questions We Hear From Prescott AZ Bankruptcy Lawyer Consultations
</h2>

<h3 className={classes.title}>“Do I qualify?”</h3>

<p>
  Qualification depends on household income, household size, and the type of
  debt you have. We’ll walk through the means-test basics and your monthly
  budget to see what’s realistic.
</p>

<h3 className={classes.title}>“Will I lose my house or car?”</h3>

<p>
  The honest answer is: it depends on equity, exemptions, and whether you’re
  current. Many clients are surprised by what can be protected—but there are
  also scenarios where filing without planning creates avoidable risk. We’ll
  identify the safe path before you commit.
</p>

<h3 className={classes.title}>“How fast does this stop creditors?”</h3>

<p>
  In many cases, the automatic stay begins when the case is filed. Timing
  matters if there’s a pending lawsuit, garnishment, or repossession risk, so
  earlier planning usually creates more options.
</p>

<h3 className={classes.title}>“What will this cost?”</h3>

<p>
  Fees vary based on complexity and chapter type. During a consultation, we’ll
  explain typical cost ranges and the factors that can change them—no pressure,
  no sales games.
</p>

<h2 className={classes.title}>What Clients Say About Our Prescott Bankruptcy Lawyer Services</h2>

<p>
  If you’re researching <strong>bankruptcy lawyers in Prescott, AZ</strong>, it helps to hear from real people who have been through the
  stress and uncertainty that debt can bring. Below are a few reviews from clients who worked with us.
</p>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
    marginTop: "16px",
  }}
>
  {/* Review Card 1 */}
  <div
    style={{
      border: "1px solid #e5e5e5",
      borderRadius: "12px",
      padding: "16px",
      background: "#fff",
    }}
  >
    <p style={{ margin: 0, fontWeight: 700 }}>“Great empathy… walked me through the process.”</p>
    <p style={{ marginTop: "10px" }}>
      Casey is a great lawyer that shows great empathy — I was shaken and terrified before the call but Casey walked me through the process
      and reassured me endlessly. Throughout the conversation, he made me feel comfortable and confident. I know I am in good hands because
      of him. He practically saved my life. I thank him for giving me a new start and all that he has done for me. I highly recommend him,
      best lawyer in THIS world!
    </p>
    <p style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}>— Tiffany T.</p>
  </div>

  {/* Review Card 2 */}
  <div
    style={{
      border: "1px solid #e5e5e5",
      borderRadius: "12px",
      padding: "16px",
      background: "#fff",
    }}
  >
    <p style={{ margin: 0, fontWeight: 700 }}>“Super knowledgeable and caring.”</p>
    <p style={{ marginTop: "10px" }}>
      Casey is a life saver. I did not know what to do or where to turn, but Casey had the answers. Super knowledgeable and caring. If you or
      anyone you know is in a financial bad place in life or you are helping to clean up an elder parent's affairs, call this office. Don't
      wait!!!
    </p>
    <p style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}>— Bonnie Y.</p>
  </div>

  {/* Review Card 3 */}
  <div
    style={{
      border: "1px solid #e5e5e5",
      borderRadius: "12px",
      padding: "16px",
      background: "#fff",
    }}
  >
    <p style={{ margin: 0, fontWeight: 700 }}>“Helpful and hardworking.”</p>
    <p style={{ marginTop: "10px" }}>
      Casey was helpful and hardworking to resolve our legal needs. We are 100% satisfied and would recommend him to our family and friends.
    </p>
    <p style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}>— Shea K.</p>
  </div>
</div>

<p style={{ marginTop: "16px" }}>
  Looking for a <strong>Prescott AZ bankruptcy lawyer</strong> who treats you like a person and explains the process clearly? We’re here to
  help you understand your options and choose a path forward that fits your situation.
</p>

<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>


<h2 className={classes.title}>Serving Prescott and Nearby Areas</h2>

<p>
  If you’re looking for a <strong>Prescott AZ bankruptcy lawyer</strong>, we can
  help whether you live in the heart of town or in nearby communities. Many
  clients prefer to handle meetings by phone/video as an option, and we also
  discuss in-person options when it’s helpful.
</p>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    Downtown Prescott / Courthouse Plaza area
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    Williamson Valley
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    Thumb Butte area
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    Prescott Lakes
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    Hassayampa Village area
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    Prescott Valley
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    Chino Valley
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    Dewey-Humboldt
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    Mayer / Paulden (case-by-case)
  </li>
</ul>

<h2 className={classes.title}>Practical Next Steps If You’re Considering Bankruptcy</h2>

<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    <strong>Make a quick list of debts:</strong> credit cards, medical bills,
    personal loans, lawsuits, tax notices, and secured debts.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    <strong>Know your income picture:</strong> last 6 months of pay stubs (or
    self-employment records) usually tells the story.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    <strong>Don’t panic-move assets:</strong> Transfers, “selling” to family,
    or draining accounts can create avoidable problems.
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>
      •
    </span>
    <strong>Talk before the crisis date:</strong> If there’s a lawsuit hearing,
    garnishment start date, or repossession risk, timing matters.
  </li>
</ul>
<h3 className={classes.title}>Document Checklist for Your Bankruptcy Consultation</h3>
<p>
  If you’re thinking about bankruptcy, the easiest way to get clear answers fast is to gather a few key documents ahead of time.
  This checklist covers the most common items we’ll review in a Prescott bankruptcy lawyer consultation.
</p>
<div className={classes.imgContainer}>
              <NextImage
                src="/img/prescott-bankruptcy-consultation-document-checklist.webp"
                alt="Checklist graphic of documents to gather before speaking with a Prescott bankruptcy lawyer, including pay stubs, tax returns, bank statements, and creditor notices."
                layout="responsive"
                width={850}           
                height={567}
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 700px, 900px"
                quality={75}
                priority={false}
                decoding="async"
              />
            </div>
<div style={{ textAlign: "center", margin: "2rem 0" }}>
  <Button color="primary" size="lg" href="/consultation-request">
    Request a Free Consultation
  </Button>
</div>

<h2 className={classes.title}>Talk With a Prescott Bankruptcy Lawyer Without Pressure</h2>

<p>
  If you need a <strong>Prescott bankruptcy lawyer</strong>, the goal of a
  consultation is simple: get your facts on the table, understand your realistic
  options, and leave with a plan. No legal guarantees—just experienced guidance
  and a clear next step.
</p>

          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}