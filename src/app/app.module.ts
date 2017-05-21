import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MySelector2Component } from './my-selector2/my-selector2.component';
import { CoursesModule } from './courses/courses.module';
import { BindingModule } from './binding/binding.module';

@NgModule({
  declarations: [
    AppComponent,
    MySelector2Component
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
