import {Injectable} from '@angular/core';
import {TaskItem} from "./task-item.dto";
import {NewTask} from "./new-task.dto";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {
  }

  private tasks: TaskItem[] = [
    new TaskItem('TEST 6'),
    new TaskItem('TEST 5'),
    new TaskItem('TEST 4'),
    new TaskItem('TEST 3'),
    new TaskItem('TEST 2'),
    new TaskItem('TEST 1')
  ]

  getAllTasks(): TaskItem[] {
    return this.tasks
  }

  addTask(newTask: NewTask) {
    this.tasks.unshift(new TaskItem(newTask.title));
  }

  addTaskExisting() {
    this.tasks.unshift(new TaskItem('Ta naloga že obstaja'));
  }

  removeTask(existingTask: TaskItem) {
    this.tasks = this.tasks.filter(task => task != existingTask)
  }

}
