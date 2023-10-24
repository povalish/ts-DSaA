function sort(array: number[]) {
  const swap = (leftIndex: number, rightIndex: number) => {
    const leftElement = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = leftElement;
  };

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        swap(j, j - 1);
      }
    }  
  }

  return array;
}

export function main() {
  const array = [1, 3, 5, 4, 2, 6, 0];
  console.log(`Sort ${array} -> ${sort(array)}`);
}