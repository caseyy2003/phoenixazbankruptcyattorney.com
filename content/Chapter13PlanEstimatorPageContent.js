/* eslint-disable */
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import sectionTextStyle from 'styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js';
import Chapter13PlanPaymentEstimator from 'components/chapter13/Chapter13PlanPaymentEstimator';
import Link from 'next/link';
const useStyles = makeStyles(() => ({
  ...sectionTextStyle,
  callout: {
    background: '#fff',
    border: '1px solid #e5e5e5',
    borderRadius: 8,
    padding: '12px 16px',
    margin: '16px 0',
  },
}));

export default function Chapter13PlanEstimatorPageContent() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={10} md={10}>
          <h1 className={classes.title}>Chapter 13 Plan Payment Calculator</h1>
          

          
<p>If you are thinking about filing chapter 13 as a way to get your finances in order and want to get an idea of what your plan payments might be, we created the chapter 13 plan payment calculator below to help you out. You should use this tool as an educational resource, and not a final determination of what your payments will be in <Link
        href="/chapter-13-bankruptcy-arizona"
        style={{ color: "#0656d3", textDecoration: "underline" }}
        prefetch={false}
      >
        chapter 13
      </Link>.</p>

<h2 className={classes.title}>How to Use the Chapter 13 Plan Payment Calculator</h2>
<p>
The calculator walks through many of the major factors that can affect chapter 13 plan payments, including your goals, income, assets, budget, secured debts, arrears, and priority debts. When you are finished, the calculator will output the following educational estimates:</p>
<ul style={{ listStyleType: "none", padding: 0, color: "#333" }}>

  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Estimated plan length
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Required minimum monthly payment for a feasible plan 
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span> 
    Likely actual monthly payment range
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Budget feasibility (does your budget allow for the required minimum payment?)
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Estimated amount required to cover debts/arrears/fees
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Estimated unpaid attorney fees to be paid through the plan (if any)
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    Your disposable income (DMI)
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    What you would pay in a 60 month plan
  </li>
  <li>
    <span aria-hidden="true" style={{ marginRight: "0.5ch" }}>•</span>
    What you would pay in a 36 month plan
  </li>
</ul>
<p>The form also includes a button that lets you create a PDF of your results, which you can save or print for your records.</p>
<Chapter13PlanPaymentEstimator />
<h2 className={classes.title}>Questions About Budget Expenses</h2>
<p>
  It's normal to have questions about what you can and cannot count as expenses in your budget. A great place to get some insight for this is the bankruptcy court's <a
    href="https://www.uscourts.gov/sites/default/files/b_6j_instructions.pdf"
    target="_blank"
    rel="noreferrer noopener"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    official instructions for schedule J
  </a>. Schedule J is the form on the bankruptcy petition where you enter your budget items when you actually file a bankruptcy case. The official instructions for schedule J provide useful guidance about the types of expenses that may be included. 
</p>
<h3 className={classes.title}>Chapter 13 Trustee Expense Guidelines</h3>
<p>
  In Arizona, some chapter 13 trustees publish expense guidelines. Chapter 13 Trustee Maney publishes his <a
    href="http://maney13trustee.com/wp-content/uploads/2025/07/TrusteeExpenseGuidelinesJuly2025.pdf"
    target="_blank"
    rel="noreferrer noopener"
    style={{ color: "#0656d3", textDecoration: "underline" }}
  >
    chapter 13 expense guidelines
  </a> for schedule J. Here in Arizona, all three trustees appear to follow similar guidelines. While actual expenses should be used, these guidelines can give you an idea of what is common.
</p>
          <div className={classes.callout}>
            <p style={{ margin: 0 }}>
             The calculator above should only be used as an educational tool. It is not legal advice.
            </p>
          </div>
          
        </GridItem>
      </GridContainer>
    </div>
  );
}