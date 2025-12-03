import { Routes } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import { CompletedComponent } from './pages/completed/completed.component';

export const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'completed', component: CompletedComponent }
];
