
/**
 * Binary Search
 * Complexity: O(logN)
 */

function binarySearch(target: number, array: number[]): [number | null, number | null] {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex < endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (target === array[middleIndex]) { return [array[middleIndex], middleIndex]; }
    if (target > array[middleIndex]) { startIndex = middleIndex; }
    if (target < array[middleIndex]) { endIndex = middleIndex; }
  }

  return [null, null];
}

export function main() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // console.log(`Target - 2, Result - ${binarySearch(2, array)}`);
  // console.log(`Target - 8, Result - ${binarySearch(8, array)}`);
  // console.log(`Target - 0, Result - ${binarySearch(0, array)}`);
  // console.log(`Target - 10, Result - ${binarySearch(10, array)}`);
}
