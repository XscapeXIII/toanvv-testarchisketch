function formatLongNumber(amount: number) {
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(2) + 'M';
  } else if (amount >= 1000) {
    return (amount / 1000).toFixed(2) + 'k';
  } else {
    return amount.toString();
  }
}

export { formatLongNumber };
