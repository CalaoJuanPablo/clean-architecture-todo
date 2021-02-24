import { SharedValueObjectsFactory } from '@core-shared/value-objects/factory'
import { ToDosEntitiesFactory } from './factory'
import { Entity } from '@core-shared/entities/Entity'

export type ToDoEntityParams = {
  id: string
  title: string
  description?: string
  completed?: boolean
}

export class ToDoEntity implements Entity<ToDoEntityParams> {
  private readonly _id
  private _title
  private _description
  private _completed

  constructor({
    id,
    title,
    description = '',
    completed = false
  }: ToDoEntityParams) {
    this._id = ToDosEntitiesFactory.toDoId(id)
    this._title = SharedValueObjectsFactory.stringValueObject(title)
    this._description = SharedValueObjectsFactory.stringValueObject(description)
    this._completed = SharedValueObjectsFactory.booleanValueObject(completed)
  }

  toJSON() {
    const { _id, _title, _description, _completed } = this

    return {
      id: _id.toString(),
      title: _title.toString(),
      description: _description.toString(),
      completed: _completed.toBoolean()
    }
  }

  updateTitle(title: string) {
    this._title = SharedValueObjectsFactory.stringValueObject(title)
  }

  updateDescription(description: string) {
    this._description = SharedValueObjectsFactory.stringValueObject(description)
  }

  toggleToDo() {
    this._completed = SharedValueObjectsFactory.booleanValueObject(
      !this._completed.toBoolean()
    )
  }
}
