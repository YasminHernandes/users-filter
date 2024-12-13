import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  statusObj = [
    { value: 'active', viewValue: 'Ativo' },
    { value: 'inactive', viewValue: 'Inativo' },
  ]
}
