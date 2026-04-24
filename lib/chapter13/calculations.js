import { getStateMedianIncome } from '../means-test/household';

export function toNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
}

export function determinePlanTerm({ state, maritalStatus, grossMonthlyIncome, householdSizeOverride }) {
  const householdSize = householdSizeOverride || (maritalStatus === 'married' ? 2 : 1);
  const medianAnnual = getStateMedianIncome(state, householdSize);
  const annualGross = toNumber(grossMonthlyIncome) * 12;

  if (!medianAnnual) {
    return {
      householdSize,
      medianAnnual: null,
      annualGross,
      planLengthMonths: 60,
      medianComparison: 'unknown',
      note: 'State median income data is unavailable. The estimator defaults to a 60-month term for caution.',
    };
  }

  const underMedian = annualGross <= medianAnnual;

  return {
    householdSize,
    medianAnnual,
    annualGross,
    planLengthMonths: underMedian ? 36 : 60,
    medianComparison: underMedian ? 'under_median' : 'over_median',
    note: underMedian
      ? 'Estimated 36-month term based on under-median gross income.'
      : 'Estimated 60-month term based on over-median gross income.',
  };
}

export function calculateArrears(monthlyPayment, monthsBehind) {
  return Math.max(toNumber(monthlyPayment) * toNumber(monthsBehind), 0);
}

export function calculateNonExemptEquity({ value, liens = [], exemptAmount = 0 }) {
  const lienTotal = (liens || []).reduce((sum, lien) => sum + toNumber(lien), 0);
  const rawEquity = Math.max(toNumber(value) - lienTotal, 0);
  const nonExemptEquity = Math.max(rawEquity - toNumber(exemptAmount), 0);

  return { rawEquity, nonExemptEquity };
}

export function screenTaxDischargeability(taxDebt) {
  const meetsTimingRules =
    taxDebt.returnDueThreeYearsAgo === 'yes' &&
    taxDebt.returnFiledTwoYearsAgo === 'yes' &&
    taxDebt.assessed240DaysAgo === 'yes';

  if (meetsTimingRules) {
    return {
      status: 'likely_dischargeable',
      includeAsPriority: false,
      note: 'Timing rules suggest this tax may be dischargeable, but legal review is still required.',
    };
  }

  const hasUnknown =
    !taxDebt.returnDueThreeYearsAgo ||
    !taxDebt.returnFiledTwoYearsAgo ||
    !taxDebt.assessed240DaysAgo;

  if (hasUnknown) {
    return {
      status: 'uncertain',
      includeAsPriority: false,
      note: 'Tax discharge status is uncertain and should be reviewed by a bankruptcy attorney.',
    };
  }

  return {
    status: 'likely_nondischargeable',
    includeAsPriority: true,
    note: 'This tax debt appears likely nondischargeable under the timing rules and is treated as priority here.',
  };
}

export function calculateUnpaidAttorneyFees(totalAttorneyFees, paidBeforeFiling) {
  return Math.max(toNumber(totalAttorneyFees) - toNumber(paidBeforeFiling), 0);
}

export function grossUpForTrustee(baseAmount, trusteeRatePercent) {
  const trusteeRate = Math.min(Math.max(toNumber(trusteeRatePercent) / 100, 0), 0.25);
  // Note: This estimator intentionally uses a simple "base + trustee %" model
  // to match user-facing expectations for this tool version. Some districts/cases
  // may effectively require a different gross-up methodology.
  const grossPlanBase = toNumber(baseAmount) * (1 + trusteeRate);

  return {
    trusteeRate,
    grossPlanBase,
    trusteeAddedAmount: Math.max(grossPlanBase - toNumber(baseAmount), 0),
    warning: null,
  };
}

export function estimateVehicleSecuredTreatment(vehicle, planLengthMonths) {
  if (vehicle.keep !== 'yes') {
    return { securedClaimEstimate: 0, arrearsToCure: 0, notes: [] };
  }

  // Jurisdictional variance note: this is a simplified placeholder and does not fully implement
  // 11 U.S.C. § 1325(a)(5), district-specific valuation standards, or Till interest methodology.
  const principalBase = vehicle.payThroughPlan === 'yes' ? Math.min(toNumber(vehicle.value), toNumber(vehicle.owed)) : 0;
  const directArrears = toNumber(vehicle.directArrearsAmount);
  const annualRate = Math.max(toNumber(vehicle.interestRate), 0);
  // For current estimator behavior, interest defaults to 0% if user does not provide it.
  const adjustedAnnualRate = annualRate;
  const planYears = Math.max(toNumber(planLengthMonths) / 12, 1);
  const securedClaimEstimate = principalBase * (1 + adjustedAnnualRate / 100 * planYears * 0.35);
  const arrearsToCure =
    directArrears > 0
      ? directArrears
      : vehicle.behind === 'yes'
        ? calculateArrears(vehicle.monthlyPayment, vehicle.monthsBehind)
        : 0;

  const notes = [];

  if (toNumber(vehicle.ownedMonths) < 30.3) {
    notes.push('Vehicle appears within 910 days of purchase. Cramdown limits may apply depending on case facts.');
  } else {
    notes.push('Vehicle appears outside 910 days. Cramdown options may exist depending on district practice and valuation evidence.');
  }

  return { securedClaimEstimate, arrearsToCure, notes };
}

export function compareFeasibility({ estimatedMonthlyPayment, netMonthlyIncome }) {
  const netIncome = toNumber(netMonthlyIncome);
  const affordabilityCap = netIncome;
  const ratio = affordabilityCap > 0 ? toNumber(estimatedMonthlyPayment) / affordabilityCap : Infinity;

  if (ratio <= 0.9) {
    return {
      outcome: 'potentially_feasible',
      message: 'Chapter 13 may be feasible based on your stated budget and net income, subject to attorney review.',
      ratio,
    };
  }

  if (ratio <= 1.1) {
    return {
      outcome: 'borderline',
      message: 'Chapter 13 appears borderline based on your current budget. Tight budgeting or plan adjustments may be needed.',
      ratio,
    };
  }

  return {
    outcome: 'likely_difficult',
    message: 'Chapter 13 appears likely difficult based on your stated budget. Review alternatives and assumptions with an attorney.',
    ratio,
  };
}

export function calculateScheduleJExpenses(budget = {}) {
  const scheduleJExpenseFields = [
    'housingExpense',
    'homeMaintenanceRepairs',
    'electricityHeatingGas',
    'waterSewerGarbage',
    'foodHousekeepingSupplies',
    'childcareAndDependentCare',
    'clothingLaundryDryCleaning',
    'medicalDentalMedicine',
    'transportationOtherThanCarPayment',
    'recreationEntertainment',
    'personalCareProductsServices',
    'insuranceNotPayroll',
    'taxesNotPayrollWithholding',
    'ongoingDomesticSupport',
    'educationForEmploymentOrChildren',
    'charitableContributions',
    'otherMonthlyExpenses',
  ];

  return scheduleJExpenseFields.reduce((sum, field) => sum + toNumber(budget[field]), 0);
}

export function calculateChapter13Estimate(data) {
  const planTerm = determinePlanTerm({
    state: data.state,
    maritalStatus: data.maritalStatus,
    grossMonthlyIncome: data.grossMonthlyIncome,
  });

  const homeArrearsToCure =
    data.primaryResidence.ownsHome === 'yes' &&
    data.primaryResidence.keepHome === 'yes' &&
    data.primaryResidence.cureArrearsThroughPlan === 'yes'
      ? calculateArrears(data.primaryResidence.monthlyMortgagePayment, data.primaryResidence.monthsBehind)
      : 0;

  const otherRealEstateArrears = (data.otherRealEstate.properties || []).reduce((sum, property) => {
    if (!(property.keepProperty === 'yes' && property.cureArrearsThroughPlan === 'yes' && property.behind === 'yes')) {
      return sum;
    }
    return sum + calculateArrears(property.monthlyPayment, property.monthsBehind);
  }, 0);

  const otherRealEstateNonExempt = (data.otherRealEstate.properties || []).reduce((sum, property) => {
    const equity = calculateNonExemptEquity({
      value: property.value,
      liens: [property.loan1Owed, property.loan2Owed],
      exemptAmount: property.exemptAmount,
    });
    return sum + equity.nonExemptEquity;
  }, 0);

  const vehicleAllowance = data.maritalStatus === 'married' ? 2 : 1;
  const vehicles = data.vehicles.items || [];

  const vehicleCalculations = vehicles.map((vehicle) => estimateVehicleSecuredTreatment(vehicle, planTerm.planLengthMonths));

  const vehicleSecuredTreatment = vehicleCalculations.reduce((sum, row) => sum + row.securedClaimEstimate, 0);
  const vehicleArrearsToCure = vehicleCalculations.reduce((sum, row) => sum + row.arrearsToCure, 0);

  const additionalVehicleNonExempt = vehicles.reduce((sum, vehicle, idx) => {
    const equity = Math.max(toNumber(vehicle.value) - toNumber(vehicle.owed), 0);
    return idx >= vehicleAllowance ? sum + equity : sum;
  }, 0);

  const taxReviews = (data.taxes.items || []).map((tax) => ({ ...tax, screening: screenTaxDischargeability(tax) }));

  const priorityTaxDebt = taxReviews.reduce(
    (sum, tax) => sum + (tax.screening.includeAsPriority ? toNumber(tax.amount) : 0),
    0
  );

  const domesticSupportArrears = data.domesticSupport.owesSupportArrears === 'yes' ? toNumber(data.domesticSupport.arrearageAmount) : 0;
  const otherPriorityDebt = data.taxes.hasOtherPriorityDebts === 'yes' ? toNumber(data.taxes.otherPriorityDebtAmount) : 0;
  const totalGeneralUnsecuredDebt = toNumber(data.taxes.unsecuredNonpriorityDebtAmount);

  const userNonExemptAssets = data.otherAssets.hasNonExemptAssets === 'yes' ? toNumber(data.otherAssets.nonExemptAssetValue) : 0;

  const bestInterestFloor =
    userNonExemptAssets +
    otherRealEstateNonExempt +
    additionalVehicleNonExempt;

  const unpaidAttorneyFees = calculateUnpaidAttorneyFees(
    data.attorneyAndTrustee.totalAttorneyFees,
    data.attorneyAndTrustee.paidBeforeFiling
  );

  const scheduleJTotalExpenses = calculateScheduleJExpenses(data.budget);
  const netIncomeAfterScheduleJ = Math.max(toNumber(data.netMonthlyIncome) - scheduleJTotalExpenses, 0);

  const baseAmount =
    homeArrearsToCure +
    otherRealEstateArrears +
    vehicleArrearsToCure +
    vehicleSecuredTreatment +
    priorityTaxDebt +
    otherPriorityDebt +
    domesticSupportArrears +
    unpaidAttorneyFees +
    bestInterestFloor;

  const trusteeGrossUp = grossUpForTrustee(baseAmount, data.attorneyAndTrustee.trusteePercent);

  const estimatedMonthlyPayment = trusteeGrossUp.grossPlanBase / planTerm.planLengthMonths;

  const uncertaintyFlags = [
    ...taxReviews.filter((tax) => tax.screening.status === 'uncertain').map(() => 'Tax dischargeability is uncertain.'),
    'Vehicle secured treatment is simplified and may vary by district, valuation method, and interest assumptions.',
    'Exemption analysis is simplified. Local exemption law can materially change best-interest outcomes.',
  ];

  const lowEstimate = estimatedMonthlyPayment * 0.92;
  const highEstimate = estimatedMonthlyPayment * 1.12;

  const requiredFeasiblePayment = estimatedMonthlyPayment;
  const probableUserPayment = Math.max(requiredFeasiblePayment, netIncomeAfterScheduleJ);
  const probableNetPlanBase = (probableUserPayment * planTerm.planLengthMonths) / (1 + (trusteeGrossUp.trusteeRate || 0));
  const fixedNonUnsecuredObligations =
    homeArrearsToCure +
    otherRealEstateArrears +
    vehicleArrearsToCure +
    vehicleSecuredTreatment +
    priorityTaxDebt +
    otherPriorityDebt +
    domesticSupportArrears +
    unpaidAttorneyFees;
  const requiredUnsecuredPayment = Math.max(bestInterestFloor, 0);
  const probableUnsecuredPayment = Math.max(probableNetPlanBase - fixedNonUnsecuredObligations, 0);
  const minimumScenarioUnsecuredPaid = Math.min(requiredUnsecuredPayment, totalGeneralUnsecuredDebt);
  const minimumScenarioUnsecuredNotPaidOrDischarged = Math.max(totalGeneralUnsecuredDebt - minimumScenarioUnsecuredPaid, 0);
  const budgetScenarioUnsecuredPaid = Math.min(probableUnsecuredPayment, totalGeneralUnsecuredDebt);
  const budgetScenarioUnsecuredNotPaidOrDischarged = Math.max(totalGeneralUnsecuredDebt - budgetScenarioUnsecuredPaid, 0);

  const feasibility = compareFeasibility({
    estimatedMonthlyPayment: requiredFeasiblePayment,
    netMonthlyIncome: netIncomeAfterScheduleJ,
  });

  return {
    planTerm,
    feasibility,
    estimates: {
      lowEstimate,
      likelyEstimate: estimatedMonthlyPayment,
      highEstimate,
    },
    totals: {
      netBaseAmount: baseAmount,
      grossPlanBase: trusteeGrossUp.grossPlanBase,
      trusteeAddedAmount: trusteeGrossUp.trusteeAddedAmount,
      trusteeRate: trusteeGrossUp.trusteeRate,
      unpaidAttorneyFees,
      estimatedMonthlyPayment: requiredFeasiblePayment,
      requiredFeasiblePayment,
      probableUserPayment,
      estimatedMonthlyAt36: trusteeGrossUp.grossPlanBase / 36,
      estimatedMonthlyAt60: trusteeGrossUp.grossPlanBase / 60,
      scheduleJTotalExpenses,
      netIncomeAfterScheduleJ,
      requiredUnsecuredPayment,
      minimumScenarioUnsecuredPaid,
      minimumScenarioUnsecuredNotPaidOrDischarged,
      budgetScenarioUnsecuredPaid,
      budgetScenarioUnsecuredNotPaidOrDischarged,
      totalGeneralUnsecuredDebt,
    },
    drivers: {
      homeArrearsToCure,
      otherRealEstateArrears,
      vehicleArrearsToCure,
      vehicleSecuredTreatment,
      priorityTaxDebt,
      otherPriorityDebt,
      domesticSupportArrears,
      bestInterestFloor,
      userNonExemptAssets,
      otherRealEstateNonExempt,
      additionalVehicleNonExempt,
      unpaidAttorneyFees,
      trusteeAddedAmount: trusteeGrossUp.trusteeAddedAmount,
    },
    taxReviews,
    vehicleNotes: vehicleCalculations.flatMap((v) => v.notes),
    uncertaintyFlags,
  };
}