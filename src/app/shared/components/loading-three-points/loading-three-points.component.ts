import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-three-points',
  template: `  <div class="w-100 d-flex justify-content-center align-items-center dots--block" [ngStyle]="myStyles" >
  <div class="loading-dots ">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</div>`,
  styleUrls: ['./loading-three-points.component.css']
})
export class LoadingThreePointsComponent {
  @Input() myStyles: { [key: string]: string } = {};
}
