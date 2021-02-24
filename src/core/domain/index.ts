import { NotImplementedErrorUseCase } from '@core-shared/use-cases/NotImplementedErrorUseCase'

type DomainTypes = {
  useCases: {
    [name: string]: any
  }
}

const useCases = {}

class Domain {
  readonly _useCases

  constructor({ useCases }: DomainTypes) {
    this._useCases = useCases
  }

  get(key: string) {
    const useCase = this._useCases[key]

    if (typeof useCase === 'undefined')
      return new NotImplementedErrorUseCase({ key })

    return useCase
  }
}

export default new Domain({ useCases })
