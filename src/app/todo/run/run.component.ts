import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'run',
  template: `
    <ul id="todoList">
      <li        
        class="todo"
        *ngFor="let todo of todos"
      >
        <span> {{todo.title}} </span>
        <button (click)="deleteTodo(todo)">Delete</button>
      </li>
    </ul>
  `,
  styles: [`
    .todo {
      list-style-type: none
    }
  `]
})
export class RunComponent implements OnInit {
  
  todos 

  constructor(private todoService : TodoService) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(
        todos => this.todos = todos
      )
  }

  deleteTodo(todo){
    this.todoService.deleteTodo(todo)
    .subscribe(
      () => this.todos = this.todos.filter(t => t !== todo),
      error => console.log(error)
    )
  }
}
