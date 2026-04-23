import React from 'react';
import { STATES } from '../../lib/means-test/stateMedianIncomeData';

function FieldError({ message }) {
  if (!message) return null;
  return <p style={{ color: '#b13737', margin: '4px 0 0 0', fontSize: 13 }}>{message}</p>;
}

const DEPENDENT_COUNTS = Array.from({ length: 15 }, (_, index) => index);
const helperStyle = { margin: '4px 0 0 0', color: '#4b6277', fontSize: 13 };

export default function StepScreening({ values, errors, onChange }) {
  const inputStyle = {
    width: '100%',
    padding: '11px 10px',
    borderRadius: 8,
    border: '1px solid #c0cedd',
    marginTop: 6,
    color: '#132a3f',
    background: '#fff',
  };

  return (
    <section>
      <h3 style={{ marginTop: 0, color: '#163a59' }}>Step 1: Initial Screening</h3>

      <label htmlFor="means-state" style={{ fontWeight: 700, color: '#1b3a55' }}>Filing state</label>
      <select id="means-state" value={values.state} style={inputStyle} onChange={(event) => onChange('state', event.target.value)}>
        {STATES.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      <FieldError message={errors.state} />

      <label htmlFor="means-filing-type" style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 12 }}>Filing type</label>
      <select id="means-filing-type" value={values.filingType} style={inputStyle} onChange={(event) => onChange('filingType', event.target.value)}>
        <option value="individual">Filing alone</option>
        <option value="joint">Filing jointly</option>
      </select>
      <FieldError message={errors.filingType} />

      <label htmlFor="means-dependents" style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 12 }}>Dependents (additional people other than filer(s))</label>
      <p style={helperStyle}>If filing alone, household starts at 1. If filing jointly, household starts at 2. Add only additional dependents here.</p>
      <select id="means-dependents" value={values.dependentsCount} style={inputStyle} onChange={(event) => onChange('dependentsCount', event.target.value)}>
        {DEPENDENT_COUNTS.map((count) => (
          <option key={count} value={count}>{count}</option>
        ))}
      </select>
      <FieldError message={errors.dependentsCount} />

      <label htmlFor="means-residence" style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 12 }}>
        Do you own or rent your primary residence?
      </label>
      <select id="means-residence" value={values.residenceOwnership} style={inputStyle} onChange={(event) => onChange('residenceOwnership', event.target.value)}>
        <option value="owner">Own</option>
        <option value="renter">Rent</option>
      </select>
      <FieldError message={errors.residenceOwnership} />

      <label htmlFor="means-consumer-debt" style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 12 }}>
        Are your debts primarily consumer debts?
      </label>
      <p style={helperStyle}>Consumer debts are usually personal, family, or household debts.</p>
      <select id="means-consumer-debt" value={values.debtsPrimarilyConsumer} style={inputStyle} onChange={(event) => onChange('debtsPrimarilyConsumer', event.target.value)}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <FieldError message={errors.debtsPrimarilyConsumer} />

      <label htmlFor="means-military" style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 12 }}>
        Do you believe you may qualify for the military / National Guard / reservist exemption (Form 122A-1Supp)?
      </label>
      <select id="means-military" value={values.militaryExemption} style={inputStyle} onChange={(event) => onChange('militaryExemption', event.target.value)}>
        <option value="no">No / Not sure</option>
        <option value="yes">Yes / Possibly</option>
      </select>
      <FieldError message={errors.militaryExemption} />

      <label htmlFor="means-filing-month" style={{ fontWeight: 700, color: '#1b3a55', display: 'block', marginTop: 12 }}>Expected filing month</label>
      <input id="means-filing-month" type="month" value={values.filingMonth} style={inputStyle} onChange={(event) => onChange('filingMonth', event.target.value)} />
      <FieldError message={errors.filingMonth} />
    </section>
  );
}