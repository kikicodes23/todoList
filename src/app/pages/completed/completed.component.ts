import { Component, inject } from '@angular/core';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './completed.component.html',
})
export class CompletedComponent {
  protected todoService = inject(TodoService);
}
