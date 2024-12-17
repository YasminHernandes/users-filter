import { DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddressPipe } from "./custom-pipes/address-pipe";
import { StatusPipe } from "./custom-pipes/status-pipe";
import { PhonePipe } from "./custom-pipes/phone-pipe";
import { DashIfEmptyPipe } from './custom-pipes/dash-if-empty.pipe';

@NgModule({
    imports: [
        DatePipe,
    ],
    declarations: [
        AddressPipe,
        StatusPipe,
        PhonePipe,
        DashIfEmptyPipe,
    ],
    exports: [
        DatePipe,
        AddressPipe,
        StatusPipe,
        PhonePipe,
        DashIfEmptyPipe,
    ]
})

export class PipesModule { }