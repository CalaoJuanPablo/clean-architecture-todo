import { FromToDosAPIResponseToListOfToDosValueObjectMapper } from './FromToDosAPIResponseToListOfToDosValueObjectMapper'
import { NextJSAPIToDoTypes } from '../adapters/NextJsAPIAdapter'
import { ToDoEntityParams } from '../entities/ToDoEntity'
import { ToDosValueObjectsFactory } from '../value-objects/factory'

const parser = ({ toDo }: { toDo: NextJSAPIToDoTypes }): ToDoEntityParams => ({
  id: toDo.id,
  title: toDo.title,
  description: toDo.description || '',
  completed: toDo.completed || false
})

export class ToDosMappersFactory {
  static fromToDosAPIResponseToListOfToDosValueObjectMapper = () =>
    new FromToDosAPIResponseToListOfToDosValueObjectMapper({
      parser,
      listOfToDosValueObjectFactory:
        ToDosValueObjectsFactory.listOfToDosValueObject
    })
}
