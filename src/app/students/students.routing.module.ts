import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { StudentsGuard } from './../guards/students.guard';
import { StudentDeactivateGuard } from './../guards/student-deactivate.guard';
import { StudentsComponent } from './students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';

const studentsRoutes: Routes = [
    { 
        path: '', 
        component: StudentsComponent,
        canActivateChild: [StudentsGuard], 
        children: [
            { 
                path: 'new', 
                component: StudentFormComponent,
                canDeactivate: [StudentDeactivateGuard]
            },
            { 
                path: ':id', 
                component: StudentDetailComponent 
            },
            { 
                path: ':id/edit', 
                component: StudentFormComponent,
                canDeactivate: [StudentDeactivateGuard]
            }
        ] }
];

@NgModule({
    imports: [RouterModule.forChild(studentsRoutes)],
    exports: [RouterModule]
})
export class StudentsRoutingModule {}