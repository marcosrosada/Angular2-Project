import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  getCourses() {
    return ['Java', 'Angular', 'Javascript'];    
  }

}
