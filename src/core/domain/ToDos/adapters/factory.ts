import { FileSystemDataStoreAdapter } from './FileSystemDataStoreAdapter'

export class ToDosAdaptersFactory {
  static fileSystemDataStorePortAdapter = () => new FileSystemDataStoreAdapter()
}
