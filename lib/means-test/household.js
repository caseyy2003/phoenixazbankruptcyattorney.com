import {
    ADDITIONAL_HOUSEHOLD_MEMBER_AMOUNT,
    STATE_MEDIAN_INCOME,
  } from './stateMedianIncomeData';
  
  export const HOUSEHOLD_SIZES = Array.from({ length: 15 }, (_, idx) => idx + 1);
  
  export function getStateMedianIncome(state, householdSize) {
    const stateValues = STATE_MEDIAN_INCOME[state];
    const size = Number(householdSize);
  
    if (!stateValues || !size) {
      return null;
    }
  
    if (size <= 4) {
      return stateValues[size - 1];
    }
  
    return stateValues[3] + (size - 4) * ADDITIONAL_HOUSEHOLD_MEMBER_AMOUNT;
  }