import { Component } from '@angular/core';
import { IUser } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  user: IUser = {} as IUser

  userSelected(user: IUser) { 
    this.user = user;
  }
}