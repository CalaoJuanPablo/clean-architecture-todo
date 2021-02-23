import { StringValueObject } from '@core-shared/value-objects'

export type ToDoConstructorParamTypes = {
  title: StringValueObject
  description: StringValueObject
}

export type ToDoTypesPrimitives = {
  title: string
  description?: string
}

export type ToDoTypesPrimitivesReturn = {
  id: string
  title: string
  description: string
  completed: boolean
}
