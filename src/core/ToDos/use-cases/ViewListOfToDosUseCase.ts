import { UseCase } from '@core-shared/interfaces/UseCase'
import { ToDosPort } from '../ports/ToDosPort'

type ViewListOfToDosUseCaseType = {
  port: ToDosPort
}

export class ViewListOfToDosUseCase implements UseCase {
  private readonly _port: ToDosPort

  constructor({ port }: ViewListOfToDosUseCaseType) {
    this._port = port
  }

  execute() {
    return this._port.getAll()
  }
}
