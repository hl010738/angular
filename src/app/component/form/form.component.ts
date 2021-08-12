import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public peopleInfo: any = {
    username: "username初始值",
    sex: "1",
    city: "",
    hobby: [
      {
        title: "长筒袜",
        checked: true
      }, {
        title: "小腿袜",
        checked: false
      }, {
        title: "中筒袜",
        checked: false
      }, {
        title: "连裤袜",
        checked: false
      }],
    mark: ""
  };

  public cities:string[] = ["北京", "上海", "深圳", "广州"];

  constructor() { }

  ngOnInit(): void {
  }

  doSubmit(){
    alert(JSON.stringify(this.peopleInfo));
  }
}
