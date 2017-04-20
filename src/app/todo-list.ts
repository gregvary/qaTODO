import {TodoItem} from "./todo-item";

export class TodoList {
  id: number;
  name: string;
  items: TodoItem[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.items = [];
  }
}
