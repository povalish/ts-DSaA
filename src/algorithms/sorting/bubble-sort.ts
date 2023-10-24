/**
 * Bubble Sorting
 * Complexity: O(n^2)
 */

function sort(array: number[]) {
  const swap = (leftIndex: number, rightIndex: number) => {
    const leftElement = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = leftElement;
  };

  let shouldCountinue = false;
  do {
    shouldCountinue = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1);
        shouldCountinue = true;
      }
    }

  } while (shouldCountinue);

  return array;
}


export function main() {
  const array = [1, 3, 5, 4, 2, 6];
  console.log(`Sort ${array} -> ${sort(array)}`);
}