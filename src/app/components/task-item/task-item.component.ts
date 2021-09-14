import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import {faTimes, faEdit, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input()
  task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();

  taskModeEditing: boolean = false;
  faArrowUp = faArrowUp;
  faTimes = faTimes;
  faEdit = faEdit;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }

  onEdit(task: Task){
    this.taskModeEditing = !this.taskModeEditing;
    this.onEditTask.emit(task);
  }

  closeTaskModeEditing(){
    this.taskModeEditing = !this.taskModeEditing;
  }

  editTask(task: Task){
    this.taskModeEditing = !this.taskModeEditing;
    this.taskService.updateTask(task).subscribe((task) => (console.log(task)));
  }

}
