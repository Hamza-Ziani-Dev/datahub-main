import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';



@NgModule({
  declarations: [ProgressBarComponent],
  imports:[CommonModule],
  providers:[ProgressBarComponent],
  exports: [ ProgressBarComponent]
})
export class ProgressBarModule { }
