/**
 * Plus One
 * https://leetcode.com/problems/plus-one/
 */
function plusOne(digits: number[]): number[] {
  const result = [...digits];
  let overflow = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 < 10) {
      result[i] += 1;
      return result;
    }

    if (digits[i] + 1 > 9) {
      result[i] = 0;
      overflow = 1;
    }
  }

  if (overflow === 1) {
    return [1, ...result];
  }

  return result;
}

export function main() {
  const d1 = [1, 2, 3];
  console.log(`${d1} -> ${plusOne(d1)}`);

  const d2 = [4, 3, 2, 1];
  console.log(`${d2} -> ${plusOne(d2)}`);

  const d3 = [9];
  console.log(`${d3} -> ${plusOne(d3)}`);

  const d4 = [1, 8, 9, 9];
  console.log(`${d4} -> ${plusOne(d4)}`);
}
