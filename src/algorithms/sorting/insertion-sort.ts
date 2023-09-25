/**
 * Insertion Sort
 * Complexity: O(N^2)
*/
function insertionSort(array: number[]): void {
  for (let i = 1; i < array.length; i++) {
    const saved = array[i];
    let j = i;

    while (j > 0 && array[j - 1] > saved) {
      array[j] = array[j - 1];
      j -= 1;
    }

    array[j] = saved;
  }
}

function insertionSortRecursion(array: number[], i: number) {
  const saved = array[i];
  let j = i;

  while (j > 0 && array[j - 1] > saved) {
    array[j] = array[j - 1];
    j -= 1;
  }

  array[j] = saved;

  if (i + 1 < array.length) {
    insertionSortRecursion(array, i + 1);
  }
}

export function main() {
  const array1 = [5, 2, 4, 6, 1, 3];
  console.log(`Before - ${array1}`);
  insertionSort(array1);
  console.log(`After - ${array1}`);

  const array2 = [5, 2, 4, 6, 1, 3];
  console.log(`Before - ${array2}`);
  insertionSortRecursion(array2, 1);
  console.log(`After - ${array2}`);
}
