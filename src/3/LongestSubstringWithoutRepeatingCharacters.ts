/**
 * @Date 2020-07-27 10:54:57
 * @Remark LongestSubstringWithoutRepeatingCharacters
 */

function lengthOfLongestSubstring(s: string): number {
  if (s === null || s.length === 0) {
    return 0;
  }

  const hash: {
    [code: string]: number;
  } = {};

  let start = 0;
  let len = 0;
  let maxLen = len;

  for (let index = 0; index < s.length; index++) {
    const item = s[index];

    if (hash[item] !== undefined && hash[item] >= start) {
      start = hash[item] + 1;
      len = index - start;
    }

    len++;

    if (len > maxLen) {
      maxLen = len;
    }

    hash[item] = index;
  }

  return maxLen;
}

export default lengthOfLongestSubstring;
