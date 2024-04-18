export function validParentheses(s: string): boolean {
  if (!s || s.length % 2 !== 0) {
    return false;
  }

  const closeMap: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack: string[] = [];

  for (const ch of s) {
    if ("([{".includes(ch)) {
      stack.push(ch);
    } else {
      if (stack.pop() !== closeMap[ch]) return false;
    }
  }

  return stack.length === 0;
}
