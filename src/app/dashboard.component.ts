import { Component, OnInit } from '@angular/core';
import { ListsService } from './lists.service';
import {TodoList} from "./todo-list";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  lists: TodoList[] = [];
  listName: string = '';

  constructor(private listService: ListsService) { }

  ngOnInit(): void {
    this.listService.getListsAsync()
      .then(lists => this.lists = lists);
  }

  createNewList(): void {
    this.listService.createList(this.listName);
  }
}
