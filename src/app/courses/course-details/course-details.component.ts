import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  id: string;
  inscription: Subscription;

  constructor(private route: ActivatedRoute) { 
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscription = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      console.log(this.id);
      
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

}
