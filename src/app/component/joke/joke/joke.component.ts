import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Joke} from '../../domain/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  @Input('joke') joke: Joke;
  @Output('delete') delete = new EventEmitter<Joke>();

  deleteJoke() {
    this.delete.emit(this.joke);
  }
}
