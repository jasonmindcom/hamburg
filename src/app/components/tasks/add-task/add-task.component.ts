import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from "../../../models/Task";
import { UiService } from "../../../services/ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() addedTask: EventEmitter<Task> = new EventEmitter<Task>();

  public text: string | undefined;
  public day: string | undefined;
  public reminder: boolean = false;
  public showAddTask!: boolean;
  private subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value)
  }

  onSubmit(){
    if(!this.text || !this.day){
      alert('Please add a task')
      return;
    }

    const newTask:Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.addedTask.emit(newTask);

    this.text = ''
    this.day = ''
    this.reminder = false;
  }

}
