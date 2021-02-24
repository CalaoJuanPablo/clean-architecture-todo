import { v4 } from 'uuid'
import { ToDoEntityParams, ToDoEntity } from '../ToDoEntity'
import { ToDosEntitiesFactory } from '../factory'

const toDoParams: ToDoEntityParams = {
  id: v4(),
  title: 'ToDo Title',
  description: 'This is a mock'
}

describe('ToDo Entity', () => {
  describe('Create new instance ToDo', () => {
    test('instance of ToDo', () => {
      const toDo = ToDosEntitiesFactory.toDoEntity(toDoParams)
      expect(toDo).toBeInstanceOf(ToDoEntity)
    })

    describe('Methods', () => {
      test('Return toPrimitives values', () => {
        const toDo = ToDosEntitiesFactory.toDoEntity(toDoParams)
        const returnedObject = toDo.toJSON()
        expect(returnedObject).toHaveProperty('id')
        expect(returnedObject).toHaveProperty('title')
        expect(returnedObject).toHaveProperty('description')
        expect(returnedObject).toHaveProperty('completed')
      })

      test('Update title method', () => {
        const toDo = ToDosEntitiesFactory.toDoEntity(toDoParams)
        toDo.updateTitle('new title')
        const toDoJSON = toDo.toJSON()
        expect(toDoJSON.title).toBe('new title')
      })

      test('Update description method', () => {
        const toDo = ToDosEntitiesFactory.toDoEntity(toDoParams)
        toDo.updateDescription('new description')
        const toDoJSON = toDo.toJSON()
        expect(toDoJSON.description).toBe('new description')
      })

      test('Update description method', () => {
        const toDo = ToDosEntitiesFactory.toDoEntity(toDoParams)
        toDo.toggleToDo()
        const toDoJSON = toDo.toJSON()
        expect(toDoJSON.completed).toBe(true)
      })
    })
  })
})
