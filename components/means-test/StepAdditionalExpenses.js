import React from 'react';

const ADDITIONAL_FIELDS = [
  ['healthInsurance', 'Health insurance', 'Monthly health insurance premiums (Form 122A line 25 area).'],
  ['disabilityInsurance', 'Disability insurance', 'Monthly disability insurance premiums where applicable.'],
  ['healthSavings', 'Health savings account (HSA)', 'Regular HSA contribution amount, if applicable.'],
  ['elderCareSupport', 'Care/support for elderly, chronically ill, or disabled', 'Ongoing necessary care/support costs for qualifying individuals.'],
  ['dependentEducationUnder18', 'Education expenses for dependent children under 18', 'Reasonable and necessary dependent education costs under the form rules.'],
  ['additionalFoodClothing', 'Additional food and clothing expense', 'Documented additional food/clothing costs beyond basic standards when justified.'],
  ['charitableContributions', 'Charitable contributions', 'Regular charitable giving allowed under applicable limits.'],
  ['familyViolenceProtection', 'Protection against family violence', 'Reasonable and necessary expenses for safety/protection from family violence.'],
  ['excessHomeEnergy', 'Home energy costs in excess of the allowance', 'Documented home energy costs above the standard allowance where permitted.'],
];

function FieldError({ message }) {
  if (!message) return null;
  return <p style={{ color: '#b13737', margin: '4px 0 0 0', fontSize: 13 }}>{message}</p>;
}

export default function StepAdditionalExpenses({ values, errors, onChange }) {
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
      <h3 style={{ marginTop: 0, color: '#163a59' }}>Step 5: Additional Expenses</h3>
      <p style={{ color: '#425d73' }}>Enter additional allowed expenses used in the means test analysis.</p>

      {ADDITIONAL_FIELDS.map(([field, label, help]) => (
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