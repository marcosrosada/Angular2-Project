import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

    tabSelected: string = 'home';
    courses: string[] = ["Angular 2", "Java", "Phonegap"];

  constructor() { }

  ngOnInit() {
  }

}
