import { Task } from './Task'

export interface ITaskRepository {
  // findAll(): Promise<Array<Task>>
  find(id: number): Promise<Task>
  create(task: Task): Promise<void>
  // update(task: Task): Promise<Task>
  // delete(task: Task): Promise<Task>
}