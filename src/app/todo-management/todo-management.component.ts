import { Component , Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TodoViewModel } from '../todo-view-model';
import { TodoItemComponent } from '../my-component/todo-item/todo-item.component';
@Component({
  selector: 'app-todo-management',
  standalone: true,
  imports: [CommonModule , TodoItemComponent],
  templateUrl: './todo-management.component.html',
  //styleUrl: './todo-management.component.css',
})
export class TodoManagementComponent {
  @Input() todoList!:TodoViewModel[];
  componentTitle = "";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "Item1", done: true },
    { description: "Item2", done: false },
    { description: "Item3", done: false },
    { description: "Item4", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description: string) {
    if (!description) return;
  
    this.allItems.push({
      description,
      done: false
    });

    //remove(item: i) {
      //this.allItems.splice(this.allItems.indexOf(i), 1);
    //}
  }
}
