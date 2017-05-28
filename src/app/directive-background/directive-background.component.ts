import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-background',
  templateUrl: './directive-background.component.html',
  styleUrls: ['./directive-background.component.css']
})
export class DirectiveBackgroundComponent implements OnInit {

    someCondition: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    doChangeCondition() {
        this.someCondition = !this.someCondition;
    }

}
