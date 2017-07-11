import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any[];
  page: number;
  inscription: Subscription;

  constructor(
        private courseService: CoursesService,
        private route: ActivatedRoute,
        private router: Router
        ) {
  }

  ngOnInit() {
    this.courses = this.courseService.getCourses();

    this.inscription = this.route.queryParams.subscribe( (queryParams: any) => {
      this.page = queryParams['page'];
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

  nextPage() {
    this.router.navigate(['/courses'], {
      queryParams: { 'page': ++this.page }
    });
  }

}
