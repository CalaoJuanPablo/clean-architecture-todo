import { FromToDosAPIResponseToListOfToDosValueObjectMapper } from './FromToDosAPIResponseToListOfToDosValueObjectMapper'
import { NextJSAPIToDoTypes } from '../adapters/NextJsAPIAdapter'
import { ToDoEntityParams } from '../entities/ToDoEntity'
import { ToDosValueObjectsFactory } from '../value-objects/factory'
import { ToDosEntitiesFactory } from '../entities/factory'

const parser = (toDo: NextJSAPIToDoTypes): ToDoEntityParams => ({
  id: toDo.id,
  title: toDo.title,
  description: toDo.description || '',
  completed: toDo.completed || false
})

export class ToDosMappersFactory {
  static fromToDosAPIResponseToListOfToDosValueObjectMapper = () =>
    new FromToDosAPIResponseToListOfToDosValueObjectMapper({
      parser,
      toDoEntityFactory: ToDosEntitiesFactory.toDoEntity,
      listOfToDosValueObjectFactory:
        ToDosValueObjectsFactory.listOfToDosValueObject
    })
}
