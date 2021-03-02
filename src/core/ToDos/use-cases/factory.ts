import { ToDosAdaptersFactory } from '../adapters/factory'
import { ViewListOfToDosUseCase } from './ViewListOfToDosUseCase'

export class ToDosUseCasesFactories {
  static viewListOfToDosUseCase = () =>
    new ViewListOfToDosUseCase({
      adapter: ToDosAdaptersFactory.nextJsAPIAdapter()
    })
}
