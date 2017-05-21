import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

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
