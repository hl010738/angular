import { Component, OnInit } from '@angular/core';

import {Observable, observable} from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  printRxjsData(){
    let data = this.getRxjsData();

    // 获取异步执行结果
    let result = data.subscribe((data) => {
      alert(data);
    });

    alert("同步执行结束");

    result.unsubscribe(); // 取消异步执行
    alert("取消执行异步操作");
  }

  getRxjsData(){
    return new Observable((observable) => {
      setTimeout(() => {
        let username = "zhangsan";
        observable.next(username);
      }, 3000);
    })
  };

}
