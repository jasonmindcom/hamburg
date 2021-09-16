import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../../Task";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input()
  task!: Task;
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter<Task>();

  showEditTask: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.task.text){
      alert('Please add a task')
      return;
    }

    this.onEditTask.emit(this.task);
  }

}
