export class ArrayValueObject<T> {
  readonly value: T[]

  constructor(value: T[]) {
    this.value = value
  }

  toArray(): T[] {
    return this.value
  }
}
