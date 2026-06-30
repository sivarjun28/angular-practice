import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-card.html',
  styleUrls: ['./player-card.scss']
})
export class PlayerCard {

  // INPUT FROM PARENT

  @Input() playerName: string = '';

  @Input() score: number = 0;

  // OUTPUT TO PARENT

  @Output() scoreChanged =
    new EventEmitter<number>();


  increaseScore() {

    this.score++;

    this.scoreChanged.emit(this.score);
  }

  decreaseScore() {

    if(this.score > 0){

      this.score--;

      this.scoreChanged.emit(this.score);
    }
  }
}