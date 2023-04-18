/**
 * Binary search
 * Complexity: O(log(n))
 * Space complexity: 0(1)
 */
export const binary = (array: number[], target: number): number | null => {
  let arrayLastIndex = array.length;
  let arrayFirstIndex = 0;

  while (arrayFirstIndex !== arrayLastIndex) {
    const currentIndex = Math.floor(arrayFirstIndex + (arrayLastIndex - arrayFirstIndex) / 2);

    if (target === array[currentIndex]!) {
      return currentIndex;
    }

    if (target > array[currentIndex]!) {
      arrayFirstIndex = currentIndex;
    } else {
      arrayLastIndex = currentIndex;
    }
  }

  return null;
};

export function main() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const target = 1;
  const index = binary(array, target);

  console.log('Source array: ', array);
  console.log('Target: ', target);
  console.log('Taarget index:', index);
}
