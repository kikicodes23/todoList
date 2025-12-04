import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-todo-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {
    @Input() title: string = '';
}
