import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
    imports: [
      AngularMaterialModule,
    ],
    declarations: [
      UserDetailsComponent
    ],
    exports: [
      UserDetailsComponent
    ]
})

export class ComponentsModule { }