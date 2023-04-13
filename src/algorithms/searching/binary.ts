
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
