import { Component, input } from '@angular/core';
import { task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
})
export class Task {
  task = input.required<task[]>();
}
