/**
 * @Date 2020-07-24 17:57:43
 * @Remark
 */

import addTwoNumbers from "./AddTwoNumbers";
import ListNode from "./ListNode";

// import twoSum from "./TwoSum";

const a3 = new ListNode(3);
const a2 = new ListNode(4, a3);
const a1 = new ListNode(2, a2);

const b3 = new ListNode(4);
const b2 = new ListNode(6, b3);
const b1 = new ListNode(5, b2);

test("AddTwoNumbers", () => {
  addTwoNumbers(a1, b1);
});
