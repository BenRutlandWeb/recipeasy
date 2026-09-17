const unicodeFractions: Record<string, string> = {
  '1/2': '½',
  '1/3': '⅓',
  '2/3': '⅔',
  '1/4': '¼',
  '3/4': '¾',
  '1/5': '⅕',
  '2/5': '⅖',
  '3/5': '⅗',
  '4/5': '⅘',
  '1/6': '⅙',
  '5/6': '⅚',
  '1/8': '⅛',
  '3/8': '⅜',
  '5/8': '⅝',
  '7/8': '⅞',
};
export const toFraction = (decimal: number): string => {
  if (decimal % 1 === 0) return decimal.toString();
  const integerPart = Math.floor(decimal);
  const fractionPart = decimal - integerPart;
  const denominators = [2, 3, 4, 5, 6, 8];
  let bestFrac: { num: number; den: number } | null = null;
  let bestError = Infinity;
  for (const den of denominators) {
    const num = Math.round(fractionPart * den);
    const approx = num / den;
    const error = Math.abs(fractionPart - approx);
    if (num > 0 && error < bestError) {
      bestFrac = { num, den };
      bestError = error;
    }
  }
  if (!bestFrac) return decimal.toFixed(2);
  const frac = `${bestFrac.num}/${bestFrac.den}`;
  const unicode = unicodeFractions[frac] || frac;
  return integerPart > 0 ? `${integerPart}${unicode}` : unicode;
};
