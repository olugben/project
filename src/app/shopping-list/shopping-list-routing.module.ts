import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list.component';
import {RouterModule} from '@angular/router';


const shoppingListRoutes = [
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(shoppingListRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingListRoutingModule { }
