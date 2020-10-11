import { Task } from '../../domain/models/task/Task'
import { ITaskRepository } from '../../domain/models/task/ITaskRepository'

export class FindTask {
  private taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository
  }

  execute(id: number) {
    return this.taskRepository.find(id)
  }
}