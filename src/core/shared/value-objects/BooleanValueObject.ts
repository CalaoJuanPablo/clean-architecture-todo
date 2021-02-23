export class BooleanValueObject {
  readonly value: boolean

  constructor(value: boolean) {
    this.value = value
  }

  toBoolean(): boolean {
    return this.value
  }
}
