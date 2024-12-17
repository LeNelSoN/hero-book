import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameContainerComponent } from './components/game-container/game-container.component';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  declarations: [
    GameBoardComponent,
    GameContainerComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
