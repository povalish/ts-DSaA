export class Stack<T> {
  private readonly data: T[] = [];

  private readonly isFixedSize: boolean = false;
  private readonly maxSize?: number;
  private actualSize: number = 0;


  constructor(maxSize?: number) {
    if (maxSize) {
      this.maxSize = maxSize;
      this.isFixedSize = true;
      this.data = Array(maxSize);
    }
  }


  get length(): number {
    return this.actualSize;
  }


  public push(e: T): void {
    // FIXED_SIZE mode
    if (this.isFixedSize) {
      if (this.isFull()) {
        throw new Error(`[Stack] Can not push ${e}. Stack is overflowed`);
      }

      this.data[this.actualSize] = e;
      this.actualSize += 1;
      return;
    }

    // DYNAMIC mode
    this.data.push(e);
    this.actualSize += 1;
  }


  public pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error('[Stack] Can not pop element. Stack is empty.');
    }

    // FIXED_SIZE mode
    if (this.isFixedSize) {
      const lastIndex = this.actualSize - 1;
      const lastElement = this.data[lastIndex];

      this.data[lastIndex] = undefined!;
      this.actualSize -= 1;

      return lastElement;
    }

    // DYNAMIC mode
    const lastElement = this.data.pop();
    this.actualSize -= 1;

    return lastElement;
  }


  public top(): T | undefined {
    if (this.isEmpty()) { return undefined; }
    return this.data[this.actualSize - 1];
  }


  public isFull(): boolean {
    if (!this.isFixedSize) { return false; }
    return this.actualSize === this.maxSize;
  }


  public isEmpty(): boolean {
    return this.actualSize === 0;
  }
}
