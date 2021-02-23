import { ToDoId } from './ToDoId'
import {
  ToDoTypes,
  ToDoTypesPrimitives,
  ToDoTypesPrimitivesReturn
} from '@core-shared/types/ToDo.types'
import {
  StringValueObject,
  BooleanValueObject
} from '@core-shared/value-objects'

export class ToDo {
  private readonly _id: ToDoId = ToDoId.random()
  private title: StringValueObject
  private description: StringValueObject
  private completed: BooleanValueObject

  constructor({ title, description, completed }: ToDoTypes) {
    this.title = title
    this.description = description
    this.completed = completed
  }

  static create({ title, description, completed }: ToDoTypes): ToDo {
    return new ToDo({ title, description, completed })
  }

  static fromPrimitives({
    title,
    description = '',
    completed = false
  }: ToDoTypesPrimitives): ToDo {
    return new ToDo({
      title: new StringValueObject(title),
      description: new StringValueObject(description),
      completed: new BooleanValueObject(completed)
    })
  }

  toPrimitives(): ToDoTypesPrimitivesReturn {
    const { _id, title, description, completed } = this

    return {
      id: _id.value,
      title: title.value,
      description: description.value,
      completed: completed.value
    }
  }

  updateTitle(title: StringValueObject) {
    this.title = title
  }

  updateDescription(description: StringValueObject) {
    this.description = description
  }

  toggleToDo() {
    this.completed = new BooleanValueObject(!this.completed.value)
  }
}
