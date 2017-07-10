import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  id: number;
  inscription: Subscription;
  courseSelected: any;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private courseService: CoursesService
    ) { 
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscription = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      
      this.courseSelected = this.courseService.getCourse(this.id);

      // if (this.courseSelected == null) {
      //   this.router.navigate(['/']);
      // }
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

}
