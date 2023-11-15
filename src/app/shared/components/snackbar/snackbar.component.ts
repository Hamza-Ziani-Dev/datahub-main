import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackbarActionType } from './interface/Actions.enum';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {
  @Input() icon: string;
  @Input() message: string;
  SnackbarActionType = SnackbarActionType;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.icon = data.icon;
    this.message = data.message;
  }

  ngOnInit() {
    console.log(this.icon)
  }

}
