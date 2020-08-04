import { Task } from './Task'
import { ITaskRepository } from './ITaskRepository'

export abstract class AbstractTaskRepository implements ITaskRepository {
  
  abstract find(id: number): Promise<Task>
  //abstract findAll(): Promise<Array<Task>>
  abstract create(task: Task): Promise<void>
  //abstract update(task: Task): Promise<Task>
  //abstract delete(task: Task): Promise<Task>
}