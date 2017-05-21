import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

    currentValue: string = '';
    valueSaved: string = '';
    isMouseOver: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    onKeyUp(event: KeyboardEvent) {
        this.currentValue = (<HTMLInputElement>event.target).value;
        console.log(this.currentValue);
    }

    doSave(value) {
      this.valueSaved = value;
    }

    onMouseOver() {
        this.isMouseOver = !this.isMouseOver;
    }

}
