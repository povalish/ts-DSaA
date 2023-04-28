/**
 * Palindrome number
 * https://leetcode.com/problems/palindrome-number/
 */
function isPalindrome(x: number): boolean {
  if (x < 0) { return false; }

  const strX = String(x);
  for (let i = 0, j = strX.length - 1; i < j; i++, j--) {
    if (strX[i] !== strX[j]) {
      return false;
    }
  }

  return true;
}

function isPalindromeFastest(x: number) {
  if (x < 0) { return false; }

  // numerical digits [1, 10, 100] for 121
  const multipliers = [];
  let currentRange = 1;

  while ((x % currentRange) < x) {
    multipliers.push(currentRange);
    currentRange *= 10;
  }

  for (let i = 0; i < multipliers.length; i++) {
    const firstMultiplier = multipliers[i];
    const lastMultiplier = multipliers[multipliers.length - (i + 1)];
    const firstDigit = Math.floor((x / firstMultiplier) % 10);
    const lastDigit = Math.floor((x / lastMultiplier) % 10);

    if (firstDigit !== lastDigit) { return false; }
  }

  return true;
}

export function main() {
  const num1 = 121;
  const num2 = -121;
  const num3 = 10;

  console.log(`Result ${num1} - ${isPalindromeFastest(num1)}`);
  console.log(`Result ${num2} - ${isPalindromeFastest(num2)}`);
  console.log(`Result ${num3} - ${isPalindromeFastest(num3)}`);
}
