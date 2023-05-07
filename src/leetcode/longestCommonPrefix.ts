/* eslint-disable no-loop-func */
/* eslint-disable prefer-destructuring */

/**
 * Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 */
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) { return ''; }
  if (strs.length === 1) { return strs[0]; }

  let currenntPrefixIndex = 0;
  const currentPrefix = [strs[0][currenntPrefixIndex]];
  let hasPrefix = true;

  while (hasPrefix) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][currenntPrefixIndex] !== currentPrefix[currenntPrefixIndex]) {
        hasPrefix = false;
      }
    }

    if (!hasPrefix) {
      currenntPrefixIndex -= 0;
      currentPrefix.pop();
    }

    if (hasPrefix) {
      currenntPrefixIndex += 1;
      currentPrefix.push(strs[0][currenntPrefixIndex]);
    }
  }


  return currentPrefix.join('');
}


export function main() {
  const strs1 = ['flower', 'flow', 'flight'];
  const strs2 = ['dog', 'racecar', 'car'];
  const strs3 = [''];
  const strs4 = ['a'];

  console.log(`Longest prefix of ${strs1} is ${longestCommonPrefix(strs1)}`);
  console.log(`Longest prefix of ${strs2} is ${longestCommonPrefix(strs2)}`);
  console.log(`Longest prefix of ${strs3} is ${longestCommonPrefix(strs3)}`);
  console.log(`Longest prefix of ${strs4} is ${longestCommonPrefix(strs4)}`);
}
