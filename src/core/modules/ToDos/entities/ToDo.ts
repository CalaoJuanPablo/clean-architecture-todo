import { ToDoId } from './ToDoId'
import { ToDoTypes } from '@core-shared/types/ToDo.types'

export class ToDo {
  readonly _id: ToDoId
  title: string
  description: string
  completed: boolean

  constructor({ title, description = '', completed = false }: ToDoTypes) {
    this._id = ToDoId.random()
    this.title = title
    this.description = description
    this.completed = completed
  }

  static create({
    title,
    description = '',
    completed = false
  }: ToDoTypes): ToDo {
    return new ToDo({ title, description, completed })
  }

  updateTitle(title: string): ToDo {
    this.title = title
    return this
  }

  updateDescription(description: string): ToDo {
    this.description = description
    return this
  }

  toggleToDo(): ToDo {
    this.completed = !this.completed
    return this
  }
}
