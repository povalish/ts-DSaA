
/**
 * Linear search
 * Complexity: O(n)
 * Space complexity: 0(1)
 */
export const linearNative = (array: number[], target: number): number | null => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return null;
};

/**
 * Linear search
 * Complexity: O(n)
 * Space complexity: 0(1)
 */
export const linearJS = (array: number[], target: number): number | null => {
  const found = array.findIndex((v) => v === target);
  return found || null;
};

export function main() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const target = 1;
  const index = linearJS(array, target);

  console.log('Source array: ', array);
  console.log('Target: ', target);
  console.log('Taarget index:', index);
}
