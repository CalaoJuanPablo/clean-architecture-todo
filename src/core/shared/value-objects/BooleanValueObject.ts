export class BooleanValueObject {
  private _value: boolean

  constructor(value: boolean) {
    this._value = value
  }

  toBoolean(): boolean {
    return this._value
  }
}
