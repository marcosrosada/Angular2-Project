import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const coursesRoutes: Routes = [
    { path: 'courses', component: CoursesComponent },
    { path: 'courses/:id', component: CourseDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(coursesRoutes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule {}