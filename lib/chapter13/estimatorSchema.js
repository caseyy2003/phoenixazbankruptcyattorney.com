export const CHAPTER13_INTAKE_SCHEMA = [
    {
      id: 'state_household',
      title: 'State and household',
      fields: [
        { id: 'state', label: 'What state do you live in?', type: 'select', required: true },
        {
          id: 'maritalStatus',
          label: 'Are you single or married?',
          type: 'radio',
          options: ['single', 'married'],
          required: true,
        },
      ],
    },
    {
      id: 'income',
      title: 'Income',
      fields: [
        { id: 'grossMonthlyIncome', label: 'Gross monthly income', type: 'currency', required: true },
        { id: 'netMonthlyIncome', label: 'Net monthly income', type: 'currency', required: true },
      ],
    },
    {
      id: 'primary_residence',
      title: 'Primary residence',
      fields: [
        { id: 'primaryResidence.ownsHome', label: 'Do you own a primary residence?', type: 'yesNo' },
        { id: 'primaryResidence.homeValue', label: 'Current home value', type: 'currency', showIf: 'ownsHome=yes' },
        { id: 'primaryResidence.hasMortgage', label: 'Do you have a mortgage or home loan?', type: 'yesNo', showIf: 'ownsHome=yes' },
        { id: 'primaryResidence.mortgageCount', label: 'How many mortgages?', type: 'radio', options: [1, 2], showIf: 'hasMortgage=yes' },
        { id: 'primaryResidence.mortgage1Owed', label: 'Amount owed on mortgage 1', type: 'currency', showIf: 'hasMortgage=yes' },
        { id: 'primaryResidence.mortgage2Owed', label: 'Amount owed on mortgage 2', type: 'currency', showIf: 'mortgageCount=2' },
        { id: 'primaryResidence.monthlyMortgagePayment', label: 'Monthly mortgage payment', type: 'currency', showIf: 'hasMortgage=yes' },
        { id: 'primaryResidence.behind', label: 'Are you behind on mortgage payments?', type: 'yesNo', showIf: 'hasMortgage=yes' },
        { id: 'primaryResidence.monthsBehind', label: 'Months behind', type: 'number', showIf: 'behind=yes' },
        { id: 'primaryResidence.keepHome', label: 'Do you want to keep the house?', type: 'yesNo', showIf: 'behind=yes' },
        { id: 'primaryResidence.cureArrearsThroughPlan', label: 'Bring mortgage current through chapter 13 plan?', type: 'yesNo', showIf: 'keepHome=yes' },
      ],
    },
    {
      id: 'other_real_estate',
      title: 'Other real estate',
      fields: [
        { id: 'otherRealEstate.hasOtherRealEstate', label: 'Do you own any other real estate?', type: 'yesNo' },
        { id: 'otherRealEstate.properties[]', label: 'Property details', type: 'repeatableGroup', showIf: 'hasOtherRealEstate=yes' },
      ],
    },
    {
      id: 'vehicles',
      title: 'Vehicles',
      fields: [
        { id: 'vehicles.vehicleCount', label: 'How many vehicles do you own that have loans?', type: 'number', required: true },
        { id: 'vehicles.items[]', label: 'Vehicle details', type: 'repeatableGroup', required: true },
        { id: 'vehicles.items[].directArrearsAmount', label: 'If known, direct arrears amount to cure through plan', type: 'currency' },
      ],
    },
    {
      id: 'taxes_support',
      title: 'Taxes and support',
      fields: [
        { id: 'taxes.owesTaxes', label: 'Do you owe taxes?', type: 'yesNo' },
        { id: 'taxes.items[]', label: 'Tax debt details', type: 'repeatableGroup', showIf: 'owesTaxes=yes' },
        { id: 'domesticSupport.owesSupportArrears', label: 'Do you owe past-due child support or spousal support?', type: 'yesNo' },
        { id: 'domesticSupport.arrearageAmount', label: 'Support arrearage amount', type: 'currency', showIf: 'owesSupportArrears=yes' },
        { id: 'taxes.hasOtherPriorityDebts', label: 'Do you have any other priority debts?', type: 'yesNo' },
        { id: 'taxes.otherPriorityDebtAmount', label: 'Total amount of other priority debts', type: 'currency', showIf: 'hasOtherPriorityDebts=yes' },
        { id: 'taxes.unsecuredNonpriorityDebtAmount', label: 'How much unsecured debt (without collateral) do you have other than taxes and support obligations?', type: 'currency' },
      ],
    },
    {
      id: 'other_assets',
      title: 'Other nonexempt assets',
      fields: [
        { id: 'otherAssets.hasNonExemptAssets', label: 'Do you have assets that are not exempt?', type: 'yesNo' },
        { id: 'otherAssets.nonExemptAssetValue', label: 'Total nonexempt asset value', type: 'currency', showIf: 'hasNonExemptAssets=yes' },
      ],
    },
    {
      id: 'admin_costs',
      title: 'Attorney fees and trustee fee',
      fields: [
        { id: 'attorneyAndTrustee.totalAttorneyFees', label: 'Estimated total attorney fees', type: 'currency', required: true },
        { id: 'attorneyAndTrustee.feeStructure', label: 'Attorney fee structure', type: 'radio', options: ['flat', 'hourly'], required: true },
        { id: 'attorneyAndTrustee.paidBeforeFiling', label: 'Paid before filing', type: 'currency', required: true },
        { id: 'attorneyAndTrustee.trusteePercent', label: 'Estimated chapter 13 trustee percentage fee', type: 'percent', required: true },
      ],
    },
    {
      id: 'schedule_j',
      title: 'Schedule J expenses',
      fields: [
        {
          id: 'budget.dependentsCount',
          label: 'Number of dependents supported in your household',
          type: 'select',
          options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'],
        },
        {
          id: 'budget.housingExpense',
          label: 'Monthly housing expense (rent or home ownership cost, including mortgage if applicable)',
          type: 'currency',
        },
        {
          id: 'budget.homeMaintenanceRepairs',
          label: 'Home maintenance, repair, and upkeep',
          type: 'currency',
        },
        {
          id: 'budget.electricityHeatingGas',
          label: 'Electricity, heating fuel, and gas',
          type: 'currency',
        },
        {
          id: 'budget.waterSewerGarbage',
          label: 'Water, sewer, and garbage',
          type: 'currency',
        },
        {
          id: 'budget.foodHousekeepingSupplies',
          label: 'Food and housekeeping supplies',
          type: 'currency',
        },
        {
          id: 'budget.childcareAndDependentCare',
          label: 'Childcare and dependent care',
          type: 'currency',
        },
        {
          id: 'budget.clothingLaundryDryCleaning',
          label: 'Clothing, laundry, and dry cleaning',
          type: 'currency',
        },
        {
          id: 'budget.medicalDentalMedicine',
          label: 'Medical, dental, and medicine costs',
          type: 'currency',
        },
        {
          id: 'budget.transportationOtherThanCarPayment',
          label: 'Transportation costs other than car payments',
          type: 'currency',
        },
        {
          id: 'budget.recreationEntertainment',
          label: 'Recreation and entertainment',
          type: 'currency',
        },
        {
          id: 'budget.personalCareProductsServices',
          label: 'Personal care products and services',
          type: 'currency',
        },
        {
          id: 'budget.insuranceNotPayroll',
          label: 'Insurance not already deducted from payroll',
          type: 'currency',
        },
        {
          id: 'budget.taxesNotPayrollWithholding',
          label: 'Taxes not already in payroll withholding',
          type: 'currency',
        },
        {
          id: 'budget.ongoingDomesticSupport',
          label: 'Ongoing support payments (not arrears)',
          type: 'currency',
        },
        {
          id: 'budget.educationForEmploymentOrChildren',
          label: 'Education expenses for employment or dependent children',
          type: 'currency',
        },
        {
          id: 'budget.charitableContributions',
          label: 'Charitable contributions',
          type: 'currency',
        },
        {
          id: 'budget.otherMonthlyExpenses',
          label: 'Other monthly expenses not listed above',
          type: 'currency',
        },
      ],
    },
    {
      id: 'results',
      title: 'Results',
      fields: [],
    },
  ];
  
  export const TAX_TYPE_OPTIONS = ['Income tax', 'Payroll tax', 'Property tax', 'Sales tax', 'Other tax'];
  
  export const ATTORNEY_FEE_DEFAULTS = {
    totalAttorneyFees: 4500,
    paidBeforeFiling: 0,
    trusteePercent: 8,
  };