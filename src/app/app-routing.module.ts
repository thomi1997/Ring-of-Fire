import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { ImprintComponent } from "./imprint/imprint.component";

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'game/:id', component: GameComponent }, // doppelpunkt (:) bedeutet das diese route über eine variable verfügt
  { path: 'imprint', component: ImprintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
