import { Component, Input } from '@angular/core';
import {TaskItem} from "../tasks/task-item.dto";
import {Observable} from "rxjs";

@Component({
  selector: 'task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent {

  delete: string = 'https://img.icons8.com/material-rounded/20/filled-trash.png'
  done: string = 'https://img.icons8.com/ios-filled/20/checkmark--v1.png'
  undo: string = 'https://img.icons8.com/ios-filled/20/undo.png'

  @Input()
  tasks: TaskItem[] = []

  remove(taskItem: TaskItem){

  }

}
