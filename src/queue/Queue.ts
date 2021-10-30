export class Queue<T> {
  public data: T[] = [];
  private readonly DEFAULT_DATA_CAPACITY = 10;

  private readonly maxSize?: number;
  private readonly isFixedSize: boolean = false;

  private size: number = 0;

  // Utility variable
  // first index of current available element
  private firstElementIndex = 0;


  constructor(maxSize?: number) {
    if (maxSize) {
      this.maxSize = maxSize;
      this.isFixedSize = true;
    }

    this.data = Array(maxSize || this.DEFAULT_DATA_CAPACITY);
  }


  get length(): number {
    return this.size;
  }

  public first(): T | null {
    if (this.isEmpty()) { return null; }
    return this.data[this.firstElementIndex]!;
  }

  public push(e: T): void {
    if (this.isFull()) {
      throw new Error('[Queue] Queue is full, maybe you should not use fixed size.');
    }

    if (!this.isFixedSize && this.size === this.data.length) {
      this.resizeDataCapacity(this.size * 2);
    }

    const firstIndex = (this.firstElementIndex + this.size) % this.data.length;
    this.data[firstIndex] = e;
    this.size += 1;
  }

  public pop(): T | null {
    if (this.isEmpty()) { return null; }

    const firstElement = this.data[this.firstElementIndex]!;
    this.data[this.firstElementIndex] = undefined!;
    this.firstElementIndex = (this.firstElementIndex + 1) % this.data.length;
    this.size -= 1;

    // Need to resize
    // no needed for FIXED SIZE mode
    if (!this.isFixedSize) {
      const nonZeroSize = this.size > 0;
      const lessThenDataLength = this.size < Math.round(this.data.length / 4);
      if (nonZeroSize && lessThenDataLength) {
        const newSize = Math.round(this.data.length / 2);
        this.resizeDataCapacity(newSize);
      }
    }

    return firstElement;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  // Returns true if Queue in FIXED SIZE mode
  // and Queue is full
  // Otherwise returns false
  public isFull(): boolean {
    if (!this.isFixedSize) { return false; }
    return this.size === this.maxSize;
  }

  private resizeDataCapacity(newSize: number): void {
    const copy = this.data;
    this.data = Array(newSize);

    let walkIndex = this.firstElementIndex;
    let elementCount = 0;

    while (elementCount < this.size) {
      this.data[elementCount] = copy[walkIndex]!;
      walkIndex = (walkIndex + 1) % copy.length;
      elementCount += 1;
    }

    this.firstElementIndex = 0;
  }
}
