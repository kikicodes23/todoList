import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-confirmation-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './confirmation-modal.component.html'
})
export class ConfirmationModalComponent {
    isOpen = input.required<boolean>();
    title = input<string>('Confirm Action');
    message = input<string>('Are you sure you want to proceed?');
    confirmText = input<string>('Delete');
    cancelText = input<string>('Cancel');

    confirm = output<void>();
    cancel = output<void>();
}
