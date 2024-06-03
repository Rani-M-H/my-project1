import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TodoViewModel } from '../../todo-view-model';
import { TodoItemsComponent } from './todo-items/todo-items.component';

@Component({
  selector: 'app-todo-management',
  standalone: true,
  imports: [TodoItemsComponent , CommonModule],
  templateUrl: './todo-management.component.html',
  styleUrl: './todo-management.component.css',
  
})
export class TodoManagementComponent {
  @Input() todoList!:TodoViewModel[];

  todos: TodoViewModel[] = [
    { id: 1, title: 'todo item1', completed: false },
    { id: 2, title: 'todo item2', completed: false },
    { id: 3, title: 'todo item3', completed: false },
    { id: 4, title: 'todo item4', completed: false }
  ];

  addTodo() {
    const newTodo: TodoViewModel = {
      id: this.todos.length + 1,
      title: `New Todo ${this.todos.length + 1}`,
      completed: false
    };
    this.todos.push(newTodo);
  }

  constructor() {}
  
  
  }


