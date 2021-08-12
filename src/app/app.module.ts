import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

// 根组件
import { AppComponent } from './app.component';

// 自定义的组件
import { NewsComponent } from './component/news/news.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FormComponent } from './component/form/form.component';
import { SearchComponent } from './component/search/search.component';

@NgModule({
  // 配置当前运行的项目的组件
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    FormComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
