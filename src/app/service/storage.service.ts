import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  run(){
    return "run function from service";
  }

  set(key:string, value:any){
    localStorage.setItem(key, value);
  }

  get(key:string){
    return localStorage.getItem(key);
  }

  remove(key:string){
    localStorage.removeItem(key);
  }
}
