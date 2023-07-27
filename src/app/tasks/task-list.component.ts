import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {NewTask} from "./new-task.dto";
import {TaskItem} from "./task-item.dto";
import {TaskService} from "./task.service"

@Component({
  selector: 'app-tasks',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})

export class TaskListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
  }

  tasks = this.taskService.getAllTasks()

  newTask: NewTask = new NewTask()

  ngOnInit() {
    let strDate = this.route.snapshot.params['date']
    this.newTask = new NewTask(this.newTask.title, new Date(strDate))
  }

  delete: string = 'https://img.icons8.com/material-rounded/20/filled-trash.png'
  done: string = 'https://img.icons8.com/ios-filled/20/checkmark--v1.png'
  undo: string = 'https://img.icons8.com/ios-filled/20/undo.png'


  add(taskNgForm: NgForm): void {

    if (taskNgForm.touched == false) {
      return;
    }

    if (taskNgForm.valid == false) {
      return;
    }
    this.taskService.addTask(this.newTask)

    taskNgForm.reset({date: this.newTask.date})
  }

  remove(existingTask: TaskItem): void {
    let userConfirmed: boolean = confirm(`Are you sure you want to remove the following task? \n "${existingTask.title}"`)

    if (userConfirmed) {
      this.taskService.removeTask(existingTask)
    }

  }

}

