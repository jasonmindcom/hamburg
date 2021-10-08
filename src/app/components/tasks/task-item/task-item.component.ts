import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../models/Task';
import {faTimes, faEdit, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {TaskService} from "../../../services/task.service";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() deletedTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() editedTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() toggledReminder: EventEmitter<Task> = new EventEmitter<Task>();

  public taskModeEditing: boolean = false;
  public faArrowUp = faArrowUp;
  public faTimes = faTimes;
  public faEdit = faEdit;

  constructor(private taskService: TaskService) { }

  delete(task: Task){
    this.deletedTask.emit(task);
  }

  onToggle(task: Task){
    this.toggledReminder.emit(task);
  }

  onEdit(){
    this.taskModeEditing = !this.taskModeEditing;
  }

  closeTaskModeEditing(){
    this.taskModeEditing = !this.taskModeEditing;
  }

  editTask(task: Task){
    this.taskModeEditing = !this.taskModeEditing;
    this.taskService.update(task).then();
  }

}
