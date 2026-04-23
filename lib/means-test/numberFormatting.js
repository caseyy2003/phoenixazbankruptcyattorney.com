export function sanitizeNumericInput(value) {
    return String(value ?? '').replace(/[^0-9.]/g, '');
  }
  
  export function formatNumericInput(value) {
    const sanitized = sanitizeNumericInput(value);
  
    if (!sanitized) return '';
  
    const [wholePart, decimalPart] = sanitized.split('.');
    const formattedWhole = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    if (decimalPart === undefined) {
      return formattedWhole;
    }
  
    return `${formattedWhole}.${decimalPart.slice(0, 2)}`;
  }
  
  export function parseFormattedNumber(value) {
    const normalized = sanitizeNumericInput(value);
    return Number(normalized) || 0;
  }