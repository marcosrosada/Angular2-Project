import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      InterpolationComponent,
      PropertyBindingComponent,
      ClassStyleBindingComponent
  ],
  exports: [
      InterpolationComponent,
      PropertyBindingComponent,
      ClassStyleBindingComponent
  ]
})
export class BindingModule { }
