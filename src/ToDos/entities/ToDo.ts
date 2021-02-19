import { ToDoId } from './ToDoId'
import { IToDo, IToDoPrimitives } from './types'

export class ToDo {
  readonly _id: ToDoId
  readonly title: string
  readonly description: string
  readonly completed: boolean

  constructor({ title, description, completed }: IToDo) {
    this._id = ToDoId.random()
    this.title = title
    this.description = description
    this.completed = completed
  }

  static create({
    title,
    description = '',
    completed = false
  }: IToDoPrimitives) {
    return new ToDo({ title, description, completed })
  }
}
