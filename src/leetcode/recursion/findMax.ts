function findMax(array: number[]): number {
  if (array.length === 2) {
    return Math.max(...array);
  }

  const lastElement = array.pop()!;
  const searchElement = findMax(array);

  return Math.max(lastElement, searchElement);
}

//
//

export function main() {
  const array = [1, 20, 5, 90, 0, 4, 18, 3, 2];
  console.log(`Max from  ${array} -> ${findMax(array)}`);
}