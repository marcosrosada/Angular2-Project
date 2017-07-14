import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsComponent } from './students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsRoutingModule } from './students.routing.module';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule
  ],
  declarations: [
    StudentsComponent, 
    StudentFormComponent,
    StudentDetailComponent
  ]
})
export class StudentsModule { }
