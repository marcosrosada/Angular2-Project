import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.css']
})
export class ElvisOperatorComponent implements OnInit {

    task: any = {
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        owner: null
        //owner: { name: 'Marcos Rosada' }
    };

    constructor() { }

    ngOnInit() {
    }

}
