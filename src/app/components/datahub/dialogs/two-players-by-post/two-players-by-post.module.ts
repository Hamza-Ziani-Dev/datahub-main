import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoPlayersByPostComponent } from './two-players-by-post.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TwoPlayersByPostComponent],
  exports: [TwoPlayersByPostComponent]
})
export class TwoPlayersByPostModule { }
