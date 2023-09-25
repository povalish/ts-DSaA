/**
 * Insertion Sort
 * Complexity: O(N log(N)
 */
function merge(
  array: number[],
  start: number,
  middle: number,
  end: number,
) {
  const leftArrayLength = middle + 1 - start;
  const rightArrayLength = end - middle;

  const leftArray = Array(leftArrayLength);
  const rightArray = Array(rightArrayLength);

  for (let i = 0; i < leftArray.length; i++) {
    leftArray[i] = array[start + i];
  }

  for (let i = 0; i < rightArray.length; i++) {
    rightArray[i] = array[middle + 1 + i];
  }

  leftArray.push(+Infinity);
  rightArray.push(+Infinity);


  let rightArrayIndex = 0;
  let leftArrayIndex = 0;
  let currentIndex = start;

  while (currentIndex <= end) {
    if (leftArray[leftArrayIndex] < rightArray[rightArrayIndex]) {
      array[currentIndex] = leftArray[leftArrayIndex];
      leftArrayIndex += 1;
    } else {
      array[currentIndex] = rightArray[rightArrayIndex];
      rightArrayIndex += 1;
    }

    currentIndex += 1;
  }
}

function sort(array: number[], start: number, end: number) {
  if (start < end) {
    const middle = Math.floor((start + end) / 2);

    sort(array, start, middle);
    sort(array, middle + 1, end);
    merge(array, start, middle, end);
  }
}

function mergeSort(array: number[]) {
  sort(array, 0, array.length - 1);
}

export function main() {
  const array = [5, 2, 4, 7, 6, 1, 3];

  console.log(`Before: ${array}`);
  mergeSort(array);
  console.log(`After: ${array}`);
}
