import { Component } from "@angular/core";
import { Todo } from "./todo-post";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent {
  task: "go to school";
  completed: false;

  todo: Todo = {
    task: "eat lunch",
    completed: true
  };
  todoList: Todo[] = [
    { task: "Green tree spotted in Michigan", completed: true },
    { task: "Find A pokemon", completed: true },
    { task: "Find The Bird", completed: false },
    {
      task: "Excessive water is too much",
      completed: false
    }
  ];
}
