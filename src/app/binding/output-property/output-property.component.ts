import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

    @Input() count: number = 0;
    @Output() countChanged = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    increment() {
        this.count++;
        this.doEmit();
    }

    decrement() {
        this.count--;
        this.doEmit();
    }

    doEmit() {
        this.countChanged.emit({ newValue: this.count });
    }

}
