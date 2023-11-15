import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KEY } from './modules/Keys';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() keys: KEY[] = [];
  @Output() KeySelected: EventEmitter<string> = new EventEmitter<string>();
  COLORS = {
    'SMS': '#9f790f',
    'EMAIL': 'red',
    'WHATSAPP': 'green'
  }
  constructor() {
    console.log("keys", this.keys);
  }

  ngOnInit() {
  }
  actions(CASE: string, REQ: any = null) {
    switch (CASE) {
      case 'SELECTED':
        this.KeySelected.emit(REQ.key)
        break;

      default:
        break;
    }
  }
}
