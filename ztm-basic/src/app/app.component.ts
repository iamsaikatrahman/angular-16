import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imgUrl = "https://picsum.photos/id/237/200/300"

  name = "Saikat"

  getUserName(){
    return this.name;
  }

  changeImage(e: KeyboardEvent){
    this.imgUrl = (e.target as HTMLInputElement).value // Type Assertions
  }

  logImg(event: string){
    console.log(event);
  }
}
