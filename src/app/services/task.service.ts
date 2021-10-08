import {Injectable} from '@angular/core';
import {Task} from '../models/Task'

import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  /**
   * Reference to database with the tasks
   * @private tasksRef
   */
  private readonly tasksRef: AngularFireList<Task>;

  /**
   * @param fireDatabase
   */
  constructor(private fireDatabase: AngularFireDatabase) {
    this.tasksRef = fireDatabase.list('tasks');
  }

  /**
   * Get all tasks
   */
  getAll(): AngularFireList<Task>{
    return this.tasksRef;
  }

  /**
   * Create task
   * @param task
   */
  create(task: Task){
    return this.tasksRef.push(task);
  }

  /**
   * Update task
   * @param task
   */
  update(task: Task): Promise<void>{
    return this.tasksRef.update(`${task.key}`, task)
  }

  /**
   * Delete task
   * @param task
   */
  delete(task: Task) {
    return this.tasksRef.remove(task.key)
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // }

  // getTasks(): Observable<any>{
  //   return this.fireDatabase.list('tasks').valueChanges();
  // }
  //

  //
  // getTasks():  Observable<Task[]>{
  //   return this.http.get<Task[]>(this.apiUrl).pipe(
  //     retry(3), // retry a failed request up to 3 times
  //     catchError(this.handleError)
  //   );
  // }

  //
  // deleteTask(task: Task) {
  //   return this.tutorialsRef.remove(task.key)
  //   const url = `${this.firebaseApiUrl}/${task.key}.json'`;
  //   return this.http.delete<Task>(url).pipe(
  //     retry(3), // retry a failed request up to 3 times
  //     catchError(this.handleError)
  //   );
  // }

  // updateTask(task: Task): Observable<Task>{
  //   const url = `${this.apiUrl}/${task}`;
  //
  //   return this.http.put<Task>(url, task, httpOptions).pipe(
  //     retry(3), // retry a failed request up to 3 times
  //     catchError(this.handleError)
  //   );
  // }

  // updateTaskReminder(task: Task): Observable<Task>{
  //   const url = `${this.apiUrl}/${task}`;
  //
  //   return this.http.put<Task>(url, task, httpOptions).pipe(
  //     retry(3), // retry a failed request up to 3 times
  //     catchError(this.handleError)
  //   );
  // }

  // updateTask(task: Task): Observable<Task>{
  //   const url = `${this.apiUrl}/${task.id}`;
  //
  //   return this.http.put<Task>(url, task, httpOptions).pipe(
  //     retry(3), // retry a failed request up to 3 times
  //     catchError(this.handleError)
  //   );
  // }
  //
  // updateTaskReminder(task: Task): Observable<Task>{
  //   const url = `${this.apiUrl}/${task.id}`;
  //
  //   return this.http.put<Task>(url, task, httpOptions).pipe(
  //     retry(3), // retry a failed request up to 3 times
  //     catchError(this.handleError)
  //   );
  // }

  // addTask(task: Task):Observable<Task>{
  //   console.log(task)
  //   return this.http.post<Task>(this.firebaseApiUrl, task, httpOptions).pipe(
  //     retry(3), // retry a failed request up to 3 times
  //     catchError(this.handleError)
  //   );
  // }
}
