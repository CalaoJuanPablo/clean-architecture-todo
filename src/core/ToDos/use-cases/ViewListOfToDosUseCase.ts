import { UseCase } from '@core-shared/interfaces/UseCase'
import { ToDosPort } from '../ports/ToDosPort'

type ViewListOfToDosUseCaseType = {
  adapter: ToDosPort
}

export class ViewListOfToDosUseCase implements UseCase {
  private readonly _adapter: ToDosPort

  constructor({ adapter }: ViewListOfToDosUseCaseType) {
    this._adapter = adapter
  }

  execute() {
    return this._adapter.getAll()
  }
}
