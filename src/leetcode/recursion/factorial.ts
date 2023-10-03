function factorial(number: number): number {
  if (number === 1) {
    return number;
  }

  return number * factorial(number - 1);
}

export function main() {
  console.log(`4! -> ${factorial(4)}`);
  console.log(`5! -> ${factorial(5)}`);
}