import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { EndScreenComponent } from "../end-screen/end-screen.component";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Game;
  gameId: string;


  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      this.gameId = params['id'];

      this
        .firestore
        .collection('games')
        .doc(this.gameId)
        .valueChanges()
        .subscribe((game: any) => {
          this.game.players = game.players;
          this.game.stack = game.stack;
          this.game.playedCards = game.playedCards;
          this.game.currentPlayer;
          this.game.pickCardAnimation = game.pickCardAnimation;
          this.game.currentCard = game.currentCard;
        });
    });
  }


  newGame() {
    this.game = new Game();
  }


  pickCard() {
    if (this.game.players.length > 1) {
      if (!this.game.pickCardAnimation)
        this.cardTakeApproved();
    } else {
      this.openDialog();
    } if (this.game.stack.length == 0) {
      this.gameEnd();
    }
  }


  gameEnd() {
    this.dialog.open(EndScreenComponent);
  }


  cardTakeApproved() {
    this.game.currentCard = this.game.stack.pop();
    this.game.pickCardAnimation = true;
    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length; // % (modulu) ist immer der rest operator! zb (zählt hoch)  1 2 3 / durch den rest 3 ist dann wieder null!
    this.saveGame();
    setTimeout(() => {
      this.game.playedCards.push(this.game.currentCard);
      this.game.pickCardAnimation = false;
      this.saveGame();
    }, 1000);
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) { // größer als null
        this.game.players.push(name);
        this.saveGame();
      }
    });
  }


  saveGame() {
    this
      .firestore
      .collection('games')
      .doc(this.gameId)
      .update(this.game.toJson());
  }
}
