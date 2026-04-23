import { parseFormattedNumber } from './numberFormatting';

function isEmpty(value) {
  return value === '' || value === null || value === undefined;
}

function isNegative(value) {
  const raw = String(value ?? '').trim();
  return raw.startsWith('-') || parseFormattedNumber(value) < 0;
}

export function validateScreeningStep(form) {
  const errors = {};

  if (isEmpty(form.state)) errors.state = 'Select your filing state.';
  if (isEmpty(form.dependentsCount)) errors.dependentsCount = 'Select dependents count.';
  if (isEmpty(form.filingType)) errors.filingType = 'Select filing type.';
  if (isEmpty(form.residenceOwnership)) errors.residenceOwnership = 'Select whether you own or rent.';
  if (isEmpty(form.debtsPrimarilyConsumer)) {
    errors.debtsPrimarilyConsumer = 'Select whether debts are primarily consumer debts.';
  }
  if (isEmpty(form.militaryExemption)) {
    errors.militaryExemption = 'Select whether the military exemption may apply.';
  }
  if (isEmpty(form.filingMonth)) errors.filingMonth = 'Select expected filing month.';

  return errors;
}

export function validateIncomeStep(form) {
  const errors = {};

  if (isEmpty(form.debtorAverageIncome)) {
    errors.debtorAverageIncome = 'Enter the debtor average monthly gross income.';
  } else if (isNegative(form.debtorAverageIncome)) {
    errors.debtorAverageIncome = 'Income cannot be negative.';
  }

  if (isEmpty(form.spouseAverageIncome)) {
    errors.spouseAverageIncome = 'Enter spouse/co-debtor average monthly gross income.';
  } else if (isNegative(form.spouseAverageIncome)) {
    errors.spouseAverageIncome = 'Income cannot be negative.';
  }

  if (!isEmpty(form.householdContribution) && isNegative(form.householdContribution)) {
    errors.householdContribution = 'Contribution cannot be negative.';
  }

  return errors;
}

export function validateDeductionsStep(form) {
  const errors = {};

  Object.keys(form).forEach((field) => {
    if (isEmpty(form[field])) return;
    if (isNegative(form[field])) {
      errors[field] = 'Deduction amounts must be zero or greater.';
    }
  });

  return errors;
}