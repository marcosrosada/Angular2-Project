import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

    urlImagem: string = 'http://lorempixel.com/400/200/nature/';

    constructor() { }

    ngOnInit() {
    }
}
