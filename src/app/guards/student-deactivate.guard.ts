import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';

import { IFormCanDeactivate } from './iform-candeactivate';
import { StudentFormComponent } from './../students/student-form/student-form.component';

@Injectable()
export class StudentDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
        
        canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log('DeActivate Guard');
            
            return component.canDeactivate();
    }
}