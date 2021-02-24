import { ToDoId } from './ToDoId'
import { ToDoEntityParams } from './ToDoEntity'
import { ToDoEntity } from './ToDoEntity'

export class ToDosEntitiesFactory {
  static toDoEntity = (todo: ToDoEntityParams) => new ToDoEntity(todo)
  static toDoId = (id: string) => new ToDoId(id)
}
