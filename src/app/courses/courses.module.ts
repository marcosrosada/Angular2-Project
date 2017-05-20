import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CoursesComponent,
    CoursesDetailsComponent
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
