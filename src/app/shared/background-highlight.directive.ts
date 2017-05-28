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
        this.backgroundColor = '#DFDFDF';
        this.padding = '5px';
    }

    @HostListener('mouseleave') onMouseLeave(){
      /*this._renderer.setElementStyle(
        this._elementRef.nativeElement,
        'background-color', 'white'
        );*/
        this.backgroundColor = '#FFF';
        this.padding = '0';
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
