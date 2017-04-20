import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { ListsService }  from './lists.service';
import {TodoList} from "./todo-list";
import {TodoItem} from "./todo-item";

@Component({
  selector: 'list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: [ './list-detail.component.css' ]
})
export class ListDetailComponent implements OnInit {

  list: TodoList;
  newListItemTopic: string;

  constructor(
    private listService: ListsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.listService.getList(+params['id']))
      .subscribe(list => this.list = list);
  }

  toggleStatus(item: TodoItem): void {
    item.done = !item.done;
  }

  createListItem(): void {
    this.listService.addItemToList(this.list, this.newListItemTopic);
    this.newListItemTopic = '';
  }

  goBack(): void {
    this.location.back();
  }
}
