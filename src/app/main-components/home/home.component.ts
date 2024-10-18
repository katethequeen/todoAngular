import { Component } from '@angular/core';
import { iTodo } from '../../interfaces/i-todo';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  //Mostro i todo con nome utente
  todos: iTodo[] = [];

  //variabile per Barra ricerca
  filteredTodos: iTodo[] = [];
  searchTerm: string = '';

  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  ngOnInit() {
    this.todos = this.todoSvc.addTodosWithUser(this.userSvc.users);
    console.log(this.todos);

    this.filteredTodos = this.todos;
  }

  toggleCompleted(todo: iTodo) {
    this.todoSvc.updateTodoStatus(todo.id, todo.completed);
  }

  searchTodos() {
    if (this.searchTerm) {
      this.filteredTodos = this.todos.filter((todo) =>
        (todo.name ?? 'Unknown')
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredTodos = this.todos; // Reset if search term is empty
    }
  }
}
