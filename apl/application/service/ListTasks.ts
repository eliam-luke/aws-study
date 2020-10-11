import { Task } from '../../domain/models/task/Task'
import { ITaskRepository } from '../../domain/models/task/ITaskRepository'

export class ListTasks {
  private taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository
  }

  execute() {
 //   return this.taskRepository.findAll()
  }
}