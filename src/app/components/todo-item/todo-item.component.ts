import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../interfaces/task.interface';

@Component({
    selector: 'app-todo-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {
    task = input.required<Task>();
    toggle = output<void>();
    remove = output<void>();
}
