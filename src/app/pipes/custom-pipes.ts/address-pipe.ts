import { Pipe, PipeTransform } from "@angular/core";
import { IAddress } from "../../interfaces";

@Pipe({
    name: 'addressPipe',
})

export class AddressPipe implements PipeTransform {
    transform(address: IAddress): string {
        const invalid_address = !address  
            || !address?.rua 
            || !address?.cidade
            || !address?.estado
            || address?.numero == null;

        if(invalid_address) return 'Endereço indisponivel ou inválido'

       return `${address?.rua}, ${address?.numero}, ${address?.cidade}, ${address?.estado}`;
    }
}