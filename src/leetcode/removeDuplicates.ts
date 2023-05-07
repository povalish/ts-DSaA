
/**
 * Remove duplicates
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/S
 */
function removeDuplicates(nums: number[]): number[] {
  let numsSize = nums.length;

  for (let i = 0; i < numsSize - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      numsSize -= 1;
      i -= 1;
    }
  }

  return nums;
}


export function main() {
  const nums1 = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5];
  const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

  console.log(`duplicates from ${nums1} with result ${removeDuplicates(nums1)}`);
  console.log(`duplicates from ${nums2} with result ${removeDuplicates(nums2)}`);
}
