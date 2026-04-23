import React from 'react';

function ResultMessage({ outcome }) {
  const map = {
    no_presumption: {
      title: 'Likely No Presumption of Abuse',
      color: '#1b7f3a',
      text: 'Based on these entries, the means test does not indicate a presumption of abuse. A full legal review is still important.',
    },
    presumption: {
      title: 'Presumption of Abuse May Apply',
      color: '#b13737',
      text: 'Your estimated means test result suggests a presumption of abuse. Speak with a bankruptcy attorney to evaluate options and exceptions.',
    },
    possible_special_circumstances: {
      title: 'Borderline Result — Special Circumstances Review May Be Needed',
      color: '#955f00',
      text: 'Your estimate falls in a range where additional debt and fact-specific review may change the outcome.',
    },
  };

  const item = map[outcome] || map.possible_special_circumstances;

  return (
    <>
      <p style={{ margin: '0 0 6px 0', fontSize: 20, fontWeight: 800, color: item.color }}>{item.title}</p>
      <p style={{ margin: 0, color: '#3a5268' }}>{item.text}</p>
    </>
  );
}

export default function StepResult({ summary, pathwayResult, screeningSummary, onPrint }) {
  const money = (value) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value || 0);

  return (
    <div id="means-test-result-summary">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <h3 style={{ color: '#163a59', margin: 0 }}>Step 6: Final Means Test Result</h3>
        <button
          type="button"
          onClick={() => onPrint && onPrint()}
          style={{ border: '1px solid #1f5c8f', borderRadius: 8, background: '#fff', color: '#1f5c8f', fontWeight: 700, padding: '8px 12px', cursor: 'pointer' }}
        >
          Print / Save PDF
        </button>
      </div>

      {screeningSummary && (
        <p style={{ marginTop: 0, color: '#3a5268', fontSize: 14 }}>
          Filing state: <strong>{screeningSummary.state}</strong> · Filing type: <strong>{screeningSummary.filingType}</strong> · Household size used: <strong>{screeningSummary.householdSize}</strong>
        </p>
      )}

      {pathwayResult === 'not_consumer_debt' ? (
        <p>You indicated debts are not primarily consumer debts, so this means-test workflow may not apply in the same way.</p>
      ) : pathwayResult === 'military_exemption' ? (
        <p>You indicated a potential military/NG/reservist exemption path (Form 122A-1Supp), which may alter means-test application.</p>
      ) : pathwayResult === 'under_median' ? (
        <>
          <p>Based on annualized income compared to your state median, this estimate indicates under-median status at the gateway step.</p>
          <p>Annualized CMI: <strong>{money(summary.annualizedCurrentMonthlyIncome)}</strong> · State median: <strong>{money(summary.stateMedianIncome)}</strong></p>
        </>
      ) : (
        <>
          <ResultMessage outcome={summary.finalOutcome} />
          <ul style={{ color: '#334e68' }}>
            <li>Combined monthly income: <strong>{money(summary.combinedMonthlyIncome)}</strong></li>
            <li>Total monthly deductions: <strong>{money(summary.totalDeductions)}</strong></li>
            <li>Monthly disposable income: <strong>{money(summary.monthlyDisposableIncome)}</strong></li>
            <li>Projected 60-month disposable income: <strong>{money(summary.sixtyMonthDisposableIncome)}</strong></li>
          </ul>
        </>
      )}

      <p style={{ color: '#6a5125', fontSize: 13, marginBottom: 0 }}>
        Educational estimate only; not legal advice. Bring this printout to your bankruptcy attorney for case-specific review.
      </p>
    </div>
  );
}