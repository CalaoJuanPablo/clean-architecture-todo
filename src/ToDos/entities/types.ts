import { ToDoTitle } from './ToDoTitle'
import { ToDoDescription } from './ToDoDescription'
import { ToDoCompletedFlag } from './ToDoCompletedFlag'

export interface IToDo {
  title: ToDoTitle
  description: ToDoDescription
  completed: ToDoCompletedFlag
}

export interface IToDoPrimitives {
  title: string
  description?: string
  completed?: boolean
}

export interface IToDoPrimitivesReturnType {
  id: string
  title: string
  description: string
  completed: boolean
}
