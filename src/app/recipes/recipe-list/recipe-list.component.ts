import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Tasty Gear', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4_pzlbTQ-OeYGDdM6Fr8D5LB-fwsBKIkI1g3yA1TsXMRcTx9&s'),
    new Recipe('Taco Chips', 'Tasty dirt', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4_pzlbTQ-OeYGDdM6Fr8D5LB-fwsBKIkI1g3yA1TsXMRcTx9&s')


  ];

  constructor() { }

  ngOnInit() {
  }

}
