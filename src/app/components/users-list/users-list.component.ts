import { Utils } from './../../utils';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces';
import { UsersList } from '../../data/users-list';

import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'date', 'status']
  usersList: IUser[] = UsersList
  utils = new Utils()
  user!: IUser | null

  @Output() onUserSelected = new EventEmitter<IUser>()

  userSelected(user: IUser) {
    this.onUserSelected.emit(user)
  }
}