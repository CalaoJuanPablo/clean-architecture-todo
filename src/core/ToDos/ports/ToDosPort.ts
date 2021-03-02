import { ListOfToDosValueObject } from '../value-objects/ListOfToDosValueObject'

export interface ToDosPort {
  getAll(): Promise<ListOfToDosValueObject>
}
