/**
 * https://leetcode.com/problems/roman-to-integer/
 */
function romanToInt(source: string): number {
  // let s = source;
  // const Ms = (s.match(/M/g)?.length || 0) * 1000;
  // const Ds = (s.match(/D/g)?.length || 0) * 500;

  // const CsBefore = (s.match(/C+?(?=M|D)/g)?.length || 0) * 100;
  // s = s.replace(/C+?(?=M|D)/g, '');
  // const Cs = (s.match(/C/g)?.length || 0) * 100;

  // const Ls = (s.match(/L/g)?.length || 0) * 50;
  // const XsBefore = (s.match(/X+?(?=L|C)/g)?.length || 0) * 10;
  // s = s.replace(/X+?(?=L|C)/g, '');
  // const Xs = (s.match(/X/g)?.length || 0) * 10;

  // const Vs = (s.match(/V/g)?.length || 0) * 5;
  // const IsBefore = (s.match(/I+?(?=V|X)/g)?.length || 0) * 1;
  // s = s.replace(/I+?(?=V|X)/g, '');
  // const Is = (s.match(/I/g)?.length || 0) * 1;

  // return Ms + Ds + Cs + Ls + Xs + Vs + Is - CsBefore - XsBefore - IsBefore;

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
