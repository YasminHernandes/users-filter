import { DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddressPipe } from "./custom-pipes.ts/address-pipe";
import { StatusPipe } from "./custom-pipes.ts/status-pipe";
import { PhonePipe } from "./custom-pipes.ts/phone-pipe";

@NgModule({
    imports: [
        DatePipe,
    ],
    declarations: [
        AddressPipe,
        StatusPipe,
        PhonePipe,
    ],
    exports: [
        DatePipe,
        AddressPipe,
        StatusPipe,
        PhonePipe,
    ]
})

export class PipesModule { }