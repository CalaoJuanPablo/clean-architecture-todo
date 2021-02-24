import { ToDosPort } from '../ports/ToDosPort'

export class FileSystemDataStoreAdapter implements ToDosPort {
  getAll() {
    return Promise.resolve([])
  }
}
