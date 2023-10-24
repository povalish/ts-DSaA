class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

type Node = ListNode | null;

function createList(array: number[]): Node {
  let head: Node = null;
  let tail: Node = null;

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

function printList(head: Node): void {
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



function isPalindrome(head: Node): boolean {
  let leftNode = head;

  const check = (rightNode: Node) => {
    if (rightNode === null) { return true; }
    const isOKPrev = check(rightNode.next);

    if (!isOKPrev) { return false; }

    const isOK = leftNode?.val === rightNode.val;
    leftNode = leftNode?.next || null;

    return isOK;
  }

  return check(head);
}

export function main() {
  const array = [1, 2, 3, 2, 1]; // ERROR
  const head = createList(array);
  printList(head);
  console.log(`is palindrome ${array} -> ${isPalindrome(head)}`)
}