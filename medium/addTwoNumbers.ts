export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number | undefined, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null | undefined,
  l2: ListNode | null | undefined,
  carry = 0,
): ListNode | null {
  if (l1 === null && l2 === null && carry === 0) {
    return null;
  }

  const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
  const newNode = new ListNode(sum % 10);

  if (
    (l1 !== null && l1 !== undefined) ||
    (l2 !== null && l2 !== undefined) ||
    sum >= 10
  ) {
    newNode.next = addTwoNumbers(l1?.next, l2?.next, Math.floor(sum / 10));
  }

  return newNode.val === 0 && newNode.next === null ? null : newNode;
}
