import { ToDoId } from './ToDoId'
import { ToDoTitle } from './ToDoTitle'
import { ToDoDescription } from './ToDoDescription'
import { ToDoCompletedFlag } from './ToDoCompletedFlag'
import { IToDo, IToDoPrimitives, IToDoPrimitivesReturnType } from './types'

export class ToDo {
  readonly _id: ToDoId
  readonly title: ToDoTitle
  readonly description: ToDoDescription
  readonly completed: ToDoCompletedFlag

  constructor({ title, description, completed }: IToDo) {
    this._id = ToDoId.random()
    this.title = title
    this.description = description
    this.completed = completed
  }

  static create({ title, description, completed }: IToDo) {
    return new ToDo({ title, description, completed })
  }

  static fromPrimitives({
    title,
    description = '',
    completed = false
  }: IToDoPrimitives): ToDo {
    return new ToDo({
      title: new ToDoTitle(title),
      description: new ToDoDescription(description),
      completed: new ToDoCompletedFlag(completed)
    })
  }

  toPrimitives(): IToDoPrimitivesReturnType {
    return {
      id: this._id.value,
      title: this.title.value,
      description: this.description.value,
      completed: this.completed.value
    }
  }
}
