//angular
import { Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

//model
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
//service
import {ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  private recipes: Recipe[];
  recipeAddNotice = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService) {
    this.recipes = [
      new Recipe('aafood', 'good', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [new Ingredient('meat', 1), new Ingredient('vege', 2)]),
      new Recipe('ddfood', 'good', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [new Ingredient('meat', 2), new Ingredient('vege', 2)]),
      new Recipe('ssfood', 'good', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [new Ingredient('meat', 3), new Ingredient('vege', 2)])
    ];
  }

  serRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeAddNotice.next(this.recipes.slice());
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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeAddNotice.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeAddNotice.next(this.recipes.slice());
  }

  deleteRecipe(indes: number) {
    this.recipes.splice(indes, 1);
    this.recipeAddNotice.next(this.recipes.slice());
  }

}
