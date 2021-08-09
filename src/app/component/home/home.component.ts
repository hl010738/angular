import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public picUrl = "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png";

  public title = "aaa";

  public keywords = "初始值";

  public list: any[] = [
    {
      title: "title1"
    },
    {
      title: "title2"
    },
    {
      title: "title3"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeKeywords(){
    this.keywords = "修改keywords的值";
  }

  keydown(e:any){
    alert("keycode=" + e.keyCode);
  }

  run(){
    alert("出发事件");
  }

  setData(){
    if (this.title == "aaa"){
      this.title = "bbb";
    } else {
      this .title = "aaa";
    }
  }
}
