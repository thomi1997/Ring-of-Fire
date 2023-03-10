import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  
  @Input() name;
  @Input() image = 'profile_1.png';
  @Input() playerActive:boolean = false;


  constructor() { }

}
