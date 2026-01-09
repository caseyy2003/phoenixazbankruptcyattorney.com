/* eslint-disable */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import dynamic from "next/dynamic";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
//import Button from "/components/CustomButtons/Button.js";
//import Link from "next/link";
import sectionTextStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js";
import NextImage from "next/image";
//import PageTopicSelector from "/components/page-topic-selector/PageTopicSelector.js";
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
    // ...your existing styles...
    borderRadius: 8,
    overflow: "hidden",
    "& .lyt-embed": {
      position: "absolute",
      inset: 0,
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

export default function HistoryOfTariffsBlog() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={10} md={10}>

<h1 className={classes.title}>A Brief History of Tariffs and What Can Happen Now</h1>
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
  Tariffs have shaped the ebb and flow of U.S. economic policy for more than two centuries, swinging in popularity alongside
  shifting political winds and fiscal conditions. From early efforts to bolster fledgling American industries to the infamous
  Hawley-Smoot Tariff Act of 1930—passed in a desperate bid to help the country claw out of the Great Depression—tariffs have served
  dual roles: creating revenue and steering economic strategy. This article dives into how tariffs molded economic outcomes through
  history, explores the lingering debates around them, and draws parallels to today’s U.S.-China trade clash. We’ll also reflect on
  the perils of inflation (or worse) and consider whether the lessons of the 1930s can save us from modern-day mistakes.
</p>

<p>
  <strong>Introduction</strong>
</p>

<p>
  Tariffs are, at their simplest, taxes levied on imported goods. Straightforward, right? Well, not exactly. In the United States,
  these import taxes have long sparked controversy between those who insist they shield domestic industries and help the
  government’s purse strings and those who argue they inflate prices and trigger unwelcome trade conflicts. Deciding whether tariffs
  have helped or harmed the country over time demands that we look not just at how much money they earn, but also at their broader
  impact on jobs, consumer costs, diplomatic relationships, and overall economic health.
</p>

<h2 className={classes.title}>The Early History of U.S. Tariffs</h2>

<h3 className={classes.title}>Protecting a Young Nation (Late 18th–Early 19th Century)</h3>

<p>
  When the U.S. was still in its infancy, the government relied heavily on tariffs to generate revenue because there wasn’t a robust
  system for collecting taxes internally (Irwin, 2017). Moreover, small American businesses struggled to keep pace with established
  European competitors, so higher import duties provided them with a little breathing room—and, in some cases, even an unfair
  advantage (Taussig, 1931).
</p>

<h3 className={classes.title}>Civil War Era and Beyond</h3>

<p>
  Fast-forward to the Civil War. Tariffs were cranked up to finance the Union’s military efforts, and after the war ended, the
  protectionist mindset only intensified (Irwin, 2017). Some scholars believe these higher tariffs aided industrial development in
  the United States. Critics, on the other hand, counter that they boosted consumer prices and stunted international trade (Taussig,
  1931).
</p>

<h2 className={classes.title}>The Hawley-Smoot Tariff Act of 1930</h2>

<p>
  During the Great Depression, the Republican majority in the House of Representatives believed higher tariffs could protect American
  factories and farms and generate some much-needed government revenue (U.S. Government Publishing Office, 1930). Their solution?
  The Hawley-Smoot Tariff Act, which ramped up duties on a vast array of imported products.
</p>

<h3 className={classes.title}>What Really Happened</h3>

<p>
  Rather than ushering in a financial recovery, the move ignited a full-blown trade war. Furious global trading partners retaliated
  with tariffs of their own, slashing U.S. exports and escalating the economic crisis (Eichengreen, 2015). In the end, many experts
  say this legislation fanned the flames of the Great Depression instead of dousing them (Eichengreen, 2015).
</p>

<h2 className={classes.title}>A Quick Ferris Bueller Intermission</h2>

<div className={classes.videoItem}>
  <LiteYouTubeEmbed
    id="yuOHbyuanbY"
    title="Ferris Bueller's Day Off - Economics of Tariffs Scene"
    poster="maxresdefault"
    noCookie
    adNetwork={false}
  />
</div>


<h2 className={classes.title}>Modern Parallels: The U.S.-China Tariff Standoff</h2>

<p>
  In the late 2010s, Washington and Beijing dug in their heels over tariffs. The U.S. hoped to cut its trade deficit and protect
  intellectual property rights, while China objected to any suggestion that it overhaul its economic model (Krugman, 2018). Both
  sides lobbed escalating tariffs at each other’s goods, causing:
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
    <strong>Rising Consumer Costs:</strong> Importers faced higher duties, passing those costs on to businesses and consumers.
  </li>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Supply Chain Mayhem:</strong> Companies, especially those relying on international manufacturing, were forced to navigate
    unstable price structures and unpredictable regulations.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Global Market Jitters:</strong> Retaliatory tariffs contributed to worldwide uncertainty (World Bank, 2020).
  </li>
</ul>

<h2 className={classes.title}>Recession or Depression?</h2>

<p>
  The U.S. has generally weathered economic ups and downs with remarkable resilience, but high tariffs can put a damper on
  investments and consumer spending. Inflation is already a real concern these days. If policy missteps persist, some even worry
  about the remote possibility of hyperinflation, though traditionally it’s rare in countries with strong central banks.
</p>

<p>
  In the words of Tom Lee, Co-Founder &amp; Head of Research at Fundstrat, “The resulting market fury is not due to a reaction to a
  trade war, but rather, in our view, the fact the White House broke a core covenant of capitalism—a stable and predictable
  regulatory environment.” In other words, unpredictability unnerves investors and can spark further downward economic spirals.
</p>

<p style={{ color: "#555" }}>
  <small>
    “The resulting market fury is not due to a reaction to a trade war, but rather, in our view, the fact the White House broke a
    core covenant of capitalism — stable and predictable regulatory environment.” — Tom Lee, Co-Founder &amp; Head of Research at
    Fundstrat
  </small>
</p>

<h2 className={classes.title}>Is History Repeating Itself—or Is It Different This Time?</h2>

<p>
  At first glance, the backdrop to the Hawley-Smoot Tariff Act and today’s U.S.-China quarrel look remarkably similar. Both aim to
  boost domestic producers, and both triggered retaliatory measures. But there are key differences:
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
    <strong>Complex Globalization:</strong> Modern U.S. industries are intimately entwined with international supply chains,
    magnifying the impact of tariffs and making it tougher to pivot.
  </li>
  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    <strong>Federal Reserve Tools:</strong> Today’s Federal Reserve is armed with more sophisticated methods to counter economic
    downturns than existed in the early 1930s.
  </li>
</ul>

<p>
  Does that mean we’re safe? Well, if you happen to own a crystal ball, please let the rest of us know. Otherwise, we can only say
  this: tariffs have always been a double-edged sword. They can nurture infant industries or pump up government revenue, but they’re
  also a fast way to stoke price increases and trade discord. Without a steady hand on the regulatory tiller, as appears the way
  now, we risk chaos rather than growth.
</p>

<h2 className={classes.title}>References</h2>

<ul
  style={{
    listStyleType: "none",
    padding: 0,
    color: "#333",
  }}
>
  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Eichengreen, B. (2015). <em>Hall of Mirrors: The Great Depression, The Great Recession, and the Uses—and Misuses—of History.</em>{" "}
    Oxford University Press.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Irwin, D. A. (2017). <em>Clashing over Commerce: A History of U.S. Trade Policy.</em> University of Chicago Press.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Krugman, P. (2018, August 5). <em>Trump’s Trade War and the Future of the U.S. Economy.</em> The New York Times.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Taussig, F. W. (1931). <em>The Tariff History of the United States.</em> G.P. Putnam’s Sons.
  </li>

  <li style={{ marginBottom: 10 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    U.S. Government Publishing Office. (1930). <em>Smoot-Hawley Tariff Act (Tariff Act of 1930).</em>
  </li>

  <li style={{ marginBottom: 0 }}>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    World Bank. (2020). <em>Global Economic Prospects.</em> World Bank Publications.
  </li>
</ul>

</GridItem>
        </GridContainer>
      </div>
    </>
  );
}