import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IUser } from '../../interfaces';
import { Utils } from '../../utils';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnChanges {
  @Input({ required: true }) user: IUser = { } as IUser
  isUserEmpty: boolean = false;
  utils = new Utils();

    
  ngOnChanges(): void {
    this.isUserEmpty = Object.keys(this.user).length !== 0;
  }

} 
