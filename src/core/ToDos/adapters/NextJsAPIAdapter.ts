import { FromToDosAPIResponseToListOfToDosValueObjectMapper } from '../mappers/FromToDosAPIResponseToListOfToDosValueObjectMapper'
import { ToDosPort } from '../ports/ToDosPort'

export type NextJSAPIToDoTypes = {
  id: string
  title: string
  description?: string
  completed?: boolean
}

type NextJsAPIFetcherResponse = {
  toDos: NextJSAPIToDoTypes[]
}

type NextJsAPIAdapterParams = {
  apiFetcher: () => Promise<NextJsAPIFetcherResponse>
  mapper: FromToDosAPIResponseToListOfToDosValueObjectMapper
}
export class NextJsAPIAdapter implements ToDosPort {
  private _fetcher
  private _mapper

  constructor({ apiFetcher, mapper }: NextJsAPIAdapterParams) {
    this._fetcher = apiFetcher
    this._mapper = mapper
  }

  async getAll() {
    const { toDos } = await this._fetcher()
    const toDosMapped = this._mapper.map(toDos)
    return toDosMapped
  }
}
