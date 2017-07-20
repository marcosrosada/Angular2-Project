import { StudentsService } from './../students.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: any;
  inscription: Subscription
  
  constructor(
      private route: ActivatedRoute,
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
}
