import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TaskListComponent} from "./task-list.component";
import { MatDatepickerModule } from "@angular/material/datepicker";

@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskListModule {
}
