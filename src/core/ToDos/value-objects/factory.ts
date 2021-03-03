import {
  ListOfToDosValueObject,
  ListOfToDosValueObjectParams
} from './ListOfToDosValueObject'

export class ToDosValueObjectsFactory {
  static listOfToDosValueObject = ({ toDos }: ListOfToDosValueObjectParams) => {
    return new ListOfToDosValueObject({ toDos })
  }
}
