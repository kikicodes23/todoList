import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-todo-input',
    standalone: true,
    templateUrl: './todo-input.component.html'
})
export class TodoInputComponent {
    private todoService = inject(TodoService);

    addTask(title: string): void {
        if (title.trim()) {
            this.todoService.addTask(title);
        }
    }
}
