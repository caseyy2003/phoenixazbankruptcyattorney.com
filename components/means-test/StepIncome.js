import React from 'react';

function FieldError({ message }) {
  if (!message) return null;
  return <p style={{ color: '#b13737', margin: '4px 0 0 0', fontSize: 13 }}>{message}</p>;
}

function statusCopy(medianPath) {
  if (medianPath === 'under_median') {
    return {
      color: '#1b7f3a',
      title: 'Based on this income check, you appear under your state median.',
      detail: 'You likely do not need to complete the deductions sections for this estimate.',
    };
  }

  return {
    color: '#955f00',
    title: 'Based on this income check, you appear above your state median.',
    detail: 'Please continue to the deductions steps to complete the means test estimate.',
  };
}

export default function StepIncome({
  values,
  errors,
  onChange,
  onCalculate,
  calculationState = { status: 'idle', medianPath: null },
  medianIncome = 0,
  annualizedIncome = 0,
  incomePeriodLabel = '',
}) {
  const inputStyle = {
    width: '100%',
    padding: '11px 10px',
    borderRadius: 8,
    border: '1px solid #c0cedd',
    marginTop: 6,
    color: '#132a3f',
  };

  const isDone = calculationState.status === 'done';
  const isLoading = calculationState.status === 'loading';

  return (
    <section>
      <h3 style={{ marginTop: 0, color: '#163a59' }}>Step 2: Current Monthly Income (Median Gateway)</h3>

      {incomePeriodLabel && (
        <p style={{ margin: '0 0 10px 0', color: '#314e64', fontWeight: 600 }}>
          Income period: {incomePeriodLabel}
        </p>
      )}

      <div style={{ background: '#f4f9ff', border: '1px solid #d8e6f7', borderRadius: 10, padding: 12, marginBottom: 14 }}>
        <p style={{ margin: 0, color: '#2f4d66', fontSize: 14 }}>
          Use your <strong>average gross monthly income</strong> for the 6 full calendar months before
          your filing month. Add gross income from those 6 months, divide by 6, and enter the
          average below (before taxes and deductions).
        </p>
      </div>

      <label htmlFor="debtor-average-income" style={{ fontWeight: 700, color: '#1b3a55' }}>Debtor average gross monthly income</label>
      <input
        id="debtor-average-income"
        type="text"
        inputMode="decimal"
        placeholder="e.g., 5,500"
        value={values.debtorAverageIncome}
        style={inputStyle}
        onChange={(event) => onChange('debtorAverageIncome', event.target.value)}
      />
      <FieldError message={errors.debtorAverageIncome} />

      <label htmlFor="spouse-average-income" style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 12 }}>
        Spouse/co-debtor average gross monthly income
      </label>
      <input
        id="spouse-average-income"
        type="text"
        inputMode="decimal"
        placeholder="Enter 0 if none"
        value={values.spouseAverageIncome}
        style={inputStyle}
        onChange={(event) => onChange('spouseAverageIncome', event.target.value)}
      />
      <FieldError message={errors.spouseAverageIncome} />

      <details style={{ marginTop: 14 }}>
        <summary style={{ cursor: 'pointer', fontWeight: 700, color: '#1b3a55' }}>Optional household contribution and help</summary>
        <label htmlFor="household-contribution" style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 10 }}>
          Regular household contribution (optional)
        </label>
        <input
          id="household-contribution"
          type="text"
          inputMode="decimal"
          placeholder="e.g., 400"
          value={values.householdContribution}
          style={inputStyle}
          onChange={(event) => onChange('householdContribution', event.target.value)}
        />
        <FieldError message={errors.householdContribution} />
      </details>

      <button
        type="button"
        style={{
          marginTop: 14,
          border: 'none',
          borderRadius: 8,
          background: '#1f5c8f',
          color: '#fff',
          fontWeight: 700,
          padding: '10px 14px',
          cursor: 'pointer',
        }}
        onClick={() => onCalculate && onCalculate()}
        disabled={isLoading}
      >
        {isLoading ? 'Calculating income check…' : 'Calculate Median Income Check'}
      </button>

      {errors.general && <FieldError message={errors.general} />}

      {isDone && (
        <div style={{ marginTop: 14, background: '#f8fbff', border: '1px solid #d8e6f7', borderRadius: 10, padding: 12 }}>
          <p style={{ margin: '0 0 6px 0', color: '#244761' }}>
            Annualized current monthly income: <strong>${annualizedIncome.toLocaleString()}</strong>
          </p>
          <p style={{ margin: '0 0 6px 0', color: '#244761' }}>
            State median income (annual): <strong>${(medianIncome || 0).toLocaleString()}</strong>
          </p>
          <p style={{ margin: 0, fontWeight: 700, color: statusCopy(calculationState.medianPath).color }}>
            {statusCopy(calculationState.medianPath).title}
          </p>
          <p style={{ margin: '4px 0 0 0', color: '#38546a' }}>{statusCopy(calculationState.medianPath).detail}</p>
        </div>
      )}
    </section>
  );
}