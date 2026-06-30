import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { PlayerCard } from './player-card/player-card';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PlayerCard,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  totalScore: number = 0;

  players = [
    {
      name: 'Virat',
      score: 100
    },
    {
      name: 'Rohit',
      score: 0
    },
    {
      name: 'Dhoni',
      score: 0
    }
  ];

  updateScore(
    index: number,
    newScore: number
  ) {

    this.players[index].score = newScore;

    this.calculateTotal();
  }

  calculateTotal() {

    this.totalScore = 0;

    for (let player of this.players) {

      this.totalScore += player.score;
    }
  }

  ngOnInit() {

    this.calculateTotal();
  }
}