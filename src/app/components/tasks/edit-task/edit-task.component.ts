import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../../models/Task";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  @Input()
  task!: Task;
  @Output() editedTask: EventEmitter<Task> = new EventEmitter<Task>();

  public showEditTask: boolean = true;

  constructor() { }

  onSubmit(){
    if(!this.task.text){
      alert('Please add a task')
      return;
    }

    this.editedTask.emit(this.task);
  }

}
