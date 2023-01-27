import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-profiles',
  templateUrl: './change-profiles.component.html',
  styleUrls: ['./change-profiles.component.scss']
})
export class ChangeProfilesComponent {


  allProfilePictures = ['profile_1.png', 'profile_2.png', 'profile_3.png', 'profile_4.png', 'profile_5.png', 'profile_6.png', 'profile_7.png', 'profile_8.png']


  constructor(public dialogRef: MatDialogRef<ChangeProfilesComponent>) { }

  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
