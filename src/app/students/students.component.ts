import { Component, OnInit } from '@angular/core';

import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentsList: any[];

  constructor(private sdutentsService: StudentsService) { }

  ngOnInit() {
    this.studentsList = this.sdutentsService.getStudents();
  }

}
