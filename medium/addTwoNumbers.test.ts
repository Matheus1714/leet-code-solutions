import { addTwoNumbers, ListNode } from "./addTwoNumbers";

const createLinkedListFromNumber = (num: number): ListNode | null => {
  const numStr = num.toString();
  const dummyHead = new ListNode();
  let current = dummyHead;
  for (let i = numStr.length - 1; i >= 0; i--) {
    const digit = parseInt(numStr[i]);
    current.next = new ListNode(digit);
    current = current.next;
  }
  return dummyHead.next;
};

describe("Add Two Numbers", () => {
  test.skip("Should return the sum between two number with the same width", () => {
    const num1 = 342;
    const num2 = 465;

    const result = num1 + num2;

    const list1 = createLinkedListFromNumber(num1);
    const list2 = createLinkedListFromNumber(num2);

    const listResult = createLinkedListFromNumber(result);

    expect(addTwoNumbers(list1, list2)).toStrictEqual(listResult);
  });
  test.skip("Should return the sum between zeros", () => {
    const num1 = 0;
    const num2 = 0;

    const result = num1 + num2;

    const list1 = createLinkedListFromNumber(num1);
    const list2 = createLinkedListFromNumber(num2);

    const listResult = createLinkedListFromNumber(result);

    expect(addTwoNumbers(list1, list2)).toStrictEqual(listResult);
  });
  test.skip("Should return the sum between two number with different widths", () => {
    const num1 = 9999999;
    const num2 = 9999;

    const result = num1 + num2;

    const list1 = createLinkedListFromNumber(num1);
    const list2 = createLinkedListFromNumber(num2);

    const listResult = createLinkedListFromNumber(result);

    expect(addTwoNumbers(list1, list2)).toStrictEqual(listResult);
  });
  test.skip("Should return the sum without more one zero", () => {
    const num1 = 199;
    const num2 = 1;

    const result = num1 + num2;

    const list1 = createLinkedListFromNumber(num1);
    const list2 = createLinkedListFromNumber(num2);

    const listResult = createLinkedListFromNumber(result);

    expect(addTwoNumbers(list1, list2)).toStrictEqual(listResult);
  });
});
