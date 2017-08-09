import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import { IFormCanDeactivate } from './../../guards/iform-candeactivate';
import { StudentsService } from './../students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit, IFormCanDeactivate {

  student: any;
  inscription: Subscription;
  private formChanged: boolean = false;
  
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.inscription = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.student = this.studentsService.getStudent(id);
      }
    );
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

  onInput() {
    this.formChanged = true;
  }

  canChangeRouter() {
    if (this.formChanged) {
      confirm('Sair sem salvar?');
    }

    return true;
  }
  
  canDeactivate() {
    return this.canChangeRouter();
  }

}
