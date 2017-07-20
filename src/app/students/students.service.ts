import { Injectable } from '@angular/core';

@Injectable()
export class StudentsService {

  students: any = [
    { id: 1, name: 'Marcos Rosada', email: 'marcosfrosada@gmail.com' },
    { id: 2, name: 'Safadóvisk', email: 'safadovisk@gmail.com' },
    { id: 3, name: 'Diogo Soares', email: 'di_cruz@gmail.com' },
    { id: 4, name: 'Tomazinho', email: 'tomazinho@gmail.com' }
  ];
  
  constructor() { }

  getStudents() {
    return this.students;
  }

  getStudent(id: number) {
    return this.students.filter( student => student.id == id )[0];
  }

}
