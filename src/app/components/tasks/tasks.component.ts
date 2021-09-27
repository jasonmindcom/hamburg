import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from '../../models/Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks),
      () => {},
      () => this.setNotification());
  }

  deleteTask(task: Task){
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter(t => t.id !== task.id)),
        () => {},
        () => this.setNotification());
  }

  updateTask(task: Task){
    this.taskService
      .updateTask(task)
      .subscribe(() => (
        this.setNotification()
      ));
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe(() => (
        this.setNotification()
      )
    );
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => (
      this.tasks.push(task)
    ),
      () => {},
      () => this.setNotification()
    );
  }

  setNotification(){
    console.log('setNotification')
  }
}
