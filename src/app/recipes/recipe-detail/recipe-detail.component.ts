import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() {
    console.log(this.recipe);

   }

  ngOnInit() {
  }

}
