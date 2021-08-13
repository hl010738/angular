import { Component, OnInit } from '@angular/core';

import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keyword: string = "添加todo";

  public todoList:any = [];

  constructor(public storageService:StorageService) { }

  ngOnInit(): void {
  }

  doAdd(e:any){
    if (e.keyCode == 13){
      this.todoList.push({
        title: this.keyword,
        status: 0
      });
      this.keyword = "";
    }
  }

  doDeleteHistoryList(e: any){
    this.todoList.splice(e, 1);
  }
}
