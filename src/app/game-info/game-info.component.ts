import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {


  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: 'the player who drew the card must put their thumb on the table at a chosen time (before the next five gets picked though, or they lose the right). The last person to put their thumb on the table must drink.' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: 'You are now the question master. If you ask a player a question and they answer, they have to drink. If they answer the question with “Fuck you question master” then you have to drink.' },
    { title: 'Never have i ever...', description: 'Say something you nnever did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  ];


  title = '';
  description = '';
  @Input() card: string;


  constructor() { }


  ngOnInit(): void {

  }


  ngOnChanges() {
    if (this.card) {
      let cardnumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardnumber - 1].title;  //ein string in eine zahl (typ number) umwandeln im dem man ein + davor packt!
      this.description = this.cardAction[cardnumber - 1].description;
    }
  }
}
