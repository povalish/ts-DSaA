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

function reverseList(head: ListNode | null): ListNode | null {
  let newHead: ListNode | null = null;

  const reverse = (node: ListNode | null)  => {
    if (!newHead) {
      newHead = new ListNode(node!.val);
    }

    if (node?.next) {
      const nextNode = new ListNode(node?.next?.val);
  
      nextNode.next = newHead;
      newHead = nextNode;
    }


    if (node?.next?.next) {
      reverse(node.next);
    }
  }; 

  reverse(head);

  return newHead;
};

export function main() {
  const array = [1];
  const head = createList(array);
  printList(head);
  const newHead = reverseList(head);
  printList(newHead);
}
