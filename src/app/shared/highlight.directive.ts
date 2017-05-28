import { Directive,
         HostListener,
         HostBinding,
         ElementRef,
         Renderer,
         Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

    @HostListener('mouseenter') onMouseOver(){
        this.padding = '5px';
        this.backgroundColor = this.highLightColor;
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.padding = '0';
        this.backgroundColor = this.defaultColor;
    }

    @HostBinding('style.padding') padding: string;
    @HostBinding('style.backgroundColor') backgroundColor: string;

    @Input() defaultColor: string = "#FFF";
    @Input('highlight') highLightColor: string = "#CCC";

    constructor() { }
    ngOnInit() {

        this.backgroundColor = this.defaultColor;
    }

}
