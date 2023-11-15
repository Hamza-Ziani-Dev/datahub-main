import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  animations: [
    trigger('progressAnimation', [
      state('0', style({
        width: '0%',
        backgroundColor: '#f9bcca',
      })),
      state('100', style({
        width: '100%',
        backgroundColor: '#f3c623',
        boxShadow: '0 0 40px #f3c623',
      })),
      transition('0 => 100', animate('4s')),
    ]),
  ],
})
export class ProgressBarComponent {
  @Input() value: number = 0;

  startAnimation() {
    this.value = 10;
  }
}
