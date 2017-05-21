import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  portalName: string;

  courses: string[];

  constructor(private courseService: CoursesService) {
    this.portalName = 'Course Marcos Rosada';

    this.courses = this.courseService.getCourses();
  }

  ngOnInit() {
  }

}
