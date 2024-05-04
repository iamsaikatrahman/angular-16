import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "saikat rahman"
  imgUrl = "https://picsum.photos/id/237/200/300"
  images = [
    'https://picsum.photos/id/236/200/300',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/238/200/300'
  ];
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    topping: ['peperoni', 'bacon'],
    size: 'large'
  }
  blueClass = false;
  fontSize = 48;

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
