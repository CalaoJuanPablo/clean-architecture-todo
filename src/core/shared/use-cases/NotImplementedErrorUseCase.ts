import { UseCase } from '../interfaces/UseCase'

export class NotImplementedErrorUseCase implements UseCase {
  readonly _key: string

  constructor({ key }: { key: string }) {
    this._key = key
  }

  execute() {
    return Promise.reject(
      console.error(`Service <${this._key}> is not implemented`)
    )
  }
}
