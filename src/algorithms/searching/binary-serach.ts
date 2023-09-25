function binarySearch(array: number[], target: number): number | null {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (array[middle] === target) {
      return middle;
    }

    if (target > array[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return null;
}

function binarySearchRecursion(
  array: number[],
  target: number,
  left: number,
  right: number,
): number | null {
  if (left > right) {
    return null;
  }

  const middle = Math.floor((left + right) / 2);

  if (target === array[middle]) {
    return middle;
  }

  if (target > array[middle]) {
    return binarySearchRecursion(array, target, middle + 1, right);
  }

  if (target < array[middle]) {
    return binarySearchRecursion(array, target, left, middle - 1);
  }

  return null;
}

export function main() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const target = 0;

  console.log(`Array -> ${array}`);
  console.log(`Target - ${target}, index - ${binarySearchRecursion(array, target, 0, array.length - 1)}`);
}
