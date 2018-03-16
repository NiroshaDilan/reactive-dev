import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Joke} from '../../domain/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent {
  @Output('jokeCreated') jokeCreated = new EventEmitter<Joke>();

  joke(setup: string, punchline: string) {
    // console.log(this.createJoke);
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
