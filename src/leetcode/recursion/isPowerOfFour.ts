function isPowerOfFour(n: number): boolean {
  if (n === 1) { return true; }
  if (n === 0) { return false; }
  if (n % 4 > 0) { return false; }
  if (n === 4) { return true; }
  return isPowerOfFour(n / 4);
}

export function main() {
  console.log(`is 16 is power of four -> ${isPowerOfFour(16)}`);
  console.log(`is 1 is power of four -> ${isPowerOfFour(1)}`);
  console.log(`is 32 is power of four -> ${isPowerOfFour(32)}`);
  console.log(`is 14 is power of four -> ${isPowerOfFour(14)}`);
  console.log(`is 7 is power of four -> ${isPowerOfFour(8)}`);
  console.log(`is 10 is power of four -> ${isPowerOfFour(10)}`);
  console.log(`is 4 is power of four -> ${isPowerOfFour(4)}`);
  console.log(`is 2 is power of four -> ${isPowerOfFour(2)}`);
}
