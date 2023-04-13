export class Node<T> {
  public next?: Node<T>;
  public prev?: Node<T>;
  public value?: T;

  constructor(value?: T) {
    this.value = value;
  }
}
