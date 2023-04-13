import { Node } from './Node';

export class LinkedList<T> {
  public readonly head: Node<T> = new Node();
  public readonly tail: Node<T> = new Node();

  private size: number = 0;


  constructor() {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }


  public insertAtStart(value: T): Node<T> {
    const node = this.insertValueBetweenNodes(value, this.head, this.head.next!);
    this.size += 1;
    return node;
  }

  public insertAtEnd(value: T): Node<T> {
    const node = this.insertValueBetweenNodes(value, this.tail.prev!, this.tail);
    this.size += 1;
    return node;
  }

  public display(): void {
    let walkHead = this.head.next;
    const result = [];

    while (walkHead?.next) {
      result.push(walkHead.value);
      walkHead = walkHead.next;
    }

    console.log(`List: ${result.join(' -> ')}`);
  }

  // [WARNING] Function reassigns params
  private insertValueBetweenNodes(value: T, prevNode: Node<T>, nextNode: Node<T>) {
    const node = new Node(value);

    node.prev = prevNode;
    node.next = nextNode;

    // eslint-disable-next-line no-param-reassign
    nextNode.prev = node;
    // eslint-disable-next-line no-param-reassign
    prevNode.next = node;

    return node;
  }
}
