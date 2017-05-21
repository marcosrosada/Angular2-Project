import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

    myString: string = 'My String from component';

    constructor() { }

    ngOnInit() {
    }

    getValor() {
        return 1;
    }
}
