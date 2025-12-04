import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../interfaces/task.interface';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [CommonModule, TodoItemComponent],
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
    todoService = inject(TodoService);
    tasks = input.required<Task[]>();
}
