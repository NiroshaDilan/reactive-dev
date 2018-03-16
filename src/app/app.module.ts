import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeFormComponent } from './component/joke/joke-form/joke-form.component';
import { JokeListComponent } from './component/joke/joke-list/joke-list.component';
import {JokeComponent} from './component/joke/joke/joke.component';


@NgModule({
  declarations: [
    AppComponent,
    JokeFormComponent,
    JokeListComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
