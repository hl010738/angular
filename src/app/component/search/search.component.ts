import { Component, OnInit } from '@angular/core';

import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public keyword: string = "";

  public historyList:any = [];

  constructor(public storageService:StorageService) { }

  ngOnInit(): void {
    if (this.storageService.get("searchlist") == null){
      this.historyList = [];
    } else {
      this.historyList = this.storageService.get("searchlist");
    }

  }

  doDelete(key: any){
    this.historyList.splice(key,1);
  }

  doSearch(){

    if (this.historyList.indexOf(this.keyword) == -1){
      this.historyList.push(this.keyword);
      this.storageService.set("searchlist", this.historyList);
    }
    this.keyword = "";
  }

}
