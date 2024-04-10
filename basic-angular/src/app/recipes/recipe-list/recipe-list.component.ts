import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://hips.hearstapps.com/hmg-prod/images/delish-211105-one-pan-sausage-gnocchi-007-ab-web-1637553340.jpg?crop=0.619xw:0.926xh;0.188xw,0.0528xh&resize=640:*'),
    new Recipe('A Test Recipe','This is simply a test','https://hips.hearstapps.com/hmg-prod/images/delish-211105-one-pan-sausage-gnocchi-007-ab-web-1637553340.jpg?crop=0.619xw:0.926xh;0.188xw,0.0528xh&resize=640:*')
  ];
}
