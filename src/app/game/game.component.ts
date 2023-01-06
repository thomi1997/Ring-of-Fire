import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;


  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
    this.newGame();
  }


  newGame() {
    this.game = new Game();
  }


  pickCard() {
    if (this.game.players.length > 1) {
      if (!this.pickCardAnimation)
        this.cardTakeApproved();
    } else {
      this.openDialog();
    }
  }


  cardTakeApproved() {
    this.currentCard = this.game.stack.pop();
    this.pickCardAnimation = true;
    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length; // % (modulu) ist immer der rest operator! zb (zählt hoch)  1 2 3 / durch den rest 3 ist dann wieder null!
    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) { // größer als null
        this.game.players.push(name);
      }
    });
  }
}
