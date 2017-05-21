import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { BindingModule } from './binding/binding.module';
import { LifeCicleComponent } from './life-cicle/life-cicle.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCicleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoursesModule,
    BindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
