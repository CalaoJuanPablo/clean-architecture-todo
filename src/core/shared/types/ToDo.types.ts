import {
  StringValueObject,
  BooleanValueObject
} from '@core-shared/value-objects'

export type ToDoTypes = {
  title: StringValueObject
  description: StringValueObject
  completed: BooleanValueObject
}

export type ToDoTypesPrimitives = {
  title: string
  description?: string
  completed?: boolean
}

export type ToDoTypesPrimitivesReturn = {
  id: string
  title: string
  description: string
  completed: boolean
}
