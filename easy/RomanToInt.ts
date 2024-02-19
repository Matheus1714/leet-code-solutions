export function romanToInt(roman: string): number {
  const romanNumberLength = roman.length;
  const mapRomans = new Map(
    Object.entries({
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    }),
  );
  let resultInteger = 0;
  let lastRoman = mapRomans.get(roman[romanNumberLength - 1]);

  if (!lastRoman) {
    throw new Error("Roman not found");
  }

  resultInteger += lastRoman;
  for (let i = romanNumberLength - 2; i >= 0; i--) {
    const actualRoman = mapRomans.get(roman[i]);
    if (!actualRoman) {
      throw new Error("Roman not found");
    }
    if (actualRoman < lastRoman) {
      resultInteger -= actualRoman;
    } else {
      resultInteger += actualRoman;
    }
    lastRoman = actualRoman;
  }
  return resultInteger;
}
