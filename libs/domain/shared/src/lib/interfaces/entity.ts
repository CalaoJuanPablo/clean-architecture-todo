export interface Entity<T> {
  toJSON: () => T;
}
