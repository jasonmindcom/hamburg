import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Task} from '../Task'
import {catchError, retry} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  getTasks():  Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.delete<Task>(url).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }

  updateTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.put<Task>(url, task, httpOptions).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.put<Task>(url, task, httpOptions).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }

  addTask(task: Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }
}
