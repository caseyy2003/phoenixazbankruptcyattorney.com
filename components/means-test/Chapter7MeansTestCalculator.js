import React, { useEffect, useMemo, useRef, useState } from 'react';
import DisclaimerPanel from './DisclaimerPanel';
import ProgressSteps from './ProgressSteps';
import StepScreening from './StepScreening';
import StepIncome from './StepIncome';
import StepDebtDeductions from './StepDebtDeductions';
import StepDeductions from './StepDeductions';
import StepAdditionalExpenses from './StepAdditionalExpenses';
import StepResult from './StepResult';
import { getStateMedianIncome } from '../../lib/means-test/household';
import {
  calculateCurrentMonthlyIncome,
  calculateHouseholdSize,
  calculateHousingMortgageRentDeduction,
  calculateMeansTestDisposableIncome,
  calculateSecuredAverageMonthlyPayment,
  getAllowedVehicleCount,
  getVehicleOwnershipAllowance,
  toCurrencyNumber,
} from '../../lib/means-test/calculations';
import {
  validateScreeningStep,
  validateIncomeStep,
  validateDeductionsStep,
} from '../../lib/means-test/validation';
import {
  classifyMedianResult,
  classifyMeansTestResult,
  PRESUMPTION_THRESHOLDS,
} from '../../lib/means-test/resultClassification';
import {
  getHousingUtilityAllowance,
  getNationalStandardAmount,
  getTransportationOperatingAllowance,
  IRS_STANDARDS_EFFECTIVE_DATE,
} from '../../lib/means-test/irsStandardsData';
import { MEDIAN_INCOME_EFFECTIVE_DATE } from '../../lib/means-test/stateMedianIncomeData';
import { formatNumericInput } from '../../lib/means-test/numberFormatting';
import { getIncomeLookbackPeriod } from '../../lib/means-test/dateHelpers';

const STEPS = ['Screening', 'Income', 'Debt Deductions', 'Expenses', 'Additional Expenses', 'Result'];

const initialScreening = {
  state: 'Arizona',
  filingType: 'individual',
  dependentsCount: '0',
  residenceOwnership: 'owner',
  debtsPrimarilyConsumer: 'yes',
  militaryExemption: 'no',
  filingMonth: '',
};

const initialIncome = {
  debtorAverageIncome: '',
  spouseAverageIncome: '',
  householdContribution: '',
};

function buildInitialDeductions() {
  return {
    mortgagePayment: '',
    vehicleCountClaimed: '1',
    car1Financed: 'no',
    car1Owed: '',
    car1MonthlyPayment: '',
    car1MonthsRemaining: '',
    car2Financed: 'no',
    car2Owed: '',
    car2MonthlyPayment: '',
    car2MonthsRemaining: '',
    priorityDebt: '',
    chapter13AdminExpense: '',
    nonPriorityUnsecuredDebt: '',
    irsNationalStandards: '',
    outOfPocketHealthCare: '75',
    transportOperating: '',
    taxesAndPayroll: '',
    lifeInsurance: '',
    courtOrderedPayments: '',
    childCare: '',
    education: '',
    healthDisability: '',
    telecommunication: '',
    otherNecessaryExpenses: '',
    healthInsurance: '',
    disabilityInsurance: '',
    healthSavings: '',
    elderCareSupport: '',
    dependentEducationUnder18: '',
    additionalFoodClothing: '',
    charitableContributions: '',
    familyViolenceProtection: '',
    excessHomeEnergy: '',
  };
}

export default function Chapter7MeansTestCalculator() {
  const [step, setStep] = useState(0);
  const [screening, setScreening] = useState(initialScreening);
  const [income, setIncome] = useState(initialIncome);
  const [deductions, setDeductions] = useState(buildInitialDeductions());
  const [errors, setErrors] = useState({});
  const [pathwayResult, setPathwayResult] = useState(null);
  const [incomeCheck, setIncomeCheck] = useState({ status: 'idle', medianPath: null });
  const calculatorTopRef = useRef(null);
  const hasNavigatedRef = useRef(false);

  const householdSize = useMemo(
    () => calculateHouseholdSize({ filingType: screening.filingType, dependentsCount: screening.dependentsCount }),
    [screening.filingType, screening.dependentsCount]
  );

  const stateMedianIncome = useMemo(
    () => getStateMedianIncome(screening.state, householdSize),
    [screening.state, householdSize]
  );

  const incomeSummary = useMemo(() => calculateCurrentMonthlyIncome(income), [income]);
  const incomePeriodLabel = useMemo(() => getIncomeLookbackPeriod(screening.filingMonth), [screening.filingMonth]);

  const allowedVehicleCount = useMemo(
    () => getAllowedVehicleCount({ claimedVehicleCount: deductions.vehicleCountClaimed, filingType: screening.filingType }),
    [deductions.vehicleCountClaimed, screening.filingType]
  );

  const vehicleOwnershipAllowance = useMemo(
    () => getVehicleOwnershipAllowance(allowedVehicleCount),
    [allowedVehicleCount]
  );

  const car1Secured = useMemo(
    () => calculateSecuredAverageMonthlyPayment({ monthlyPayment: deductions.car1MonthlyPayment, monthsRemaining: deductions.car1MonthsRemaining }),
    [deductions.car1MonthlyPayment, deductions.car1MonthsRemaining]
  );

  const car2Secured = useMemo(
    () => calculateSecuredAverageMonthlyPayment({ monthlyPayment: deductions.car2MonthlyPayment, monthsRemaining: deductions.car2MonthsRemaining }),
    [deductions.car2MonthlyPayment, deductions.car2MonthsRemaining]
  );

  const effectiveVehicleOwnership = useMemo(
    () => Math.max(vehicleOwnershipAllowance - (car1Secured + car2Secured), 0),
    [vehicleOwnershipAllowance, car1Secured, car2Secured]
  );

  const housingMortgageRentDeduction = useMemo(
    () =>
      calculateHousingMortgageRentDeduction({
        irsStandardAllowance: formatNumericInput(getHousingUtilityAllowance(householdSize)),
        averageSecuredPayment: deductions.mortgagePayment,
      }),
    [householdSize, deductions.mortgagePayment]
  );

  const deductionSummary = useMemo(() => {
    const deductibleFields = {
      irsNationalStandards: formatNumericInput(getNationalStandardAmount(householdSize)),
      outOfPocketHealthCare: deductions.outOfPocketHealthCare,
      housingOperating: formatNumericInput(getHousingUtilityAllowance(householdSize)),
      housingMortgageRentDeduction: formatNumericInput(housingMortgageRentDeduction),
      transportOperating: formatNumericInput(getTransportationOperatingAllowance(allowedVehicleCount)),
      vehicleOwnershipAllowance: formatNumericInput(effectiveVehicleOwnership),
      taxesAndPayroll: deductions.taxesAndPayroll,
      lifeInsurance: deductions.lifeInsurance,
      courtOrderedPayments: deductions.courtOrderedPayments,
      childCare: deductions.childCare,
      education: deductions.education,
      healthDisability: deductions.healthDisability,
      telecommunication: deductions.telecommunication,
      otherNecessaryExpenses: deductions.otherNecessaryExpenses,
      additionalLine25: formatNumericInput(
        toCurrencyNumber(deductions.healthInsurance) +
          toCurrencyNumber(deductions.disabilityInsurance) +
          toCurrencyNumber(deductions.healthSavings)
      ),
      elderCareSupport: deductions.elderCareSupport,
      dependentEducationUnder18: deductions.dependentEducationUnder18,
      additionalFoodClothing: deductions.additionalFoodClothing,
      charitableContributions: deductions.charitableContributions,
      familyViolenceProtection: deductions.familyViolenceProtection,
      excessHomeEnergy: deductions.excessHomeEnergy,
      securedDebtPayments: formatNumericInput(
        toCurrencyNumber(deductions.mortgagePayment) + car1Secured + car2Secured
      ),
      priorityDebt: deductions.priorityDebt,
      chapter13AdminExpense: deductions.chapter13AdminExpense,
    };

    return calculateMeansTestDisposableIncome({
      combinedMonthlyIncome: incomeSummary.combinedMonthlyIncome,
      deductions: deductibleFields,
    });
  }, [incomeSummary, deductions, householdSize, allowedVehicleCount, effectiveVehicleOwnership, housingMortgageRentDeduction, car1Secured, car2Secured]);

  const finalOutcome = useMemo(
    () =>
      classifyMeansTestResult({
        sixtyMonthDisposableIncome: deductionSummary.sixtyMonthDisposableIncome,
        nonPriorityUnsecuredDebt: deductions.nonPriorityUnsecuredDebt,
      }),
    [deductionSummary.sixtyMonthDisposableIncome, deductions.nonPriorityUnsecuredDebt]
  );


  useEffect(() => {
    if (!hasNavigatedRef.current) return;
    if (!calculatorTopRef.current) return;
    calculatorTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [step]);

  function setScreeningField(field, value) {
    const next = { ...screening, [field]: value };
    setScreening(next);
  }

  function setFormattedIncomeField(field, value) {
    setIncome((prev) => ({ ...prev, [field]: formatNumericInput(value) }));
    setIncomeCheck({ status: 'idle', medianPath: null });
  }

  function setFormattedDeductionField(field, value) {
    const isTextChoiceField = ['car1Financed', 'car2Financed'].includes(field);
    setDeductions((prev) => ({
      ...prev,
      [field]: isTextChoiceField ? value : formatNumericInput(value),
    }));
  }

  function runIncomeCheck() {
    const stepErrors = validateIncomeStep(income);

    if (Object.keys(stepErrors).length) {
      setErrors(stepErrors);
      setIncomeCheck({ status: 'idle', medianPath: null });
      return;
    }

    setErrors({});
    setIncomeCheck({ status: 'loading', medianPath: null });

    window.setTimeout(() => {
      const medianPath = classifyMedianResult({
        annualizedCurrentMonthlyIncome: incomeSummary.annualizedCurrentMonthlyIncome,
        stateMedianIncome,
      });
      setIncomeCheck({ status: 'done', medianPath });
    }, 1500);
  }

  function goNext() {
    if (step === 0) {
      const stepErrors = validateScreeningStep(screening);
      if (Object.keys(stepErrors).length) {
        setErrors(stepErrors);
        return;
      }

      if (screening.debtsPrimarilyConsumer === 'no') {
        setPathwayResult('not_consumer_debt');
        hasNavigatedRef.current = true;
        setStep(5);
        setErrors({});
        return;
      }

      if (screening.militaryExemption === 'yes') {
        setPathwayResult('military_exemption');
        hasNavigatedRef.current = true;
        setStep(5);
        setErrors({});
        return;
      }

      hasNavigatedRef.current = true;
      setStep(1);
      setErrors({});
      return;
    }

    if (step === 1) {
      if (incomeCheck.status !== 'done') {
        setErrors({ general: 'Please use the income check button so we can compare your income to your state median.' });
        return;
      }

      if (incomeCheck.medianPath === 'under_median') {
        setPathwayResult('under_median');
        hasNavigatedRef.current = true;
        setStep(5);
        return;
      }

      setPathwayResult('above_median');
      hasNavigatedRef.current = true;
      setStep(2);
      return;
    }

    if (step === 2) {
      const debtFields = {
        mortgagePayment: deductions.mortgagePayment,
        vehicleCountClaimed: deductions.vehicleCountClaimed,
        car1Owed: deductions.car1Owed,
        car1MonthlyPayment: deductions.car1MonthlyPayment,
        car1MonthsRemaining: deductions.car1MonthsRemaining,
        car2Owed: deductions.car2Owed,
        car2MonthlyPayment: deductions.car2MonthlyPayment,
        car2MonthsRemaining: deductions.car2MonthsRemaining,
        priorityDebt: deductions.priorityDebt,
        chapter13AdminExpense: deductions.chapter13AdminExpense,
        nonPriorityUnsecuredDebt: deductions.nonPriorityUnsecuredDebt,
      };

      const stepErrors = validateDeductionsStep(debtFields);
      if (Object.keys(stepErrors).length) {
        setErrors(stepErrors);
        return;
      }

      setErrors({});
      hasNavigatedRef.current = true;
      setStep(3);
      return;
    }

    if (step === 3) {
      const expenseFields = {
        taxesAndPayroll: deductions.taxesAndPayroll,
        lifeInsurance: deductions.lifeInsurance,
        courtOrderedPayments: deductions.courtOrderedPayments,
        childCare: deductions.childCare,
        education: deductions.education,
        healthDisability: deductions.healthDisability,
        telecommunication: deductions.telecommunication,
        otherNecessaryExpenses: deductions.otherNecessaryExpenses,
      };

      const stepErrors = validateDeductionsStep(expenseFields);
      if (Object.keys(stepErrors).length) {
        setErrors(stepErrors);
        return;
      }

      setErrors({});
      hasNavigatedRef.current = true;
      setStep(4);
      return;
    }

    if (step === 4) {
      const additionalFields = {
        healthInsurance: deductions.healthInsurance,
        disabilityInsurance: deductions.disabilityInsurance,
        healthSavings: deductions.healthSavings,
        elderCareSupport: deductions.elderCareSupport,
        dependentEducationUnder18: deductions.dependentEducationUnder18,
        additionalFoodClothing: deductions.additionalFoodClothing,
        charitableContributions: deductions.charitableContributions,
        familyViolenceProtection: deductions.familyViolenceProtection,
        excessHomeEnergy: deductions.excessHomeEnergy,
      };

      const stepErrors = validateDeductionsStep(additionalFields);
      if (Object.keys(stepErrors).length) {
        setErrors(stepErrors);
        return;
      }

      setPathwayResult('above_median');
      setStep(5);
      setErrors({});
    }
  }

  function goBack() {
    if (step === 5 && ['not_consumer_debt', 'military_exemption', 'under_median'].includes(pathwayResult)) {
      hasNavigatedRef.current = true;
      setStep(0);
      return;
    }

    hasNavigatedRef.current = true;
    setStep((prev) => Math.max(0, prev - 1));
  }

  const buttonStyle = {
    border: 'none',
    borderRadius: 8,
    padding: '12px 16px',
    fontWeight: 700,
    cursor: 'pointer',
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          button {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>

      <section ref={calculatorTopRef} style={{ maxWidth: 860, margin: '2rem auto', border: '2px solid #2c5f90', borderRadius: 14, padding: 22, boxShadow: '0 14px 34px rgba(15, 40, 70, 0.18)', background: '#fff' }}>
        <div style={{ background: 'linear-gradient(90deg,#123d63 0%,#1f5c8f 100%)', borderRadius: 10, color: '#fff', padding: '14px 16px', marginBottom: 14 }}>
          <h2 style={{ margin: 0, fontSize: '1.45rem' }}>Chapter 7 Means Test Calculator | Yontz Law, PLLC.</h2>
        </div>

        <DisclaimerPanel />
        <ProgressSteps steps={STEPS} currentStep={step} onStepSelect={(targetStep) => { hasNavigatedRef.current = true; setStep(targetStep); setErrors({}); }} />

        <div style={{ border: '1px solid #dce6f1', borderRadius: 10, padding: 16, minHeight: 760 }}>
          {step === 0 && <StepScreening values={screening} errors={errors} onChange={setScreeningField} />}
          {step === 1 && <StepIncome values={income} errors={errors} onChange={setFormattedIncomeField} onCalculate={runIncomeCheck} calculationState={incomeCheck} medianIncome={stateMedianIncome} annualizedIncome={incomeSummary.annualizedCurrentMonthlyIncome} incomePeriodLabel={incomePeriodLabel} />}
          {step === 2 && <StepDebtDeductions values={deductions} errors={errors} onChange={setFormattedDeductionField} filingType={screening.filingType} vehicleOwnershipAllowance={effectiveVehicleOwnership} />}
          {step === 3 && <StepDeductions values={deductions} errors={errors} onChange={setFormattedDeductionField} />}
          {step === 4 && <StepAdditionalExpenses values={deductions} errors={errors} onChange={setFormattedDeductionField} />}
          {step === 5 && <StepResult pathwayResult={pathwayResult} summary={{ ...incomeSummary, ...deductionSummary, finalOutcome, stateMedianIncome, annualizedCurrentMonthlyIncome: incomeSummary.annualizedCurrentMonthlyIncome, householdSize }} screeningSummary={{ state: screening.state, filingType: screening.filingType, householdSize }} onPrint={() => window.print()} />}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14, gap: 8 }}>
          <button type="button" onClick={goBack} style={{ ...buttonStyle, background: '#e8eef5', color: '#243f55' }} disabled={step === 0}>Back</button>
          {step < 5 ? <button type="button" onClick={goNext} style={{ ...buttonStyle, background: '#1f5c8f', color: '#fff' }}>{step === 4 ? 'See Final Means Test Result' : step === 1 && incomeCheck.medianPath === 'under_median' ? 'See Result' : 'Continue'}</button> : <button type="button" onClick={() => { hasNavigatedRef.current = true; setStep(0); setPathwayResult(null); setIncomeCheck({ status: 'idle', medianPath: null }); }} style={{ ...buttonStyle, background: '#1f5c8f', color: '#fff' }}>Start Over</button>}
        </div>

        <p style={{ fontSize: 12, color: '#63788f', marginTop: 14, marginBottom: 0 }}>
          Median-income dataset effective {MEDIAN_INCOME_EFFECTIVE_DATE}. IRS/local standards preset date: {IRS_STANDARDS_EFFECTIVE_DATE}. Presumption thresholds: ${PRESUMPTION_THRESHOLDS.lowerBound60Month.toLocaleString()} and ${PRESUMPTION_THRESHOLDS.upperBound60Month.toLocaleString()} (60-month).
        </p>
      </section>
    </>
  );
}