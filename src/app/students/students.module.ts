import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsService } from './students.service';
import { StudentsRoutingModule } from './students.routing.module';
import { StudentsComponent } from './students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule
  ],
  declarations: [
    StudentsComponent, 
    StudentFormComponent,
    StudentDetailComponent
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule { }
