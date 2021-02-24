import { ToDosAdaptersFactory } from '../adapters/factory'
import { ViewListOfToDosUseCase } from './ViewListOfToDosUseCase'

export class ToDosUseCasesFactories {
  static viewListOfToDosUseCase = () =>
    new ViewListOfToDosUseCase({
      port: ToDosAdaptersFactory.fileSystemDataStorePortAdapter()
    })
}
