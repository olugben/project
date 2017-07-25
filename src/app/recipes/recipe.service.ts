import {Recipe} from './recipe.model';
import { Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[];

  constructor(private slService: ShoppingListService) {
    this.recipes = [
      new Recipe('aafood', 'good', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [new Ingredient('meat', 1), new Ingredient('vege', 2)]),
      new Recipe('ddfood', 'good', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [new Ingredient('meat', 2), new Ingredient('vege', 2)]),
      new Recipe('ssfood', 'good', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [new Ingredient('meat', 3), new Ingredient('vege', 2)])
    ];
  }


  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipeByName(name: string): Recipe {
    const recipe = this.recipes.find((r) => {
      return r.name === name;
      }
    );
      return recipe;
  }

  getRecipeById(id: number): Recipe {
    return this.recipes.slice()[id];
  }

}
