function isPowerOfTwo(n: number): boolean {
  if (n === 1) { return true; }
  if (n === 0) { return false; }
  if (n % 2 === 1) { return false; }
  if (n === 2) { return true; }
  return isPowerOfTwo(n / 2);
}

export function main() {
  console.log(`is 16 is power of two -> ${isPowerOfTwo(16)}`);
  console.log(`is 1 is power of two -> ${isPowerOfTwo(1)}`);
  console.log(`is 32 is power of two -> ${isPowerOfTwo(32)}`);
  console.log(`is 14 is power of two -> ${isPowerOfTwo(14)}`);
  console.log(`is 7 is power of two -> ${isPowerOfTwo(7)}`);
  console.log(`is 10 is power of two -> ${isPowerOfTwo(10)}`);
}
