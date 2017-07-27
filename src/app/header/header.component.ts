import {Component} from '@angular/core';
import {DataStoreServerService} from '../shared/dataStoreServer.service';
import {Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private server: DataStoreServerService) {}

  saveToServer() {
    this.server.pushRecipeToServer().subscribe(
      (response: Response) => {
        console.log(response);
    });
  }

  fetchFromServer() {
    this.server.fetchRecipeFromServer();
  }
}
