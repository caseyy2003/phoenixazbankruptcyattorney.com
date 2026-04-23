import React from 'react';

function FieldError({ message }) {
  if (!message) return null;
  return <p style={{ color: '#b13737', margin: '4px 0 0 0', fontSize: 13 }}>{message}</p>;
}

function CarLoanSection({ carKey, label, values, errors, onChange }) {
  return (
    <div style={{ marginTop: 12, borderTop: '1px solid #e1e9f2', paddingTop: 10 }}>
      <h4 style={{ margin: '0 0 8px 0', color: '#1b3a55' }}>{label}</h4>

      <label htmlFor={`${carKey}Financed`} style={{ fontWeight: 700, color: '#1b3a55' }}>Is this vehicle financed or leased?</label>
      <select
        id={`${carKey}Financed`}
        value={values[`${carKey}Financed`]}
        onChange={(event) => onChange(`${carKey}Financed`, event.target.value)}
        style={{ width: '100%', padding: '11px 10px', borderRadius: 8, border: '1px solid #c0cedd', marginTop: 6 }}
      >
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>

      <label htmlFor={`${carKey}Owed`} style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 10 }}>Amount still owed on this vehicle</label>
      <input id={`${carKey}Owed`} type="text" inputMode="decimal" value={values[`${carKey}Owed`]} onChange={(event) => onChange(`${carKey}Owed`, event.target.value)} style={{ width: '100%', padding: '11px 10px', borderRadius: 8, border: '1px solid #c0cedd', marginTop: 6 }} />
      <FieldError message={errors[`${carKey}Owed`]} />

      <label htmlFor={`${carKey}MonthlyPayment`} style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 10 }}>Monthly payment</label>
      <input id={`${carKey}MonthlyPayment`} type="text" inputMode="decimal" value={values[`${carKey}MonthlyPayment`]} onChange={(event) => onChange(`${carKey}MonthlyPayment`, event.target.value)} style={{ width: '100%', padding: '11px 10px', borderRadius: 8, border: '1px solid #c0cedd', marginTop: 6 }} />
      <FieldError message={errors[`${carKey}MonthlyPayment`]} />

      <label htmlFor={`${carKey}MonthsRemaining`} style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 10 }}>Months remaining to pay (calculation caps at 60)</label>
      <input id={`${carKey}MonthsRemaining`} type="text" inputMode="numeric" value={values[`${carKey}MonthsRemaining`]} onChange={(event) => onChange(`${carKey}MonthsRemaining`, event.target.value)} style={{ width: '100%', padding: '11px 10px', borderRadius: 8, border: '1px solid #c0cedd', marginTop: 6 }} />
      <FieldError message={errors[`${carKey}MonthsRemaining`]} />
    </div>
  );
}

export default function StepDebtDeductions({ values, errors, onChange, filingType, vehicleOwnershipAllowance }) {
  const inputStyle = {
    width: '100%',
    padding: '11px 10px',
    borderRadius: 8,
    border: '1px solid #c0cedd',
    marginTop: 6,
    color: '#132a3f',
  };

  const maxByFilingType = filingType === 'joint' ? 2 : 1;

  return (
    <section>
      <h3 style={{ marginTop: 0, color: '#163a59' }}>Step 3: Debt Deductions</h3>

      <label htmlFor="mortgagePayment" style={{ fontWeight: 700, color: '#1b3a55' }}>Average secured mortgage payment</label>
      <input id="mortgagePayment" type="text" inputMode="decimal" value={values.mortgagePayment} style={inputStyle} onChange={(event) => onChange('mortgagePayment', event.target.value)} />
      <FieldError message={errors.mortgagePayment} />

      <label htmlFor="vehicleCountClaimed" style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 12 }}>
        Number of vehicles for ownership/operating expense
      </label>
      <p style={{ margin: '4px 0 0 0', color: '#4b6277', fontSize: 13 }}>
        You can enter any number, but we cap the means test calculation at {maxByFilingType} for this filing type.
      </p>
      <select id="vehicleCountClaimed" value={values.vehicleCountClaimed} style={inputStyle} onChange={(event) => onChange('vehicleCountClaimed', event.target.value)}>
        {Array.from({ length: 9 }, (_, count) => (
          <option key={count} value={count}>{count}</option>
        ))}
      </select>
      <FieldError message={errors.vehicleCountClaimed} />
      <p style={{ margin: '6px 0 0 0', color: '#314e64', fontSize: 13 }}>
        Vehicle ownership expense used in calculation: <strong>${vehicleOwnershipAllowance.toLocaleString()}</strong>
      </p>

      <CarLoanSection carKey="car1" label="Vehicle 1" values={values} errors={errors} onChange={onChange} />
      <CarLoanSection carKey="car2" label="Vehicle 2" values={values} errors={errors} onChange={onChange} />

      <label htmlFor="priorityDebt" style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 12 }}>Priority debt deduction</label>
      <input id="priorityDebt" type="text" inputMode="decimal" value={values.priorityDebt} style={inputStyle} onChange={(event) => onChange('priorityDebt', event.target.value)} />
      <FieldError message={errors.priorityDebt} />

      <label htmlFor="chapter13AdminExpense" style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 12 }}>Chapter 13 administrative expense deduction (if applicable)</label>
      <input id="chapter13AdminExpense" type="text" inputMode="decimal" value={values.chapter13AdminExpense} style={inputStyle} onChange={(event) => onChange('chapter13AdminExpense', event.target.value)} />
      <FieldError message={errors.chapter13AdminExpense} />

      <label htmlFor="nonPriorityUnsecuredDebt" style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 12 }}>
        Non-priority unsecured debt total (optional)
      </label>
      <input id="nonPriorityUnsecuredDebt" type="text" inputMode="decimal" value={values.nonPriorityUnsecuredDebt} style={inputStyle} onChange={(event) => onChange('nonPriorityUnsecuredDebt', event.target.value)} />
      <FieldError message={errors.nonPriorityUnsecuredDebt} />
    </section>
  );
}