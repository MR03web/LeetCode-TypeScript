/**
 * @Date 2020-07-24 17:57:43
 * @Remark AddTwoNumbers
 */

import ListNode from "./ListNode";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (l1 === null || l2 === null) {
    return null;
  }

  let dummyHead = new ListNode(0);
  let cur1: ListNode | null = l1;
  let cur2: ListNode | null = l2;
  let cur = dummyHead;
  let carry = 0; // 存储进位

  while (cur1 !== null || cur2 !== null) {
    let val1 = cur1 !== null ? cur1.val : 0;
    let val2 = cur2 !== null ? cur2.val : 0;
    let sum = val1 + val2 + carry;

    let newNode = new ListNode(sum % 10);
    carry = sum >= 10 ? 1 : 0; // 大于10就要进一位
    cur.next = newNode;
    cur = cur.next;

    if (cur1 !== null) {
      cur1 = cur1.next;
    }
    if (cur2 !== null) {
      cur2 = cur2.next;
    }
  }

  if (carry > 0) {
    cur.next = new ListNode(carry);
  }

  return dummyHead.next;
}

export default addTwoNumbers;
