import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { PipesModule } from "../pipes/pipes.module";
import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { FilterComponent } from './filter/filter.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
    imports: [
      AngularMaterialModule,
      FormsModule,
      PipesModule
    ],
    declarations: [
      UserDetailsComponent,
      FilterComponent,
      UsersListComponent,
    ],
    exports: [
      UserDetailsComponent,
      FilterComponent,
      UsersListComponent,
    ],
})

export class ComponentsModule { }