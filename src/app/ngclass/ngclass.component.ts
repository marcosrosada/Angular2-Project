import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

    liked: boolean = false;
    cliked: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    doLike() {
        this.liked = !this.liked;
    }

    doChangeStyle() {
        this.cliked = !this.cliked;
    }

}
