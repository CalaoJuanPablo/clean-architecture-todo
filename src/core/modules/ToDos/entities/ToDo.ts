import { ToDoId } from './ToDoId'
import {
  ToDoConstructorParamTypes,
  ToDoTypesPrimitives,
  ToDoTypesPrimitivesReturn
} from '@core-shared/types/ToDo.types'
import {
  StringValueObject,
  BooleanValueObject
} from '@core-shared/value-objects'

export class ToDo {
  readonly _id: ToDoId = ToDoId.random()
  title: StringValueObject
  description: StringValueObject
  completed: BooleanValueObject = new BooleanValueObject(false)

  constructor({ title, description }: ToDoConstructorParamTypes) {
    this.title = title
    this.description = description
  }

  static create({ title, description }: ToDoConstructorParamTypes): ToDo {
    return new ToDo({ title, description })
  }

  static fromPrimitives({
    title,
    description = ''
  }: ToDoTypesPrimitives): ToDo {
    return new ToDo({
      title: new StringValueObject(title),
      description: new StringValueObject(description)
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
