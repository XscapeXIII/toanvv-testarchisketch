const vietnamCurrency = Intl.NumberFormat('de-DE');

export default function convertToFormatCurrency(
  number: number,
  suffix: string = '$',
) {
  if (number || number === 0) {
    return `${vietnamCurrency.format(number)} ${suffix} `;
  }
  return null;
}
