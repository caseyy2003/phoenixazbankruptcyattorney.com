import React, { useMemo, useState } from 'react';
import { CHAPTER13_INTAKE_SCHEMA, TAX_TYPE_OPTIONS, ATTORNEY_FEE_DEFAULTS } from '../../lib/chapter13/estimatorSchema';
import { calculateChapter13Estimate } from '../../lib/chapter13/calculations';
import { MEDIAN_INCOME_EFFECTIVE_DATE } from '../../lib/means-test/stateMedianIncomeData';

const STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

const STEP_TITLES = CHAPTER13_INTAKE_SCHEMA.map((s) => s.title);

const initialForm = {
  state: 'Arizona',
  maritalStatus: 'single',
  grossMonthlyIncome: '',
  netMonthlyIncome: '',
  primaryResidence: {
    ownsHome: 'no',
    homeValue: '',
    hasMortgage: 'no',
    mortgageCount: '1',
    mortgage1Owed: '',
    mortgage2Owed: '',
    monthlyMortgagePayment: '',
    behind: 'no',
    monthsBehind: '',
    keepHome: 'yes',
    cureArrearsThroughPlan: 'yes',
  },
  otherRealEstate: {
    hasOtherRealEstate: 'no',
    properties: [],
  },
  vehicles: {
    vehicleCount: '0',
    items: [],
  },
  taxes: {
    owesTaxes: 'no',
    items: [],
    hasOtherPriorityDebts: 'no',
    otherPriorityDebtAmount: '',
    unsecuredNonpriorityDebtAmount: '',
  },
  domesticSupport: {
    owesSupportArrears: 'no',
    arrearageAmount: '',
  },
  otherAssets: {
    hasNonExemptAssets: 'no',
    nonExemptAssetValue: '',
  },
  attorneyAndTrustee: {
    totalAttorneyFees: String(ATTORNEY_FEE_DEFAULTS.totalAttorneyFees),
    feeStructure: 'flat',
    paidBeforeFiling: String(ATTORNEY_FEE_DEFAULTS.paidBeforeFiling),
    trusteePercent: String(ATTORNEY_FEE_DEFAULTS.trusteePercent),
  },
  budget: {
    dependentsCount: '',
    housingExpense: '',
    homeMaintenanceRepairs: '',
    electricityHeatingGas: '',
    waterSewerGarbage: '',
    foodHousekeepingSupplies: '',
    childcareAndDependentCare: '',
    clothingLaundryDryCleaning: '',
    medicalDentalMedicine: '',
    transportationOtherThanCarPayment: '',
    recreationEntertainment: '',
    personalCareProductsServices: '',
    insuranceNotPayroll: '',
    taxesNotPayrollWithholding: '',
    ongoingDomesticSupport: '',
    educationForEmploymentOrChildren: '',
    charitableContributions: '',
    otherMonthlyExpenses: '',
  },
};

function currency(value) {
  return `$${Number(value || 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
}

function normalizeNumberInput(raw) {
  const cleaned = String(raw || '').replace(/,/g, '').replace(/[^\d.]/g, '');
  const parts = cleaned.split('.');
  if (parts.length <= 1) return cleaned;
  return `${parts[0]}.${parts.slice(1).join('')}`;
}

function formatNumberWithCommas(value) {
  const normalized = normalizeNumberInput(value);
  if (!normalized) return '';
  const [whole, decimal = ''] = normalized.split('.');
  const wholeFormatted = Number(whole || 0).toLocaleString();
  return decimal ? `${wholeFormatted}.${decimal}` : wholeFormatted;
}

const SCHEDULE_J_FIELDS = [
  { key: 'housingExpense', label: 'Monthly housing expense (rent or home ownership cost)', helper: 'Include your rent payment, or include your mortgage/home ownership payment if you own your residence.' },
  { key: 'homeMaintenanceRepairs', label: 'Home maintenance, repair, and upkeep', helper: 'Routine upkeep costs for your residence.' },
  { key: 'electricityHeatingGas', label: 'Electricity, heating fuel, and gas', helper: 'Utility fuel and power costs.' },
  { key: 'waterSewerGarbage', label: 'Water, sewer, and garbage', helper: 'Municipal and service utility charges.' },
  { key: 'foodHousekeepingSupplies', label: 'Food and housekeeping supplies', helper: 'Groceries and normal household consumables.' },
  { key: 'childcareAndDependentCare', label: 'Childcare and dependent care', helper: 'Daycare, after-school, or caregiving costs.' },
  { key: 'clothingLaundryDryCleaning', label: 'Clothing, laundry, and dry cleaning', helper: 'Regular clothing and garment care costs.' },
  { key: 'medicalDentalMedicine', label: 'Medical, dental, and medicine costs', helper: 'Out-of-pocket costs not already payroll-deducted.' },
  { key: 'transportationOtherThanCarPayment', label: 'Transportation other than car payments', helper: 'Fuel, maintenance, transit, parking, tolls, etc.' },
  { key: 'recreationEntertainment', label: 'Recreation and entertainment', helper: 'Reasonable recurring recreational spending.' },
  { key: 'personalCareProductsServices', label: 'Personal care products and services', helper: 'Haircuts, hygiene, and related personal care.' },
  { key: 'insuranceNotPayroll', label: 'Insurance not already deducted from payroll', helper: 'Life, disability, or other insurance paid directly.' },
  { key: 'taxesNotPayrollWithholding', label: 'Taxes not already in payroll withholding', helper: 'Taxes you pay directly outside payroll deductions.' },
  { key: 'ongoingDomesticSupport', label: 'Ongoing support payments (not arrears)', helper: 'Current support obligations that are ongoing.' },
  { key: 'educationForEmploymentOrChildren', label: 'Education expenses for employment or children', helper: 'Reasonable recurring education/training expenses.' },
  { key: 'charitableContributions', label: 'Charitable contributions', helper: 'Regular monthly charitable giving.' },
  { key: 'otherMonthlyExpenses', label: 'Other monthly expenses not listed above', helper: 'Only include recurring expenses not already captured.' },
];

function StepProgress({ step }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontWeight: 700, color: '#123b5f' }}>Step {step + 1} of {STEP_TITLES.length}: {STEP_TITLES[step]}</div>
      <div style={{ marginTop: 8, height: 8, borderRadius: 999, background: '#e5eef7' }}>
        <div style={{ width: `${((step + 1) / STEP_TITLES.length) * 100}%`, height: '100%', borderRadius: 999, background: '#1f6fb2' }} />
      </div>
    </div>
  );
}

function NumberField({ label, value, onChange, min = 0, step = '0.01', helper }) {
  return (
    <label style={{ display: 'block', marginBottom: 12 }}>
      <div style={{ fontWeight: 600, color: '#1d3c56', marginBottom: 4 }}>{label}</div>
      <input
        value={formatNumberWithCommas(value)}
        min={min}
        step={step}
        onChange={(e) => onChange(normalizeNumberInput(e.target.value))}
        type="text"
        inputMode="decimal"
        style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d3dde8' }}
      />
      {helper ? <div style={{ marginTop: 4, fontSize: 13, color: '#4c6073' }}>{helper}</div> : null}
    </label>
  );
}

function YesNo({ label, value, onChange }) {
  return (
    <label style={{ display: 'block', marginBottom: 12 }}>
      <div style={{ fontWeight: 600, color: '#1d3c56', marginBottom: 4 }}>{label}</div>
      <select value={value} onChange={(e) => onChange(e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d3dde8' }}>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
    </label>
  );
}

export default function Chapter13PlanPaymentEstimator() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);

  const canGoBack = step > 0;
  const isResultStep = step === STEP_TITLES.length - 1;

  const estimate = useMemo(() => {
    if (!isResultStep) return null;
    return calculateChapter13Estimate(form);
  }, [form, isResultStep]);

  function update(path, value) {
    setForm((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      const parts = path.split('.');
      let obj = next;
      for (let i = 0; i < parts.length - 1; i += 1) {
        obj = obj[parts[i]];
      }
      obj[parts[parts.length - 1]] = value;
      return next;
    });
  }

  function renderStateAndHousehold() {
    return (
      <>
        <label style={{ display: 'block', marginBottom: 12 }}>
          <div style={{ fontWeight: 600, color: '#1d3c56', marginBottom: 4 }}>What state do you live in?</div>
          <select value={form.state} onChange={(e) => update('state', e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d3dde8' }}>
            {STATES.map((state) => <option key={state} value={state}>{state}</option>)}
          </select>
        </label>
        <label style={{ display: 'block', marginBottom: 12 }}>
          <div style={{ fontWeight: 600, color: '#1d3c56', marginBottom: 4 }}>Are you single or married?</div>
          <select value={form.maritalStatus} onChange={(e) => update('maritalStatus', e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d3dde8' }}>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
          <div style={{ marginTop: 4, fontSize: 13, color: '#4c6073' }}>For now, this estimator assumes household size 1 for single and 2 for married. This can be expanded later.</div>
        </label>
      </>
    );
  }

  function renderIncome() {
    return (
      <>
        <NumberField label="What is your gross monthly income?" value={form.grossMonthlyIncome} onChange={(v) => update('grossMonthlyIncome', v)} />
        <NumberField label="What is your net monthly income?" value={form.netMonthlyIncome} onChange={(v) => update('netMonthlyIncome', v)} />
      </>
    );
  }

  function renderPrimaryResidence() {
    const p = form.primaryResidence;
    return (
      <>
        <YesNo label="Do you own a primary residence?" value={p.ownsHome} onChange={(v) => update('primaryResidence.ownsHome', v)} />
        {p.ownsHome === 'yes' ? (
          <>
            <NumberField label="What is the current value of your home?" value={p.homeValue} onChange={(v) => update('primaryResidence.homeValue', v)} />
            <YesNo label="Do you have a mortgage or home loan?" value={p.hasMortgage} onChange={(v) => update('primaryResidence.hasMortgage', v)} />
            {p.hasMortgage === 'yes' ? (
              <>
                <label style={{ display: 'block', marginBottom: 12 }}>
                  <div style={{ fontWeight: 600, color: '#1d3c56', marginBottom: 4 }}>How many mortgages are on the home?</div>
                  <select value={p.mortgageCount} onChange={(e) => update('primaryResidence.mortgageCount', e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d3dde8' }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </label>
                <NumberField label="What is owed on mortgage 1?" value={p.mortgage1Owed} onChange={(v) => update('primaryResidence.mortgage1Owed', v)} />
                {p.mortgageCount === '2' ? <NumberField label="What is owed on mortgage 2?" value={p.mortgage2Owed} onChange={(v) => update('primaryResidence.mortgage2Owed', v)} /> : null}
                <NumberField label="What is your monthly mortgage payment?" value={p.monthlyMortgagePayment} onChange={(v) => update('primaryResidence.monthlyMortgagePayment', v)} />
                <YesNo label="Are you behind on your mortgage payments?" value={p.behind} onChange={(v) => update('primaryResidence.behind', v)} />
                {p.behind === 'yes' ? (
                  <>
                    <NumberField label="How many months behind are you?" value={p.monthsBehind} step="1" onChange={(v) => update('primaryResidence.monthsBehind', v)} />
                    <YesNo label="Do you want to keep the house?" value={p.keepHome} onChange={(v) => update('primaryResidence.keepHome', v)} />
                    {p.keepHome === 'yes' ? <YesNo label="Do you want to bring the mortgage current through your chapter 13 plan payments?" value={p.cureArrearsThroughPlan} onChange={(v) => update('primaryResidence.cureArrearsThroughPlan', v)} /> : null}
                  </>
                ) : null}
              </>
            ) : null}
          </>
        ) : null}
      </>
    );
  }

  function addOtherProperty() {
    setForm((prev) => ({
      ...prev,
      otherRealEstate: {
        ...prev.otherRealEstate,
        properties: [
          ...prev.otherRealEstate.properties,
          {
            value: '', hasLoan: 'yes', loanCount: '1', loan1Owed: '', loan2Owed: '', monthlyPayment: '', behind: 'no', monthsBehind: '', keepProperty: 'yes', cureArrearsThroughPlan: 'yes', exemptAmount: '',
          },
        ],
      },
    }));
  }

  function renderOtherRealEstate() {
    return (
      <>
        <YesNo label="Do you own any other real estate?" value={form.otherRealEstate.hasOtherRealEstate} onChange={(v) => update('otherRealEstate.hasOtherRealEstate', v)} />
        {form.otherRealEstate.hasOtherRealEstate === 'yes' ? (
          <>
            {form.otherRealEstate.properties.map((property, index) => (
              <div key={`property-${index}`} style={{ border: '1px solid #d9e4ef', borderRadius: 10, padding: 12, marginBottom: 12 }}>
                <div style={{ fontWeight: 700, marginBottom: 8 }}>Property #{index + 1}</div>
                <NumberField label="Property value" value={property.value} onChange={(v) => {
                  const properties = [...form.otherRealEstate.properties]; properties[index].value = v; update('otherRealEstate.properties', properties);
                }} />
                <YesNo label="Is there a mortgage or loan?" value={property.hasLoan} onChange={(v) => { const properties = [...form.otherRealEstate.properties]; properties[index].hasLoan = v; update('otherRealEstate.properties', properties); }} />
                {property.hasLoan === 'yes' ? (
                  <>
                    <label style={{ display: 'block', marginBottom: 12 }}>
                      <div style={{ fontWeight: 600, color: '#1d3c56', marginBottom: 4 }}>Number of loans</div>
                      <select value={property.loanCount} onChange={(e) => { const properties = [...form.otherRealEstate.properties]; properties[index].loanCount = e.target.value; update('otherRealEstate.properties', properties); }} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d3dde8' }}><option value="1">1</option><option value="2">2</option></select>
                    </label>
                    <NumberField label="Amount owed on loan 1" value={property.loan1Owed} onChange={(v) => { const properties = [...form.otherRealEstate.properties]; properties[index].loan1Owed = v; update('otherRealEstate.properties', properties); }} />
                    {property.loanCount === '2' ? <NumberField label="Amount owed on loan 2" value={property.loan2Owed} onChange={(v) => { const properties = [...form.otherRealEstate.properties]; properties[index].loan2Owed = v; update('otherRealEstate.properties', properties); }} /> : null}
                    <NumberField label="Monthly payment" value={property.monthlyPayment} onChange={(v) => { const properties = [...form.otherRealEstate.properties]; properties[index].monthlyPayment = v; update('otherRealEstate.properties', properties); }} />
                    <YesNo label="Are you behind?" value={property.behind} onChange={(v) => { const properties = [...form.otherRealEstate.properties]; properties[index].behind = v; update('otherRealEstate.properties', properties); }} />
                    {property.behind === 'yes' ? <NumberField label="How many months behind?" step="1" value={property.monthsBehind} onChange={(v) => { const properties = [...form.otherRealEstate.properties]; properties[index].monthsBehind = v; update('otherRealEstate.properties', properties); }} /> : null}
                    <YesNo label="Do you want to keep this property?" value={property.keepProperty} onChange={(v) => { const properties = [...form.otherRealEstate.properties]; properties[index].keepProperty = v; update('otherRealEstate.properties', properties); }} />
                    <YesNo label="Do you want to cure arrears through the plan?" value={property.cureArrearsThroughPlan} onChange={(v) => { const properties = [...form.otherRealEstate.properties]; properties[index].cureArrearsThroughPlan = v; update('otherRealEstate.properties', properties); }} />
                  </>
                ) : null}
                <NumberField label="Exempt equity amount (optional estimate)" value={property.exemptAmount} helper="If unknown, leave zero. Exemptions vary by state." onChange={(v) => { const properties = [...form.otherRealEstate.properties]; properties[index].exemptAmount = v; update('otherRealEstate.properties', properties); }} />
              </div>
            ))}
            <button type="button" onClick={addOtherProperty} style={{ border: 'none', background: '#eaf3fb', color: '#205988', padding: '10px 12px', borderRadius: 8, fontWeight: 600 }}>+ Add another property</button>
          </>
        ) : null}
      </>
    );
  }

  function renderVehicles() {
    const count = Math.max(parseInt(form.vehicles.vehicleCount || '0', 10), 0);
    const needsUpdate = form.vehicles.items.length !== count;
    if (needsUpdate) {
      const items = Array.from({ length: count }, (_, idx) => form.vehicles.items[idx] || ({ ownedMonths: '', value: '', owed: '', monthlyPayment: '', interestRate: '', directArrearsAmount: '', behind: 'no', monthsBehind: '', keep: 'yes', payThroughPlan: idx < (form.maritalStatus === 'married' ? 2 : 1) ? 'yes' : 'no' }));
      setTimeout(() => update('vehicles.items', items), 0);
    }

    const throughPlanLimit = form.maritalStatus === 'married' ? 2 : 1;

    return (
      <>
        <NumberField label="How many vehicles do you own that have loans?" step="1" value={form.vehicles.vehicleCount} onChange={(v) => update('vehicles.vehicleCount', v)} />
        <div style={{ margin: '0 0 10px', color: '#4c6073', fontSize: 13 }}>Default assumption for lower-cost lawful planning: {form.maritalStatus === 'married' ? '2' : '1'} financed vehicle(s) paid through plan unless needed otherwise.</div>
        {form.vehicles.items.map((vehicle, index) => (
          <div key={`vehicle-${index}`} style={{ border: '1px solid #d9e4ef', borderRadius: 10, padding: 12, marginBottom: 12 }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Vehicle #{index + 1}</div>
            <NumberField label="How long have you owned it? (months)" step="1" value={vehicle.ownedMonths} onChange={(v) => { const items = [...form.vehicles.items]; items[index].ownedMonths = v; update('vehicles.items', items); }} />
            <NumberField label="Current value" value={vehicle.value} onChange={(v) => { const items = [...form.vehicles.items]; items[index].value = v; update('vehicles.items', items); }} />
            <NumberField label="Amount still owed" value={vehicle.owed} onChange={(v) => { const items = [...form.vehicles.items]; items[index].owed = v; update('vehicles.items', items); }} />
            <NumberField label="Monthly payment" value={vehicle.monthlyPayment} onChange={(v) => { const items = [...form.vehicles.items]; items[index].monthlyPayment = v; update('vehicles.items', items); }} />
            <NumberField label="Current interest rate (%)" value={vehicle.interestRate} onChange={(v) => { const items = [...form.vehicles.items]; items[index].interestRate = v; update('vehicles.items', items); }} />
            <YesNo label="Are you behind on payments?" value={vehicle.behind} onChange={(v) => { const items = [...form.vehicles.items]; items[index].behind = v; update('vehicles.items', items); }} />
            {vehicle.behind === 'yes' ? (
              <>
                <NumberField label="How many months behind?" step="1" value={vehicle.monthsBehind} onChange={(v) => { const items = [...form.vehicles.items]; items[index].monthsBehind = v; update('vehicles.items', items); }} />
                <NumberField label="If known, total car arrears amount to cure through plan" value={vehicle.directArrearsAmount} helper="If entered, this is used instead of monthly payment × months behind." onChange={(v) => { const items = [...form.vehicles.items]; items[index].directArrearsAmount = v; update('vehicles.items', items); }} />
              </>
            ) : null}
            <YesNo label="Do you want to keep this vehicle?" value={vehicle.keep} onChange={(v) => { const items = [...form.vehicles.items]; items[index].keep = v; update('vehicles.items', items); }} />
            <YesNo label={`Do you want to pay this vehicle through your chapter 13 plan? ${index >= throughPlanLimit ? '(extra vehicle defaults to no)' : ''}`} value={vehicle.payThroughPlan} onChange={(v) => { const items = [...form.vehicles.items]; items[index].payThroughPlan = v; update('vehicles.items', items); }} />
          </div>
        ))}
      </>
    );
  }

  function renderTaxesSupport() {
    return (
      <>
        <YesNo label="Do you owe taxes?" value={form.taxes.owesTaxes} onChange={(v) => update('taxes.owesTaxes', v)} />
        {form.taxes.owesTaxes === 'yes' ? (
          <>
            {form.taxes.items.map((tax, index) => (
              <div key={`tax-${index}`} style={{ border: '1px solid #d9e4ef', borderRadius: 10, padding: 12, marginBottom: 12 }}>
                <div style={{ fontWeight: 700, marginBottom: 8 }}>Tax debt #{index + 1}</div>
                <NumberField label="How much do you owe?" value={tax.amount} onChange={(v) => { const items = [...form.taxes.items]; items[index].amount = v; update('taxes.items', items); }} />
                <label style={{ display: 'block', marginBottom: 12 }}><div style={{ fontWeight: 600, color: '#1d3c56', marginBottom: 4 }}>What type of tax is it?</div><select value={tax.taxType} onChange={(e) => { const items = [...form.taxes.items]; items[index].taxType = e.target.value; update('taxes.items', items); }} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d3dde8' }}>{TAX_TYPE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}</select></label>
                <NumberField label="What tax year is it for?" step="1" value={tax.taxYear} onChange={(v) => { const items = [...form.taxes.items]; items[index].taxYear = v; update('taxes.items', items); }} />
                <YesNo label="Was the tax return due at least 3 years ago (including extensions)?" value={tax.returnDueThreeYearsAgo} onChange={(v) => { const items = [...form.taxes.items]; items[index].returnDueThreeYearsAgo = v; update('taxes.items', items); }} />
                <YesNo label="Was the return actually filed more than 2 years ago?" value={tax.returnFiledTwoYearsAgo} onChange={(v) => { const items = [...form.taxes.items]; items[index].returnFiledTwoYearsAgo = v; update('taxes.items', items); }} />
                <YesNo label="Was the tax assessed more than 240 days ago?" value={tax.assessed240DaysAgo} onChange={(v) => { const items = [...form.taxes.items]; items[index].assessed240DaysAgo = v; update('taxes.items', items); }} />
              </div>
            ))}
            <button type="button" onClick={() => update('taxes.items', [...form.taxes.items, { amount: '', taxType: TAX_TYPE_OPTIONS[0], taxYear: '', returnDueThreeYearsAgo: 'no', returnFiledTwoYearsAgo: 'no', assessed240DaysAgo: 'no' }])} style={{ border: 'none', background: '#eaf3fb', color: '#205988', padding: '10px 12px', borderRadius: 8, fontWeight: 600 }}>+ Add tax debt</button>
          </>
        ) : null}

        <YesNo label="Do you owe past-due child support or spousal support?" value={form.domesticSupport.owesSupportArrears} onChange={(v) => update('domesticSupport.owesSupportArrears', v)} />
        {form.domesticSupport.owesSupportArrears === 'yes' ? <NumberField label="What is the arrearage amount?" value={form.domesticSupport.arrearageAmount} onChange={(v) => update('domesticSupport.arrearageAmount', v)} /> : null}
        <YesNo label="Do you have any other priority debts?" value={form.taxes.hasOtherPriorityDebts} onChange={(v) => update('taxes.hasOtherPriorityDebts', v)} />
        {form.taxes.hasOtherPriorityDebts === 'yes' ? <NumberField label="Total amount of other priority debts" value={form.taxes.otherPriorityDebtAmount} onChange={(v) => update('taxes.otherPriorityDebtAmount', v)} /> : null}
        <NumberField label="How much unsecured debt (debt without collateral) do you have other than taxes and support obligations (credit cards, personal loans, medical bills)?" value={form.taxes.unsecuredNonpriorityDebtAmount} onChange={(v) => update('taxes.unsecuredNonpriorityDebtAmount', v)} />
      </>
    );
  }

  function renderOtherAssets() {
    return (
      <>
        <div style={{ background: '#f4f9ff', border: '1px solid #d9e8f8', borderRadius: 10, padding: 12, marginBottom: 12, color: '#304f68' }}>
          By nonexempt assets, we mean the value of property that would not be protected after applying bankruptcy exemptions. Example: if property is worth $10,000 and only $6,000 is protected, the nonexempt value is $4,000. If you are unsure, review your state exemption page on this website.
        </div>
        <YesNo label="Do you have assets that are not exempt?" value={form.otherAssets.hasNonExemptAssets} onChange={(v) => update('otherAssets.hasNonExemptAssets', v)} />
        {form.otherAssets.hasNonExemptAssets === 'yes' ? <NumberField label="Total value of nonexempt assets after exemptions" value={form.otherAssets.nonExemptAssetValue} onChange={(v) => update('otherAssets.nonExemptAssetValue', v)} /> : null}
      </>
    );
  }

  function renderAdminCosts() {
    return (
      <>
        <NumberField label="Estimated total attorney fees for the chapter 13 case" value={form.attorneyAndTrustee.totalAttorneyFees} helper="Default example is $4,500. Change this to your local estimate." onChange={(v) => update('attorneyAndTrustee.totalAttorneyFees', v)} />
        <label style={{ display: 'block', marginBottom: 12 }}>
          <div style={{ fontWeight: 600, color: '#1d3c56', marginBottom: 4 }}>How are the attorney fees structured?</div>
          <select value={form.attorneyAndTrustee.feeStructure} onChange={(e) => update('attorneyAndTrustee.feeStructure', e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d3dde8' }}><option value="flat">Flat fee</option><option value="hourly">Hourly (estimated total)</option></select>
        </label>
        <NumberField label="How much has already been paid before filing?" value={form.attorneyAndTrustee.paidBeforeFiling} onChange={(v) => update('attorneyAndTrustee.paidBeforeFiling', v)} />
        <NumberField label="Estimated chapter 13 trustee percentage fee" value={form.attorneyAndTrustee.trusteePercent} helper="Trustee percentages vary by district and can change." onChange={(v) => update('attorneyAndTrustee.trusteePercent', v)} />
      </>
    );
  }

  function renderScheduleJ() {
    const ownsHome = form.primaryResidence.ownsHome === 'yes';
    const suggestedHousingExpense = ownsHome ? form.primaryResidence.monthlyMortgagePayment : '';

    return (
      <>
        <div style={{ background: '#f4f9ff', border: '1px solid #d9e8f8', borderRadius: 10, padding: 12, marginBottom: 12, color: '#304f68' }}>
          Please estimate your monthly Schedule J living expenses below. Add your housing cost here (rent, or mortgage/home ownership cost).
        </div>
        <label style={{ display: 'block', marginBottom: 12 }}>
          <div style={{ fontWeight: 600, color: '#1d3c56', marginBottom: 4 }}>How many dependents do you support?</div>
          <select value={form.budget.dependentsCount || '0'} onChange={(e) => update('budget.dependentsCount', e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d3dde8' }}>
            {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
        {ownsHome && !form.budget.housingExpense && suggestedHousingExpense ? (
          <div style={{ marginBottom: 12, fontSize: 13, color: '#4c6073' }}>
            Tip: you entered a monthly mortgage payment of {currency(suggestedHousingExpense)} in the home section. You can use that amount for housing expense here if appropriate.
          </div>
        ) : null}
        {SCHEDULE_J_FIELDS.map((field) => (
          <NumberField
            key={field.key}
            label={field.label}
            helper={field.helper}
            value={form.budget[field.key]}
            onChange={(v) => update(`budget.${field.key}`, v)}
          />
        ))}
      </>
    );
  }

  function renderResults() {
    return (
      <>
        {estimate ? (
          <div style={{ marginTop: 16, borderTop: '2px solid #d8e5f3', paddingTop: 14 }}>
            <h3 style={{ marginTop: 0, color: '#11385d' }}>Educational estimate results</h3>
            <p style={{ margin: '6px 0' }}><strong>Estimated plan length:</strong> {estimate.planTerm.planLengthMonths} months</p>
            <p style={{ margin: '6px 0' }}><strong>Gross income median test:</strong> {estimate.planTerm.medianComparison === 'under_median' ? 'Under median (36-month term may be available)' : estimate.planTerm.medianComparison === 'over_median' ? 'Over median (60-month term usually required)' : 'Median comparison unavailable'}</p>
            <p style={{ margin: '6px 0' }}><strong>Your annualized gross income:</strong> {currency(estimate.planTerm.annualGross)}</p>
            <p style={{ margin: '6px 0' }}><strong>Estimated state median benchmark (household size {estimate.planTerm.householdSize}):</strong> {estimate.planTerm.medianAnnual ? currency(estimate.planTerm.medianAnnual) : 'Not available'}</p>
            <p style={{ margin: '6px 0' }}><strong>Required monthly payment for a feasible plan (estimated minimum):</strong> {currency(estimate.totals.requiredFeasiblePayment)}</p>
            <p style={{ margin: '6px 0' }}><strong>Estimated range:</strong> {currency(estimate.estimates.lowEstimate)} to {currency(estimate.estimates.highEstimate)}</p>
            <p style={{ margin: '6px 0' }}><strong>Likely monthly payment based on your full input (estimated):</strong> {currency(estimate.totals.probableUserPayment)}</p>
            <p style={{ margin: '6px 0' }}><strong>Budget feasibility:</strong> {estimate.feasibility.message}</p>
            <p style={{ margin: '6px 0' }}><strong>Estimated net amount required for debts/arrears/fees:</strong> {currency(estimate.totals.netBaseAmount)}</p>
            <p style={{ margin: '6px 0' }}><strong>Estimated unpaid attorney fees included:</strong> {currency(estimate.totals.unpaidAttorneyFees)}</p>
            <p style={{ margin: '6px 0' }}><strong>Estimated trustee percentage used:</strong> {(estimate.totals.trusteeRate * 100).toFixed(2)}%</p>
            <p style={{ margin: '6px 0' }}><strong>Estimated gross plan base:</strong> {currency(estimate.totals.grossPlanBase)}</p>
            <p style={{ margin: '6px 0' }}><strong>Equivalent monthly at 60 months:</strong> {currency(estimate.totals.estimatedMonthlyAt60)}</p>
            <p style={{ margin: '6px 0' }}><strong>Equivalent monthly at 36 months:</strong> {currency(estimate.totals.estimatedMonthlyAt36)}</p>
            <p style={{ margin: '6px 0' }}><strong>Total Schedule J expenses used:</strong> {currency(estimate.totals.scheduleJTotalExpenses)}</p>
            <p style={{ margin: '6px 0' }}><strong>Disposable income after Schedule J expenses:</strong> {currency(estimate.totals.netIncomeAfterScheduleJ)}</p>

            <h4 style={{ marginBottom: 8, color: '#11385d' }}>Major payment drivers</h4>
            <ul style={{ marginTop: 0, paddingLeft: '1.2rem', color: '#2a445c' }}>
              <li>Mortgage arrears to cure: {currency(estimate.drivers.homeArrearsToCure + estimate.drivers.otherRealEstateArrears)}</li>
              <li>Vehicle secured treatment + arrears: {currency(estimate.drivers.vehicleSecuredTreatment + estimate.drivers.vehicleArrearsToCure)}</li>
              <li>Nondischargeable tax debt (estimated): {currency(estimate.drivers.priorityTaxDebt)}</li>
              <li>Other priority debts: {currency(estimate.drivers.otherPriorityDebt)}</li>
              <li>Domestic support arrears: {currency(estimate.drivers.domesticSupportArrears)}</li>
              <li>Best-interest floor (nonexempt value estimate): {currency(estimate.drivers.bestInterestFloor)}</li>
              <li>Unpaid attorney fees: {currency(estimate.drivers.unpaidAttorneyFees)}</li>
              <li>Trustee fee effect: {currency(estimate.drivers.trusteeAddedAmount)}</li>
            </ul>
            <h4 style={{ marginBottom: 8, color: '#11385d' }}>General unsecured debt estimate</h4>
            <ul style={{ marginTop: 0, paddingLeft: '1.2rem', color: '#2a445c' }}>
              <li>Total unsecured nonpriority debt entered: {currency(estimate.totals.totalGeneralUnsecuredDebt)}</li>
              <li>Estimated unsecured debt paid through plan (minimum plan payment): {currency(estimate.totals.minimumScenarioUnsecuredPaid)}</li>
              <li>Estimated unsecured debt not paid / potentially discharged (minimum plan payment): {currency(estimate.totals.minimumScenarioUnsecuredNotPaidOrDischarged)}</li>
              <li>Estimated unsecured debt paid through plan (budget-based payment): {currency(estimate.totals.budgetScenarioUnsecuredPaid)}</li>
              <li>Estimated unsecured debt not paid / potentially discharged (budget-based payment): {currency(estimate.totals.budgetScenarioUnsecuredNotPaidOrDischarged)}</li>
            </ul>

            <p style={{ background: '#f8fbff', borderLeft: '4px solid #2c5f90', borderRadius: 6, padding: 10, color: '#2a455e' }}>
              Because the chapter 13 trustee takes a percentage of plan payments, the total amount paid into the plan usually needs to be higher than the raw amount owed to creditors and through-plan obligations.
            </p>

            {estimate.uncertaintyFlags.length ? (
              <div style={{ background: '#fff8e8', border: '1px solid #f2dc9d', borderRadius: 8, padding: 10, color: '#5f4a14' }}>
                <strong>Important uncertainty notes:</strong>
                <ul style={{ margin: '8px 0 0', paddingLeft: '1.2rem' }}>
                  {estimate.uncertaintyFlags.map((note) => <li key={note}>{note}</li>)}
                </ul>
              </div>
            ) : null}

            <div style={{ marginTop: 10, background: '#f8f8f8', borderRadius: 8, padding: 10, color: '#304252' }}>
              This calculator provides an educational estimate only. It is not legal advice. Actual chapter 13 plan payments depend on your full financial picture, local court practice, trustee requirements, claims filed, and other case-specific factors.
            </div>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
              <button type="button" onClick={() => window.print()} style={{ border: '1px solid #bfd3e7', background: '#fff', color: '#1e466a', borderRadius: 8, padding: '10px 14px', fontWeight: 600 }}>
                Print Results
              </button>
              <button
                type="button"
                onClick={() => {
                  const popup = window.open('', '_blank', 'width=900,height=700');
                  if (!popup) return;
                  popup.document.write(`<!doctype html><html><head><title>Chapter 13 Estimator Results</title><style>body{font-family:Arial,sans-serif;padding:24px;line-height:1.45}h1{font-size:22px}table{border-collapse:collapse;width:100%}td{padding:8px;border-bottom:1px solid #ddd}.logo{max-width:220px;height:auto;display:block;margin:0 auto 10px}</style></head><body><img class=\"logo\" src=\"${window.location.origin}/logo.svg\" alt=\"US Bankruptcy Help logo\" /><h1>Chapter 13 Estimator Results</h1><table><tr><td>Estimated plan length</td><td>${estimate.planTerm.planLengthMonths} months</td></tr><tr><td>Median status</td><td>${estimate.planTerm.medianComparison === 'under_median' ? 'Under median' : estimate.planTerm.medianComparison === 'over_median' ? 'Over median' : 'Unknown'}</td></tr><tr><td>Annualized gross income</td><td>${currency(estimate.planTerm.annualGross)}</td></tr><tr><td>State median benchmark</td><td>${estimate.planTerm.medianAnnual ? currency(estimate.planTerm.medianAnnual) : 'Not available'}</td></tr><tr><td>Required monthly payment (minimum)</td><td>${currency(estimate.totals.requiredFeasiblePayment)}</td></tr><tr><td>Likely monthly payment (based on input)</td><td>${currency(estimate.totals.probableUserPayment)}</td></tr><tr><td>Gross plan base</td><td>${currency(estimate.totals.grossPlanBase)}</td></tr><tr><td>Schedule J expenses used</td><td>${currency(estimate.totals.scheduleJTotalExpenses)}</td></tr><tr><td>Disposable income after Schedule J</td><td>${currency(estimate.totals.netIncomeAfterScheduleJ)}</td></tr><tr><td>Total unsecured nonpriority debt entered</td><td>${currency(estimate.totals.totalGeneralUnsecuredDebt)}</td></tr><tr><td>Unsecured paid (minimum plan payment)</td><td>${currency(estimate.totals.minimumScenarioUnsecuredPaid)}</td></tr><tr><td>Unsecured not paid / potentially discharged (minimum plan payment)</td><td>${currency(estimate.totals.minimumScenarioUnsecuredNotPaidOrDischarged)}</td></tr><tr><td>Unsecured paid (budget-based payment)</td><td>${currency(estimate.totals.budgetScenarioUnsecuredPaid)}</td></tr><tr><td>Unsecured not paid / potentially discharged (budget-based payment)</td><td>${currency(estimate.totals.budgetScenarioUnsecuredNotPaidOrDischarged)}</td></tr></table><p style=\"margin-top:14px\">Source: USBankruptcyHelp.com</p><p style=\"margin-top:8px\">Educational estimate only. Not legal advice.</p></body></html>`);
                  popup.document.close();
                  popup.focus();
                  popup.print();
                }}
                style={{ border: 'none', background: '#1f5c8f', color: '#fff', borderRadius: 8, padding: '10px 14px', fontWeight: 600 }}
              >
                Generate PDF / Print
              </button>
            </div>
          </div>
        ) : null}
      </>
    );
  }

  function renderStep() {
    switch (step) {
      case 0: return renderStateAndHousehold();
      case 1: return renderIncome();
      case 2: return renderPrimaryResidence();
      case 3: return renderOtherRealEstate();
      case 4: return renderVehicles();
      case 5: return renderTaxesSupport();
      case 6: return renderOtherAssets();
      case 7: return renderAdminCosts();
      case 8: return renderScheduleJ();
      case 9: return renderResults();
      default: return null;
    }
  }

  const canContinue = step < STEP_TITLES.length - 1;

  return (
    <section style={{ maxWidth: 880, margin: '2rem auto', border: '2px solid #2c5f90', borderRadius: 14, padding: 22, boxShadow: '0 14px 34px rgba(15, 40, 70, 0.18)', background: '#fff' }}>

      <h2 style={{ margin: '0 0 8px', color: '#11385d' }}>Chapter 13 Plan Payment Calculator | Yontz Law, PLLC.</h2>
      <p style={{ marginTop: 0, color: '#304b62' }}>Please enter your information below and press continue. </p>
      <p style={{ marginTop: 0, color: '#304b62', fontSize: 13 }}>Median-income reference date: {MEDIAN_INCOME_EFFECTIVE_DATE}.</p>

      <StepProgress step={step} />
      {renderStep()}

      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
        {canGoBack ? <button type="button" onClick={() => setStep((s) => s - 1)} style={{ border: '1px solid #bfd3e7', background: '#fff', color: '#1e466a', borderRadius: 8, padding: '10px 14px', fontWeight: 600 }}>Back</button> : null}
        {canContinue ? <button type="button" onClick={() => setStep((s) => s + 1)} style={{ border: 'none', background: '#1f5c8f', color: '#fff', borderRadius: 8, padding: '10px 14px', fontWeight: 600 }}>Continue</button> : null}
        {!canContinue ? <button type="button" onClick={() => { setForm(initialForm); setStep(0); }} style={{ border: 'none', background: '#1f5c8f', color: '#fff', borderRadius: 8, padding: '10px 14px', fontWeight: 600 }}>Start over</button> : null}
      </div>

      <div style={{ marginTop: 12, fontSize: 12, color: '#546a80' }}>
        {`The chapter 13 plan payment calculator is for education use only. It is not legal advice.`}
      </div>
    </section>
  );
}