import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { InputComponent } from './components/input/input.component';

const sharedComponents = [
  InputComponent
  ];

@NgModule({
  declarations: [
    ...sharedComponents
    ],
  imports: [
    CommonModule,
    PrimengModule
    ],
  exports: [
    PrimengModule,
    ...sharedComponents
    ]
})
export class SharedModule { }
