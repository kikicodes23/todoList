import { Component } from '@angular/core';
import { AddTask } from "../../components/add-task/add-task.component";
import { Task } from "../../components/task/task";

@Component({
  selector: 'app-tasks',
  imports: [AddTask],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {

}
