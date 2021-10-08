import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from '../../models/Task'
import {map} from "rxjs/operators";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  /**
   * The list of the tasks
   * @public tasks
   */
  public tasks: Task[] | undefined;

  public faSpinner = faSpinner;

  /**
   * @param taskService
   */
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {

    /**
     * Load the list of the tasks with Observable
     */
    this.taskService.getAll().snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(
      tasks => {
        this.tasks = tasks
        this.setNotification('The tasks object have been changed.')
      }
    );
  }

  /**
   * Delete the task
   * @param task
   */
  deleteTask(task: Task){
    this.taskService
      .delete(task)
      .then(() => this.setNotification('The task has been deleted.'))
      .catch(err => console.log(err))
  }

  /**
   * Update the task
   * @param task
   */
  updateTask(task: Task){
    this.taskService
      .update(task)
      .then(() => this.setNotification('The task has been updated.'))
      .catch(err => console.log(err))
  }

  /**
   * Toggle reminder and update the task
   * @param task
   */
  toggleReminder(task: Task){
    task.reminder = !task.reminder
    this.updateTask(task)
  }

  /**
   * Create the task
   * @param task
   */
  createTask(task: Task){
    this.taskService
      .create(task)
      .then(() => this.setNotification('The task has been created.'))
      .catch(err => console.log(err))
  }

  /**
   * Setup notifications
   * @todo Setup modals with notifications
   *
   * @param text
   */
  setNotification(text: string){
    console.log(text + ' + setNotification')
  }
}
