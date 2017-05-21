import { Component,
         OnInit,
         OnChanges,
         DoCheck,
         AfterContentInit,
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked,
         OnDestroy,
         Input } from '@angular/core';

@Component({
  selector: 'app-life-cicle',
  templateUrl: './life-cicle.component.html',
  styleUrls: ['./life-cicle.component.css']
})
export class LifeCicleComponent implements OnInit, OnChanges, DoCheck,
         AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


    @Input() startValue: number;

  constructor() {
      this.doLog('constructor');
  }

  ngOnInit() {
      this.doLog('OnInit');
  }

  ngOnChanges() {
      this.doLog('ngOnChanges');
  }

  ngDoCheck() {
      this.doLog('ngDoCheck');
  }

  ngAfterContentInit() {
      this.doLog('ngAfterContentInit');
  }

  ngAfterContentChecked() {
      this.doLog('ngAfterContentChecked');
  }

  ngAfterViewInit() {
      this.doLog('ngAfterViewInit');
  }

  ngAfterViewChecked() {
      this.doLog('ngAfterViewChecked');
  }

  ngOnDestroy() {
      this.doLog('ngOnDestroy');
  }

  private doLog(hook: string) {
      console.log(hook);
  }

}
