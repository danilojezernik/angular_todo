import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Task} from "./Task";
import {NewTask} from "./NewTask";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  newTask: NewTask = new NewTask()

  ngOnInit() {
    let strDate = this.route.snapshot.params['date']
    this.newTask = new NewTask(this.newTask.title, new Date(strDate))
  }

  delete: string = 'https://img.icons8.com/material-rounded/20/filled-trash.png'
  done: string = 'https://img.icons8.com/ios-filled/20/checkmark--v1.png'
  undo: string = 'https://img.icons8.com/ios-filled/20/undo.png'

  tasks: Task[] = [
    new Task('TEST 6'),
    new Task('TEST 5'),
    new Task('TEST 4'),
    new Task('TEST 3'),
    new Task('TEST 2'),
    new Task('TEST 1')
  ]

  add(taskNgForm: NgForm): void {
    const existingTask = this.tasks.find(task => task.title === this.newTask.title);

    if (taskNgForm.touched == false) {
      return;
    }

    if (taskNgForm.valid == false) {
      return;
    }

    if (existingTask) {
      this.tasks.unshift(new Task('Ta naloga že obstaja'));
      setTimeout((): void => {
        this.tasks.shift();
      }, 2000);
    } else {
      this.tasks.unshift(new Task(this.newTask.title));
    }

    taskNgForm.reset({date: this.newTask.date})

  }

  remove(existingTask: Task): void {
    let userConfirmed: boolean = confirm(`Are you sure you want to remove the following task? \n "${existingTask.title}"`)

    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask)
    }

  }

}

