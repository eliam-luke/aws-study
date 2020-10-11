import { Task } from '../../domain/models/task/Task'
import { ITaskRepository } from '../../domain/models/task/ITaskRepository'

export class CreateTask {
  private taskRepository: ITaskRepository

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository
  }

  execute(id: number, title: string, description: string) {
    let task = new Task(id, title, description)
    return this.taskRepository.create(task)
  }
}