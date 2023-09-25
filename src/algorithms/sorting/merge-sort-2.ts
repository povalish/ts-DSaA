function mergeSort(array: number[]): number[] {
  if (array.length === 1) {
    return array;
  }

  if (array.length === 2) {
    if (array[0] < array[1]) {
      return [array[0], array[1]];
    }

    return [array[1], array[0]];
  }

  const middleIndex = array.length / 2;

  const leftPart = mergeSort(array.slice(0, middleIndex));
  const rightPart = mergeSort(array.slice(middleIndex));

  leftPart.push(+Infinity);
  rightPart.push(+Infinity);

  let leftPartIndex = 0;
  let rightPartIndex = 0;
  let currentIndex = 0;

  while (currentIndex < array.length) {
    if (leftPart[leftPartIndex] <= rightPart[rightPartIndex]) {
      array[currentIndex] = leftPart[leftPartIndex];
      leftPartIndex += 1;
    } else {
      array[currentIndex] = rightPart[rightPartIndex];
      rightPartIndex += 1;
    }

    currentIndex += 1;
  }

  return array;
}

export function main(): void {
  const array = [5, 2, 4, 7, 6, 1, 3];
  console.log(`${array} -> ${mergeSort(array)}`);
}
