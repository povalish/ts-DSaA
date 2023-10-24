class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

function createList(array: number[]): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  const generateLinkedList = (currentIndex: number): void => {
    if (currentIndex >= array.length) {
      return;
    }

    if (head === null || tail === null) {
      const node = new ListNode(array[currentIndex]);
      head = node;
      tail = node;
    } else {
      const node = new ListNode(array[currentIndex]);
      tail.next = node;
      tail = node;
    }

    generateLinkedList(currentIndex + 1);
  };

  generateLinkedList(0);

  return head;
}

function printList(head: ListNode | null): void {
  const result: number[] = [];
  let tail = head;

  const pushNodeToArray = (): void => {
    if (!tail) { return; }

    result.push(tail.val);
    tail = tail.next;

    pushNodeToArray();
  };

  pushNodeToArray();

  const strResult = result.join(' -> ');
  console.log(`Linked list: ${strResult}`);
}

//
//

function removeLinkedListElement(head: ListNode | null, val: number): ListNode | null {
  let newHead: ListNode | null = null;

  const findNextNode = (node: ListNode | null): ListNode | null => {
    if (!node) { return null; }
    if (node.val === val) { return findNextNode(node.next); }
    return node;
  };

  const findAndRemove = (node: ListNode | null): void => {
    if (!node) { return; }
    if (!newHead && node?.val !== val) { newHead = node; }

    if (node.next?.val === val) {
      node.next = findNextNode(node.next.next);
    }

    findAndRemove(node.next);
  }

  findAndRemove(head);

  return newHead;
}

export function main() {
  const array = [1, 2, 2, 1];
  const head = createList(array);
  printList(head);
  const newHead = removeLinkedListElement(head, 2);
  printList(newHead);
}