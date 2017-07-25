import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  index: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
    console.log(this.route.snapshot.params['recipeId']);
  }

  ngOnInit() {
    // this.route.params.subscribe((param: Params) => {
    //   this.recipe = this.recipeService.getRecipeByName(this.route.snapshot.params['recipeId']);
    // });
    this.route.params.subscribe((param: Params) => {
      this.index = +this.route.snapshot.params['recipeId'];
      this.recipe = this.recipeService.getRecipeById(this.index);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
