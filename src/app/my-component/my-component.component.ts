import { Component } from '@angular/core';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [AddTaskComponent , EditTaskComponent],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {

}
