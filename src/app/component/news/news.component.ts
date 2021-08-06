import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  // 不能声明属性变量 let
  public title: string = "这是自定义的title变量";

  public userInfo: any = {
    username: "aaa",
    age: 10
  };

  public aaaa: string = "aadsfewaa";

  public h2: string = "<h2>内嵌HTML</h2>";

  arr = ["aaa", "bbb", "ccc"];

  constructor() { }

  ngOnInit(): void {
  }

}
