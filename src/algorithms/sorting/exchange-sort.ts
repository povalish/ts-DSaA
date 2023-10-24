/**
 * Exchange Sorting
 * Complexity: O(n^2)
 */

function sort(array: number[]) {
  const swap = (leftIndex: number, rightIndex: number) => {
    const leftElement = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = leftElement;
  };

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        swap(i, j);
      }
    }
  }

  return array;
}

export function main() {
  const array = [1, 3, 5, 4, 2, 6];
  console.log(`Sort ${array} -> ${sort(array)}`);
}
