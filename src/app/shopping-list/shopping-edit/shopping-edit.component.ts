import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Indgredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {

  itemName: string;
  itemAmount: number;

  @Output() ingredientAdded = new EventEmitter<Indgredient>();

  constructor() {

   }

  ngOnInit() {
  }

  addItem( itemName: HTMLInputElement, itemAmount: HTMLInputElement) {
  
    this.itemName = itemName.value;
    this.itemAmount = +itemAmount.value;


    this.ingredientAdded.emit({name: this.itemName, amount: this.itemAmount});

  }

}
