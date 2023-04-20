/**
 * Linear searching algorythm
 * Compress string.
 *
 * Exp:
 * Source - AAABBCCXYZDDDEEEE
 * Answer - A3B2C2XYZD3E4
 */
function rle(s: string): string {
  const result: string[] = [];
  let currentSymbol = '';
  let currentSymbolCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (currentSymbol !== s[i] || i === s.length - 1) {
      // Save
      result.push(`${currentSymbol}${currentSymbolCount > 1 ? currentSymbolCount : ''}`);
      // Reset
      currentSymbol = s[i];
      currentSymbolCount = 0;
    }

    // Count
    if (currentSymbol === s[i]) {
      currentSymbolCount += 1;
    }
  }

  return result.join('');
}


export function main() {
  const str = 'AAABBCCXYZDDDEEEE';
  const result = rle(str);
  console.log('Result: ', result);
}
