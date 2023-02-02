import { NgModule } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

import { InputTextModule } from 'primeng/inputtext';

const PRIME_NG_MODULES: any[] = [
  InputTextModule
  ];

@NgModule({
  declarations: [
    ],
  imports: [
    ...PRIME_NG_MODULES
    ],
  exports: [
    ...PRIME_NG_MODULES,
    ]
})
export class PrimengModule { }
