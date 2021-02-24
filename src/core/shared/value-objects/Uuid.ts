import { validate } from 'uuid'

export class Uuid {
  private _value: string

  constructor(value: string) {
    this._ensureIsValidUuid(value)
    this._value = value
  }

  private _ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new Error(
        `<${this.constructor.name}> does not allow the value <${id}>`
      )
    }
  }

  toString(): string {
    return this._value
  }
}
