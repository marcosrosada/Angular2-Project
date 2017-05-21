import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
      InterpolationComponent,
      PropertyBindingComponent,
      ClassStyleBindingComponent,
      EventBindingComponent,
      TwoWayDataBindingComponent
  ],
  exports: [
      InterpolationComponent,
      PropertyBindingComponent,
      ClassStyleBindingComponent,
      EventBindingComponent,
      TwoWayDataBindingComponent
  ]
})
export class BindingModule { }
