import { Component } from '@angular/core';
import { iTodo } from '../../interfaces/i-todo';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { iUser } from '../../interfaces/i-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  usersWithTodos: { user: iUser; todos: iTodo[] }[] = [];

  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  ngOnInit() {
    this.usersWithTodos = this.todoSvc.getTodosWithUser(this.userSvc.users);
    console.log(this.usersWithTodos);
  }

  toggleCompleted(todo: iTodo) {
    this.todoSvc.updateTodoStatus(todo.id, todo.completed);
  }
}
