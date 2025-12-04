import { Injectable, signal, effect, inject, computed } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private localStorageService = inject(LocalStorageService);
    private readonly STORAGE_KEY = 'todo-list-tasks';

    tasks = signal<Task[]>(this.loadTasks());
    activeTasks = computed(() => this.tasks().filter(task => !task.completed));
    completedTasks = computed(() => this.tasks().filter(task => task.completed));

    constructor() {
        effect(() => {
            this.localStorageService.setItem(this.STORAGE_KEY, this.tasks());
        });
    }

    private loadTasks(): Task[] {
        return this.localStorageService.getItem<Task[]>(this.STORAGE_KEY) || [];
    }

    addTask(title: string): void {
        const newTask: Task = {
            id: Date.now(),
            title,
            completed: false
        };
        this.tasks.update(tasks => [...tasks, newTask]);
    }

    removeTask(id: number): void {
        this.tasks.update(tasks => tasks.filter(task => task.id !== id));
    }

    toggleTask(id: number): void {
        this.tasks.update(tasks =>
            tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }
}
