import { Component } from '@angular/core';
import { iTodo } from '../../interfaces/i-todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
  todos: iTodo[] = [];

  constructor(private todoSvc: TodoService) {}

  ngOnInit() {
    this.todos = this.todoSvc.addTodos().filter((t) => t.completed);
    console.log(this.todos);
  }
}
