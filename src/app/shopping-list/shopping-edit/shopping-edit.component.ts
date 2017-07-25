//angular
import {
  Component, ElementRef, OnDestroy, OnInit, ViewChild
} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
//model
import {Ingredient} from '../../shared/ingredient.model';

//service
import {ShoppingListService} from '../shopping-list.service';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  providers: []
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') form: NgForm;
  private subscription: Subscription;
  editMode = false;
  editedItenIndex: number;
  editedIten: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.editNotice.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItenIndex = index;
        this.editedIten = this.shoppingListService.getIngredient(index);
        this.form.setValue({
          name: this.editedIten.name,
          amount: this.editedIten.amount
        });
      });
  }


  onAddorUpdate() {
    const ingName = this.form.value.name;
    const ingAmount = this.form.value.amount;

    if (!this.editMode) {
      this.shoppingListService.addIngredient(new Ingredient(ingName, ingAmount));
    }else {
      this.shoppingListService.updateIngredient(this.editedItenIndex, new Ingredient(ingName, ingAmount));
    }
    this.editMode = false;
    this.form.reset();
  }

  delete() {
    this.shoppingListService.deleteIngredient(this.editedItenIndex);
    this.reset();
  }


  reset() {
    this.editMode = false;
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
