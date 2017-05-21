import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './interpolation/interpolation.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      InterpolationComponent
  ],
  exports: [
      InterpolationComponent
  ]
})
export class BindingModule { }
