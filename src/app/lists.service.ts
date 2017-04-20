import { Injectable } from '@angular/core';

import { LISTS } from './mock-lists';
import {TodoList} from "./todo-list";
import {TodoItem} from "./todo-item";

@Injectable()
export class ListsService {

  counter: number = 99;
  lists: TodoList[] = LISTS;

  getLists(): TodoList[] {
    return this.lists;
  }

  getListsAsync(): Promise<TodoList[]> {
    return Promise.resolve(this.lists);
  }

  getListsAsyncSlowly(): Promise<TodoList[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getLists()), 2000);
    });
  }

  getList(id: number): Promise<TodoList> {
    return this.getListsAsync()
      .then(lists => lists.find(list => list.id === id));
  }

  createList(name: string): void{
    let list = new TodoList(this.counter++, name);
    this.lists.push(list);
  }

  addItemToList(list: TodoList, topic: string): void {
    let item = new TodoItem(this.counter++, topic);
    list.items.push(item);
  }
}
