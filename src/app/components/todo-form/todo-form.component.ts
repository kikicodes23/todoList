import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-todo-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './todo-form.component.html'
})
export class TodoFormComponent {
    private todoService = inject(TodoService);

    taskControl = new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(1)]
    });

    addTask(): void {
        if (this.taskControl.valid && this.taskControl.value.trim()) {
            this.todoService.addTask(this.taskControl.value);
            this.taskControl.reset();
        }
    }
}
