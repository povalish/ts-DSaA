function binarySearch(array: number[], target: number) {
  // Stop recursion
  if (array.length === 1) { return array[0] === target; }

  // Devide array by middle index
  const midIndex = Math.floor(array.length / 2);

  if (array[midIndex] === target) { return true; }
  
  if (array[midIndex] < target) {
    const rightPart = array.slice(midIndex +  1);
    return binarySearch(rightPart, target);
  }

  if (array[midIndex] > target) {
    const leftPart = array.slice(0, midIndex);
    return binarySearch(leftPart, target);
  }

  return false;
}

//
//

export function main() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const target = 101;
  console.log(`${array} includes ${target} -> ${binarySearch(array, target)}`);
}