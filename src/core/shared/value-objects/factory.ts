import { Uuid } from './Uuid'
import { StringValueObject } from './StringValueObject'
import { BooleanValueObject } from './BooleanValueObject'

export class SharedValueObjectsFactory {
  static uUid = (value: string) => new Uuid(value)
  static stringValueObject = (value: string) => new StringValueObject(value)
  static booleanValueObject = (value: boolean) => new BooleanValueObject(value)
}
