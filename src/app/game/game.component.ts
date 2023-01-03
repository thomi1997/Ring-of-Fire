import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { Dialog } from '@angular/cdk/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard?: string = '';
  game!: Game;


  constructor(public dialog: Dialog) {
  }


  ngOnInit(): void {
    this.newGame();
  }


  newGame() {
    this.game = new Game();
  }


  pickCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      console.log('new card', this.currentCard);
      console.log('game is', this.game);
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open<string>(DialogAddPlayerComponent);

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
