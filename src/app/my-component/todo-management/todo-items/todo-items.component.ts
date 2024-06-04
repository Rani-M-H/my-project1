import { Component, Input } from '@angular/core';
import { TodoViewModel } from '../../../todo-view-model';
@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {
  @Input() todo!: TodoViewModel;

  ngOnInit() {
    console.log(this.todo);
  }
}
