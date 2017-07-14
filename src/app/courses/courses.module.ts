import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses.routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  declarations: [
    CoursesComponent,
    CourseDetailsComponent
  ],
  exports: [
    CoursesComponent
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
