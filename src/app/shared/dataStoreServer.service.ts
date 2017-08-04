import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {RecipeService} from '../recipes/recipe.service';
import {Response} from '@angular/http';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStoreServerService {
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

  pushRecipeToServer() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-5c8b6.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }
  fetchRecipeFromServer() {
    const token = this.authService.getToken();
    this.http.get('https://ng-recipe-book-5c8b6.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const data: Recipe[] = response.json();
          for (const recipe of data) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return data;
        }
      )
      .subscribe (
        (recipes: Recipe[]) => {
          this.recipeService.serRecipes(recipes);
        }
      );
  }
}
