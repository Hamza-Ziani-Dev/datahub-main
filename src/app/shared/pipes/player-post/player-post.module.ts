import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPostPipe } from './player-post.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PlayerPostPipe],
  declarations: [
    PlayerPostPipe
  ]
})
export class PlayerPostModule { }
