import { Component } from '@angular/core';
import { TodoInputComponent } from '../../components/todo-input/todo-input.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TodoInputComponent, TodoListComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {

}
