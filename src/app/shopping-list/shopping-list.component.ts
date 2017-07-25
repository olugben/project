import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

//model
import { Ingredient} from '../shared/ingredient.model';

//service
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
    this.subscription = shoppingListService.ingredientsChanges.subscribe(
      (ingredients: Ingredient[]) => {this.ingredients = ingredients; }
    );
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  onEditItem(index: number) {
    this.shoppingListService.editNotice.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
