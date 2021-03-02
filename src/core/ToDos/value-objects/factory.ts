import { ListOfToDosValueObject } from './ListOfToDosValueObject'
import { ToDosEntitiesFactory } from '../entities/factory'
import { ToDoEntityParams } from '../entities/ToDoEntity'

export class ToDosValueObjectsFactory {
  static listOfToDosValueObject = ({
    toDos
  }: {
    toDos: ToDoEntityParams[]
  }) => {
    const toDosEntities = toDos.map(ToDosEntitiesFactory.toDoEntity)

    return new ListOfToDosValueObject({ toDos: toDosEntities })
  }
}
