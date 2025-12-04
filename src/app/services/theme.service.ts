import { Injectable, signal, effect, inject } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private localStorageService = inject(LocalStorageService);
    private readonly THEME_KEY = 'todo-list-theme';

    darkMode = signal<boolean>(false);

    constructor() {
        // Initialize theme based on saved preference or system preference
        const savedTheme = this.localStorageService.getItem<string>(this.THEME_KEY);
        if (savedTheme) {
            this.darkMode.set(savedTheme === 'dark');
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.darkMode.set(true);
        }

        // Effect to update DOM and storage when signal changes
        effect(() => {
            const isDark = this.darkMode();
            if (isDark) {
                document.documentElement.classList.add('dark');
                this.localStorageService.setItem(this.THEME_KEY, 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                this.localStorageService.setItem(this.THEME_KEY, 'light');
            }
        });
    }

    toggleTheme(): void {
        this.darkMode.update(dark => !dark);
    }
}
