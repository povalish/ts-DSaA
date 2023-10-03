export function sum(numbers: Array<number>): number {
  const getSum = (index: number): number => {
    if (index === numbers.length - 1) { return numbers[index]; }
    return numbers[index] + getSum(index + 1);
  };

  return getSum(0);
}

export function main() {
  console.log(`Sum of [1, 2, 3, 4, 5] -> ${sum([1, 2, 3, 4, 5])}`);
  console.log(`Sum of [10, 10, 10, 10, 10] -> ${sum([10, 10, 10, 10, 10])}`);
}