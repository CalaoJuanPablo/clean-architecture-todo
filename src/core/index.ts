import { SharedUseCasesFactory } from '@core-shared/use-cases/factory'
import { ToDosUseCasesFactories } from './ToDos/use-cases/factory'

type DomainTypes = {
  useCases: {
    [name: string]: any
  }
}

const useCases = {
  view_list_of_to_dos_use_case: ToDosUseCasesFactories.viewListOfToDosUseCase
}

class Domain {
  readonly _useCases

  constructor({ useCases }: DomainTypes) {
    this._useCases = useCases
  }

  get(key: string) {
    const useCase = this._useCases[key]

    if (typeof useCase === 'undefined')
      return SharedUseCasesFactory.notImplementedErrorUseCase(key)

    return useCase
  }
}

export default new Domain({ useCases })
