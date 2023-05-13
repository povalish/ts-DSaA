/* eslint-disable no-param-reassign */
/**
 * Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function createLinkedList(array: number[]): ListNode | null {
  if (array.length === 0) {
    return null;
  }

  const head = new ListNode();
  let currentHead = head;

  array.forEach((item, index) => {
    const node = new ListNode();

    currentHead.val = item;
    if (index < array.length - 1) {
      currentHead.next = node;
      currentHead = node;
    }
  });

  return head;
}

function printLinnkedList(head: ListNode | null) {
  let currentHead: ListNode | null = head;
  const result = [];

  while (currentHead) {
    result.push(currentHead.val);
    currentHead = currentHead.next;
  }

  console.log(result.join(' -> '));
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) { return list2; }
  if (!list2) { return list1; }

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }

  list2.next = mergeTwoLists(list1, list2.next);
  return list2;
}


export function main() {
  const array11 = [1, 2, 4];
  const array12 = [3];
  const list11 = createLinkedList(array11);
  const list12 = createLinkedList(array12);

  const array21: number[] = [];
  const array22: number[] = [];
  const list21 = createLinkedList(array21);
  const list22 = createLinkedList(array22);

  const array31: number[] = [];
  const array32 = [0];
  const list31 = createLinkedList(array31);
  const list32 = createLinkedList(array32);

  // console.log(`${array21}, ${array22} -> ${mergeTwoLists(list21, list22)}`);
  // console.log(`${array31}, ${array32} -> ${mergeTwoLists(list31, list32)}`);

  console.log(`Arrays: ${array11} || ${array12}`);
  printLinnkedList(mergeTwoLists(list11, list12));
}
