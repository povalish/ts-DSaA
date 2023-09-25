/**
 * Selection Sort
 * Complexity: O(N^2)
 */
function selectionSort(source: number[]): number[] {
  const array = [...source];

  for (let i = 0; i < array.length - 1; i++) {
    const saved = array[i];
    let minElement = array[i];
    let minIndex = i;

    for (let j = i; j < array.length; j++) {
      if (array[j] < minElement) {
        minElement = array[j];
        minIndex = j;
      }
    }

    array[i] = minElement;
    array[minIndex] = saved;
  }

  return array;
}

export function main() {
  const array = [5, 2, 7, 4, 6, 1, 3];
  console.log(`${array} -> ${selectionSort(array)}`);
}
