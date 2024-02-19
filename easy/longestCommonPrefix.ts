export function longestCommonPrefix(words: string[]): string {
  const numberOfWords = words.length;
  let index = 1;
  let commonPrefix = words[0];
  do {
    const word = words[index];
    const smallWordLength = Math.min(commonPrefix.length, word.length);
    let findDifference = false;
    for (let i = 0; i < smallWordLength && !findDifference; i++) {
      if (word[i] !== commonPrefix[i]) {
        findDifference = true;
        commonPrefix = word.slice(0, i);
      }
    }
    index++;
  } while (index < numberOfWords);
  return commonPrefix;
}
