import { Task } from '../../domain/model/task/Task'
import { ITaskRepository } from '../../domain/model/task/ITaskRepository'

export class FindTask {
  private taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository
  }

  execute(id: number) {
    return this.taskRepository.find(id)
  }
}