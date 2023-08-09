import { Component, Input, Output, EventEmitter } from '@angular/core';
import {TaskItem} from "../tasks/task-item.dto";
import {Observable} from "rxjs";

@Component({
  selector: 'task-table[tasks]',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent {

  delete: string = 'https://img.icons8.com/material-rounded/20/filled-trash.png'
  done: string = 'https://img.icons8.com/ios-filled/20/checkmark--v1.png'
  undo: string = 'https://img.icons8.com/ios-filled/20/undo.png'

  @Input()
  tasks: TaskItem[] = []

  @Output()
  onRemove = new EventEmitter<TaskItem>()
  remove(taskItem: TaskItem){
    this.onRemove.next(taskItem)
  }

}
