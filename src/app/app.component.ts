import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyDfPaHKkMEP12MJs4ertzqo6LrCht3KNE8',
      authDomain: 'ng-recipe-book-5c8b6.firebaseapp.com'
    });
  }
}

