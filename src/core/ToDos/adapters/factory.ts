import { ToDosMappersFactory } from '../mappers/factory'
import { NextJsAPIAdapter } from './NextJsAPIAdapter'
export class ToDosAdaptersFactory {
  static nextJsAPIAdapter = () =>
    new NextJsAPIAdapter({
      apiFetcher: () => Promise.resolve({ toDos: [] }),
      mapper: ToDosMappersFactory.fromToDosAPIResponseToListOfToDosValueObjectMapper()
    })
}
