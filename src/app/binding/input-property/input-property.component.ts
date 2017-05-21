import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('title') pageTitle: string = '';
  @Input() description: string = '';

}
