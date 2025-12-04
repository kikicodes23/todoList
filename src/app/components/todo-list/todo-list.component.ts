import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../interfaces/task.interface';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [CommonModule, TodoItemComponent, ConfirmationModalComponent],
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
    todoService = inject(TodoService);
    tasks = input.required<Task[]>();

    taskToDelete = signal<number | null>(null);
    isClearingAll = signal(false);

    initiateDelete(id: number): void {
        this.taskToDelete.set(id);
    }

    initiateClearAll(): void {
        this.isClearingAll.set(true);
    }

    confirmDelete(): void {
        if (this.isClearingAll()) {
            const ids = this.tasks().map(t => t.id);
            this.todoService.removeTasks(ids);
            this.isClearingAll.set(false);
        } else {
            const id = this.taskToDelete();
            if (id !== null) {
                this.todoService.removeTask(id);
                this.taskToDelete.set(null);
            }
        }
    }

    cancelDelete(): void {
        this.taskToDelete.set(null);
        this.isClearingAll.set(false);
    }
}
