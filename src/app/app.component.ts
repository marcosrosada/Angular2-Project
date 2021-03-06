import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'App working!';
  description: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown ' +
                        'printer took a galley of type and scrambled it to make a type specimen book.';

  countInit: number = 10;

  startValue: number = 5;
  destroyCicle: boolean = false;

  showHeader: boolean = false;


  constructor(private authService: AuthService) { }

  ngOnInit() {
      this.authService.showHeader.subscribe(
          show => this.showHeader = show
      );
  }

  increment() {
      this.startValue++;
  }

  doDestroy() {
      this.destroyCicle = true;
  }

  onCountChanged(event) {
      console.log(event.newValue);
  }
}
