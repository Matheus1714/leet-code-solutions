export function isPalindrome(num: number): boolean {
  if (num < 0) return false;

  const listOfDigits = num.toString().split("").map(Number);
  const numberOfDigits = listOfDigits.length;

  if (numberOfDigits === 1) return true;

  for (let i = 0; i < Math.floor(numberOfDigits / 2); i++) {
    if (listOfDigits[i] !== listOfDigits[numberOfDigits - i - 1]) {
      return false;
    }
  }

  return true;
}
