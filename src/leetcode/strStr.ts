/**
 * Find the Index of the First Occurrence in a String
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */
function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let isOK = true;
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          isOK = false;
        }
      }

      if (isOK) { return i; }
    }
  }

  return -1;
}

export function main() {
  let haystack = 'sabutsad';
  let needle = 'sad';
  console.log(`${needle} in ${haystack} at index ${strStr(haystack, needle)}`);

  haystack = 'leetcode';
  needle = 'leeto';
  console.log(`${needle} in ${haystack} at index ${strStr(haystack, needle)}`);
}
