import {Injectable} from '@angular/core';
import {TaskItem} from "./task-item.dto";
import {NewTask} from "./new-task.dto";
import {Observable, BehaviorSubject, tap, map} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TaskService {

  constructor(private httpClient: HttpClient) {
  }

  private tasks = new BehaviorSubject<TaskItem[]>([])

  getAllTasks(): Observable<TaskItem[]> {
    this.httpClient.get<TaskItem[]>('http://localhost:3001/tasks')
      .pipe(tap(console.log))
      .pipe(map(TaskService.mapTaskItems))
      .pipe(tap(console.log))
      .subscribe(t => this.tasks.next(t))

    return this.tasks

  }

  private static mapTaskItems(items: { title: string }[]) {
    return items.map(item => new TaskItem(item.title))
  }

  addTask(newTask: NewTask) {
    let updatedTasks = this.tasks.value.concat(new TaskItem(newTask.title))

    this.httpClient.post('http://localhost:3001/tasks', newTask)
      .subscribe(() => this.tasks.next(updatedTasks))

  }

  removeTask(existingTask: TaskItem) {
    let updatedTasks = this.tasks.value.filter(task => task != existingTask);
    this.tasks.next(updatedTasks)
  }

}
