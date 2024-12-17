import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'phone'})

export class PhonePipe implements PipeTransform {
    transform(phone: string): string {
        const invalid_phone = !phone || phone.length < 10 || phone.length > 11;
        
        if(invalid_phone) return 'Telefone indisponível ou inválido!'
        
        const cellphone = phone.length === 11;

        if(cellphone) return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`
        else return `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`;
    }
}