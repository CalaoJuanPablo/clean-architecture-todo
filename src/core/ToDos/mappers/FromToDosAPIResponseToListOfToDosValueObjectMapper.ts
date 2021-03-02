import { Mapper } from '@core-shared/interfaces/Mapper'
import { NextJSAPIToDoTypes } from '../adapters/NextJsAPIAdapter'
import { ToDoEntityParams } from '../entities/ToDoEntity'
import { ListOfToDosValueObject } from '../value-objects/ListOfToDosValueObject'

type FromToDosAPIResponseToListOfToDosValueObjectMapperParams = {
  parser: ({ toDo }: { toDo: NextJSAPIToDoTypes }) => ToDoEntityParams
  listOfToDosValueObjectFactory: ({
    toDos
  }: {
    toDos: ToDoEntityParams[]
  }) => ListOfToDosValueObject
}

export class FromToDosAPIResponseToListOfToDosValueObjectMapper
  implements Mapper<ListOfToDosValueObject> {
  private _parser
  private _listOfToDosValueObjectFactory

  constructor({
    parser,
    listOfToDosValueObjectFactory
  }: FromToDosAPIResponseToListOfToDosValueObjectMapperParams) {
    this._parser = parser
    this._listOfToDosValueObjectFactory = listOfToDosValueObjectFactory
  }

  map(toDosFromAPI: NextJSAPIToDoTypes[]) {
    const toDosParsed = toDosFromAPI.map(toDo => this._parser({ toDo }))
    return this._listOfToDosValueObjectFactory({ toDos: toDosParsed })
  }
}
