import { ToDoEntity, ToDoEntityParams } from '../entities/ToDoEntity'
import { ToDosPort } from '../ports/ToDosPort'

type NextJsAPIAdapterParams = {
  toDosEntityFactory: (toDo: ToDoEntityParams) => ToDoEntity
}
export class NextJsAPIAdapter implements ToDosPort {
  private _toDosEntityFactory

  constructor({ toDosEntityFactory }: NextJsAPIAdapterParams) {
    this._toDosEntityFactory = toDosEntityFactory
  }

  getAll() {
    return Promise.resolve([])
  }
}
