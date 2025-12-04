import { Component } from '@angular/core';
import { AddTask } from "../../components/add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  imports: [AddTask],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {

}
