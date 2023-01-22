import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StartScreenComponent } from "../start-screen/start-screen.component";

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.scss']
})
export class EndScreenComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<EndScreenComponent>, private router: Router, private start_screen: StartScreenComponent) {

  }


  ngOnInit(): void {
    
  }


  restartGame() {
    this.start_screen.newGame();
    this.dialogRef.close();
  }
}
