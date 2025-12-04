import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from '../../components/todo-form/todo-form.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, TodoListComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  protected todoService = inject(TodoService);
}
