import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CoursesComponent } from './courses/courses.component';
// import { CourseDetailsComponent } from './courses/course-details/course-details.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'courses', loadChildren: 'app/courses/courses.module#CoursesModule' },
    { path: 'students', loadChildren: 'app/students/students.module#StudentsModule' }
    // { path: 'courses', component: CoursesComponent },
    // { path: 'courses/:id', component: CourseDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}