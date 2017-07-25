import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanges = new Subject<Ingredient[]>();
  editNotice = new Subject<number>();
  private ingredients: Ingredient[];

  constructor() {
    this.ingredients = [
      new Ingredient( "Apples" , 13 ),
      new Ingredient( "Banana" , 13 )
    ];
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }


  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanges.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let i of ingredients){
    //   this.addIngredient(i);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanges.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanges.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index,1);
    this.ingredientsChanges.next(this.ingredients.slice());
  }
}
