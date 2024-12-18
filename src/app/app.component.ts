import { Component, OnInit } from '@angular/core';
import { IFilterOptions, IUser } from './interfaces';
import { UsersList } from './data/users-list';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = []
  userSelected: IUser = {} as IUser
  showUserDetails: boolean  = false
  usersListFiltered: IUser[] = []

  onUserSelected(user: IUser) { 
    this.userSelected = user;
    this.showUserDetails = true
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList)
  }

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList 
      this.usersListFiltered = this.usersList
    }, 1000)
  }
}