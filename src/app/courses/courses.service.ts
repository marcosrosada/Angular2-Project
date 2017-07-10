import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  courses: any =  [
        { id: 1, name: 'Java' }, 
        { id: 2, name: 'Angular' }, 
        { id: 3, name: 'Javascript' }
      ];

  constructor() { }

  getCourses() {
    return this.courses;
  }

  getCourse(id: number) {
    return this.courses.filter( (item) => item.id == id)[0];
  };
}
