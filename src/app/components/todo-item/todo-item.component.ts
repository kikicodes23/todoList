import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../interfaces/task.interface';

@Component({
    selector: 'app-todo-item',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {
    task = input.required<Task>();
    toggle = output<void>();
    remove = output<void>();
    update = output<string>();

    isEditing = signal(false);
    editControl = new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(1)]
    });

    startEdit(): void {
        this.editControl.setValue(this.task().title);
        this.isEditing.set(true);
    }

    saveEdit(): void {
        if (this.editControl.valid && this.editControl.value.trim()) {
            this.update.emit(this.editControl.value);
            this.isEditing.set(false);
        }
    }

    cancelEdit(): void {
        this.isEditing.set(false);
    }
}
