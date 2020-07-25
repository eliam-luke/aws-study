import { Task } from '../../domain/model/task/Task'
import { ITaskRepository } from '../../domain/model/task/ITaskRepository'

export class ListTasks {
  private taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository
  }

  execute() {
 //   return this.taskRepository.findAll()
  }
}