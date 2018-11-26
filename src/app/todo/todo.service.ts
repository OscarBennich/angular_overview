import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(){
    return this.http.get('http://jsonplaceholder.typicode.com/todos')
  }

  deleteTodo(todo){
    return this.http.delete(`http://jsonplaceholder.typicode.com/todos/${todo.id}`)
    .pipe(
      catchError((error : HttpErrorResponse) => {
        if(error.status === 404)
        {
          return throwError(`Todo with id ${todo.id} does not exist`)
        }

        return throwError('Unknown todo error occured')
      })
    )
  }
}
