import { ToDoEntity } from '../entities/ToDoEntity'

export type ListOfToDosValueObjectParams = {
  toDos: ToDoEntity[]
}

export class ListOfToDosValueObject {
  private _value

  constructor({ toDos }: ListOfToDosValueObjectParams) {
    this._value = toDos
  }

  toJSON() {
    return this._value.map(todo => todo.toJSON())
  }
}
