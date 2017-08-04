import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RouterModule} from '@angular/router';

const recipesRoutes = [
  {path: '', component: RecipesComponent, children: [
    //{path: '', component: RecipeStartComponent, pathMatch: 'full'},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
    {path: ':recipeId', component: RecipeDetailComponent},
    {path: ':recipeId/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]},
  ]},
];
@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class RecipesRoutingModule {}
