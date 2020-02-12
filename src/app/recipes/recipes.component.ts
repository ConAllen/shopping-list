import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.modal';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent implements OnInit {


  finalSelectedRecipe: Recipe;
  constructor() {

   }

  ngOnInit() {

  }

  // selectedRecipe( $event) {
  //   this.finalSelectedRecipe = $event;

  // }


}
