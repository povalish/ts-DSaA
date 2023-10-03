/**
 * Slow Sort or Selection Sort
 * Complexity: O(n^2)
 */

function sort(array: number[]) {
  const length = array.length;
  const sorted = [];

  const findMaxAndSlice = () => {
    let maxIndex = 0;
    let max = array[maxIndex];

    for (let i = 1; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
        maxIndex = i;
      }
    }

    array.splice(maxIndex, 1);
    return max;
  }

  for (let i = 0; i < length; i++) {
    sorted.push(findMaxAndSlice())
  }

  return sorted;
};

export function main() {
  console.log(`${[1, 4, 3, 10, 9, 5, 2, 7, 8, 6, 0]} -> ${sort([1, 4, 3, 10, 9, 5, 2, 7, 8, 6, 0])}`);
}
