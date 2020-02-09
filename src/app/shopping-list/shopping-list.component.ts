import { Component, OnInit } from '@angular/core';
import { Indgredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Indgredient[] = [

    new Indgredient ('Tomatoes', 10),
    new Indgredient ('Potatoes', 20),
    new Indgredient ('Parsips', 2),


  ];
  constructor() { }

  ngOnInit() {
  }

}
