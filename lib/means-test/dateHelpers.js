function formatDate(date) {
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${month}/${day}/${year}`;
  }
  
  export function getIncomeLookbackPeriod(filingMonthValue) {
    if (!filingMonthValue) return '';
  
    const [yearText, monthText] = filingMonthValue.split('-');
    const year = Number(yearText);
    const month = Number(monthText);
    if (!year || !month) return '';
  
    const filingMonthStart = new Date(Date.UTC(year, month - 1, 1));
    const start = new Date(Date.UTC(year, month - 7, 1));
    const end = new Date(filingMonthStart.getTime() - 24 * 60 * 60 * 1000);
  
    return `${formatDate(start)} - ${formatDate(end)}`;
  }