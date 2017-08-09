import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { StudentFormComponent } from './../students/student-form/student-form.component';

@Injectable()
export class StudentDeactivateGuard implements CanDeactivate<StudentFormComponent> {
        
        canDeactivate(
            component: StudentFormComponent,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log('DeActivate Guard');
            
            return !component.formChanged;
    }
}