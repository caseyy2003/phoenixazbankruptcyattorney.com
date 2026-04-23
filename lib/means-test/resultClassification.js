export const PRESUMPTION_THRESHOLDS = {
    effectiveDate: 'Update when DOJ/USTP thresholds are revised',
    lowerBound60Month: 10025,
    upperBound60Month: 16700,
  };
  
  export function classifyMedianResult({ annualizedCurrentMonthlyIncome, stateMedianIncome }) {
    if (typeof stateMedianIncome !== 'number') {
      return 'insufficient_data';
    }
  
    return annualizedCurrentMonthlyIncome <= stateMedianIncome ? 'under_median' : 'above_median';
  }
  
  export function classifyMeansTestResult({
    sixtyMonthDisposableIncome,
    nonPriorityUnsecuredDebt,
    thresholds = PRESUMPTION_THRESHOLDS,
  }) {
    const unsecuredDebt = Number(nonPriorityUnsecuredDebt) || 0;
  
    if (sixtyMonthDisposableIncome < thresholds.lowerBound60Month) {
      return 'no_presumption';
    }
  
    if (sixtyMonthDisposableIncome >= thresholds.upperBound60Month) {
      return 'presumption';
    }
  
    if (unsecuredDebt > 0) {
      const twentyFivePercentOfDebt = unsecuredDebt * 0.25;
      return sixtyMonthDisposableIncome >= twentyFivePercentOfDebt
        ? 'presumption'
        : 'possible_special_circumstances';
    }
  
    return 'possible_special_circumstances';
  }