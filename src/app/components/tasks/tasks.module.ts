import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {TasksHeaderComponent} from "./tasks-header";
import {ButtonComponent} from "./button";
import {AddTaskComponent} from "./add-task/add-task.component";
import {EditTaskComponent} from "./edit-task/edit-task.component";
import {TaskItemComponent} from "./task-item/task-item.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule,
  ],
  declarations: [
    TasksHeaderComponent,
    ButtonComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskItemComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    TasksHeaderComponent,
    ButtonComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskItemComponent
  ]
})
export class TasksModule {}
