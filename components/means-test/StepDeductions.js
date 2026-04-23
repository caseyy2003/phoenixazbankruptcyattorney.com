import React from 'react';

const EXPENSE_FIELDS = [
  ['taxesAndPayroll', 'Taxes and mandatory payroll deductions', 'Federal/state/local taxes and required payroll deductions.'],
  ['lifeInsurance', 'Life insurance', 'Reasonable term life insurance for household protection.'],
  ['courtOrderedPayments', 'Court-ordered payments', 'Support and other legally required court-ordered monthly payments.'],
  ['childCare', 'Child care', 'Work-related child care costs that are reasonably necessary.'],
  ['education', 'Education expenses (if applicable)', 'For education related to employment, or for a physically or mentally challenged child.'],
  ['healthDisability', 'Health/disability-related expenses', 'Unreimbursed ongoing health or disability-related monthly costs.'],
  ['telecommunication', 'Telecommunication expenses', 'Necessary telecommunication costs beyond basic service where justified.'],
  ['otherNecessaryExpenses', 'Other necessary expenses', 'Necessary, documented expenses not captured elsewhere.'],
];

function FieldError({ message }) {
  if (!message) return null;
  return <p style={{ color: '#b13737', margin: '4px 0 0 0', fontSize: 13 }}>{message}</p>;
}

export default function StepDeductions({ values, errors, onChange }) {
  const inputStyle = {
    width: '100%',
    padding: '11px 10px',
    borderRadius: 8,
    border: '1px solid #c0cedd',
    marginTop: 6,
    color: '#132a3f',
  };

  return (
    <section>
      <h3 style={{ marginTop: 0, color: '#163a59' }}>Step 4: Expenses</h3>
      {EXPENSE_FIELDS.map(([field, label, help]) => (
        <div key={field} style={{ marginTop: 10 }}>
          <label htmlFor={field} style={{ fontWeight: 700, color: '#1b3a55' }}>{label}</label>
          <p style={{ margin: '4px 0 0 0', color: '#4b6277', fontSize: 13 }}>{help}</p>
          <input
            id={field}
            type="text"
            inputMode="decimal"
            value={values[field]}
            style={inputStyle}
            onChange={(event) => onChange(field, event.target.value)}
          />
          <FieldError message={errors[field]} />
        </div>
      ))}
    </section>
  );
}