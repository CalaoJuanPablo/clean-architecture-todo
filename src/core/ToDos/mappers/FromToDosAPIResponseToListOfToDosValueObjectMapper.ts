import { Mapper } from '@core-shared/interfaces/Mapper'
import { NextJSAPIToDoTypes } from '../adapters/NextJsAPIAdapter'
import { ToDoEntity, ToDoEntityParams } from '../entities/ToDoEntity'
import {
  ListOfToDosValueObject,
  ListOfToDosValueObjectParams
} from '../value-objects/ListOfToDosValueObject'

type FromToDosAPIResponseToListOfToDosValueObjectMapperParams = {
  parser: (toDo: NextJSAPIToDoTypes) => ToDoEntityParams
  toDoEntityFactory: (toDo: ToDoEntityParams) => ToDoEntity
  listOfToDosValueObjectFactory: ({
    toDos
  }: ListOfToDosValueObjectParams) => ListOfToDosValueObject
}

export class FromToDosAPIResponseToListOfToDosValueObjectMapper
  implements Mapper<ListOfToDosValueObject> {
  private _parser
  private _toDoEntityFactory
  private _listOfToDosValueObjectFactory

  constructor({
    parser,
    toDoEntityFactory,
    listOfToDosValueObjectFactory
  }: FromToDosAPIResponseToListOfToDosValueObjectMapperParams) {
    this._parser = parser
    this._toDoEntityFactory = toDoEntityFactory
    this._listOfToDosValueObjectFactory = listOfToDosValueObjectFactory
  }

  map(toDosFromAPI: NextJSAPIToDoTypes[]) {
    const toDosParsed = toDosFromAPI.map(this._parser)
    const toDosEntities = toDosParsed.map(this._toDoEntityFactory)

    return this._listOfToDosValueObjectFactory({ toDos: toDosEntities })
  }
}
