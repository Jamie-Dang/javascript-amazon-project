// this file is going to contain utilities that are related to money
export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}