import {Component} from '@angular/core';
import {DataStoreServerService} from '../../shared/dataStoreServer.service';
import {Response} from '@angular/http';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private server: DataStoreServerService, private authService: AuthService) {}

  saveToServer() {
    this.server.pushRecipeToServer().subscribe(
      (response: Response) => {
        console.log(response);
    });
  }

  fetchFromServer() {
    this.server.fetchRecipeFromServer();
  }

  onLogOut() {
    this.authService.logout();
  }
}
