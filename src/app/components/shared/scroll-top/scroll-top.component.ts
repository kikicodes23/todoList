import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-scroll-top',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './scroll-top.component.html'
})
export class ScrollTopComponent {
    isVisible = signal(false);

    @HostListener('window:scroll')
    onWindowScroll() {
        this.isVisible.set(window.scrollY > 300);
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
