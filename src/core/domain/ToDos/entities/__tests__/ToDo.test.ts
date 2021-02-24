import { ToDo } from '../ToDo'
import { ListOfToDos } from '../ListOfToDos'
import {
  ToDoConstructorParamTypes,
  ToDoTypesPrimitives
} from '../../types/ToDo.types'
import { StringValueObject } from '@core-shared/value-objects'

const mockToDoPrimitiveData: ToDoTypesPrimitives = {
  title: 'ToDo Title',
  description: 'This is a mock'
}

const toDoParams: ToDoConstructorParamTypes = {
  title: new StringValueObject(mockToDoPrimitiveData.title),
  description: new StringValueObject(
    mockToDoPrimitiveData.description as string
  )
}

describe('ToDo Entity', () => {
  describe('Create new instance ToDo', () => {
    test('instance of ToDo', () => {
      const toDo = new ToDo(toDoParams)
      expect(toDo).toBeInstanceOf(ToDo)
    })

    test('Create with create static helper', () => {
      const toDo = ToDo.create(toDoParams)
      expect(toDo).toBeInstanceOf(ToDo)
    })

    test('Create fromPrimitives method', () => {
      const toDo = ToDo.fromPrimitives(mockToDoPrimitiveData)
      expect(toDo).toBeInstanceOf(ToDo)
    })

    test('Create fromPrimitives method with no description', () => {
      const toDo = ToDo.fromPrimitives({ title: 'This is the title' })
      expect(toDo).toBeInstanceOf(ToDo)
    })

    describe('Methods', () => {
      test('Return toPrimitives values', () => {
        const toDo = new ToDo(toDoParams)
        const returnedObject = toDo.toPrimitives()
        expect(returnedObject).toHaveProperty('id')
        expect(returnedObject).toHaveProperty('title')
        expect(returnedObject).toHaveProperty('description')
        expect(returnedObject).toHaveProperty('completed')
      })

      test('Update title method', () => {
        const toDo = new ToDo(toDoParams)
        const newTitle = new StringValueObject('new title')
        toDo.updateTitle(newTitle)
        expect(toDo.title.value).toBe('new title')
      })

      test('Update description method', () => {
        const toDo = new ToDo(toDoParams)
        const newDescription = new StringValueObject('new description')
        toDo.updateDescription(newDescription)
        expect(toDo.description.value).toBe('new description')
      })

      test('Update description method', () => {
        const toDo = new ToDo(toDoParams)
        toDo.toggleToDo()
        expect(toDo.completed.value).toBe(true)
      })
    })
  })
})

describe('List of ToDos', () => {
  describe('Create a list of ToDos', () => {
    const toDosPrimitiveArr = [
      mockToDoPrimitiveData,
      mockToDoPrimitiveData,
      mockToDoPrimitiveData
    ]
    const ToDosArray = toDosPrimitiveArr.map(toDo => ToDo.fromPrimitives(toDo))
    const ListOfToDosCreated = new ListOfToDos(ToDosArray)

    test('ListOfToDosCreated is an instance of ListOfToDos', () => {
      expect(ListOfToDosCreated).toBeInstanceOf(ListOfToDos)
    })
  })
})
