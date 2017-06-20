import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  getCourses() {
    return [
        { id: 1, name: 'Java' }, 
        { id: 2, name: 'Angular' }, 
        { id: 3, name: 'Javascript' }
      ];
  }
}
