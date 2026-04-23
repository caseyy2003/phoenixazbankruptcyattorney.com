import { parseFormattedNumber } from './numberFormatting';

export function toCurrencyNumber(value) {
  return parseFormattedNumber(value);
}

export function calculateCurrentMonthlyIncome({
  debtorAverageIncome,
  spouseAverageIncome,
  householdContribution,
}) {
  const debtor = toCurrencyNumber(debtorAverageIncome);
  const spouse = toCurrencyNumber(spouseAverageIncome);
  const contribution = toCurrencyNumber(householdContribution);

  const combinedMonthlyIncome = debtor + spouse + contribution;
  const annualizedCurrentMonthlyIncome = combinedMonthlyIncome * 12;

  return {
    combinedMonthlyIncome,
    annualizedCurrentMonthlyIncome,
  };
}

export function calculateHouseholdSize({ filingType, dependentsCount }) {
  const base = filingType === 'joint' ? 2 : 1;
  const dependents = Math.max(0, Math.floor(toCurrencyNumber(dependentsCount)));
  return base + dependents;
}

export function getAllowedVehicleCount({ claimedVehicleCount, filingType }) {
  const requested = Math.max(0, Math.floor(toCurrencyNumber(claimedVehicleCount)));
  const maxAllowed = filingType === 'joint' ? 2 : 1;
  return Math.min(requested, maxAllowed);
}

export function getVehicleOwnershipAllowance(allowedVehicleCount) {
  if (allowedVehicleCount <= 0) return 0;
  if (allowedVehicleCount === 1) return 358;
  return 716;
}

export function calculateSecuredAverageMonthlyPayment({ monthlyPayment, monthsRemaining }) {
  const payment = toCurrencyNumber(monthlyPayment);
  const months = Math.min(Math.max(0, Math.floor(toCurrencyNumber(monthsRemaining))), 60);
  return (payment * months) / 60;
}

export function calculateHousingMortgageRentDeduction({ irsStandardAllowance, averageSecuredPayment }) {
  const standard = toCurrencyNumber(irsStandardAllowance);
  const secured = toCurrencyNumber(averageSecuredPayment);
  return Math.max(standard - secured, 0);
}

export function calculateTotalDeductions(deductions) {
  return Object.values(deductions).reduce((sum, value) => sum + toCurrencyNumber(value), 0);
}

export function calculateMeansTestDisposableIncome({ combinedMonthlyIncome, deductions }) {
  const totalDeductions = calculateTotalDeductions(deductions);
  const monthlyDisposableIncome = combinedMonthlyIncome - totalDeductions;
  const sixtyMonthDisposableIncome = monthlyDisposableIncome * 60;

  return {
    totalDeductions,
    monthlyDisposableIncome,
    sixtyMonthDisposableIncome,
  };
}