import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() progress: number;
  @Input() progressType: number = 0;
  @Input() ms_error: string;
  @Input() error: boolean;
  @Output() isError: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  ngOnInit(): void {
  }
  addElemToParentArray(){
    this.isError.emit();
  }
}
