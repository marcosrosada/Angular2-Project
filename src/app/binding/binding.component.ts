import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

    urlImagem = 'http://lorempixel.com/400/200/nature/';
    currentValue: string = '';
    valueSaved: string = '';
    isMouseOver: boolean = false;

    name: string = '';

    constructor() { }

    ngOnInit() {
    }

    getValor(){
        return 1;
    }

    onKeyUp(event: KeyboardEvent){
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
