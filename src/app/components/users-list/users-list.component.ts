import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  @Input() usersList: IUser[] = []
  @Output() onUserSelected = new EventEmitter<IUser>()
  
  displayedColumns: string[] = ['name', 'date', 'status']
  user!: IUser | null

  userSelected(user: IUser) {
    this.onUserSelected.emit(user)
  }
}