import { ToDosEntitiesFactory } from '../entities/factory'
import { NextJsAPIAdapter } from './NextJsAPIAdapter'
export class ToDosAdaptersFactory {
  static nextJsAPIAdapter = () =>
    new NextJsAPIAdapter({
      toDosEntityFactory: ToDosEntitiesFactory.toDoEntity
    })
}
