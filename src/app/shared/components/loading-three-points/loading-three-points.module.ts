import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingThreePointsComponent } from './loading-three-points.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[LoadingThreePointsComponent],
  declarations: [LoadingThreePointsComponent]
})
export class LoadingThreePointsModule { }
