import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentDeactivateGuard } from './../guards/student-deactivate.guard';
import { StudentsService } from './students.service';
import { StudentsRoutingModule } from './students.routing.module';
import { StudentsComponent } from './students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule
  ],
  declarations: [
    StudentsComponent, 
    StudentFormComponent,
    StudentDetailComponent
  ],
  providers: [
    StudentsService,
    StudentDeactivateGuard
  ]
})
export class StudentsModule { }
