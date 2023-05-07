/**
 * https://leetcode.com/problems/roman-to-integer/
 */
function romanToInt(source: string): number {
  const romainNums: Record<string, number> = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;

  for (let i = 0; i < source.length - 1; i++) {
    if (romainNums[source[i]] < romainNums[source[i + 1]]) {
      result -= romainNums[source[i]];
    } else {
      result += romainNums[source[i]];
    }
  }

  return result + romainNums[source[source.length - 1]];
}

export function main() {
  const romain = 'MCMXCIV';
  const result = romanToInt(romain);
  console.log('Result: ', result);
}
