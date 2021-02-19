import { ToDoId } from '@core-modules/ToDos/entities/ToDoId'

export interface ToDoInterface {
  readonly _id: ToDoId
  title: string
  description: string
  completed: boolean
}
