import { NotImplementedErrorUseCase } from './NotImplementedErrorUseCase'

export class SharedUseCasesFactory {
  static notImplementedErrorUseCase = (key: string) =>
    new NotImplementedErrorUseCase({ key })
}
