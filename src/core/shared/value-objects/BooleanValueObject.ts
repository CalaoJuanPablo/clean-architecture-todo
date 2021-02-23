export class BooleanValueObject {
  readonly value: boolean

  constructor(value: boolean) {
    this.value = value
  }

  toString(): boolean {
    return this.value
  }
}
