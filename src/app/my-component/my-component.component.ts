import { Component } from '@angular/core';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { SimpleFlexBoxComponent } from './simple-flex-box/simple-flex-box.component';
import { TodoManagementComponent } from './todo-management/todo-management.component';


@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [AddTaskComponent , EditTaskComponent , FeedbackComponent , TodoItemComponent , NewTodoComponent , SimpleFlexBoxComponent , TodoManagementComponent],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {

}
