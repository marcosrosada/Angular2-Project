import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

    @Input('title') pageTitle: string = '';
    @Input() description: string = '';

    constructor() { }

    ngOnInit() {
    }

}
