import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dom-view-child',
  templateUrl: './dom-view-child.component.html',
  styleUrls: ['./dom-view-child.component.css']
})
export class DomViewChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() count: number = 0;
  @Output() countChanged = new EventEmitter();
  @ViewChild('inputField') viewInput: ElementRef;

  increment() {
      this.viewInput.nativeElement.value++;
      this.doEmit();
  }

  decrement(){
      this.viewInput.nativeElement.value--;
      this.doEmit();
  }

  doEmit() {
      this.countChanged.emit({ newValue: this.count });
  }

}
