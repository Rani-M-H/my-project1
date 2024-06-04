import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TodoViewModel } from '../../todo-view-model';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-management',
  standalone: true,
  imports: [TodoItemsComponent , CommonModule , NgModule , FormsModule ],
  templateUrl: './todo-management.component.html',
  styleUrl: './todo-management.component.css',
  
})

export class TodoManagementComponent {
  newTodoName: string = '';
   @Input() todoList!:TodoViewModel[];
   todos: TodoViewModel[] = [
    { name: 'Task 1', creationDate: new Date(), isDone: false },
    { name: 'Task 2', creationDate: new Date(), isDone: true, completionDate: new Date() },
    { name: 'Task 3', creationDate: new Date(), isDone: false },
    { name: 'Task 4', creationDate: new Date(), isDone: true, completionDate: new Date() }
  ];

  //addTodo() {
    //const newTodo: TodoViewModel = {
     // name: `Task ${this.todos.length + 1}`,
      //creationDate: new Date(),
      //isDone: false
   // };
    //this.todos.push(newTodo);
 // }
  addTodo() {
    if (this.newTodoName.trim()) {
      this.todos.push({
        name: this.newTodoName,
        creationDate: new Date(),
        isDone: false
      });
      this.newTodoName = '';
    }
  }
 //@Input() todoList : TodoViewModel[]= [];
  //newTodoList: TodoViewModel={
   // id :0,
   // title :'',
    //AddedDate: new Date()
 // };
  

  //addTodo() {
   // debugger;
    // const newTodo: TodoViewModel = {
    //   id: this.todos.length + 1,
    //   title: `todo item${this.todos.length + 1}`,
    //   completed: false
    // };
    // this.todos.push(newTodo);
    //if (this.newTodoList.title ) {

      //this.newTodoList.id = this.todoList.length + 1;
      //this.todoList.push({ ...this.newTodoList });
      //this.newTodoList.title = '';
      //this.newTodoList.AddedDate = new Date();
   // }

  //}

  ngOnInit() {
    console.log(this.todoList);
  }

  constructor() {}
  
  
  }


