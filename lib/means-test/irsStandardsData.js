export const IRS_STANDARDS_EFFECTIVE_DATE = 'Configurable - update with current IRS + USTP data';

const NATIONAL_STANDARD_BASE = {
  1: 839,
  2: 1527,
  3: 1805,
  4: 2181,
};

const HOUSING_OPERATING_DEFAULT = {
  1: 613,
  2: 860,
  3: 1040,
  4: 1200,
};

const TRANSPORT_OPERATING_DEFAULT = {
  1: 358,
  2: 716,
};

function getByHouseholdSizeWithFallback(table, householdSize, incrementAfter4 = 200) {
  const size = Number(householdSize) || 1;

  if (size <= 4) {
    return table[size];
  }

  return table[4] + (size - 4) * incrementAfter4;
}

export function getNationalStandardAmount(householdSize) {
  return getByHouseholdSizeWithFallback(NATIONAL_STANDARD_BASE, householdSize, 345);
}

export function getHousingUtilityAllowance(householdSize) {
  return getByHouseholdSizeWithFallback(HOUSING_OPERATING_DEFAULT, householdSize, 120);
}

export function getTransportationOperatingAllowance(vehicleCount) {
  const count = Math.max(0, Math.min(2, Number(vehicleCount) || 0));
  return TRANSPORT_OPERATING_DEFAULT[count] || 0;
}