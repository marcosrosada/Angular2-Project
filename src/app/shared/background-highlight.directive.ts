import { Directive,
         HostListener,
         HostBinding,
         ElementRef,
         Renderer } from '@angular/core';

@Directive({
  selector: '[backgroundHighlight]'
})
export class BackgroundHighlightDirective {

    @HostListener('mouseenter') onMouseOver(){
      /*this._renderer.setElementStyle(
        this._elementRef.nativeElement,
        'background-color', '#DFDFDF'
        );*/
        this.padding = '5px';
        this.backgroundColor = '#DFDFDF';
    }

    @HostListener('mouseleave') onMouseLeave(){
      /*this._renderer.setElementStyle(
        this._elementRef.nativeElement,
        'background-color', 'white'
        );*/
        this.padding = '0';
        this.backgroundColor = '#FFF';
    }

    @HostBinding('style.padding') padding: string;
    @HostBinding('style.backgroundColor') get setColor(){
      //codigo extra;
      return this.backgroundColor;
    }
    private backgroundColor: string;

    constructor(
      //private _elementRef: ElementRef,
      //private _renderer: Renderer
      ) { }

}
