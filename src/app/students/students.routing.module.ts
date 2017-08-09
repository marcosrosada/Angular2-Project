import { StudentFormComponent } from './student-form/student-form.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { StudentsGuard } from './../guards/students.guard';
import { StudentsComponent } from './students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const studentsRoutes: Routes = [
    { 
        path: '', 
        component: StudentsComponent,
        canActivateChild: [StudentsGuard], 
        children: [
            { 
                path: 'new', 
                component: StudentFormComponent 
            },
            { 
                path: ':id', 
                component: StudentDetailComponent 
            },
            { 
                path: ':id/edit', 
                component: StudentFormComponent
            }
        ] }
];

@NgModule({
    imports: [RouterModule.forChild(studentsRoutes)],
    exports: [RouterModule]
})
export class StudentsRoutingModule {}